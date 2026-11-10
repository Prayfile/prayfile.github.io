# pray

**Package manager for the language placed before inference**

Canonical URL: https://pray.kisko.dev/

---

The same plaintext and markdown traveled between repositories — [amkisko](https://github.com/amkisko) gems among them. That surrounding material is the **language placed before inference**: policies, templates, memories, formatting rules, workflow notes. It shapes attention, refusal, style, and action before any model answers. **Prayfile** lists it as dependency; `pray` resolves, locks, and renders `AGENTS.md` and other targets.

> treat pre-inference input as a dependency

---

## I — orientation

The same `AGENTS.md` fragments, checklists, and conventions still moved repo to repo — stale hunks, silent edits, weak lineage, rollback by hand. Prayfile records them in a manifest and lockfile; `pray` renders deterministically; `verify` checksums managed spans.

In prayer, orientation precedes information — ask, praise, confess, remember, surrender, repeat, listen. Breath, rhythm, silence, and repetition carry weight beside the words. `pray` takes that order: language revision-locked and rendered before uncertain response. Shared spans are *prayers*; `pray confess` records accept or reject; *silence* in the spec omits resolved hunks from a target while keeping them in the lock. [language before inference](https://amaaov.github.io/pages/20260626120000_prayfile_language_before_inference_en.html).

Inference here means provider, tool, retrieval, field order, repetition, silence, situation — conditions under which output stays probabilistic. Prayfile holds the manifest, lockfile, and rendered files.

> language before uncertain response

Checksums cover spans that affect output. Revisions pin instructions that bend behaviour. Render twice; bytes must match.

---

## II — two ways in

### terminal

_resolve · lock · plan · apply · verify_

Run `pray` locally or in CI. Resolution writes `Prayfile.lock`; `apply` writes rendered files into the repository.

1. Install the CLI with Cargo (`pray-cli` on crates.io).
2. `pray init` scaffolds `Prayfile` and destinations.
3. Declare `compose`, `tree`, and `pray` inputs (or migrate with `pray format`).
4. `pray install` → `pray plan` → `pray apply`.
5. `pray verify` and `pray drift` in CI.

### tools

_assistants · review bots · generators · wrappers_

Tools read committed files. After `apply`, pinned text is in `AGENTS.md`, skills, and checklists; silence entries in the lock omit spans from that target.

1. Wire shared packages in `Prayfile` (for example from [amkisko/prayers](https://github.com/amkisko/prayers)).
2. Render once; commit `Prayfile.lock` and inference-facing targets.
3. Open the tree in your tool; on-disk targets carry pinned revisions.
4. Update packages; review with `pray plan` before `apply`.
5. Record feedback with `pray confess`.

---

## III — start here

### 01 install

```bash
cargo install pray-cli --locked
```

Crates.io package is `pray-cli` (name `pray` is taken); binary is `pray`. Git form: `cargo install --git https://github.com/kiskolabs/pray --locked pray-cli`. Installs to `~/.cargo/bin`.

### 02 scaffold

```bash
cd your-project
pray init
pray install
pray plan
pray apply
```

Writes `Prayfile`, `Prayfile.lock`, and rendered targets including `AGENTS.md`.

### 03 shared guidance

Example `Prayfile` using [amkisko/prayers](https://github.com/amkisko/prayers). Compose project overlay first; pick one language pack; do not compose `getting-started`.

```ruby
prayfile "1"

pray do
  support_email "support@app.example"
  security_email "security@app.example"
end

source "amkisko", git: "https://github.com/amkisko/prayers.git"

compose "AGENTS.md" do
  pray ".agents/project.md"
  pray "amkisko/working-rules", "~> 2.0"
  pray "amkisko/ruby-conventions", "~> 1.0"
end

tree ".agents/skills" do
  pray "amkisko/engineering-audit", "~> 2.0"
end
```

Swap for `rust-conventions`, `elixir-conventions`, or `kotlin-conventions`. Keep composed `AGENTS.md` under ~16 KiB. Legacy `target` / `agent` still parse on prayfile `"1"` but warn; they leave in version 2 — run `pray format`.

### daily

```bash
pray install    # resolve dependencies
pray plan       # preview rendered changes
pray apply      # write targets + refresh lock spans
pray format     # rewrite Prayfile to destination DSL
pray verify     # checksum managed spans
pray drift      # detect hand-edits and renderer drift
pray confess    # signed accept / reject feedback
pray update     # bump within constraints, then plan/apply
```

---

## III·b — adopt for agents

Paste into a coding agent when wiring this repository like an amkisko consumer. Also in [llms.txt](https://pray.kisko.dev/llms.txt).

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

---

## IV — project-specific

Shared prayers hold generic fragments. Project paths, credentials, and deployment detail belong in `docs/`, `usr/docs/`, and `.agents/`.

Three zones. **Recipe** — `Prayfile`, packages, lock — changes via `pray add`, `pray update`, `pray apply`. **Human-owned** `.agents/` files stay editable; pray embeds them on render. **Managed** blocks between pray markers regenerate from lock, recipe, and compose-bound local paths.

| zone | contents |
|------|----------|
| **recipe** | Prayfile · packages · lock |
| **human-owned** | `.agents/` · local embeds in compose |
| **managed** | AGENTS.md blocks · `.agents/skills` |

Put project-specific language in `.agents/` and list it with `pray` inside `compose`.  
Hand-edits inside managed spans surface as *custom implementation* in `pray verify` and `pray drift`.

```ruby
compose "AGENTS.md" do
  pray ".agents/project.md"
  pray "amkisko/working-rules", "~> 2.0"
  pray ".agents/security.md"
end

tree ".agents/skills" do
  pray "amkisko/engineering-audit", "~> 2.0"
end

local ".agents/private.md", optional: true
```

Local paths re-embed on each render. Declaration order inside `compose` is render order. Declare *silence* to omit a shared fragment; the lock records it. For a project-only package: `pray prayer init`, then a path source in `Prayfile`. Whole-file destinations use `pray "pkg", "~> 1.0", file: "SECURITY.md"`.

---

## V — materialization

A manifest entry differs from bytes a tool loads. Truth: `Prayfile.lock`. Recovery: `.pray/cache`. Influence: rendered files opened at inference time.

| role | location |
|------|----------|
| **truth** | Prayfile.lock |
| **recovery** | .pray/cache |
| **influence** | AGENTS.md · skills · tool targets |

> rendered files carry influence

---

## VI — amkisko/prayers

[amkisko/prayers](https://github.com/amkisko/prayers) hosts shared fragments, skills, and community files. Compose fragments; tree skills; use `file:` for whole community docs. Do not compose `getting-started`.

### baseline compose

| package | kind |
|---------|------|
| working-rules | fragment |
| security | fragment |
| docs-conventions | fragment |
| dependency-issues | fragment |
| dependency-policy | fragment + skill |
| minimal-implementation | fragment |
| finite-state-machines | fragment |
| branch-naming | fragment |
| preferred-stack | fragment + skill |
| writing-prose | fragment |
| claims-audit | fragment + skill |
| rfc-process | fragment + skill |
| rejected-changes | fragment |
| publish-checks | fragment |
| collaboration-workflow | fragment |

### one language pack

| package | kind |
|---------|------|
| ruby-conventions | fragment |
| rust-conventions | fragment |
| elixir-conventions | fragment |
| kotlin-conventions | fragment |

### product surfaces when true

| package | kind |
|---------|------|
| keep-the-work | fragment |
| background-jobs | fragment |
| delivery-budgets | fragment |
| durable-cache | fragment + skill |
| io-simulation | fragment |
| planned-release | fragment + skill |
| pressure-benchmarking | skill |

### skills (tree, not compose)

| package | kind |
|---------|------|
| engineering-audit | skill |
| security-audit | skill |
| changelog-update | skill |
| api-contract-migration | skill |
| operational-signal-intake | skill |
| public-surface-recon | skill |
| infer-conventions | skill |
| session-review | skill |
| ci-review | skill |
| change-review | skill |
| agent-artifact | skill |
| agent-discovery | skill |
| derivation-audit | skill |
| agent-run-supervision | skill |

### community files

| package | kind |
|---------|------|
| community-security | file |
| community-code-of-conduct | file |
| community-governance | file |
| community-contributing | file |
| getting-started | README only |

[Full catalog](https://github.com/amkisko/prayers#package-catalog)

---

## VII — repositories

- [kiskolabs/pray](https://github.com/kiskolabs/pray)
- [amkisko/prayers](https://github.com/amkisko/prayers)

---

## Links

- [Specification](https://github.com/kiskolabs/pray/blob/main/SPEC.md)
- [Chamber essay](https://amaaov.github.io/pages/20260626120000_prayfile_language_before_inference_en.html)
- [Interactive demo](https://amaaov.github.io/pages/20260627120000_pray_demo_en.html)
- [HTML landing](https://pray.kisko.dev/)
- [llms.txt](https://pray.kisko.dev/llms.txt)
