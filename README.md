# Mail Suite (Lerna monorepo)

This monorepo uses Lerna + npm workspaces and contains two packages:

- packages/email-notify (backend)
- packages/fe (frontend)

Steps to use

1. Move your existing frontend and backend into `mail-suite/packages`:
   - Move `FE` content into `packages/fe` (or replace with this folder)
   - Move `email-notify` content into `packages/email-notify`

2. From `mail-suite` run:

   npm install

3. Bootstrap (links local packages):

   npx lerna bootstrap

4. Start both services:

   npm run start

Notes
- Ensure `packages/email-notify/package.json` has a `start` script (e.g., `node server.js` or `nodemon server.js`).
- Ensure `packages/fe/package.json` has `dev` script (Vite default is `dev`).
