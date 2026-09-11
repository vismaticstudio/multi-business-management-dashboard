# Project Boundary

## What this repository is

This repository contains the implementation surface for the Multi-business Management Dashboard proposal website.

The proposal website demonstrates:

1. Separate Arcade, Playhouse, and Massage Chairs POS contexts.
2. Business-scoped sample transactions.
3. An owner-only aggregate management dashboard.
4. Playhouse attention review, notes, and manual follow-up.

## What this repository is not

It is not:

- A production POS
- A payment processor
- A database-backed application
- An authentication or authorization system
- A live inventory system
- A real-time integration
- A production security implementation
- A client case study or performance claim

## Access-scope rule

Each POS context exposes only its own fictional sample data:

- Arcade POS → Arcade Place only
- Playhouse POS → Playhouse only
- Massage Chairs POS → Massage Chairs only

The owner-facing management dashboard is the only cross-business aggregate surface in the concept.

This visible boundary demonstrates the intended product model. It is not production authorization.

## Working relationship

The Knowledge Base project owns requirements, decisions, approvals, delegation records, and acceptance status. This repository owns version-controlled implementation files and reproducible validation.
