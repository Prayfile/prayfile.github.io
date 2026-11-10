## Participants

- Andrei Makarov

## Decisions

- Slim the public landing to promise, start (install / scaffold / one Prayfile), ownership zones, and outbound links. Drop orientation essay, two-ways-in checklists, adopt prompt embed, second Prayfile sample, materialization triad, and on-page package ledger.
- Adopt agent prompt stays canonical in `llms.txt`. Package catalog stays in amkisko/prayers README.
- Introduce root `DESIGN.md` for the chamber visual system in Google Labs DESIGN.md alpha format. Point agents at [getdesign.md](https://getdesign.md/) as the related catalog; do not clone a foreign template over the chamber.
- Nav order matches page order: start, zones, next, spec.
- Chamber visual language stays (void, brass, serif + mono). Typography later moved to Newsreader + IBM Plex Mono (`docs/issues/20261110165900_landing-safari-newsreader.md`). No light or card redesign.

## Effects

- Rewrote `index.html` and `index.md` to the slim structure.
- Added `DESIGN.md`; linked from landing next section, footer, `llms.txt`, `README.md`, and `sitemap.xml`.
- Updated `.agents/project.md` so agents read `DESIGN.md` before UI work.
- Supersedes the earlier decision that the adopt prompt and full package ledger live on the HTML landing (`docs/issues/20261110181353_landing-pray-prayers-sync.md`).

## Next

- Human visual pass: one-screen fit on common desktop heights; mobile may still scroll slightly.
- Optional: `npx @google/design.md lint DESIGN.md` in CI if the alpha CLI stays stable.
- Optional: prune unused fork/ledger CSS after the slim landing settles.

## Follow-up (same episode)

- Landing retargeted to one screen: brand, signal, compact install, closed adopt veil with copy + `llms.txt`, repo/outbound strip.
- Adopt prompt returns on HTML behind `<details class="veil">`; durable copy remains in `llms.txt`.

## Source

- Prior audit in chat (landing information density).
- https://getdesign.md/
- https://github.com/google-labs-code/design.md
- Landing files as of this change.
