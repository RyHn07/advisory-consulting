import { createFileRoute } from "@tanstack/react-router";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function text(value: FormDataEntryValue | null, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export const Route = createFileRoute("/api/submissions")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!sameOrigin(request)) {
          return Response.json({ error: "Invalid request origin." }, { status: 403 });
        }

        const form = await request.formData();
        if (text(form.get("website"), 200)) {
          return Response.json({ ok: true });
        }

        const kind = text(form.get("kind"), 20);
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        if (kind === "contact") {
          const payload = {
            name: text(form.get("name"), 200),
            firm: text(form.get("firm"), 200) || null,
            email: text(form.get("email"), 255),
            phone: text(form.get("phone"), 50) || null,
            firm_type: text(form.get("firm_type"), 100) || null,
            message: text(form.get("message"), 5000),
          };

          if (!payload.name || !payload.email.includes("@") || !payload.message) {
            return Response.json(
              { error: "Please complete all required fields." },
              { status: 400 },
            );
          }

          const { error } = await supabaseAdmin.from("contact_submissions").insert(payload);
          if (error) throw error;
          return Response.json({ ok: true });
        }

        if (kind === "career") {
          const name = text(form.get("name"), 200);
          const email = text(form.get("email"), 255);
          if (!name || !email.includes("@")) {
            return Response.json(
              { error: "Name and a valid email are required." },
              { status: 400 },
            );
          }

          const resume = form.get("resume");
          let resumePath: string | null = null;
          if (resume instanceof File && resume.size > 0) {
            if (resume.size > MAX_RESUME_SIZE || !ALLOWED_RESUME_TYPES.has(resume.type)) {
              return Response.json(
                { error: "Resume must be a PDF, DOC, or DOCX file no larger than 5 MB." },
                { status: 400 },
              );
            }

            const extension = resume.name.split(".").pop()?.toLowerCase() || "bin";
            resumePath = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${extension}`;
            const { error: uploadError } = await supabaseAdmin.storage
              .from("career-resumes")
              .upload(resumePath, resume, { contentType: resume.type, upsert: false });
            if (uploadError) throw uploadError;
          }

          const { error } = await supabaseAdmin.from("career_submissions").insert({
            name,
            email,
            phone: text(form.get("phone"), 50) || null,
            linkedin: text(form.get("linkedin"), 500) || null,
            experience: text(form.get("experience"), 200) || null,
            role: text(form.get("role"), 200) || null,
            note: text(form.get("note"), 5000) || null,
            resume_path: resumePath,
          });

          if (error) {
            if (resumePath) {
              await supabaseAdmin.storage.from("career-resumes").remove([resumePath]);
            }
            throw error;
          }
          return Response.json({ ok: true });
        }

        return Response.json({ error: "Invalid submission type." }, { status: 400 });
      },
    },
  },
});
