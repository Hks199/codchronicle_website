import { createApp } from "./app.mjs";
import { mailConfiguration } from "./config.mjs";

// Export the Express handler directly so multipart uploads remain raw streams.
// Vercel owns the HTTP listener; frontend files are served from dist by its CDN.
export default createApp({ ...mailConfiguration(), serveStatic: false });
