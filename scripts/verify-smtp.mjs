import { mailConfiguration } from "../server/config.mjs";
const { transport, issues } = mailConfiguration();
if (!transport) {
  console.error(
    `Email configuration unavailable: ${issues.join("; ")}. Update .env and try again.`,
  );
  process.exitCode = 1;
} else {
  try {
    await transport.verify();
    console.log(
      "SMTP connection, TLS and authentication verified. No email was sent.",
    );
  } catch (error) {
    console.error(
      "SMTP verification failed:",
      error.code || "connection error",
    );
    process.exitCode = 1;
  } finally {
    transport.close();
  }
}
