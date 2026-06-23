import "dotenv/config";

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { normalizeSubmission, sendSubmissionEmail } from "./mailer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const productionOrigins = [
  "https://advisoryconsultingsolutions.com",
  "https://www.advisoryconsultingsolutions.com",
];

function allowedOrigins(port) {
  const configured = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const origins = configured.length ? configured : productionOrigins;

  if (process.env.NODE_ENV !== "production") {
    origins.push(`http://127.0.0.1:${port}`, `http://localhost:${port}`, "http://127.0.0.1:8080");
  }

  return new Set(origins);
}

function htmlResponse(title, message) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f8f2ec; color: #0d182b; font-family: Georgia, serif; }
      main { width: min(90vw, 640px); padding: 48px; border: 1px solid #ddd2c8; background: #fffaf6; text-align: center; }
      h1 { margin: 0 0 16px; font-size: 36px; }
      p { font-size: 18px; line-height: 1.6; }
      a { color: #0d182b; }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${message}</p>
      <p><a href="/contact">Back to contact</a></p>
    </main>
  </body>
</html>`;
}

export function startHostingerServer() {
  const app = express();
  const publicDir = path.join(rootDir, "dist", "public");
  const nitroEntry = path.join(rootDir, "dist", "server", "index.mjs");
  const port = Number(process.env.PORT || 3000);
  const nitroPort = Number(process.env.NITRO_INTERNAL_PORT || port + 1);

  const corsOptions = {
    origin(origin, callback) {
      if (!origin || allowedOrigins(port).has(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Origin not allowed"));
    },
  };

  app.disable("x-powered-by");
  app.use("/api", cors(corsOptions));
  app.use(
    "/api",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 20,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: "Too many requests. Please try again later." },
    }),
  );

  app.post(
    "/api/contact",
    express.urlencoded({ extended: false, limit: "25kb" }),
    express.json({ limit: "25kb" }),
    async (req, res) => {
      const isHtmlForm = !req.is("application/json");
      const { payload, errors } = normalizeSubmission(req.body || {});

      if (errors.length) {
        if (isHtmlForm) {
          res
            .status(400)
            .send(htmlResponse("Please try again.", "Please complete all required fields."));
          return;
        }
        res.status(400).json({ error: "Please complete all required fields." });
        return;
      }

      try {
        await sendSubmissionEmail(payload);
        if (isHtmlForm) {
          res.send(
            htmlResponse("Thank you.", "Thank you. Your message has been sent successfully."),
          );
          return;
        }
        res.json({ ok: true });
      } catch (error) {
        console.error("Email submission failed:", error instanceof Error ? error.message : error);
        if (isHtmlForm) {
          res
            .status(500)
            .send(
              htmlResponse(
                "Message could not be sent.",
                "Please try again later or email us directly.",
              ),
            );
          return;
        }
        res.status(500).json({ error: "Message could not be sent. Please try again later." });
      }
    },
  );

  if (existsSync(publicDir)) {
    app.use(express.static(publicDir, { index: false, maxAge: "1y", immutable: true }));
  }

  let nitroProcess;
  if (existsSync(nitroEntry)) {
    nitroProcess = spawn(process.execPath, [nitroEntry], {
      cwd: rootDir,
      env: {
        ...process.env,
        ACS_HOSTINGER_WRAPPER: "1",
        PORT: String(nitroPort),
        NITRO_PORT: String(nitroPort),
        HOST: "127.0.0.1",
        NITRO_HOST: "127.0.0.1",
      },
      stdio: ["ignore", "inherit", "inherit"],
    });

    nitroProcess.on("exit", (code, signal) => {
      console.error(`Nitro server exited with code ${code ?? "null"} signal ${signal ?? "null"}`);
    });
  }

  app.use(async (req, res) => {
    if (!nitroProcess || req.method !== "GET") {
      res.status(404).send("Not found");
      return;
    }

    try {
      const upstream = await fetch(`http://127.0.0.1:${nitroPort}${req.originalUrl}`, {
        method: "GET",
        headers: { accept: req.get("accept") || "text/html" },
      });
      res.status(upstream.status);
      upstream.headers.forEach((value, key) => {
        if (!["content-encoding", "transfer-encoding", "connection"].includes(key.toLowerCase())) {
          res.setHeader(key, value);
        }
      });
      res.send(Buffer.from(await upstream.arrayBuffer()));
    } catch (error) {
      console.error("Page render proxy failed:", error instanceof Error ? error.message : error);
      res.status(503).send("The website is starting. Please refresh in a moment.");
    }
  });

  const server = app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });

  process.on("SIGTERM", () => {
    nitroProcess?.kill("SIGTERM");
    server.close(() => process.exit(0));
  });
}
