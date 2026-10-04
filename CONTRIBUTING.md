# Contributing to Pacifics Docs

Thanks for your interest in improving the Pacifics documentation. This guide
explains how to propose changes.

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository and clone your fork.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run start
   ```

4. Create a branch for your change:

   ```bash
   git checkout -b docs/short-description
   ```

## Making Changes

- Documentation lives in `docs/` as Markdown/MDX files.
- Each category folder has a `_category_.json` that controls its sidebar label
  and position.
- Use frontmatter (`sidebar_position`) to order pages within a category.
- Prefer relative links between docs (e.g. `../platform/security-context-graph.md`).

## Before You Submit

Run a production build to catch broken links and errors — the site is configured
to fail on broken links:

```bash
npm run build
```

Optionally run the type checker:

```bash
npm run typecheck
```

## Submitting a Pull Request

1. Push your branch and open a pull request against `main`.
2. Describe what changed and why.
3. Keep PR titles concise and the description focused.
4. Link any related issues.

## Style

- Write in clear, plain language.
- Keep headings and structure consistent with existing pages.
- Prefer short paragraphs and task-focused instructions.

Thank you for contributing!
