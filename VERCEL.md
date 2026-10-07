# Deploy CodeChronicle to Vercel

The frontend is served from `dist`; `/api/contact` and `/api/careers` run as Node.js functions using the existing SMTP code. No separate backend host is required.

## Import the project

1. Push this project to your Git repository, including `api`, `server`, `vercel.json`, `package.json` and `package-lock.json`. Keep `.env` out of Git.
2. In Vercel, choose **Add New → Project** and import that repository. Use the repository root as Root Directory.
3. Use **Vite**, **Node.js 24.x**, Install Command **npm ci**, Build Command **npm run build**, and Output Directory **dist**. These are already configured in the project.
4. Add the environment variables below before deploying. Select **Production** and **Preview** if both environments should support email submissions.
5. Deploy, then submit the contact and career forms on the deployed website and check your inbox and Spam/Junk folder.

Alternatively, deploy from this folder using `npx vercel` after signing in and adding the project environment variables, then use `npx vercel --prod` for production. The `.vercelignore` file excludes local credentials and test artifacts from CLI uploads.

## Environment variables

In **Project → Settings → Environment Variables**, copy the appropriate values from your local `.env`. A local `.env` file is not deployed. SMTP settings must remain server-only.

| Variable             | Vercel value                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| SMTP_HOST            | `smtp.gmail.com`                                                                               |
| SMTP_PORT            | `587`                                                                                          |
| SMTP_SECURE          | `false`                                                                                        |
| SMTP_USER            | Your full Gmail/Google Workspace sender email address                                          |
| SMTP_PASS            | The working Google App Password, without grouping spaces                                       |
| MAIL_FROM            | Your configured sender email address                                                           |
| MAIL_TO              | Your receiving inbox                                                                           |
| CONTACT_MAIL_TO      | Optional separate inquiry inbox                                                                |
| CAREERS_MAIL_TO      | Optional separate application inbox                                                            |
| VITE_APP_NAME        | `CodeChronicle`                                                                                |
| VITE_SITE_URL        | Your actual production origin, such as `https://your-project.vercel.app` or your custom domain |
| VITE_WHATSAPP_NUMBER | Your current value from `.env`                                                                 |
| VITE_INSTAGRAM_URL   | Your current value from `.env`                                                                 |
| ALLOWED_ORIGINS      | Optional comma-separated custom origins, including `https://www.your-domain` if used           |

Copy any other configured `VITE_*` social links too. Do not add `VITE_` to SMTP credentials. You do not need `SERVER_HOST`, `SERVER_PORT`, `PORT`, `TRUST_PROXY` or `NODE_ENV` in Vercel; production behavior and Vercel proxy handling are automatic. Enable Vercel's system environment variables if disabled: the backend uses `VERCEL_URL`, `VERCEL_BRANCH_URL` and `VERCEL_PROJECT_PRODUCTION_URL` to allow this project's generated deployment URLs, without permitting unrelated Vercel sites.

If you do not know the production URL until the first deploy, update `VITE_SITE_URL` afterwards and redeploy. Redeploy after any environment-variable change. The production URL controls canonical tags, sitemap and social sharing metadata.

## Uploads and rate limits

The resume limit is 4 MB on both frontend and backend, leaving room for multipart fields under [Vercel's 4.5 MB function payload limit](https://vercel.com/docs/functions/limitations). PDF, DOC and DOCX files are supported. Uploads stay in memory and are attached to the email; no persistent filesystem is required.

SMTP delivery completes before the API returns success. Each function is configured for a maximum duration of 60 seconds. The existing in-memory rate limit applies per warm function instance; serverless scaling and cold starts mean it is not a global five-submission limit. Use Vercel Firewall rate limiting or a shared store if you need a deployment-wide limit.

## Verify the deployment

- Open `/contact` and `/careers` directly, then refresh each page.
- Submit an inquiry and a valid resume below 4 MB; confirm both emails arrive.
- Check **Vercel → Logs** if submission fails. No credentials or form contents are logged by the application.
- `503`: SMTP settings or sender/recipient are missing or invalid.
- `502`: SMTP connection, authentication or delivery failed; check your Gmail login and App Password.
- `403`: Add the website's custom origin to `ALLOWED_ORIGINS` and redeploy.
- `413`: The request exceeded Vercel's payload limit; use a smaller resume.

Configuration and local tests do not verify live Vercel SMTP connectivity. Test both forms after deployment.
