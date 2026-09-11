# POS UI Research

**Project:** Multi-business Management Dashboard v2  
**Researcher:** Cleo  
**Retrieval date:** 2026-09-11 (Asia/Singapore)  
**Scope:** Read-only review of recognizable POS and operations-product patterns before rebuilding the fictional proposal surface.

## Source evidence

### 1. Shopify — “Point of sale”
- **Organization:** Shopify
- **URL:** https://help.shopify.com/en/manual/sell-in-person
- **Retrieved:** 2026-09-11
- **Retrieval status:** Retrieved successfully through Agent Reach’s Jina Reader route.
- **Observable evidence on the fetched page:** Shopify describes POS as being used to sell in person in retail stores, popups, and other locations. It says Shopify POS syncs orders and inventory across retail locations, the online store, and other sales channels; the page also says store orders can be viewed and managed in the app. The page groups related work into getting started, hardware, retail markets, and selling in person.
- **Pattern supported:** A POS is a focused in-person selling workspace with location/channel context and a visible relationship to orders and inventory. A multi-location product benefits from explicit context rather than a generic form.

### 2. Square Support — “View and search transactions”
- **Organization:** Square (Block, Inc.)
- **URL:** https://squareup.com/help/us/en/article/5145-square-point-of-sale
- **Retrieved:** 2026-09-11
- **Retrieval status:** Retrieved successfully through Agent Reach’s Jina Reader route.
- **Observable evidence on the fetched page:** The page identifies a transaction history, says users can view and search individual transactions in the dashboard and POS app, and lists filters including date, payment method, type, status, location, source, team member, risk level, and card number. It describes selecting an individual transaction to view more details, issue a receipt, or refund it. It also describes search by item/ticket name, notes, device name, and receipt ID.
- **Pattern supported:** POS-adjacent operations need a transaction boundary: line-item or ticket context, status, location/device context, review/details, and a searchable activity history.

### 3. Toast — “Point of Sale Software | Toast POS”
- **Organization:** Toast
- **URL:** https://pos.toasttab.com/products/point-of-sale
- **Retrieved:** 2026-09-11
- **Retrieval status:** Retrieved successfully through Agent Reach’s Jina Reader route.
- **Observable evidence on the fetched page:** The official page labels the product “Point of Sale Software | Toast POS” and groups capabilities into operational areas such as point of sale, payments, hardware, inventory management, and a management app. It separately exposes retail POS, inventory management, and handheld POS paths in the product navigation.
- **Pattern supported:** A credible POS product is presented as an operational system with explicit workflow areas and business context, not as a single marketing paragraph. Related work is discoverable through persistent navigation and grouped capabilities.

### 4. Lightspeed Retail (R-Series) Support — “Sales”
- **Organization:** Lightspeed Retail (R-Series)
- **URL:** https://retail-support.lightspeedhq.com/hc/en-us/categories/8332189098907-Sales
- **Retrieved:** 2026-09-11
- **Retrieval status:** Retrieved successfully through Agent Reach’s Jina Reader route.
- **Observable evidence on the fetched page:** The support category exposes “Making sales” content including “Making sales in Retail POS,” deposits, multi-location sales, receipt/internal notes, quotes, and searching for sales. The same page exposes neighboring product areas for payment processing, inventory, customers, settings, and reports.
- **Pattern supported:** Sales workflows benefit from an intentional work area, multi-location context, transaction notes, and adjacent operational navigation rather than a purely visual checkout moment.

## Retrieval failures and non-evidence

The following attempts were not used as evidence:

- `web_extract` for the official Square, Shopify, Toast, Lightspeed, and Nielsen Norman Group URLs failed with HTTP 402 from the configured extraction service: `Payment Required: Failed to scrape` / `Insufficient available balance for requested reservation`.
- The configured `web_search` route failed with the same HTTP 402 billing error. The successful evidence above came from the Agent Reach route using `curl https://r.jina.ai/URL`.
- `https://pos.toasttab.com/products/restaurant-pos` returned a 404 page. It was not used for Toast evidence; the valid Toast product URL above was fetched instead.
- `https://retail-support.lightspeedhq.com/hc/en-us/articles/360043068853-Using-the-Sales-Tab` returned a 404 page. It was not used for Lightspeed evidence; the current Sales category above was fetched instead.
- `https://www.nngroup.com/articles/dashboard-design/` returned a 404 page, so no Nielsen Norman Group finding is claimed.
- `https://baymard.com/labs/checkout-usability` returned a 404 page, so no Baymard finding is claimed.

## Cleo recommendation

Use general, recognizable POS patterns without copying a vendor’s brand or distinctive layout:

1. Keep business/register context persistent at the top of the workbench.
2. Put selectable categories and session/product tiles in the primary working area.
3. Keep a visible ticket/cart panel in the same frame with line items, quantities, a sample subtotal/total marker, and payment boundary.
4. Make the transaction boundary explicit: draft ticket → review ticket → record sample activity. The primary action should be visually unambiguous.
5. Preserve operational context after recording by showing the new record in a management activity list.
6. Use compact system navigation, status chips with text, and an attention queue in the management surface.
7. Use one purposeful activity chart and business status summaries; avoid decorative charts or unexplained numbers.

## Implementation choices in v2

- **Adopted:** A persistent “Register 01” and selected business context, with Arcade Place, Playhouse, and Massage Chairs buttons.
- **Adopted:** Category tabs (`All`, `Sessions`, `Products`) and visual tiles for sample options.
- **Adopted:** A sticky desktop ticket panel with line items, quantity controls, sample subtotal, “Not connected” payment line, and “SAMPLE” total marker.
- **Adopted:** Review and record states before the sample activity is handed to the dashboard.
- **Adopted:** Sidebar/topbar dashboard cues, compact KPIs, a labeled seven-day sample activity bar chart, attention queue, three business cards, and a recent activity table.
- **Adopted:** Playhouse as the sample attention state with a detail view, inventory snapshot, explicit note visibility, manual follow-up option, and no automatic notifications.
- **Boundary choice:** Values are sample counts/markers only. No currency, real prices, real business facts, payment, inventory mutation, persistence, or live connection is implied.

## Intentionally not copied

- No vendor logos, product names, proprietary labels, screenshots, exact copy, or distinctive color systems.
- No exact Square, Shopify, Toast, or Lightspeed page structure.
- No real payment method controls, card capture, receipt/refund operation, barcode flow, staff account flow, or live inventory synchronization.
- No claim that the fictional concept has the capabilities described by the source products. Sources are used only for broad, observable interaction patterns.

## Evidence / recommendation / implementation distinction

- **Source evidence:** The dated, linked observations under “Source evidence” are what the fetched official pages explicitly exposed.
- **Cleo recommendation:** The pattern translation above is design judgment derived from those observations and the approved project brief; it is not a vendor requirement.
- **Implementation choice:** The v2 bullets describe what was actually built in `index.html`; they are sample-only prototype decisions, not production architecture or product commitments.
