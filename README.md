# EMAILNOTIF

This monorepo uses Lerna + npm workspaces and contains two packages:

- packages/email-notify (backend)
- packages/fe (frontend)


## How to Start

1. Place your `.env` file in the root of the monorepo (`mail-suite/.env`).
   - This file should contain all environment variables needed for both backend and frontend (e.g., `EMAIL_USER`, `EMAIL_PASS`, `VITE_API_URL`, etc.).

2. Install dependencies from the root:
   ```bash
   npm install
   ```

3. Bootstrap the packages (link local dependencies):
   ```bash
   npx lerna bootstrap
   ```

4. Start both backend and frontend together from the root:
   ```bash
   npm run start
   ```

---
**Notes:**
- The backend and frontend will both read environment variables from the root `.env` file.
- Ensure `packages/email-notify/package.json` has a `start` script (e.g., `node server.js` or `nodemon server.js`).
- Ensure `packages/fe/package.json` has a `dev` script (Vite default is `dev`).
