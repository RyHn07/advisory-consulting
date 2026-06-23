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

  app.post("/api/contact", express.json({ limit: "25kb" }), async (req, res) => {
    const { payload, errors } = normalizeSubmission(req.body || {});

    if (errors.length) {
      res.status(400).json({ error: "Please complete all required fields." });
      return;
    }

    try {
      await sendSubmissionEmail(payload);
      res.json({ ok: true });
    } catch (error) {
      console.error("Email submission failed:", error instanceof Error ? error.message : error);
      res.status(500).json({ error: "Message could not be sent. Please try again later." });
    }
  });

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
