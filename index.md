# pray

**Package manager for the language placed before inference**

Canonical URL: https://pray.kisko.dev/

> treat pre-inference input as a dependency

## Install

```bash
cargo install pray-cli --locked
pray init && pray install && pray plan && pray apply
```

Binary `pray` · package `pray-cli` · then commit lock and rendered targets.

## Prompt

[llms.txt](https://pray.kisko.dev/llms.txt)

<details>
<summary>prompt</summary>

```text
Adopt pray + amkisko/prayers in this repository the same way amkisko consumers do.

Goal
Treat shared agent guidance as locked dependencies, not copy-pasted AGENTS.md.
Keep project-specific context local. Render pinned targets tools can read on disk.

Prerequisites
1. Install CLI: cargo install pray-cli --locked
   (git: cargo install --git https://github.com/kiskolabs/pray --locked pray-cli)
2. Read https://pray.kisko.dev/ and https://github.com/amkisko/prayers README (consumer section).
3. Prefer destination DSL: compose / tree / pray …, file: (run `pray format` if legacy target/agent syntax appears).

Do this in the repo root
1. If no Prayfile: `pray init`, then replace the scaffold with an amkisko-style Prayfile.
2. Add to .gitignore: `.pray` (or at least `.pray/cache/`).
3. Create human-owned `.agents/project.md` with only this repo’s scope, credentials env names (no secrets), and product boundaries.
4. Write Prayfile:
   - prayfile "1"
   - optional pray do block with support/security emails for this product
   - source "amkisko", git: "https://github.com/amkisko/prayers.git"
   - compose "AGENTS.md": start with pray ".agents/project.md", then shared fragments
   - tree ".agents/skills": skills only (not always-on prose)
   - community files via pray "amkisko/community-…", "~> x.y", file: "SECURITY.md" (etc.) when this is a public/community repo
5. Package selection rules:
   - Compose exactly one language pack: ruby-conventions | rust-conventions | elixir-conventions | kotlin-conventions (match the tree; omit if not applicable).
   - Baseline compose usually includes: working-rules, security, docs-conventions, dependency-issues, dependency-policy, minimal-implementation, finite-state-machines, branch-naming, preferred-stack, writing-prose, claims-audit, rfc-process, rejected-changes, publish-checks, collaboration-workflow.
   - Do NOT compose getting-started.
   - Tree dependency-policy / rfc-process / claims-audit / preferred-stack / planned-release / durable-cache whenever those are composed (procedures live in the skills).
   - Add product-surface packages only if true: keep-the-work (person-facing place), background-jobs, delivery-budgets (ships bytes), durable-cache (cache/rebuildable derived state), io-simulation, pressure-benchmarking (skill), planned-release when the product uses that release rhythm.
   - Keep AGENTS.md under ~16 KiB; prefer fragments <1 KB; large procedure → skill + short pointer.
6. Resolve and materialize:
   pray install
   pray plan
   pray apply
   pray verify
7. Commit: Prayfile, Prayfile.lock, rendered AGENTS.md, .agents/skills/**, community files if rendered, .agents/project.md, .gitignore update.
   Do not commit .pray/cache.

Hard rules
- Never hand-edit managed spans between <!-- pray:… --> markers; change Prayfile (or project.md) and re-apply.
- Shared prayers stay generic; local paths/secrets/deploy detail stay in .agents/ and docs/.
- After publishers bump packages: pray update && pray plan && pray apply && pray verify.
- Mirror a sibling amkisko consumer Prayfile of the same language when unsure; do not invent a parallel instruction system beside Prayfile.

Done when
pray verify passes, AGENTS.md and skills are rendered from lock, project overlay is composed first, and cache is ignored.
```

</details>

## Repositories

- [kiskolabs/pray](https://github.com/kiskolabs/pray)
- [amkisko/prayers](https://github.com/amkisko/prayers)

## Links

- [llms.txt](https://pray.kisko.dev/llms.txt)
- [Chamber essay](https://amaaov.github.io/pages/20260626120000_prayfile_language_before_inference_en.html)
- [Interactive demo](https://amaaov.github.io/pages/20260627120000_pray_demo_en.html)
