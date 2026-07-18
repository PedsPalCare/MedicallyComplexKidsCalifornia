# Product brief, IA, wireframes, and design system

## Assumptions

- The name and taglines are reversible working copy.
- The organization is independent and does not claim government, legal, medical, health-plan, or nonprofit status.
- GitHub is the source of truth; public pages are statically generated for speed, resilience, and a small privacy surface.
- Start Here, search, filters, worksheets, advocacy drafts, and story drafts work locally and are not retained.
- No accounts, uploads, eligibility scoring, chatbot, analytics, advertising, fabricated stories, fabricated partners, or unapproved policy positions.
- Suggestions use “may be worth exploring,” never “you qualify.”
- High-stakes Spanish content is blocked from publication until qualified human review.
- Lists remain the authoritative accessible interface; a future map may supplement but never replace them.

## Unresolved production decisions

- Final name, trademark, domain, logo, legal entity, governance, and fundraising authority
- Named program SMEs, legal/compliance reviewer, accessibility lead, privacy/security owner, and qualified Spanish reviewers
- Approved policy positions and campaign-publishing authority
- CMS, hosting, search, form, newsletter, analytics, and representative-lookup vendors
- Public contact route, correction-response owner, retention schedule, incident response, and story-consent releases
- Authoritative refreshable data for 58 counties, ZIP-based catchments, Regional Centers, Medi-Cal plans, CCS, IHSS, and HCBA Waiver Agencies

## Reference benchmark and originality boundary

The public Advocates for Medically Fragile Kids NC site was treated only as a functional benchmark. Useful product patterns include deep program education, assessment preparation, community resources, family stories, Spanish access, and advocacy. The California platform improves the journey by leading with family questions, consolidating denials, adding source/review metadata, making location and compound filtering primary, separating current from archived policy content, and centering the child before diagnosis.

The project does **not** reuse the benchmark’s words, CSS, code, imagery, logo, plant motif, color combination, layouts, navigation hierarchy, family stories, or CAP/C/Innovations-waiver framing. Original features include the California system map, need-first navigator, notice-issuer router, local-only story and action tools, life-course timeline, review-state system, and privacy boundary.

## Priority journeys

| Priority | Family goal | Shortest journey | Success measure |
|---|---|---|---|
| P0 | Find a first step | Home → Start Here → results | Relevant next step within three interactions |
| P0 | Respond to a notice | Persistent denial route → issuer → steps | Notice clues, immediate actions, documents, sources, help |
| P0 | Find local pathways | Finder/Start Here → county → official locators | CCS, Regional Center, IHSS, and HCBA routes visible |
| P0 | Get more care at home | Need card → home-care guide/crosswalk | Understand overlaps and first three steps |
| P0 | Use Spanish | Language control → Spanish status/equivalent | Correct metadata and transparent review state |
| P1 | Prepare a request | Program → documents/assessment → print | Practical packet without private submission |
| P1 | Plan a transition | Life timeline → stage → print | Sourced, dated milestone guidance |
| P1 | Take policy action | Advocacy → edit → preview → copy | Nothing sent automatically |
| P1 | Build a story | Story builder → format → preview/export | No default retention |

## Sitemap

- Home
- Start Here
- Programs and Supports
  - California system map and crosswalk
  - Medi-Cal for children
  - CCS and Whole Child Model
  - HCBA and WPCS
  - Regional Centers and Early Start
  - IHSS for children
  - Care at home
  - Equipment, supplies, and therapies
  - Education and school health
  - Pediatric palliative care and hospice
  - Emergency preparedness
  - Life transitions
- Denials and Appeals
  - Managed-care Medi-Cal
  - Fee-for-service Medi-Cal
  - CCS
  - HCBA/Waiver Agency
  - Regional Center
  - IHSS
  - School district
  - Private insurance
  - Unsure route and printable worksheet
- Resource Finder
- Advocacy and Policy
- Family Stories and private story builder
- News and Events
- About
- Join and Support
- Search
- Spanish status
- Accessibility, privacy, editorial, corrections, contact, and 404

## Screen-by-screen wireframe anatomy

| Screen/template | Primary anatomy |
|---|---|
| Global shell | Skip link; utility links; working identity; family-first navigation; language; Take Action; breadcrumbs; main; trust footer |
| Home | Three-action hero; need cards; system map; program guides; policy-state panel; story/news empty states; trust |
| Start Here | Privacy promise; seven concise question groups; validation; three suggested pathways; documents; official locators; print/edit |
| Programs index | Need-first intro; consistent guide cards; Start Here escape route |
| Program detail | Review state; at a glance; eligibility concepts; administrator; steps; documents; assessment; services; differences; barriers; denial; help; sources; correction |
| Crosswalk | Accessible comparison table; non-equivalence warning; Start Here action |
| Denials hub | Time-sensitive caution; issuer buttons; pathway result; worksheet; “unsure” help |
| Resource Finder | Keyword and facets; status count; list results; share/save/print; zero-results recovery |
| Advocacy | Active/archived separation; actions by time; official representative lookup; editable local draft; preview/copy |
| Stories | Consent boundary; joy-first prompts; local preview; copy/download/print |
| Timeline | Stage filters; sourced milestones; accessible complete list; print |
| Spanish | Correct `lang=es`; prominent human-review status; official Spanish sources; no unreviewed high-stakes guidance |
| Trust/policy | Mission; independence; editorial; privacy; accessibility; correction; launch blockers |

Mobile order is single-column, keeps primary actions early, uses 44-pixel project target sizes, avoids horizontal-table dependence, and keeps every core route keyboard-operable.

## Visual direction

Concept: **Clear pathways through connected systems.** Quiet wayfinding shapes and open natural-light color fields draw from California’s natural diversity without flags, bears, beaches, sunsets, hospital branding, or the benchmark’s plant identity.

| Token | Value |
|---|---|
| Ink | `#172B33` |
| Pacific | `#075D6B` |
| Pacific deep | `#083B46` |
| Redwood | `#2F5D50` |
| Poppy | `#B9471F` |
| Sand | `#F7F2E8` |
| Mist | `#E7F3F5` |
| Sage wash | `#E9F1EA` |
| Focus | `#6B4EFF`, 3px + offset |

System fonts avoid third-party requests. Georgia provides a warm editorial display voice; a hyperlegible system sans stack supports body copy. Components use visible borders, restrained radius, limited shadow, and text/icon/border combinations for status. Reduced-motion, forced-colors, print, mobile, and high-zoom states are explicit.

## Responsive component library

- Global Header, mobile details navigation, Footer, Breadcrumbs
- Buttons: primary, secondary, accent, quiet
- Cards: program, need, resource, result, notice, empty-state
- Callouts: information, warning, safety, success
- ReviewMeta and SourceList
- Forms: field, hint, choice group, error/status, toolbar
- Program template and side navigation
- System map, crosswalk table, timeline, emergency checklist
- Local-only navigator, denial router, filters, search, action preview, story preview, correction draft

All component states are implemented in `src/styles/global.css` and `src/components`.
