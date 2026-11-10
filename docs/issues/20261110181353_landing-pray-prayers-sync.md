## Participants

- Andrei Makarov

## Decisions

- Landing install copy leads with crates.io `cargo install pray-cli --locked`; git install uses package name `pray-cli` (not `pray`).
- Adopt-for-agents prompt is public landing and llms.txt material with a copy control on HTML; omit `distribution: "prayers"` because consumer README and this repo Prayfile use `source "amkisko", git: "…"`.
- Package ledger on the landing tracks amkisko/prayers catalog groupings (baseline, language, product surface, skills, community files) rather than the July 2026 partial list.
- Design language of the chamber landing stays; no redesign to a light or card layout.
- Repo Prayfile adapted for a static landing: drop composed `getting-started`; bump constraints to current catalog minors; add dependency-issues, dependency-policy, claims-audit, changelog-update; tree agent-discovery and public-surface-recon for llms.txt and public surface work; keep community file destinations; omit language packs, io-simulation, and app-only product packages.
- `.agents/project.md` holds only project overlay prose (no AGENTS heading wrappers).

## Effects

- index.html, index.md, llms.txt, assets/landing.css, and assets/landing.js updated for install, catalog, compose budget notes, and adopt prompt.
- Prayfile, Prayfile.lock, AGENTS.md, and `.agents/skills/` refreshed via `pray install` / `plan` / `apply` / `verify`.
- Fact gaps recorded below for design and prose audits.

## Next

- amkisko/prayers README install line still shows `cargo install … pray`; publishers should align with pray-cli.
- Optional: link RFCs under kiskolabs/pray `rfcs/` beside SPEC.md once landing wants dual entry.
- AGENTS.md is about 24 KiB after adapt; trim compose set later if the 16 KiB budget matters in practice.
- Superseded for landing IA: adopt prompt and package ledger moved off HTML in `docs/issues/20261110182840_landing-slim-design-md.md`.

## Source

- https://github.com/kiskolabs/pray README and CHANGELOG through 1.26.2
- https://crates.io/crates/pray-cli (1.26.1 published; changelog also lists 1.26.2)
- https://github.com/amkisko/prayers README consumer section and package catalog (through pressure-benchmarking / dependency-policy 4.3 era)
- Landing files index.html, index.md, llms.txt as of this change

## Design audit

- Brand and first viewport: hero brand word works; supporting paragraph is long for a strict hero budget but matches the chamber voice already shipped.
- Composition: single-column chamber, no dashboard, no cards; fork section is intentional dual path, not a card grid.
- Typography and atmosphere: Italiana / Cormorant / IBM Plex Mono with moisture field and backdrop motion; keep as established system (would conflict with generic “avoid dark/glow” defaults if redesigned from scratch).
- Gaps: no copy affordance on rites before this change; package ledger stale; nav order prioritizes start over roman section order (acceptable for conversion).
- Motion: scroll vibe, backdrop pin, morse pulse; reduced-motion path exists.

## Prose audit

- Voice is metaphor-heavy on purpose (orientation, rites, silence); keep, but keep install and Prayfile examples factual.
- Drift: install package name, incomplete catalog, missing kotlin and product-surface packages, example omits `.agents/project.md` first and compose-budget rules, soft claim that legacy `target`/`agent` “remain valid” without noting deprecation toward version 2.
- Em dashes and long justified blocks are part of the chamber register; no wholesale rewrite.
- Marketing odor low; main failure mode was stale dependency facts, not hype.
