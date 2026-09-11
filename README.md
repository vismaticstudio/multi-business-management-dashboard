# Multi-business Management Dashboard

Interactive proposal website demonstrating three separate business-scoped POS contexts and one owner-facing aggregate management dashboard.

## Current prototype

The active prototype lives in [`prototype/current/`](prototype/current/).

It demonstrates:

- Arcade POS — Arcade Place options/data only
- Playhouse POS — Playhouse options/data only
- Massage Chairs POS — Massage Chairs options/data only
- Owner-only aggregate management dashboard
- POS desktop/tablet layouts
- Mobile management-dashboard layout with menu navigation
- Playhouse attention detail, notes, and manual follow-up
- Fictional in-memory sample data

This is a proposal website with interactive concept surfaces. It is not a production POS, payment system, database, authentication system, or live management platform.

## Run locally

From the repository root:

```bash
python -m http.server 8766 --directory prototype/current
```

Open `http://127.0.0.1:8766/`.

## Repository structure

```text
.
├── .github/workflows/validate.yml   # Static validation workflow
├── archive/                          # Preserved earlier prototype snapshots
│   ├── v1/
│   └── v2/
├── docs/                             # Sanitized project research and boundaries
├── prototype/current/                # Active proposal website
│   ├── index.html
│   └── README.md
├── scripts/validate.mjs              # Local/CI static checks
├── .gitattributes
├── .gitignore
└── README.md
```

## Source of truth

The Knowledge Base project remains the authority for project scope, user decisions, approvals, delegation records, and acceptance status. This repository is the version-controlled implementation surface.

## Safety boundary

The prototype uses fictional data only. It has no backend, authentication, persistence, payment processing, live inventory, POS integrations, notifications, or external writes. CTA destinations are intentionally non-live.

Do not add credentials, API keys, tokens, passwords, connection strings, or real client data to this repository.

## Validation

Run the local validation command:

```bash
node scripts/validate.mjs
```

The GitHub Actions workflow runs the same validation on pushes and pull requests.

## Status

The active prototype is ready for Andrew review. Deployment and public sharing remain separate approval gates.
