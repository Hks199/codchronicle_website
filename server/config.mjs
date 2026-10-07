import "dotenv/config";
import nodemailer from "nodemailer";
import mailSettings from "./mail-settings.mjs";

export function mailConfiguration(env = process.env, defaults = mailSettings) {
  // Explicit code configuration takes priority unless environment mode is selected.
  // Keep credentials confined to the backend, never to VITE_* variables.
  if (env.SMTP_CONFIG_SOURCE !== "environment") env = { ...env, ...defaults };
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const secureSetting = env.SMTP_SECURE?.trim() || "false";
  const secure = secureSetting === "true";
  const port = Number(env.SMTP_PORT?.trim() || (secure ? 465 : 587));
  const issues = [];
  if (!host) issues.push("SMTP_HOST is missing");
  if (!user) issues.push("SMTP_USER is missing");
  if (!env.SMTP_PASS) issues.push("SMTP_PASS is missing");
  if (!Number.isInteger(port) || port < 1 || port > 65535)
    issues.push("SMTP_PORT must be a valid port number");
  if (!["true", "false"].includes(secureSetting))
    issues.push("SMTP_SECURE must be true or false");
  const configured = issues.length === 0;
  const from = env.MAIL_FROM?.trim() || user;
  const contactTo = env.CONTACT_MAIL_TO?.trim() || env.MAIL_TO?.trim();
  const careersTo = env.CAREERS_MAIL_TO?.trim() || env.MAIL_TO?.trim();
  const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
  if (!emailPattern.test(from || ""))
    issues.push(
      "MAIL_FROM (or SMTP_USER) must be a plain sender email address",
    );
  if (!emailPattern.test(contactTo || ""))
    issues.push(
      "MAIL_TO (or CONTACT_MAIL_TO) is missing or is not a plain email address",
    );
  if (!emailPattern.test(careersTo || ""))
    issues.push(
      "MAIL_TO (or CAREERS_MAIL_TO) is missing or is not a plain email address",
    );
  const onVercel = env.VERCEL === "1";
  const origins = (env.ALLOWED_ORIGINS || env.VITE_SITE_URL || "")
    .split(",")
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter(Boolean);
  if (onVercel) {
    for (const key of [
      "VERCEL_URL",
      "VERCEL_BRANCH_URL",
      "VERCEL_PROJECT_PRODUCTION_URL",
    ]) {
      const hostname = env[key]?.trim();
      if (hostname) {
        try {
          const url = new URL(`https://${hostname}`);
          if (url.hostname === hostname) origins.push(url.origin);
        } catch {
          /* Invalid deployment URLs are not allowed. */
        }
      }
    }
  }
  return {
    issues,
    transport: configured
      ? nodemailer.createTransport({
          host,
          port,
          secure,
          requireTLS: !secure,
          auth: { user, pass: env.SMTP_PASS },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 30000,
          disableFileAccess: true,
          disableUrlAccess: true,
        })
      : null,
    config: {
      from,
      contactTo,
      careersTo,
      production: onVercel || env.NODE_ENV === "production",
      origins: [...new Set(origins)],
      // Vercel overwrites X-Forwarded-For with the original client IP.
      trustProxy: onVercel
        ? 1
        : env.TRUST_PROXY
          ? Number(env.TRUST_PROXY)
          : undefined,
    },
  };
}
