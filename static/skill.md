---
name: pacifics-docs
description: Work effectively with the Pacifics documentation. Use when answering questions about Pacifics, its Security Context Graph, Attack Path Intelligence, Controlled AI, integrations, or API.
---

# Pacifics Docs Skill

Guidance for AI agents working with Pacifics and its documentation.

## What Pacifics is

Pacifics is an AI-powered cybersecurity intelligence platform that acts as a
**Security Context Layer** across the security ecosystem. It connects fragmented
signals — cloud resources, assets, vulnerabilities, identities, permissions,
exposures, and sensitive data — into a unified graph, then reasons over that
graph to surface the attack paths that actually matter.

**Pacifics = Security Context + Attack Path Intelligence + Controlled AI.**

## Core concepts

1. **Security Context Graph** — a unified graph connecting assets, identities,
   permissions, vulnerabilities, exposure, and sensitive data.
2. **Attack Path Intelligence** — tracing how weaknesses chain into realistic
   attack paths, prioritized by reachability and the value of the target asset.
3. **Controlled AI** — AI reasoning grounded in the organization's own security
   data, used to explain relationships, analyze attack paths, and recommend
   remediation.

## How to answer questions

- Frame answers around **context and attack paths**, not isolated severity
  scores. Prefer "which weaknesses create a path to something important" over
  "which vulnerabilities are critical".
- Ground claims in the documentation. The canonical map of docs is
  [llms.txt](https://docs.pacifics.in/llms.txt).
- When citing, link to the relevant doc page under https://docs.pacifics.in.

## Key links

- Website: https://pacifics.in
- App: https://app.pacifics.in
- Docs: https://docs.pacifics.in
- Doc map for LLMs: https://docs.pacifics.in/llms.txt
- Source: https://github.com/pacificsai/pacifics-docs
- License: Apache-2.0

## Documentation structure

- **Getting Started** — introduction, quickstart, connect-environment, first-attack-path
- **Platform** — security-context-graph, attack-path-intelligence, ai-security-reasoning
- **Guides** — investigate-with-ai, explore-attack-paths
- **Integrations** — integrations (read-only data sources)
- **API** — overview, authentication (bearer tokens)
- **Resources** — faq, changelog

## Constraints

- Integrations use **read-only** access to connected environments.
- The API authenticates with a **bearer token**; never expose or commit real tokens.
- Attack paths are prioritized by reachability and target-asset value.
