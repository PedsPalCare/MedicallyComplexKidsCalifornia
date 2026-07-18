# Accessibility, privacy, security, performance, and browser report

Source state under test: draft pull-request branch; GitHub Actions records the exact head SHA
Report date: **2026-07-18**

## Current evidence

| Gate | Result |
|---|---|
| Astro strict TypeScript check | Pass: 0 errors, 0 warnings, 0 hints |
| Static production build | Pass: 30 routes generated |
| External fonts, analytics, ad pixels, embeds | None in source |
| Accounts, uploads, form submission backend | None |
| Local-only tool storage | No cookies, localStorage, sessionStorage, IndexedDB, or server submission used |
| Responsive/print/reduced-motion/forced-colors styles | Implemented; manual visual verification pending |
| Automated browser and axe suite | Configured for GitHub Actions; local Chromium download was blocked by the restricted build environment, so results remain pending until the workflow runs |
| VoiceOver/NVDA/TalkBack | Pending manual audit; launch blocker |
| Qualified Spanish review | Pending; high-stakes Spanish withheld |
| Production TLS/security headers | Hosting-dependent; pending deployment verification |

This report does **not** claim WCAG conformance, legal compliance, or production security certification.

## WCAG 2.2 AA scope

Test every template and meaningful state: Home, navigation, Start Here and errors/results, each program guide, every denial pathway and “unsure,” worksheet, Resource Finder and no-results/share/save/print, advocacy edit/preview, story build/reset/export, timeline, Spanish status, search, corrections, 404, reduced motion, forced colors, 200% text, 400% zoom, and 320 CSS-pixel width.

Manual checks must cover semantic structure, meaningful alternatives, contrast, reflow, keyboard operation, no focus obscuring, target size, predictable behavior, form labels/errors, review-before-share, status announcements, correct language metadata, and accurate custom-control states.

Assistive-technology matrix:

- VoiceOver + Safari on current macOS and iOS
- NVDA + Firefox and Chrome on Windows
- TalkBack + Chrome on Android
- Keyboard-only, voice control label-in-name, 400% zoom, and forced colors

## Privacy review

Permitted behavior:

- Start Here answers stay in page memory; exact ZIP is not put into a URL.
- Resource links share only broad county/category/language/delivery filters.
- Search terms, denial selections, story text, advocacy text, and correction text are not shared in URLs or sent to a server.
- Story, advocacy, correction, and resource outputs are copied, printed, or downloaded only after a user action.

Production network-capture testing must assert that no tool answer or draft appears in requests, DNS calls, cookies, storage, cache keys, referrers, source markup, console, telemetry, logs, public search, sitemap, or CMS API.

## Security review

The static prototype has a narrow attack surface and no server forms. Production requires HTTPS, CSP without `unsafe-eval`, HSTS after domain review, `X-Content-Type-Options`, restrictive `Permissions-Policy`, `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'none'`, dependency/secret/SAST/DAST scans, CMS MFA and least privilege, backups, restore tests, incident response, and private-data separation.

GitHub Pages may not apply `public/_headers`; final response headers must be verified on the deployed platform. Do not claim header protection until that check passes.

## Performance budget

| Metric | Target |
|---|---:|
| LCP | ≤2.5 s |
| INP after field data | ≤200 ms |
| CLS | ≤0.1 |
| Lighthouse mobile Performance | ≥90 |
| Lighthouse Accessibility | 100, followed by manual audit |
| Initial critical JavaScript | ≤120 KB gzip |
| Initial CSS | ≤50 KB gzip |
| Typical initial transfer | ≤500 KB compressed |
| Initial requests | ≤30 |

The static architecture, system fonts, no images, no third-party scripts, and page-specific JavaScript are designed for low bandwidth. Lighthouse, Web Vitals, and throttled low-end-device evidence remain deployment gates.

## Browser matrix

Release-test current and previous Chrome, Edge, Firefox, and Safari; current and previous iOS Safari; current Android Chrome; and Samsung Internet when audience data warrants. Test Back/Forward behavior, shared filter restoration, share support/fallback, disabled storage/cookies, reduced motion, forced colors, 400% zoom, long Spanish labels, print preview, and network interruption.

## Severity

- **P0:** inaccurate high-stakes guidance; data leakage; critical/high security finding; inaccessible core journey; unreviewed high-stakes Spanish; expired active alert; missing independence/safety disclaimer.
- **P1:** any confirmed WCAG A/AA failure; broken core control/source link; missing owner/source/review metadata; unsupported required browser; missed performance budget.
- **P2:** non-core usability or presentation issue with no factual, safety, privacy, or accessibility effect.
