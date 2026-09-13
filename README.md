# Jahangir Alam portfolio

The maintained Vite/React source lives in `src/` and public files in `public/`.
Deployments build this source directly; no ZIP extraction or overrides are used.

Run `npm ci`, `npm test`, `npx tsc --noEmit -p tsconfig.app.json`, and `npm run build`.
The existing dependency graph requires legacy peer resolution, recorded in `.npmrc`.
Run `npm run dev` for local previews. Push to main deploys GitHub Pages.
