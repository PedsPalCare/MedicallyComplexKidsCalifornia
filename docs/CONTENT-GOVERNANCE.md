# CMS contract and content governance

## Content architecture

The public site uses typed repository data for the prototype. `cms/schema.json` is the vendor-neutral production contract. The selected CMS must support export, revision history, role-based review, scheduled publication/expiration, backups, restoration, and vendor exit.

Every public item carries:

`id`, `type`, `slug`, `translationGroup`, `locale`, `title`, `summary`, structured body, audience, needs, age, geography, responsible agency, official and supporting sources, author, reviewers, content owner, effective date, last review, next review, expiration, translation status, revision history, related content, archive state, canonical and social metadata, and correction route.

High-stakes claims additionally carry:

`claimText`, `claimType`, `jurisdiction`, source and section, effective date, verification state, verifier, and verification timestamp.

## Content types

- Program and appeal pathway
- Program office, county/service area, Regional Center, Medi-Cal plan, and HCBA agency
- Resource and guide
- Navigator rule
- Campaign, bill/budget item, and action alert
- Family story and consent-form version
- Event, news, FAQ, person, partner, and global alert

Public CMS content and private form/story/consent data must use separate stores, APIs, permissions, and search indexes. Unpublished material must never be enumerable from the public CMS API.

## Roles

- Author
- California program SME
- Legal/compliance reviewer
- Plain-language and accessibility reviewer
- Translator
- Qualified bilingual reviewer
- Publisher
- Directory verifier
- Campaign owner
- Administrator

Program, appeal, campaign, and minor-related content requires two-person approval. No reviewer should approve their own substantive high-stakes draft.

## Workflow

Draft → claim/source verification → subject-matter review → legal/compliance review when triggered → plain-language/accessibility review → translation → qualified bilingual review → publish → automated monitoring → scheduled review → archive/supersede.

## Automated rules

- Missing official source, owner, review date, or next-review date blocks publication.
- Active alerts and campaigns require an owner, source, decision point, updated date, and expiration.
- Expired active content is removed from active placement and sent to archive.
- Overdue program/appeal pages are flagged.
- A substantive English change marks the Spanish translation `updateRequired`.
- High-stakes Spanish is publishable only when human review is `approved` and the English revision matches.
- Broken critical application and appeal links block release.
- Superseded content displays a replacement route and remains in a dated archive.
- Automation never rewrites eligibility, deadlines, rights, or bill status.

## Review cadence

- Critical links and active alerts: daily/continuous automated check plus human status ownership
- Active bills and budget items: each decision point and at least weekly while active
- HCBA capacity, Waiver Agency routing, plan, county, and local-office data: at least monthly or when official sources change
- High-risk program and appeals guidance: every 3–6 months and on governing change
- Resource directory: rolling 3–6 month verification
- Evergreen education: at least annually
- Accessibility, security, privacy, consent, and disaster workflow: annually and after material change

## 30/60/90 plan

### First 30 days: establish authority

- Appoint content, program, legal, accessibility, translation, directory, privacy/security, and advocacy owners.
- Approve terminology, source hierarchy, disclaimer, correction, claim-label, and editorial style policies.
- Complete the primary-source register and authoritative county/ZIP crosswalk plan.
- Define mandatory legal-review triggers and the privacy data/retention map.
- Establish a California Spanish terminology glossary and paid qualified-review process.
- Review Start Here, denials, Medi-Cal, CCS, HCBA/WPCS, Regional Center, and IHSS first.

### Days 31–60: validate with families and specialists

- Conduct task testing with English- and Spanish-speaking caregivers, rural families, transition-age youth, screen-reader users, and hospital/community navigators.
- Verify all 58 counties and split catchments through official sources.
- Complete subject-matter/legal review of denial pathways and qualified Spanish review of launch-critical guidance.
- Run manual WCAG 2.2 AA, VoiceOver, NVDA, and TalkBack testing.
- Exercise correction, broken-link, expiration, translation-mismatch, backup restore, and emergency unpublish workflows.

### Days 61–90: stabilize and publish governance evidence

- Resolve factual, usability, accessibility, translation, privacy, and security defects before broad promotion.
- Publish named owners, editorial and correction policies, revision log, accessibility statement, and independence disclosures.
- Issue a content-health report covering sources, reviews, translation parity, link health, corrections, and campaign freshness.
- Convene a compensated family advisory review and publish the next two-quarter roadmap from user evidence.

## Governance dashboard

- Claims linked to authoritative sources
- Pages with current owner, reviewer, and review dates
- English/Spanish parity and review state
- Office/resource verification freshness
- Expired alert and stale-campaign count
- Broken critical links
- P0 task completion and median time
- Screen-reader and keyboard completion
- Search no-result and reformulation rate
- Correction acknowledgment and resolution time
- Private-data incidents: target zero
