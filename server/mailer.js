import nodemailer from "nodemailer";
import { contactFormTemplate } from "./emailTemplates/contactFormTemplate.js";
import { consultationFormTemplate } from "./emailTemplates/consultationFormTemplate.js";

const MAX_FIELD_LENGTH = 5000;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const recentSubmissions = new Map();

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

function read(body, ...names) {
  if (!body || typeof body !== "object") return "";
  for (const name of names) {
    const value = body[name];
    if (typeof value === "string") return value;
  }
  return "";
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

function duplicateKey(payload) {
  return [
    payload.formType,
    payload.name,
    payload.email,
    payload.phone,
    payload.company,
    payload.service,
    payload.message,
  ]
    .map((value) =>
      String(value || "")
        .trim()
        .toLowerCase(),
    )
    .join("|");
}

function reserveSubmission(payload) {
  const now = Date.now();
  for (const [key, expiresAt] of recentSubmissions) {
    if (expiresAt <= now) recentSubmissions.delete(key);
  }

  const key = duplicateKey(payload);
  if (recentSubmissions.has(key)) return { key, duplicate: true };

  recentSubmissions.set(key, now + DUPLICATE_WINDOW_MS);
  return { key, duplicate: false };
}

export function normalizeSubmission(body) {
  const payload = {
    formType: text(read(body, "formType", "form-type"), 100) || "Website Form",
    name: text(read(body, "name"), 200),
    email: text(read(body, "email"), 255).toLowerCase(),
    phone: text(read(body, "phone"), 80),
    company: text(read(body, "company", "businessWebsite", "business-website"), 200),
    subject: text(read(body, "subject"), 200),
    service: text(read(body, "service", "firmType", "firm-type"), 200),
    budget: text(read(body, "budget"), 100),
    experience: text(read(body, "experience"), 200),
    role: text(read(body, "role"), 200),
    resumeName: text(read(body, "resumeName", "resume-name"), 255),
    message: text(read(body, "message", "note")),
    pageUrl: text(read(body, "pageUrl", "page-url"), 1000),
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
  const reservation = reserveSubmission(payload);
  if (reservation.duplicate) return { duplicate: true };

  const fromName = process.env.MAIL_FROM_NAME || "Advisory Consulting Solutions";
  const smtpUser = requireEnv("SMTP_USER");
  const mailTo = requireEnv("MAIL_TO");
  const { html, text: plainText } = templateFor(payload);

  const transporter = createTransporter();
  try {
    await transporter.sendMail({
      from: `"${fromName.replace(/"/g, "'")}" <${smtpUser}>`,
      to: mailTo,
      replyTo: payload.email,
      subject: subjectFor(payload),
      text: plainText,
      html,
    });
    return { duplicate: false };
  } catch (error) {
    recentSubmissions.delete(reservation.key);
    throw error;
  }
}
