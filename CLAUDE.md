# CLAUDE.md

Guidance for Claude Code (and other AI assistants) when working in this repo.

This project's agent context is maintained in [AGENTS.md](./AGENTS.md). Read it
first — it is the source of truth for stack, layout, commands, and conventions.

## Quick reference

- **Project**: Pacifics documentation site (Docusaurus 3 + TypeScript, Node >= 20).
- **Docs**: `docs/`, organized into categories, each with a `_category_.json`.
- **Build**: `npm run build` — fails on broken links (`onBrokenLinks: 'throw'`).
- **Dev server**: `npm run start` — long-running; do not launch in automation.
- **Type check**: `npm run typecheck`.

## Rules for changes

1. Put docs in the correct category folder under `docs/`.
2. Use frontmatter `sidebar_position` for ordering.
3. Use relative links between docs so broken-link checks pass.
4. The blog is disabled (`blog: false`) — do not add blog links.
5. Never commit secrets. Real values go in `.env.local` (gitignored); templates
   go in `.env.example`.

## Definition of done

Run `npm run build` and confirm it succeeds with no broken links before
considering any doc or config change complete.
