import nodemailer from "nodemailer";
import { contactFormTemplate } from "./emailTemplates/contactFormTemplate.js";
import { consultationFormTemplate } from "./emailTemplates/consultationFormTemplate.js";

const MAX_FIELD_LENGTH = 5000;

function text(value, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isTrue(value) {
  return String(value).toLowerCase() === "true";
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: requireEnv("SMTP_HOST"),
    port: Number(requireEnv("SMTP_PORT")),
    secure: isTrue(requireEnv("SMTP_SECURE")),
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: requireEnv("SMTP_PASS"),
    },
  });
}

export function normalizeSubmission(body) {
  const payload = {
    formType: text(body.formType, 100) || "Website Form",
    name: text(body.name, 200),
    email: text(body.email, 255).toLowerCase(),
    phone: text(body.phone, 80),
    company: text(body.company, 200),
    subject: text(body.subject, 200),
    service: text(body.service, 200),
    budget: text(body.budget, 100),
    experience: text(body.experience, 200),
    role: text(body.role, 200),
    resumeName: text(body.resumeName, 255),
    message: text(body.message),
    pageUrl: text(body.pageUrl, 1000),
    submittedAt: new Date().toISOString(),
  };

  const errors = [];
  if (!payload.name) errors.push("name is required");
  if (!payload.email || !isValidEmail(payload.email)) errors.push("valid email is required");
  if (!payload.message) errors.push("message is required");

  return { payload, errors };
}

function templateFor(payload) {
  const formType = payload.formType.toLowerCase();
  if (formType.includes("contact")) return contactFormTemplate(payload);
  return consultationFormTemplate(payload);
}

function subjectFor(payload) {
  const name = payload.name || "Website Visitor";
  if (payload.formType.toLowerCase().includes("contact")) {
    return `[Contact Form] New submission from ${name}`;
  }
  if (payload.formType.toLowerCase().includes("career")) {
    return `[Career Form] New submission from ${name}`;
  }
  if (payload.formType.toLowerCase().includes("quote")) {
    return `[Quote Form] New submission from ${name}`;
  }
  return `[Consultation Form] New submission from ${name}`;
}

export async function sendSubmissionEmail(payload) {
  const fromName = process.env.MAIL_FROM_NAME || "Advisory Consulting Solutions";
  const smtpUser = requireEnv("SMTP_USER");
  const mailTo = requireEnv("MAIL_TO");
  const { html, text: plainText } = templateFor(payload);

  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"${fromName.replace(/"/g, "'")}" <${smtpUser}>`,
    to: mailTo,
    replyTo: payload.email,
    subject: subjectFor(payload),
    text: plainText,
    html,
  });
}
