# Hostinger deployment

This project is a Lovable Vite app that builds as a TanStack Start/Nitro Node server.
Use Hostinger's Nuxt/Node-compatible server preset, not a static Vite deployment.

## hPanel settings

- Framework preset: `Nuxt`
- Branch: `main`
- Runtime: Node.js 24.x
- Root directory: `./`
- Package manager: `npm`
- Build command: `npm run build`
- Output directory: `dist`
- Entry file: `server/index.mjs`
- Health URL: `/`

Hostinger supplies the listening port through `PORT`; do not hard-code a production port.

If Hostinger asks for a start command instead of an entry file, use `npm start`.

## Environment variables

Add these in Hostinger's environment-variable panel:

- `NODE_ENV=production`
- `ALLOWED_ORIGIN=https://advisoryconsultingsolutions.com,https://www.advisoryconsultingsolutions.com`
- `SMTP_HOST=smtp.hostinger.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=noreply@advisoryconsultingsolutions.com`
- `SMTP_PASS=<Hostinger mailbox password>`
- `MAIL_FROM_NAME=Advisory Consulting Solutions`
- `MAIL_TO=info@adv-cs.com`
- `SUPABASE_PROJECT_ID=<project-id>`
- `SUPABASE_PUBLISHABLE_KEY=<publishable-key>`
- `SUPABASE_URL=<project-url>`
- `VITE_SUPABASE_PROJECT_ID=<project-id>`
- `VITE_SUPABASE_PUBLISHABLE_KEY=<publishable-key>`
- `VITE_SUPABASE_URL=<project-url>`

SMTP values are server-only. Never name them with a `VITE_` prefix or commit them in `.env`.

## Deploy

1. Push the repository to the Git provider connected to Hostinger.
2. In hPanel, create the application and select the repository/branch.
3. Enter the settings and environment variables above, then deploy.
4. Clear Hostinger/cache/CDN cache after a successful deploy.
5. Test `/`, `/contact`, `/careers`, and `/schedule`; submit one test contact and career form.

Build output is generated at `dist/`; Hostinger runs `dist/server/index.mjs`.
Client assets, CSS, images, and videos are generated in `dist/public`.
