## Decisions

- Replace Italiana + Cormorant Garamond with Newsreader (OFL) for display, signal, and body so screen reading stays clearer while the chamber tone remains serif.
- Keep IBM Plex Mono for nav, labels, and incantations.
- Harden the closed prompt veil for WebKit: `max-height: 0`, `visibility: hidden`, and no transform while closed so spoiler copy and the inner copy control do not leak in Safari.
- Size install `incantation-shell` with `fit-content` so the absolute copy control sits on the rite, not the full plinth width.
- Center outbound foot links with flex and letter-spacing on the link/separator children.

## Effects

- Updated `index.html` Bunny font request to variable Newsreader + IBM Plex Mono.
- Updated `assets/landing.css` font tokens, optical sizing, veil collapse, copy shell width, and foot-link layout.
- Updated `DESIGN.md` typography contract to Newsreader + IBM Plex Mono.
- Follow-up Safari hard fix: closed veil uses `display: none` + `hidden`/`inert` (no grid `0fr`); copy/prompt controls use flex + explicit `-webkit-appearance: none` button reset; asset URLs cache-busted.

## Next

- Human Safari pass on local `http://127.0.0.1:8765/` then deploy; live will stay broken until publish.
- Confirm Bunny serves the Newsreader `opsz` variable face in production browsers.

## Source

- Prior Safari report on https://pray.kisko.dev/
- Font research: Literata / Newsreader / Source Serif 4 / IBM Plex Mono (OFL)
