# California Families for Children with Medical Complexity

Working statewide family-navigation and advocacy platform for California families of children with medical complexity.

**Working tagline:** Clear paths. Strong voices. Better systems.

This repository is a source-checked, functional prototype—not a public claim of organizational, legal, medical, government, or nonprofit authority. Program guidance requires named California subject-matter review before broad public launch. High-stakes Spanish content remains unpublished until qualified human review is complete.

## What is implemented

- Astro 7 static site with strict TypeScript
- 30 static routes, including 11 repeatable program guides
- Local-only Start Here navigator
- Eight-system Denials & Appeals router and printable notice worksheet
- Filterable, printable, shareable, downloadable Resource Finder
- Editable advocacy message preview with no automatic sending
- Local-only story builder with copy, download, and print
- Interactive life-course timeline and emergency checklist
- English interface plus Spanish review-status architecture
- Source, content-owner, last-review, next-review, and review-state metadata
- Responsive, keyboard-accessible component system and print styles
- GitHub Pages deployment workflow

## Local development

Requirements: Node 24 and npm.

```bash
npm ci
npm run dev
```

Run the production gate:

```bash
npm run build
npm test
```

The build disables Astro telemetry because the execution environment is intentionally restricted.

## Deployment

The repository includes `.github/workflows/deploy-pages.yml`. After merge to `main`:

1. In GitHub, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Run or re-run **Deploy website to GitHub Pages**.
4. Confirm the deployment URL shown by the workflow.

The root `index.html` provides a safe deployment-pending notice until GitHub Pages is switched to Actions. The previous one-file prototype remains recoverable in repository history but is not republished because it contains unreviewed, placeholder material.

## Content maintenance

Structured public data currently lives in:

- `src/data/programs.ts`
- `src/data/resources.ts`
- `src/data/denials.ts`
- `src/data/timeline.ts`

The production CMS contract is documented in `cms/schema.json` and `docs/CONTENT-GOVERNANCE.md`. A CMS vendor, authentication model, private-form boundary, and editorial roles must be approved before a no-code editor is connected.

Never publish a substantive program or appeal change without updating:

- official source;
- effective date when relevant;
- author/reviewer/content owner;
- last and next review dates;
- related English/Spanish revision state;
- revision history.

## Safety boundaries

Do not add accounts, medical-record uploads, denial-letter uploads, an eligibility calculator, an AI chatbot, analytics, advertising pixels, story submissions, or public forms without separate privacy, security, accessibility, legal, and operational review.

See [docs/DELIVERABLES.md](docs/DELIVERABLES.md) for implementation status and launch blockers.
