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

1. Install the CLI with Cargo.
2. `pray init` scaffolds `Prayfile` and targets.
3. Declare `agent` packages and sources.
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
cargo install --git https://github.com/kiskolabs/pray --locked pray
```

Installs to `~/.cargo/bin`. Add `PATH` if required.

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

Example `Prayfile` using [amkisko/prayers](https://github.com/amkisko/prayers):

```ruby
prayfile "1"

source "amkisko", git: "https://github.com/amkisko/prayers", distribution: "prayers"

target :agents do
  output "AGENTS.md"
  skills ".agents/skills"
end

agent "amkisko/working-rules", "~> 1.0", source: "amkisko", exports: ["working-rules"]
agent "amkisko/ruby-conventions", "~> 1.0", source: "amkisko", exports: ["ruby-conventions"]
agent "amkisko/engineering-audit", "~> 1.0", source: "amkisko", exports: ["skill"]

render mode: :managed, conflict: :fail, churn: :minimal
```

Use `rust-conventions` or `elixir-conventions` on other stacks.

### daily

```bash
pray install    # resolve dependencies
pray plan       # preview rendered changes
pray apply      # write targets + refresh lock spans
pray verify     # checksum managed spans
pray drift      # detect hand-edits and renderer drift
pray confess    # signed accept / reject feedback
```

---

## IV — project-specific

Shared prayers hold generic fragments. Project paths, credentials, and deployment detail belong in `docs/`, `usr/docs/`, and `.agents/`.

Three zones. **Recipe** — `Prayfile`, packages, lock — changes via `pray add`, `pray update`, `pray apply`. **Human-owned** `.agents/` files stay editable; pray embeds them on render. **Managed** blocks between pray markers regenerate from lock, recipe, and `local` paths.

| zone | contents |
|------|----------|
| **recipe** | Prayfile · packages · lock |
| **human-owned** | `.agents/` · `local` in Prayfile |
| **managed** | AGENTS.md blocks · `.agents/skills` |

Put project-specific language in `.agents/` and list it with `local`.  
Hand-edits inside managed spans surface as *custom implementation* in `pray verify` and `pray drift`.

```ruby
target :agents do
  output "AGENTS.md"
  skills ".agents/skills"
end

agent "amkisko/working-rules", "~> 1.0", source: "amkisko", exports: ["working-rules"]

local ".agents/project.md"
local ".agents/security.md", position: :after
local ".agents/private.md", optional: true

render mode: :managed, conflict: :fail, churn: :minimal
```

`local` paths re-embed on each render. Declare *silence* to omit a shared fragment; the lock records it. For a project-only package: `pray prayer init`, then a path source in `Prayfile`.

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

[amkisko/prayers](https://github.com/amkisko/prayers) hosts shared fragments — conventions, skills, audits — referenced from your `Prayfile`.

| package | kind |
|---------|------|
| working-rules | fragment |
| ruby-conventions | fragment |
| rust-conventions | fragment |
| elixir-conventions | fragment |
| minimal-implementation | fragment |
| dependency-policy | fragment + skill |
| engineering-audit | skill |
| changelog-update | skill |
| collaboration-workflow | fragment |
| getting-started | fragment |

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
