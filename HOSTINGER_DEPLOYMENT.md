# Hostinger Business deployment

This project is configured for Hostinger's Managed Node.js application hosting.

## hPanel settings

- Runtime: Node.js 22
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm start`
- Application root: repository root (the folder containing `package.json`)
- Health URL: `/`

Hostinger supplies the listening port through `PORT`; do not hard-code one.

## Environment variables

Add these in the Node.js application's environment-variable panel:

- `NODE_ENV=production`
- `ALLOWED_ORIGIN=https://advisoryconsultingsolutions.com,https://www.advisoryconsultingsolutions.com`
- `SMTP_HOST=smtp.hostinger.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=noreply@advisoryconsultingsolutions.com`
- `SMTP_PASS=<Hostinger mailbox password>`
- `MAIL_FROM_NAME=Advisory Consulting Solutions`
- `MAIL_TO=info@adv-cs.com`

SMTP values are server-only. Never name them with a `VITE_` prefix or commit them in `.env`.

## Deploy

1. Push the repository to the Git provider connected to Hostinger.
2. In hPanel, create a Node.js application and select that repository/branch.
3. Enter the settings and environment variables above, then deploy.
4. Attach the production domain and enable SSL.
5. Test `/`, `/contact`, `/careers`, and `/schedule`; submit one test contact and career form.

Build output is generated at `dist/`; Hostinger starts `server.js` through the package start script.
Express handles `/api/contact`, serves built static assets from `dist/public`, and proxies page
rendering to the generated Nitro server.
