import { renderAdminEmail } from "./shared.js";

export function contactFormTemplate(payload) {
  return renderAdminEmail({
    eyebrow: "Contact Form",
    title: `New contact submission from ${payload.name || "Website Visitor"}`,
    intro: "A visitor submitted the contact form on the Advisory Consulting Solutions website.",
    rows: [
      ["Form Type", payload.formType || "Contact Form"],
      ["Name", payload.name],
      ["Email", payload.email],
      ["Phone", payload.phone],
      ["Company", payload.company],
      ["Subject", payload.subject],
      ["Message", payload.message],
      ["Submitted At", payload.submittedAt],
      ["Page URL", payload.pageUrl],
    ],
  });
}
