# Pacifics

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

- Website: <https://pacifics.in>
- App: <https://app.pacifics.in>
- Docs: <https://docs.pacifics.in>

> Pacifics is an open-source project.

## What is Pacifics?

**Pacifics is an AI-powered cybersecurity intelligence platform that helps organizations understand security risk in context.**

Modern security environments generate huge amounts of fragmented data — cloud resources, assets, vulnerabilities, identities, permissions, exposures, alerts, and sensitive data. Traditional security tools often evaluate these signals independently, making it difficult to understand **how they connect and what actually matters**.

Pacifics acts as a **Security Context Layer** across the existing security ecosystem.

### Core capabilities

**1. Security Context Graph**

Pacifics connects security entities and their relationships into a unified graph.

```text
Assets
  ↕
Identities
  ↕
Permissions
  ↕
Vulnerabilities
  ↕
Exposure
  ↕
Sensitive Data
```

This creates a contextual view of the organization's security environment.

**2. Attack Path Intelligence**

Instead of simply reporting that a vulnerability is critical, Pacifics determines whether that vulnerability can contribute to a realistic attack path.

```text
Internet
   ↓
Exposed Asset
   ↓
Vulnerability
   ↓
Compromised Identity
   ↓
Excessive Permission
   ↓
Sensitive Resource
```

This helps security teams prioritize **risks that can actually lead to meaningful impact**.

**3. Controlled AI**

Pacifics uses AI to investigate security context, explain relationships, analyze attack paths, and help security teams understand why a risk matters — while grounding AI reasoning in the organization's security data.

### The core idea

> **Pacifics helps security teams move from isolated security signals to contextual understanding of risk.**

Instead of asking:

> **"Which vulnerabilities are critical?"**

Pacifics helps answer:

> **"Which weaknesses create a path to something important, how does that path work, and what should we investigate first?"**

In short:

**Pacifics = Security Context + Attack Path Intelligence + Controlled AI.**

## Documentation

This repository contains the Pacifics documentation site, built with [Docusaurus](https://docusaurus.io/).

### Local development

```bash
npm install
npm run start
```

This starts a local dev server. Most changes are reflected live without restarting.

### Build

```bash
npm run build
```

Generates static content into the `build` directory.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to propose changes, and
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for community expectations.

## Security

To report a vulnerability, see [SECURITY.md](./SECURITY.md).

## License

Licensed under the [Apache License 2.0](./LICENSE).
