import express from "express";
import multer from "multer";
import { rateLimit } from "express-rate-limit";
import { fileTypeFromBuffer } from "file-type";
import { resolve, basename } from "node:path";

const common = {
  name: [true, 2, 80],
  email: [true, 1, 254],
  phone: [true, 7, 30],
};
const schemas = {
  contact: {
    ...common,
    company: [false, 0, 120],
    service: [true, 1, 100],
    budget: [true, 1, 100],
    message: [true, 10, 2000],
  },
  careers: {
    ...common,
    position: [true, 1, 100],
    experience: [true, 1, 100],
    message: [false, 10, 2000],
  },
};
const services = [
  "Digital Marketing",
  "Website Development",
  "E-commerce Development",
  "ERP",
  "CRM",
  "Custom Software",
  "Mobile App",
  "Other",
];
const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not Sure",
];
const positions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "SEO Specialist",
  "Digital Marketing Executive",
  "Sales Executive",
];
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;

export function createApp({ transport, config = {}, serveStatic = true }) {
  const app = express();
  app.disable("x-powered-by");
  if (config.trustProxy) app.set("trust proxy", config.trustProxy);
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024,
      files: 1,
      fields: 8,
      fieldSize: 8192,
      parts: 10,
    },
  });
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
      message: "Too many submissions. Please try again in 15 minutes.",
    },
  });
  app.use("/api", (req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    const origin = req.get("origin");
    if (origin) {
      let local = false;
      try {
        const url = new URL(origin);
        local =
          !config.production &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
      } catch {
        /* Invalid origins are rejected. */
      }
      if (!local && !(config.origins || []).includes(origin))
        return res
          .status(403)
          .json({
            message: "This website origin is not allowed to submit forms.",
          });
    }
    next();
  });
  for (const kind of ["contact", "careers"]) {
    app.post(
      `/api/${kind}`,
      limiter,
      (req, res, next) => {
        if (
          !transport ||
          !emailPattern.test(config.from || "") ||
          !emailPattern.test(
            (kind === "careers" ? config.careersTo : config.contactTo) || "",
          )
        ) {
          return res
            .status(503)
            .json({
              message:
                "Email delivery is not configured yet. Please contact us on WhatsApp or try again later.",
            });
        }
        next();
      },
      kind === "careers"
        ? upload.single("resume")
        : express.json({ limit: "16kb" }),
      async (req, res, next) => {
        try {
          const values = {};
          const errors = {};
          for (const [field, [required, min, max]] of Object.entries(
            schemas[kind],
          )) {
            const raw = req.body?.[field];
            if (raw !== undefined && typeof raw !== "string") {
              errors[field] = "Enter a single text value.";
              continue;
            }
            const value = (raw || "").trim();
            values[field] = value;
            if (required && !value) errors[field] = "This field is required.";
            else if (
              value &&
              (value.length < min ||
                value.length > max ||
                [...value].some((char) => {
                  const code = char.charCodeAt(0);
                  return (
                    (code < 32 && ![9, 10, 13].includes(code)) || code === 127
                  );
                }))
            )
              errors[field] = `Use ${min} to ${max} characters.`;
          }
          if (!emailPattern.test(values.email || ""))
            errors.email = "Enter a valid email address.";
          if (
            !/^[+\d\s().-]+$/.test(values.phone || "") ||
            (values.phone || "").replace(/\D/g, "").length < 7 ||
            values.phone.replace(/\D/g, "").length > 15
          )
            errors.phone = "Enter a valid phone number with 7 to 15 digits.";
          for (const [field, options] of Object.entries({
            service: services,
            budget: budgets,
            position: positions,
          })) {
            if (field in schemas[kind] && !options.includes(values[field]))
              errors[field] = "Choose an available option.";
          }
          let attachment;
          if (kind === "careers") {
            if (!req.file?.size) errors.resume = "Please attach your resume.";
            else {
              const detected = await fileTypeFromBuffer(req.file.buffer).catch(
                () => undefined,
              );
              const extension = req.file.originalname
                .split(".")
                .pop()
                ?.toLowerCase();
              const validPdfHeader =
                extension !== "pdf" ||
                /^%PDF-\d\.\d/.test(
                  req.file.buffer.subarray(0, 8).toString("ascii"),
                );
              if (
                !validPdfHeader ||
                !["pdf", "doc", "docx"].includes(extension) ||
                !detected ||
                !(
                  detected.ext === extension ||
                  (extension === "doc" && detected.ext === "cfb")
                )
              )
                errors.resume = "Attach a valid PDF, DOC or DOCX file.";
              else
                attachment = {
                  filename: basename(
                    req.file.originalname.replaceAll("\\", "/"),
                  )
                    .replace(/[^a-zA-Z0-9._-]/g, "_")
                    .slice(-120),
                  content: req.file.buffer,
                  contentType: detected.mime,
                };
            }
          }
          if (Object.keys(errors).length)
            return res
              .status(400)
              .json({
                message: "Please check the highlighted fields.",
                errors,
              });
          const to = kind === "careers" ? config.careersTo : config.contactTo;
          const info = await transport.sendMail({
            from: { name: "CodeChronicle Website", address: config.from },
            to,
            replyTo: values.email,
            subject:
              kind === "careers"
                ? `Career application: ${values.position}`
                : `Website inquiry: ${values.service}`,
            text:
              `${kind === "careers" ? "New career application" : "New contact inquiry"}\n\n` +
              Object.entries(values)
                .map(
                  ([key, value]) =>
                    `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value || "(not provided)"}`,
                )
                .join("\n\n"),
            attachments: attachment ? [attachment] : [],
            disableFileAccess: true,
            disableUrlAccess: true,
          });
          if (!info.accepted?.length)
            throw new Error("SMTP did not accept recipient");
          res.json({
            message: "Your submission was accepted for email delivery.",
          });
        } catch (error) {
          next(error);
        }
      },
    );
  }
  app.use("/api", (req, res) =>
    res.status(404).json({ message: "Endpoint not found." }),
  );
  app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    if (error instanceof multer.MulterError)
      return res
        .status(400)
        .json({
          message: "Please check your resume upload.",
          errors: {
            resume:
              error.code === "LIMIT_FILE_SIZE"
                ? "Maximum resume size is 5 MB."
                : "Upload one resume file only.",
          },
        });
    if (
      error.type === "entity.too.large" ||
      error.type === "entity.parse.failed"
    )
      return res
        .status(400)
        .json({ message: "The submission is too large or invalid." });
    // Never log credentials, form contents or resume data.
    console.error("Mail submission failed:", error.code || "delivery error");
    res
      .status(502)
      .json({
        message:
          "We could not send your submission. Please try again later or contact us on WhatsApp.",
      });
  });
  if (serveStatic) {
    app.use(express.static(resolve("dist"), { dotfiles: "deny" }));
    app.use((req, res, next) =>
      req.method === "GET" && req.accepts("html")
        ? res.sendFile(resolve("dist/index.html"))
        : next(),
    );
  }
  return app;
}
