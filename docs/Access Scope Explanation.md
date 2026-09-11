# Access Scope Explanation — Cleo Master Template v2

## Andrew-confirmed boundary

Andrew clarified that the first proposal must show **three separate POS contexts**, not one unrestricted POS with a business selector:

- **Arcade POS** → Arcade Place data, controls, sessions, products, and transactions only.
- **Playhouse POS** → Playhouse data, controls, sessions, products, and transactions only.
- **Massage Chairs POS** → Massage Chairs data, controls, sessions, and transactions only.
- **Owner-facing Multi-business Management Dashboard** → the only cross-business surface; it may aggregate sample records from all three contexts for owner oversight.

A business POS must not expose another business’s POS data, controls, products, sessions, or transactions. This is a **prototype access-boundary demonstration**. It is not authentication, authorization, isolation, or a production security claim.

## How the repaired prototype demonstrates it

| Surface | Visible scope cue | Rendered sample options | Cross-business access |
|---|---|---|---|
| Separate preview chooser | `Arcade POS`, `Playhouse POS`, `Massage Chairs POS` entry points outside the active register | Chooser labels only; it is not an in-register business switcher | Preview selection is allowed for demonstrating three separate contexts; it does not merge them |
| Arcade POS | `Arcade POS · Arcade Place only` and `Scoped to active register` | Arcade session; Bottled drink | No Playhouse or Massage Chairs tiles, controls, or ticket items |
| Playhouse POS | `Playhouse POS · Playhouse only` and `Scoped to active register` | Play session; Grip socks; Small toy | No Arcade or Massage Chairs tiles, controls, or ticket items |
| Massage Chairs POS | `Massage Chairs POS · Massage Chairs only` and `Scoped to active register` | Chair session; Extended session | No Arcade or Playhouse tiles, controls, products, or ticket items; no Products tab |
| Owner dashboard | `Owner-only workspace · sample portfolio` and `Owner aggregate` notice | Recent activity records show `Business / source` for all three POS contexts | This is the only aggregate surface in the artifact |

The active POS workbench renders its tile list from the active business’s options only. Changing the preview context clears the ticket, resets the category, and updates the persistent register label. The dashboard receives a new in-memory sample record only after the active context passes through review and `Record sample session`.

## Confirmed rule vs implementation choice

### Andrew-confirmed rule

- Separate Arcade, Playhouse, and Massage Chairs POS contexts.
- No cross-business POS access.
- One owner-facing aggregate management dashboard.
- Clearly fictional/sample data and no live destinations.
- No real authentication, backend, database, payment processing, integrations, or production authorization.
- Keep the proposal story: opening → scoped POS preview → handoff → owner dashboard → Playhouse detail/notes/follow-up → non-live CTA.
- POS previews are optimized for desktop and tablet in this iteration; no dedicated mobile POS redesign.
- The owner dashboard needs a complete mobile management layout with menu/navigation access, stacked status panels, attention access, business drill-down, notes, and follow-up actions.

### Cleo implementation choices

- A chooser outside the active register provides three separate preview entry points instead of an in-register global business selector.
- The active register has a persistent `POS · Business only` label and `Scoped to active register` cue.
- Massage Chairs intentionally exposes only session options and omits the Products tab.
- Three fictional seed records make the owner aggregate visible immediately; newly recorded context-scoped records are prepended to the in-memory Recent activity table with their POS source.
- A compact mobile `Menu` button reveals the dashboard navigation and business drill-down controls at mobile widths. The POS itself remains the same scoped workbench with responsive layout rules, not a separate mobile POS redesign.
- Notes, visibility, and manual follow-up remain page-local and non-notifying.

## Surface structure preserved

1. Owner-oriented opening story.
2. Separate business-scoped POS preview chooser and active POS workbench.
3. Review/record state and connected sample handoff.
4. Owner aggregate dashboard with sidebar/topbar, KPIs, chart, attention queue, business status, and recent activity.
5. Playhouse detail with reason, inventory/staff context, notes, and manual follow-up.
6. Disabled/non-live CTA section.

## Mutation diagnostic

No mutation error was reproduced, so no mutation fix is claimed.

Actual checks performed against the isolated staging artifact:

- `index.html` content search for `Mutation`, `mutation`, and `MutationObserver`: no matches.
- Node syntax check of the extracted inline script: exit `0`.
- Chrome CDP interaction test exercised all three context switches, ticket selection, review, record handoff, Playhouse detail, note/follow-up, mobile menu, and reset. Captured console/runtime event count: `0`.
- A Chrome CDP mutation probe attached a `MutationObserver`, switched contexts repeatedly, recorded a sample, and reset the demo: `114` expected DOM mutation batches; `errors: []`; `unhandled: []`; probe result `PASS`.

The observed DOM mutations are intentional rendering updates, not a reproduced mutation exception.

## Boundary limitations

The artifact demonstrates visible prototype scope only. It does not provide production authentication, authorization, backend isolation, durable persistence, real POS connectivity, payment processing, live inventory, notifications, or security guarantees.
