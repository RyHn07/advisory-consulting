import { createFileRoute } from "@tanstack/react-router";
import { normalizeSubmission, sendSubmissionEmail } from "../../../server/mailer";

const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 20;
const hits = new Map<string, { count: number; resetAt: number }>();

function clientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimited(request: Request) {
  const key = clientKey(request);
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > LIMIT;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (rateLimited(request)) {
          return Response.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 },
          );
        }

        let body: unknown;
        let isHtmlForm = false;
        try {
          const contentType = request.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            body = await request.json();
          } else {
            isHtmlForm = true;
            body = Object.fromEntries((await request.formData()).entries());
          }
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        const { payload, errors } = normalizeSubmission(body || {});

        if (errors.length) {
          if (isHtmlForm) {
            return new Response("Please complete all required fields.", {
              status: 400,
              headers: { "content-type": "text/plain; charset=utf-8" },
            });
          }
          return Response.json({ error: "Please complete all required fields." }, { status: 400 });
        }

        try {
          await sendSubmissionEmail(payload);
          if (isHtmlForm) {
            return new Response("Thank you. Your message has been sent successfully.", {
              headers: { "content-type": "text/plain; charset=utf-8" },
            });
          }
          return Response.json({ ok: true });
        } catch (error) {
          console.error("Email submission failed:", error instanceof Error ? error.message : error);
          if (isHtmlForm) {
            return new Response("Message could not be sent. Please try again later.", {
              status: 500,
              headers: { "content-type": "text/plain; charset=utf-8" },
            });
          }
          return Response.json(
            { error: "Message could not be sent. Please try again later." },
            { status: 500 },
          );
        }
      },
    },
  },
});
