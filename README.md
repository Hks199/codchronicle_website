# Digital & Technology Solutions

A responsive company website built from GUIDE.md using React, TypeScript and Vite. An Express server now sends contact inquiries and career applications through SMTP using Nodemailer, with resumes attached to application emails. This requested mail feature replaces the original static-only form behavior. No database is used.

## Run locally

Use Node.js 24.x, matching the configured Vercel runtime.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Development: http://127.0.0.1:5173 (or the next available port). `npm run dev` starts Vite and the API server together. Vite proxies `/api` to port 3001. If Vite is already running, start the API with `npm run server`. The development API restarts automatically when `.env` changes. Production (`npm start`) needs a restart after configuration changes.

## Public configuration

Copy `.env.example` to `.env`, edit, then restart development or rebuild production. All VITE variables are public; never put credentials in them.

| Variable             | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| VITE_APP_NAME        | Actual company name; defaults to CodeChronicle        |
| VITE_SITE_URL        | Production origin; defaults to https://example.com    |
| VITE_WHATSAPP_NUMBER | International number, digits only (no +), 7–15 digits |
| VITE_INSTAGRAM_URL   | Full public Instagram URL                             |
| VITE_FACEBOOK_URL    | Full public Facebook URL                              |
| VITE_LINKEDIN_URL    | Full public LinkedIn URL                              |
| VITE_YOUTUBE_URL     | Full public YouTube URL                               |

Unconfigured or invalid footer/contact social links are hidden. The floating WhatsApp and Instagram icons appear on every page; an unconfigured icon is disabled with a coming-soon label. Set the international WhatsApp number (including country code) and Instagram URL in `.env` to activate them. `.env.example` is a template and is not loaded by Vite. Setting the Instagram URL also enables Instagram in the footer and contact page. Other reusable company details live in `src/config/company.ts`. No company address, customer identity or contact number is invented.

## Content

- Services: `src/data/services.ts`. The reusable detail page automatically handles new service slugs. Add their metadata to `scripts/seo.mjs` for generated route documents and sitemap entries.
- Portfolio: `src/data/portfolio.ts`. Add entries with unique IDs, categories, descriptions, tags and a mockup theme (`studio`, `shop`, `dashboard`). Replace labeled concepts with approved real projects when available.
- Jobs: `src/data/jobs.ts`. Roles are explicitly labeled samples; replace with confirmed vacancies and locations.
- Demo statistics: `src/data/stats.ts`. Replace with verified numbers and remove the demo label only when justified.
- FAQ and technology lists: `src/data/faqs.ts`, `src/data/technologies.ts`.
- No fabricated testimonials are rendered. `Testimonials.tsx` is reserved for approved reviews.

## SMTP credentials and forms

Fill in these server-only placeholders in `.env`:

| Variable        | Value to provide                                            |
| --------------- | ----------------------------------------------------------- |
| SMTP_HOST       | Your provider's SMTP hostname                               |
| SMTP_PORT       | Usually 587 for STARTTLS or 465 for direct TLS              |
| SMTP_SECURE     | false for 587; true for 465                                 |
| SMTP_USER       | SMTP account username                                       |
| SMTP_PASS       | SMTP password or provider-issued app password               |
| MAIL_FROM       | Provider-authorized sender email address, usually SMTP_USER |
| MAIL_TO         | Your inbox receiving both forms                             |
| CONTACT_MAIL_TO | Optional separate inquiry inbox; defaults to MAIL_TO        |
| CAREERS_MAIL_TO | Optional separate application inbox; defaults to MAIL_TO    |

Use one plain email address per sender/recipient setting. Obtain credentials from your email provider. Keep `.env` private and outside `public`/`dist`; never prefix secrets with `VITE_`. Quote passwords containing `#`. `.env.example` contains placeholders only.

After adding credentials, restart the server and run `npm run smtp:verify`. This checks connection, TLS and authentication without sending email. Then submit both forms to confirm delivery to your actual mailbox, including Spam/Junk. SMTP acceptance cannot guarantee inbox placement. See [Nodemailer's SMTP documentation](https://nodemailer.com/smtp) for connection options.

For Gmail, set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, and use the full Gmail or Google Workspace email address as `SMTP_USER`. Set `SMTP_PASS` to a [Google App Password](https://support.google.com/mail/answer/185833), with grouping spaces removed. The App Password must belong to that login account.

`StaticForm.tsx` posts to `/api/contact` and `/api/careers`. The server validates fields, resume content type and the 4 MB upload limit. Resumes are processed in memory and emailed as attachments. The sender and recipients come exclusively from server configuration; Reply-To uses the visitor's validated email. No submissions or uploads are saved by the application; email copies remain in the mailbox/provider. Failed submissions preserve inputs and display an error. Missing SMTP settings report unavailable instead of claiming success.

Each IP is limited to five submissions across both forms per 15 minutes. This limit is held in memory for one server process and resets on restart. Set `TRUST_PROXY` to the known proxy hop count only when deployed behind a trusted reverse proxy. `ALLOWED_ORIGINS` accepts comma-separated website origins and defaults to `VITE_SITE_URL`; development also permits localhost. Publish over HTTPS.

`npm run test:mail` uses a local SMTP server to test delivery, recipient routing, Reply-To, resume attachments, invalid uploads, rate limiting and failure responses. It requires no real credentials and sends no external emails.

## SEO and deployment

For Vercel, follow [VERCEL.md](./VERCEL.md). The repository includes frontend build settings, page routing and Node function entrypoints for both email forms. Vercel does not run `npm start` for this setup.

Set the real `VITE_SITE_URL` and company name before publication. `SEO.tsx` supplies unique route metadata and Organization, WebSite, BreadcrumbList, Service and FAQPage structured data. `npm run build` generates static route HTML metadata for social crawlers, plus sitemap and robots files. The Node server supplies the email APIs at runtime.

Deploy to a Node-capable host with `npm ci`, `npm run build`, then `npm start`. Set `NODE_ENV=production`, the actual `VITE_SITE_URL`/`ALLOWED_ORIGINS`, and SMTP credentials. Set `SERVER_HOST=0.0.0.0` if your platform requires it. The server uses the host's `PORT` or `SERVER_PORT` (default 3001), serves `dist`, supports deep links and handles `/api` on the same origin. Static-only hosting does not deliver these forms. `npm run preview` previews frontend assets and requires `npm run server` separately for email. Keep assets at the domain root unless changing Vite base and router basename.

The privacy and terms pages are behavior-based templates. Adapt them to the actual company and hosting setup before launch. The default domain, statistics, project concepts and roles are placeholders. `public/social-card.png` is the raster sharing image; its editable source is `public/social-card.svg`. Update both together when changing the sharing design.

## Accessibility and performance

Semantic sections, skip link, visible focus, keyboard-accessible mobile navigation, native FAQ disclosures, modal project previews, associated form errors and reduced-motion styling are included. Routes load separately; CSS-rendered mockups avoid image downloads and heavy visual libraries. Lighthouse targets in GUIDE.md are goals, not claimed scores; measure against your deployed site.

The optimized company logo is `public/codechronicle__logo-web.png` (the full-resolution transparent source is preserved as `public/codechronicle__logo-transparent.png`), shared by the header, footer, browser icon and Organization structured data. Change `companyConfig.logo` and the icon paths in `index.html` if you replace its filename.

Homepage styling lives in `src/home.css`, scoped to `.homepage`. The service explorer reads centralized service data and uses local React state only.

Shared logo colors are defined as `--brand-*` CSS variables in `src/index.css`. The interface uses accessible deep blue, logo blue, cyan tints and navy across every route; semantic form statuses and social platform colors retain their familiar meanings.
