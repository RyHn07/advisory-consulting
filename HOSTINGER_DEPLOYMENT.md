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
- `SUPABASE_URL=https://<project-ref>.supabase.co`
- `SUPABASE_SERVICE_ROLE_KEY=<service-role-key>`

The service-role key is server-only. Never name it with a `VITE_` prefix or commit it.

## Database setup

Apply every SQL file in `supabase/migrations` to the Supabase project, in filename order. The
second migration creates the private career-submission table and private resume bucket.

## Deploy

1. Push the repository to the Git provider connected to Hostinger.
2. In hPanel, create a Node.js application and select that repository/branch.
3. Enter the settings and environment variables above, then deploy.
4. Attach the production domain and enable SSL.
5. Test `/`, `/contact`, `/careers`, and `/schedule`; submit one test contact and career form.

Build output is generated at `dist/`; Hostinger starts `dist/server/index.mjs` through
the package start script.
