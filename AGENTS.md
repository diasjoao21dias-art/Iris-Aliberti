# AGENTS.md

## Project Context

This is a Base44 app repository. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup, environment variables, and publish workflow.

## Base44 References

- CLI overview: https://docs.base44.com/developers/references/cli/get-started/overview.md
- Agent skills: https://docs.base44.com/developers/backend/overview/skills.md

If your agent supports Agent Skills, install or update Base44 skills before Base44-specific work:

```bash
npx skills add base44/skills
```

## Key Files

- `src/`: frontend application source.
- `src/api/base44Client.js`: frontend Base44 SDK client.
- `vite.config.js`: Vite config and Base44 Vite plugin setup.
- `.env.local`: local-only environment values; never commit secrets.

## Running in the Base44 sandbox

- `docker compose -f docker-compose.base44.yml up -d` starts a `node:22-slim` container that bind-mounts the repo, runs `npm install && npm run dev -- --host 0.0.0.0`, and exposes port 3000 → 5173 (Vite).
- Vite server config (`server.host: true`, `server.allowedHosts: true`) was added so the preview's external hostname is accepted.
- `.env.base44-defaults` provides placeholder values for `VITE_BASE44_APP_ID`, `VITE_BASE44_FUNCTIONS_VERSION`, `VITE_BASE44_APP_BASE_URL` so the app boots without credentials. Real values are delivered via `/run/base44/app.env` (listed last in `env_file` so they win).
- The `@base44/vite-plugin` proxies `/api` requests to `VITE_BASE44_APP_BASE_URL`. Without real credentials, the static landing page still renders (AuthContext falls through on backend error), but auth and backend data calls will fail.
- Health check: `curl -sf -H "Host: external.example" http://localhost:3000/` returns 200.

## Working Notes

- Use `base44 dev` as the default local development command when you need the local Base44 backend. It can run the backend and frontend together.
- When docs or code mention the frontend being started automatically, that usually means the Base44 project config includes `site.serveCommand`, for example `"serveCommand": "npm run dev"` in `base44/config.jsonc`.
- Use `npm run dev` only for frontend-only work against the hosted Base44 backend.
- Prefer the existing Base44 CLI workflow over adding new npm scripts for Base44-specific tasks.
- Reuse the existing SDK client and Vite plugin patterns before adding new Base44 integration paths.
- Run the relevant checks from `package.json` before finishing code changes.
