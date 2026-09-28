# NEXUS — Persistent Business & Trust Digital Twin

## 1. Project Definition

Build **NEXUS**, a lightweight, client-side web application that acts as a **persistent visual digital twin of a business, trust, asset, ownership, and financial ecosystem**.

NEXUS is **not a game**, **not an AI-agent system**, and **not an autonomous business-management system**.

The fundamental principle of the application is:

> **THE ADMINISTRATOR DEFINES REALITY.
> THE SIMULATION CALCULATES REALITY.
> THE VISUALIZATION EXPLAINS REALITY.
> THE SIMULATION NEVER DEFINES REALITY.**

The administrator manually creates and modifies every entity, relationship, asset, financial flow, employee, investment, expense, revenue stream, loss, event, and recurring rule.

The simulation engine only executes the configuration created by the administrator and calculates the resulting state over time.

It must never independently:

* create a company
* create an employee
* hire anyone
* create revenue
* create an investment
* create an expense
* create a project
* create an asset
* transfer money
* make strategic decisions
* modify ownership
* invent events
* recommend actions
* use AI to make business decisions

---

# 2. Primary Objective

Create a clean visual environment where an administrator can model an entire interconnected ecosystem such as:

* Founder
* Family Trust
* Estonian technology company
* Indian IT Services company
* Section 8 company
* Inherited businesses
* Steel business
* Scrap business
* Properties
* Investments
* Bank accounts
* Intellectual property
* Employees
* Contracts
* Financial relationships
* Intercompany payments
* Assets and liabilities

The architecture must remain completely generic so the administrator can add unlimited future entities without changing the application's source code.

The initial India–Europe–Trust architecture is only the initial dataset.

NEXUS must be capable of representing completely different future entities and relationships.

---

# 3. Source Architecture

Use the supplied project architecture as the conceptual basis.

The source architecture separates:

1. European technology operations
2. Indian IT development operations
3. Family asset/trust structure
4. Section 8/research structure
5. Cross-border commercial relationships
6. Ownership and governance
7. Assets and investments

The source architecture describes the Estonian technology company receiving international client revenue and contracting the Indian IT Services company for development, engineering, maintenance and support.

It also describes the family trust as a separate family-asset governance structure and emphasizes separate ownership records, accounting, banking, contracts and documented relationships.

Do not hard-code the legal assumptions from the source into the software.

Represent them as configurable relationships and data.

---

# 4. Technology Constraints

The application must be **100% client-side**.

## Required stack

### Frontend

* HTML5
* Tailwind CSS
* Vanilla JavaScript
* ES Modules

Do NOT use React unless absolutely necessary.

Keep the application lightweight.

### Visualization

Use a lightweight client-side graph visualization library.

Preferred:

* Cytoscape.js

D3.js may be used for specialized charts where appropriate.

The main ecosystem visualization should be graph-based rather than image-based.

### Simulation

Use:

* Vanilla JavaScript

No Python.

No FastAPI.

No Node.js backend.

No server-side simulation.

### Storage

Use:

* IndexedDB for persistent application data

Use JSON files only for:

* initial seed data
* import/export
* backup
* portability

Do not use a server database.

Do not use PostgreSQL.

Do not use SQLite unless implemented entirely in-browser and genuinely necessary. IndexedDB should be the primary persistent datastore.

### Authentication

No authentication system is required.

This is a single-user/local application.

### Backend

NONE.

There must be no backend dependency.

### Deployment

The application must run on:

* GitHub Pages

It must support:

* custom domain
* HTTPS through GitHub Pages
* static asset hosting

The application must work without a server-side runtime.

---

# 5. Zero-Cost Principle

The architecture should require:

* no VPS
* no cloud database
* no API server
* no paid backend
* no monthly infrastructure
* no external authentication service
* no paid analytics
* no AI API

The application should be deployable directly from a GitHub repository to GitHub Pages.

The only potentially external cost is the user's own custom domain registration.

---

# 6. Core Architecture

Structure the application into these logical layers:

```text
NEXUS
│
├── UI Layer
│
├── World Model
│
├── Local Data Layer
│
├── Simulation Engine
│
├── Event Engine
│
├── Timeline Engine
│
├── Visualization Layer
│
└── Import / Export Layer
```

There must be a strict separation between these layers.

---

# 7. World Model

The world model represents the user's ecosystem.

Use generic entities.

Do not hard-code:

```text
IndianITCompany
EstonianCompany
FamilyTrust
```

as special classes.

Instead create a generic entity system.

Example:

```javascript
Entity {
    id,
    name,
    type,
    description,
    country,
    jurisdiction,
    status,
    createdAt,
    metadata
}
```

Possible entity types:

* Person
* Company
* Trust
* Section8
* Business
* Asset
* Property
* Investment
* BankAccount
* IP
* Foundation
* Partnership
* Subsidiary
* Other

The administrator must be able to create custom entity types if useful.

---

# 8. Relationships

Relationships are first-class objects.

Example:

```javascript
Relationship {
    id,
    sourceEntityId,
    targetEntityId,
    type,
    percentage,
    startDate,
    endDate,
    description,
    metadata
}
```

Relationship types should include:

* OWNS
* CONTROLS
* INVESTS_IN
* PAYS
* RECEIVES_FROM
* PROVIDES_SERVICES_TO
* LICENSES_TO
* EMPLOYS
* BORROWS_FROM
* LENDS_TO
* MANAGES
* OPERATES
* OWNS_ASSET
* CUSTOM

Do not assume that a payment relationship means ownership.

Ownership, commercial relationships and financial flows must remain separate concepts.

---

# 9. Financial Flows

Create a generic recurring financial-flow system.

Example:

```javascript
FinancialFlow {
    id,
    sourceEntityId,
    destinationEntityId,
    amount,
    currency,
    frequency,
    startDate,
    endDate,
    description,
    category,
    status,
    metadata
}
```

Supported frequencies:

* One-time
* Daily
* Weekly
* Monthly
* Quarterly
* Yearly

Example:

```text
Estonian OÜ
      │
      │ €8,000 monthly
      ▼
Indian IT Services Company
```

The administrator creates this flow.

The simulation engine only executes it.

---

# 10. Revenue and Expenses

Allow administrators to define recurring or one-time:

### Revenue

```text
Entity
Revenue source
Amount
Currency
Frequency
Start date
End date
Description
```

### Expense

```text
Entity
Expense category
Amount
Currency
Frequency
Start date
End date
Description
```

Examples:

* SaaS revenue
* Consulting revenue
* Software licensing
* Payroll
* Cloud infrastructure
* Office
* Marketing
* Legal
* Accounting
* Insurance
* Maintenance
* Other operating expenses

Do not generate these automatically.

---

# 11. Assets

Allow administrators to create assets.

Example:

```javascript
Asset {
    id,
    ownerEntityId,
    name,
    type,
    purchaseValue,
    currentValue,
    currency,
    purchaseDate,
    income,
    recurringExpenses,
    status,
    description
}
```

Possible asset types:

* Property
* Vehicle
* Machinery
* Investment
* Bank balance
* IP
* Equipment
* Business interest
* Other

The simulator may calculate configured income/expenses associated with the asset.

It must never decide to purchase or sell an asset.

---

# 12. Employees

Allow manual employee records.

```javascript
Employee {
    id,
    entityId,
    name,
    role,
    department,
    salary,
    currency,
    joiningDate,
    leavingDate,
    status
}
```

Payroll can be automatically calculated from manually configured employee records.

The simulator must never hire or terminate employees autonomously.

---

# 13. Investments

Allow the administrator to create investment records.

Example:

```javascript
Investment {
    id,
    investorEntityId,
    targetEntityId,
    amount,
    currency,
    ownershipPercentage,
    investmentDate,
    status,
    description
}
```

The administrator creates the investment.

The simulation only records its financial consequences.

---

# 14. Contracts

Allow manual contracts between entities.

Example:

```javascript
Contract {
    id,
    partyA,
    partyB,
    type,
    description,
    startDate,
    endDate,
    recurringAmount,
    currency,
    frequency,
    status
}
```

Examples:

* Software Development Agreement
* Support Agreement
* Licensing Agreement
* Investment Agreement
* Lease
* Service Agreement
* Loan
* Custom

Contracts may generate configured financial flows, but only according to rules explicitly configured by the administrator.

---

# 15. Events

Create a manual event system.

Example:

```javascript
Event {
    id,
    date,
    entityId,
    type,
    amount,
    currency,
    description,
    metadata
}
```

Examples:

* Loss
* Capital injection
* Investment
* Asset purchase
* Asset sale
* One-time expense
* One-time revenue
* Loan
* Dividend/distribution
* Employee joining
* Employee leaving
* Company creation
* Company closure
* Other

If the administrator enters:

```text
Indian IT Company
Loss
₹4,00,000
August 2031
```

the simulation incorporates that loss.

It must not invent a response to the loss.

---

# 16. Deterministic Simulation Engine

The simulation engine must be deterministic.

Given the same:

```text
World configuration
+
Events
+
Simulation date
```

it must produce the same result.

Core functions:

```javascript
advanceDay()
advanceMonth()
advanceYear()

processRecurringFlows()
processRevenue()
processExpenses()
processPayroll()
processAssets()
processInvestments()
processEvents()

calculateEntityBalance()
calculateCashFlow()
calculateRevenue()
calculateExpenses()
calculateProfit()
calculateNetWorth()

generateSimulationState()
```

The simulation engine must NEVER make decisions.

---

# 17. Timeline

Create a persistent simulation timeline.

Example:

```text
2026 ── 2027 ── 2028 ── 2029 ── 2030 ── 2031
```

Controls:

```text
PAUSE
PLAY
+1 DAY
+1 MONTH
+1 YEAR
```

Also allow direct date selection.

The simulation state must be reproducible for a selected date based on the configured historical events and recurring flows.

---

# 18. Main Visualization

The main screen should be a clean interactive ecosystem map.

Do not make it look like a game.

Do not use:

* 3D environments
* virtual buildings
* avatars
* cartoon graphics
* excessive illustrations
* unnecessary gradients
* excessive animations

Use a minimal technical visual language.

Preferred design:

* white background OR near-black background
* thin borders
* clean typography
* subtle node colors
* restrained accent color
* simple lines
* small motion indicators
* plenty of whitespace

The data itself should create the visual hierarchy.

---

# 19. Main Dashboard

Design a professional dashboard with:

```text
NEXUS
Persistent Business & Trust Digital Twin

Current Simulation Date
Current World Status
Total Entities
Total Assets
Total Cash
Total Revenue
Total Expenses
Net Position
Active Financial Flows
```

Then the ecosystem graph.

---

# 20. Visualization Modes

Provide tabs/modes:

### WORLD

Complete ecosystem graph.

### OWNERSHIP

Show ownership and control relationships.

### FINANCIAL

Show money flows.

### ASSETS

Show assets and ownership.

### ENTITIES

Show all entities in a structured table.

### TIMELINE

Show historical evolution.

### EVENTS

Show manually recorded events.

---

# 21. Entity Detail Panel

Clicking an entity should open a side panel.

Example:

```text
ESTONIAN TECH OÜ

Type:
Company

Country:
Estonia

Status:
Active

Cash:
€XXX

Revenue:
€XXX/month

Expenses:
€XXX/month

Assets:
X

Employees:
X

Owners:
...

Relationships:
...

Financial Flows:
...

Contracts:
...

History:
...
```

Do not navigate away from the main world unnecessarily.

---

# 22. Admin Controls

Provide a clear administration toolbar.

Example:

```text
+ Entity
+ Relationship
+ Financial Flow
+ Asset
+ Employee
+ Investment
+ Contract
+ Event
```

Every item must be editable and deletable.

Provide confirmation for destructive operations.

---

# 23. Import / Export — CRITICAL

The application must be portable between devices.

Because IndexedDB is local to the browser/device, implement a complete JSON backup system.

### Export

Provide:

```text
EXPORT WORLD
```

This downloads a JSON file containing the complete NEXUS state.

Example:

```text
nexus-world-2031-09-28.json
```

The exported file must include:

```text
metadata
entities
relationships
financialFlows
revenues
expenses
assets
employees
investments
contracts
events
simulation configuration
timeline state
settings
schema version
```

Example structure:

```json
{
  "app": "NEXUS",
  "schemaVersion": 1,
  "exportedAt": "...",
  "simulationDate": "...",
  "entities": [],
  "relationships": [],
  "financialFlows": [],
  "revenues": [],
  "expenses": [],
  "assets": [],
  "employees": [],
  "investments": [],
  "contracts": [],
  "events": [],
  "settings": {}
}
```

### Import

Provide:

```text
IMPORT WORLD
```

The administrator selects a `.json` file.

Validate:

* file format
* schema version
* required fields
* IDs
* relationships
* data types

Then restore the complete world into IndexedDB.

The same exported JSON file must be usable on another computer/browser.

---

# 24. Import Modes

Provide:

### Replace World

Completely replace the current local world with the imported world.

### Merge World

Optional advanced functionality.

Attempt to merge imported entities and relationships with the current world.

Handle duplicate IDs safely.

If merge is too complex for the first version, implement Replace World first and keep the architecture ready for Merge later.

---

# 25. Automatic Local Persistence

Every admin change should automatically persist to IndexedDB.

Example:

```text
Admin creates entity
      ↓
Update application state
      ↓
Persist to IndexedDB
      ↓
Update visualization
```

If the browser is closed:

```text
Open again
    ↓
Load IndexedDB
    ↓
Restore world
```

No login required.

---

# 26. Seed Data

Include an initial sample world based on the conceptual architecture:

```text
Founder

Family Trust

Estonian Tech OÜ

Indian IT Services Company

Section 8 Company

Steel Business

Scrap Business

Example Property

Example Investment
```

Include sample relationships:

```text
Trust → owns → Indian IT Company

Trust → owns → Steel Business

Trust → owns → Scrap Business

Estonian OÜ → pays → Indian IT Company

Indian IT Company → provides services to → Estonian OÜ
```

Use clearly marked **illustrative/sample figures**.

Do not represent sample values as real financial or legal facts.

---

# 27. No Hardcoded Legal or Tax Decisions

Do not implement legal/tax conclusions as automatic system behavior.

Tax rates, GST treatment, withholding, transfer pricing, corporate tax and trust taxation should be represented as configurable data if included at all.

The simulator is a visualization/calculation tool, not a tax advisor or legal system.

---

# 28. Responsive Design

The interface must work on:

* desktop
* laptop
* tablet

The primary experience is desktop.

On smaller screens:

* collapse the graph controls
* use bottom sheets or side panels
* keep entity information readable
* avoid horizontal overflow

---

# 29. Performance

The application should remain lightweight.

Avoid unnecessary dependencies.

Prefer:

```text
Vanilla JavaScript
CSS/Tailwind
IndexedDB
Cytoscape.js
```

Do not introduce large frameworks unless there is a clear technical requirement.

The application should be capable of handling at least:

```text
500+ entities
1000+ relationships
5000+ events
```

without becoming unusably slow.

---

# 30. File Structure

Use a clean static structure such as:

```text
nexus/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── db.js
│   ├── entities.js
│   ├── relationships.js
│   ├── financial.js
│   ├── assets.js
│   ├── employees.js
│   ├── investments.js
│   ├── contracts.js
│   ├── events.js
│   ├── simulation.js
│   ├── timeline.js
│   ├── visualization.js
│   ├── import-export.js
│   └── ui.js
│
├── data/
│   └── seed.json
│
├── assets/
│
├── README.md
│
└── .github/
    └── workflows/
```

If Tailwind is compiled during development, the production output must remain completely static and GitHub Pages compatible.

Avoid requiring a runtime server.

---

# 31. GitHub Pages Compatibility

The final production build must be deployable using:

```text
GitHub Repository
        ↓
GitHub Pages
        ↓
Custom Domain
```

No server-side environment variables.

No API endpoint.

No database connection string.

No backend server.

No Docker requirement.

No server process.

If a build process is used, GitHub Actions may build the static files, but the resulting application must remain completely client-side.

---

# 32. Offline Capability

Where practical, make the application usable without continuous internet access after the static application has loaded.

The core simulation must not require an internet connection.

Do not depend on external APIs for core functionality.

---

# 33. Visual Language

The design should feel like:

* technical
* professional
* analytical
* premium
* minimal
* calm
* information-dense but not cluttered

Avoid:

* gaming UI
* neon cyberpunk
* excessive glassmorphism
* excessive shadows
* decorative illustrations
* unnecessary icons
* fake 3D buildings

The visualization itself should communicate the structure.

---

# 34. Example World

The initial world should visually communicate:

```text
                           FOUNDER
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
              ESTONIAN OÜ          FAMILY TRUST
                    │                   │
              €X/month                 │
                    │          ┌────────┼────────┐
                    ▼          ▼        ▼        ▼
             INDIAN IT       STEEL    SCRAP    ASSETS
              COMPANY       BUSINESS  BUSINESS
                    │
                    │
                    ▼
              SECTION 8
```

The actual graph should be interactive and dynamically generated from the database rather than hardcoded.

---

# 35. Settings

Create a Settings panel containing:

```text
World Name
Base Currency
Simulation Date
Simulation Speed
Theme
Grid Visibility
Graph Layout
Data Management
Export World
Import World
Reset Demo Data
Clear Local Data
```

For destructive operations, show confirmation.

---

# 36. Data Safety

Because there is no backend:

* clearly show that data is stored locally
* provide Export World prominently
* provide Import World prominently
* provide a backup reminder in the UI if appropriate

Never pretend that local IndexedDB data is cloud-synchronized.

The application should explicitly communicate:

> "Your NEXUS data is stored locally in this browser. Export a World JSON file to move or back up your data."

---

# 37. Core Product Rule

The most important implementation rule:

```text
NO AUTONOMOUS DECISION-MAKING
```

The simulation may:

* calculate
* aggregate
* process
* replay
* advance time
* update balances
* apply configured recurring flows
* display consequences
* reconstruct historical states

The simulation may NOT:

* decide
* recommend
* invent
* optimize
* hire
* invest
* purchase
* sell
* create entities
* create transactions
* create relationships
* change ownership

unless the administrator explicitly creates or changes those configurations.

---

# 38. Acceptance Criteria

The project is complete when:

1. It runs entirely in a browser.
2. It requires no backend.
3. It can be hosted on GitHub Pages.
4. It works with a custom domain.
5. It stores data persistently in IndexedDB.
6. Admin can create arbitrary entities.
7. Admin can create arbitrary relationships.
8. Admin can create recurring financial flows.
9. Admin can create assets.
10. Admin can create employees.
11. Admin can create investments.
12. Admin can create contracts.
13. Admin can manually record losses/events.
14. Simulation advances through time.
15. Simulation never makes decisions.
16. The world is visually represented as an interactive graph.
17. Financial flows can be visualized.
18. Ownership can be visualized.
19. Historical states can be inspected.
20. Data can be exported to JSON.
21. Exported JSON can be imported on another device.
22. Imported data reconstructs the same world.
23. No cloud database is required.
24. No server is required.
25. No authentication is required.
26. No AI API is required.
27. No monthly infrastructure cost is required.
28. The application remains lightweight and responsive.

---

# 39. Final Product Identity

Application name:

# NEXUS

Subtitle:

**Persistent Business & Trust Digital Twin**

Core statement:

> **Define your world. Simulate its evolution. Understand the ecosystem.**

Core architectural principle:

> **Administrator defines reality.
> NEXUS calculates reality.
> NEXUS visualizes reality.
> NEXUS never defines reality.**

Build the first version as a complete, functional MVP rather than a mockup. Prioritize the underlying world model, IndexedDB persistence, deterministic simulation, JSON portability, entity/relationship management, and interactive visualization before adding decorative UI features.
