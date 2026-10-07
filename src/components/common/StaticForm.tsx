import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "file";
  required?: boolean;
  options?: string[];
  min?: number;
  max?: number;
  defaultValue?: string;
};
export default function StaticForm({
  fields,
  kind,
}: {
  fields: Field[];
  kind: "contact" | "career";
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [filename, setFilename] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const submitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    setSubmissionError("");
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const f of fields) {
      const raw = data.get(f.name);
      if (f.type === "file") {
        if (f.required && (!(raw instanceof File) || !raw.name))
          next[f.name] = "Please select your resume.";
        if (raw instanceof File && raw.name) {
          if (raw.size > 4 * 1024 * 1024)
            next[f.name] = "Please select a file smaller than 4 MB.";
          if (!/\.(pdf|doc|docx)$/i.test(raw.name))
            next[f.name] = "Please select a PDF, DOC or DOCX file.";
        }
        continue;
      }
      const value = String(raw || "").trim();
      if (f.required && !value)
        next[f.name] = `Please enter ${f.label.toLowerCase()}.`;
      else if (value) {
        if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          next[f.name] = "Enter a valid email address.";
        if (
          f.type === "tel" &&
          (!/^[+\d\s().-]+$/.test(value) ||
            value.replace(/\D/g, "").length < 7 ||
            value.replace(/\D/g, "").length > 15)
        )
          next[f.name] = "Enter a valid phone number with 7–15 digits.";
        if (f.min && value.length < f.min)
          next[f.name] = `Use at least ${f.min} characters.`;
        if (value.length > (f.max || 200))
          next[f.name] = `Use no more than ${f.max || 200} characters.`;
        if (f.options && !f.options.includes(value))
          next[f.name] = "Choose an available option.";
      }
    }
    setErrors(next);
    if (Object.keys(next).length) {
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setStatus("loading");
    submitting.current = true;
    try {
      const response = await fetch(
        kind === "contact" ? "/api/contact" : "/api/careers",
        {
          method: "POST",
          headers:
            kind === "contact"
              ? { "Content-Type": "application/json" }
              : undefined,
          body:
            kind === "contact"
              ? JSON.stringify(Object.fromEntries(data))
              : data,
        },
      );
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
          const first = form.elements.namedItem(Object.keys(result.errors)[0]);
          if (first instanceof HTMLElement) first.focus();
        }
        throw new Error(
          result.message ||
            "We could not send your submission. Please try again later.",
        );
      }
      form.reset();
      setFilename("");
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We could not connect. Please try again later.",
      );
    } finally {
      submitting.current = false;
    }
  }
  return (
    <form
      ref={formRef}
      className="static-form"
      noValidate
      onSubmit={submit}
      aria-busy={status === "loading"}
    >
      <p className="form-note">
        Your details{kind === "career" ? " and resume" : ""} will be sent to the
        CodeChronicle team by email.
      </p>
      <div className="form-grid">
        {fields.map((f) => (
          <div
            className={`form-field ${f.type === "textarea" || f.type === "file" ? "full-field" : ""}`}
            key={f.name}
          >
            <label htmlFor={`${kind}-${f.name}`}>
              {f.label}
              {f.required ? (
                <span aria-hidden="true"> *</span>
              ) : (
                <small> (optional)</small>
              )}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={`${kind}-${f.name}`}
                name={f.name}
                required={f.required}
                minLength={f.min}
                maxLength={f.max || 2000}
                rows={5}
                aria-invalid={!!errors[f.name]}
                aria-describedby={
                  errors[f.name] ? `${kind}-${f.name}-error` : undefined
                }
              />
            ) : f.type === "select" ? (
              <select
                id={`${kind}-${f.name}`}
                name={f.name}
                required={f.required}
                defaultValue={f.defaultValue || ""}
                aria-invalid={!!errors[f.name]}
                aria-describedby={
                  errors[f.name] ? `${kind}-${f.name}-error` : undefined
                }
              >
                <option value="">Select {f.label.toLowerCase()}</option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={`${kind}-${f.name}`}
                name={f.name}
                type={f.type || "text"}
                required={f.required}
                minLength={f.min}
                maxLength={f.max || 200}
                autoComplete={
                  f.name === "name"
                    ? "name"
                    : f.name === "email"
                      ? "email"
                      : f.name === "phone"
                        ? "tel"
                        : f.name === "company"
                          ? "organization"
                          : undefined
                }
                accept={f.type === "file" ? ".pdf,.doc,.docx" : undefined}
                onChange={
                  f.type === "file"
                    ? (e) => setFilename(e.target.files?.[0]?.name || "")
                    : undefined
                }
                aria-invalid={!!errors[f.name]}
                aria-describedby={
                  [
                    errors[f.name] ? `${kind}-${f.name}-error` : "",
                    f.type === "file" ? `${kind}-file-note` : "",
                  ]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
              />
            )}{" "}
            {f.type === "file" && (
              <small id={`${kind}-file-note`}>
                {filename
                  ? `Selected: ${filename}`
                  : "PDF, DOC or DOCX · Maximum 4 MB · Sent as an email attachment"}
              </small>
            )}
            {errors[f.name] && (
              <span id={`${kind}-${f.name}-error`} className="field-error">
                {errors[f.name]}
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <LoaderCircle className="spinner" size={17} /> Sending…
          </>
        ) : (
          <>
            {kind === "contact" ? "Send Inquiry" : "Submit Application"}
            <ArrowUpRight size={17} />
          </>
        )}
      </button>
      {submissionError && (
        <p role="alert" className="field-error">
          {submissionError}
        </p>
      )}
      <div role="status" aria-live="polite">
        {status === "success" && (
          <div className="success-message">
            <CheckCircle2 size={21} />
            <div>
              <strong>
                {kind === "contact"
                  ? "Thank you! Your inquiry has been submitted successfully."
                  : "Thank you! Your application has been submitted successfully."}
              </strong>
              <p>
                Your submission has been accepted for email delivery to our
                team.
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
