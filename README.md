# Coding Studio Knowledge Base

Public documentation site built with [Docusaurus](https://docusaurus.io), hosted on GitHub Pages.

## Local development

```bash
cd site
npm install
npm start        # live preview at http://localhost:3000/helpsite/
npm run build    # production build
```

## Publish

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Edit `GITHUB_ORG` / `GITHUB_REPO` at the top of `site/docusaurus.config.ts`.
4. Every push to `main` deploys automatically (`.github/workflows/deploy.yml`).

Custom domain (e.g. `help.codingstudio.net`): add it in Settings → Pages, create a CNAME DNS record to `<org>.github.io`, then set `url` to the domain and `baseUrl` to `'/'` in the config.

Authoring guide: `site/docs/_templates/README.md`.

> GitHub Pages sites are public even from private repos only on paid GitHub plans; with a free account the repo itself must be public.
