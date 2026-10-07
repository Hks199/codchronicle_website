import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnv } from "vite";
const env = loadEnv("production", process.cwd(), "VITE_");
const name = env.VITE_APP_NAME?.trim() || "CodeChronicle";
let site = "https://example.com";
try {
  const url = new URL(env.VITE_SITE_URL);
  if (["https:", "http:"].includes(url.protocol))
    site = url.href.replace(/\/$/, "");
} catch {
  /* Placeholder until configured. */
}
const routes = [
  [
    "/",
    "Digital Marketing & Software Solutions Company",
    "Digital marketing, websites, e-commerce, ERP, CRM and custom software for your next stage of growth.",
  ],
  [
    "/about",
    "About Us",
    "Our approach brings digital marketing, software development and business automation together around your goals.",
  ],
  [
    "/services",
    "Digital Marketing & Technology Services",
    "Explore digital marketing, websites, e-commerce, ERP, CRM, custom software, mobile apps and UI/UX design services.",
  ],
  [
    "/portfolio",
    "Portfolio & Sample Projects",
    "Explore clearly labeled sample website, e-commerce, ERP, CRM, custom software and digital marketing concepts.",
  ],
  [
    "/careers",
    "Careers",
    "Explore roles in development, design, marketing and sales, and get to know our approach to building together.",
  ],
  [
    "/contact",
    "Contact & Free Consultation",
    "Tell the CodeChronicle team about your digital marketing, website or software goals.",
  ],
  [
    "/privacy-policy",
    "Privacy Policy",
    "Learn how contact details, career applications and resume attachments are handled.",
  ],
  [
    "/terms",
    "Terms & Conditions",
    "Understand website content, inquiry submissions and career applications.",
  ],
  ...[
    [
      "digital-marketing",
      "Digital Marketing",
      "Turn attention into opportunity with marketing that moves your business forward.",
    ],
    [
      "website-development",
      "Website Development",
      "Fast, thoughtful and SEO-friendly websites built to make a lasting first impression.",
    ],
    [
      "ecommerce-development",
      "E-commerce Development",
      "Seamless shopping experiences. Scalable stores. More room for your business to grow.",
    ],
    [
      "erp-solutions",
      "ERP Solutions",
      "Bring your people, processes and business operations together in one place.",
    ],
    [
      "crm-solutions",
      "CRM Solutions",
      "Better relationships start with a clearer picture of your leads and customers.",
    ],
    [
      "custom-software",
      "Custom Software",
      "Purpose-built software that fits your business. Not the other way around.",
    ],
    [
      "mobile-app-development",
      "Mobile App Development",
      "Intuitive Android and iOS experiences that bring your business closer to customers.",
    ],
    [
      "ui-ux-design",
      "UI/UX Design",
      "Make every interaction count with clear, beautiful and human-centered design.",
    ],
  ].map(([slug, title, description]) => [
    `/services/${slug}`,
    title,
    description,
  ]),
];
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const template = readFileSync("dist/index.html", "utf8")
  .replace(/<title>[\s\S]*?<\/title>/, "")
  .replace(/<meta\s+name="description"[^>]*>/, "");
for (const [path, title, description] of routes) {
  const url = site + (path === "/" ? "/" : path);
  const full = `${title} | ${name}`;
  const metadata = `<title>${escape(full)}</title><meta name="description" content="${escape(description)}"/><link rel="canonical" href="${escape(url)}"/><meta property="og:title" content="${escape(full)}"/><meta property="og:description" content="${escape(description)}"/><meta property="og:url" content="${escape(url)}"/><meta property="og:type" content="website"/><meta property="og:site_name" content="${escape(name)}"/><meta property="og:image" content="${escape(site)}/social-card.png"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(full)}"/><meta name="twitter:description" content="${escape(description)}"/><meta name="twitter:image" content="${escape(site)}/social-card.png"/>`;
  const target = path === "/" ? "dist" : resolve("dist", "." + path);
  mkdirSync(target, { recursive: true });
  writeFileSync(
    resolve(target, "index.html"),
    template.replace("</head>", metadata + "</head>"),
  );
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(([path]) => `  <url><loc>${escape(site + (path === "/" ? "/" : path))}</loc></url>`).join("\n")}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`;
for (const folder of ["public", "dist"]) {
  writeFileSync(`${folder}/sitemap.xml`, sitemap);
  writeFileSync(`${folder}/robots.txt`, robots);
}
console.log(
  `Generated static SEO documents for ${routes.length} routes (${site}).`,
);
