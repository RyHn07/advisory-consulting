import { renderAdminEmail } from "./shared.js";

export function consultationFormTemplate(payload) {
  return renderAdminEmail({
    eyebrow: payload.formType || "Consultation Form",
    title: `New ${payload.formType || "consultation"} submission from ${
      payload.name || "Website Visitor"
    }`,
    intro:
      "A visitor submitted a consultation, service request, or confidential inquiry through the Advisory Consulting Solutions website.",
    rows: [
      ["Form Type", payload.formType || "Consultation Form"],
      ["Name", payload.name],
      ["Email", payload.email],
      ["Phone", payload.phone],
      ["Company", payload.company],
      ["Subject", payload.subject],
      ["Service", payload.service],
      ["Budget", payload.budget],
      ["Experience", payload.experience],
      ["Role", payload.role],
      ["Resume File", payload.resumeName],
      ["Message", payload.message],
      ["Submitted At", payload.submittedAt],
      ["Page URL", payload.pageUrl],
    ],
  });
}
