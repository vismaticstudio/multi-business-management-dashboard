# Active Proposal Website Prototype

This folder contains the current Multi-business Management Dashboard proposal website.

## Run locally

From this folder:

```bash
python -m http.server 8766
```

Open `http://127.0.0.1:8766/`.

## Scope

- Separate Arcade POS, Playhouse POS, and Massage Chairs POS contexts
- Each POS renders only its own fictional options and transaction context
- Owner-only aggregate management dashboard
- POS optimized for desktop/tablet layouts
- Management dashboard includes desktop/tablet and mobile menu/navigation behavior
- Final CTA preserves the left-side proposal copy and presents a `Let’s Talk` button linking to `https://cal.com/vismatic-studio/lets-chat`
- No Cal.com inline embed or external Cal script is included; the CTA opens the scheduling page as a normal external link
- Fictional in-memory data only
- No backend, authentication, payment processing, persistence, live integrations, or external writes

See the repository `docs/` directory for the access-scope explanation and POS research.