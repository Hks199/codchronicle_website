import { createApp } from "./app.mjs";
import { mailConfiguration } from "./config.mjs";

// Export the Express handler directly so multipart uploads remain raw streams.
// Vercel owns the HTTP listener; frontend files are served from dist by its CDN.
const options = mailConfiguration();
if (options.issues.length) {
  // Log setting names only. Never log environment values or credentials.
  console.error(
    `Email configuration unavailable: ${options.issues.join("; ")}. Check server/mail-settings.mjs or the selected environment configuration and redeploy.`,
  );
}
export default createApp({ ...options, serveStatic: false });
