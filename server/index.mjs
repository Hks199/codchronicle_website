import { createApp } from "./app.mjs";
import { mailConfiguration } from "./config.mjs";

const options = mailConfiguration();
const port = Number(process.env.PORT || process.env.SERVER_PORT || 3001);
const server = createApp(options).listen(
  port,
  process.env.SERVER_HOST || "127.0.0.1",
  () => {
    console.log(`Website and mail API listening on port ${port}.`);
    if (!options.transport)
      console.log(
        `Email configuration unavailable: ${options.issues.join("; ")}.`,
      );
  },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => server.close(() => process.exit(0)));
