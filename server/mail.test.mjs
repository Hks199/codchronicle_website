import { test } from "node:test";
import assert from "node:assert/strict";
import { SMTPServer } from "smtp-server";
import nodemailer from "nodemailer";
import { createApp } from "./app.mjs";

const inquiry = {
  name: "Test Visitor",
  email: "visitor@example.net",
  phone: "+919518545028",
  company: "Example",
  service: "Website Development",
  budget: "Not Sure",
  message: "Please discuss a new company website.",
};
const config = {
  from: "website@example.net",
  contactTo: "owner@example.net",
  careersTo: "careers@example.net",
};
async function close(server) {
  await new Promise((resolve) => server.close(resolve));
}

test("SMTP submissions, attachment delivery, validation and failures", async () => {
  const received = [];
  const smtp = new SMTPServer({
    disabledCommands: ["STARTTLS"],
    allowInsecureAuth: true,
    onAuth(auth, session, callback) {
      callback(null, { user: auth.username });
    },
    onData(stream, session, callback) {
      let raw = "";
      stream.on("data", (chunk) => {
        raw += chunk;
      });
      stream.on("end", () => {
        received.push({
          raw,
          recipients: session.envelope.rcptTo.map((to) => to.address),
        });
        callback();
      });
    },
  });
  await new Promise((resolve) => smtp.listen(0, "127.0.0.1", resolve));
  const transport = nodemailer.createTransport({
    host: "127.0.0.1",
    port: smtp.server.address().port,
    secure: false,
    ignoreTLS: true,
    auth: { user: "test", pass: "test" },
  });
  const server = createApp({ transport, config, serveStatic: false }).listen();
  await new Promise((resolve) => server.on("listening", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const contact = (body) =>
    fetch(`${base}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  const career = (file) => {
    const data = new FormData();
    for (const [key, value] of Object.entries({
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone,
      position: "Frontend Developer",
      experience: "2 years",
      message: "",
    }))
      data.append(key, value);
    if (file)
      data.append(
        "resume",
        new Blob([file], { type: "application/pdf" }),
        "resume.pdf",
      );
    return fetch(`${base}/api/careers`, { method: "POST", body: data });
  };
  try {
    assert.equal((await contact(inquiry)).status, 200);
    assert.deepEqual(received[0].recipients, ["owner@example.net"]);
    assert.match(received[0].raw, /Reply-To: visitor@example.net/);
    assert.match(received[0].raw, /Please discuss a new company website/);
    const pdf = "%PDF-1.4\nTest resume\n%%EOF";
    assert.equal((await career(pdf)).status, 200);
    assert.deepEqual(received[1].recipients, ["careers@example.net"]);
    assert.match(received[1].raw, /filename=resume.pdf/);
    assert.ok(received[1].raw.includes(Buffer.from(pdf).toString("base64")));
    assert.equal((await career(Buffer.alloc(5 * 1024 * 1024 + 1))).status, 400);
    assert.equal(received.length, 2);
    assert.equal(
      (await contact({ ...inquiry, service: "Invalid service" })).status,
      400,
    );
    assert.equal((await contact({ ...inquiry, email: "invalid" })).status, 400);
    assert.equal((await contact(inquiry)).status, 429);
  } finally {
    await close(server);
    transport.close();
    await close(smtp);
  }
});

test("missing and disguised resumes are rejected before sending mail", async () => {
  let sends = 0;
  const listener = createApp({
    transport: {
      sendMail: async () => {
        sends++;
      },
    },
    config,
    serveStatic: false,
  }).listen();
  await new Promise((resolve) => listener.on("listening", resolve));
  try {
    for (const content of [null, "not a PDF", "%PDF"]) {
      const form = new FormData();
      for (const [key, value] of Object.entries({
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        position: "Frontend Developer",
        experience: "2 years",
      }))
        form.append(key, value);
      if (content) form.append("resume", new Blob([content]), "resume.pdf");
      assert.equal(
        (
          await fetch(
            `http://127.0.0.1:${listener.address().port}/api/careers`,
            { method: "POST", body: form },
          )
        ).status,
        400,
      );
    }
    assert.equal(sends, 0);
  } finally {
    await close(listener);
  }
});

test("missing configuration and SMTP failure never report success", async () => {
  for (const [transport, expected] of [
    [null, 503],
    [
      {
        sendMail: async () => {
          throw Object.assign(new Error("test failure"), { code: "ETEST" });
        },
      },
      502,
    ],
  ]) {
    const server = createApp({ transport, config, serveStatic: false });
    const listener = server.listen();
    await new Promise((resolve) => listener.on("listening", resolve));
    try {
      const response = await fetch(
        `http://127.0.0.1:${listener.address().port}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiry),
        },
      );
      assert.equal(response.status, expected);
    } finally {
      await close(listener);
    }
  }
});

test("disallowed browser origins are rejected", async () => {
  const server = createApp({
    transport: null,
    config: {
      ...config,
      production: true,
      origins: ["https://codechronicle.in"],
    },
    serveStatic: false,
  });
  const listener = server.listen();
  await new Promise((resolve) => listener.on("listening", resolve));
  try {
    assert.equal(
      (
        await fetch(`http://127.0.0.1:${listener.address().port}/api/contact`, {
          method: "POST",
          headers: { Origin: "https://unrelated.example" },
        })
      ).status,
      403,
    );
  } finally {
    await close(listener);
  }
});
