const brand = {
  navy: "#0D182B",
  blue: "#172C47",
  gold: "#DA9E3F",
  cream: "#FAF6F1",
  warm: "#F6F2EC",
  text: "#575E69",
  border: "#E5DCC9",
  white: "#FFFFFF",
};

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeRows(rows) {
  return rows
    .map(([label, value]) => [label, String(value ?? "").trim()])
    .filter(([, value]) => value.length > 0);
}

export function renderAdminEmail({ eyebrow, title, intro, rows }) {
  const cleanRows = normalizeRows(rows);
  const rowHtml = cleanRows
    .map(
      ([label, value]) => `
        <tr>
          <td style="width: 34%; padding: 14px 16px; border-bottom: 1px solid ${brand.border}; color: ${brand.navy}; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; vertical-align: top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 14px 16px; border-bottom: 1px solid ${brand.border}; color: ${brand.text}; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.55; vertical-align: top; white-space: pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  const text = [
    title,
    intro,
    "",
    ...cleanRows.map(([label, value]) => `${label}: ${value}`),
    "",
    "This email was generated from the Advisory Consulting Solutions website form.",
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin: 0; padding: 0; background: ${brand.warm};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${brand.warm}; margin: 0; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; border-collapse: collapse;">
            <tr>
              <td style="background: ${brand.navy}; padding: 30px 32px; border-top: 4px solid ${brand.gold};">
                <div style="color: ${brand.gold}; font-family: Georgia, 'Times New Roman', serif; font-size: 13px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;">
                  ${escapeHtml(eyebrow)}
                </div>
                <div style="margin-top: 10px; color: ${brand.white}; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 600; line-height: 1.2;">
                  Advisory Consulting Solutions
                </div>
              </td>
            </tr>
            <tr>
              <td style="background: ${brand.white}; padding: 32px; border-left: 1px solid ${brand.border}; border-right: 1px solid ${brand.border};">
                <h1 style="margin: 0; color: ${brand.navy}; font-family: Georgia, 'Times New Roman', serif; font-size: 26px; line-height: 1.25; font-weight: 600;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin: 14px 0 26px; color: ${brand.text}; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6;">
                  ${escapeHtml(intro)}
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid ${brand.border}; background: ${brand.cream};">
                  ${rowHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="background: ${brand.navy}; padding: 18px 32px; color: rgba(255,255,255,0.78); font-family: Georgia, 'Times New Roman', serif; font-size: 13px; line-height: 1.5;">
                This email was generated from the Advisory Consulting Solutions website form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { html, text };
}
