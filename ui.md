# NEXUS — UI/UX Enhancement & Visual Redesign Prompt

You are working on the existing NEXUS project:

NEXUS
Persistent Business & Trust Digital Twin

The application is already functional.

DO NOT rebuild the application's core functionality.

DO NOT remove existing features.

DO NOT change the data model, simulation logic, IndexedDB logic, import/export logic, entity relationships, financial flows, timeline functionality, or other existing behavior unless a small UI-related change is absolutely required.

The task is specifically to perform a major PROFESSIONAL UI/UX and VISUAL DESIGN upgrade of the existing NEXUS dashboard.

--------------------------------------------------
1. CURRENT PROBLEM
--------------------------------------------------

The current interface is functional but visually basic.

The current screenshot shows:

- dark navy background
- basic rectangular cards
- basic circular graph nodes
- simple thin graph connections
- basic buttons
- large empty graph canvas
- relatively flat visual hierarchy
- basic side panel
- basic bottom action buttons

The result currently feels like a prototype/internal developer dashboard.

Transform it into a polished, premium, professional technical visualization product.

The final result should feel closer to:

- a professional systems architecture tool
- an enterprise digital-twin interface
- a financial/network visualization platform
- a high-end technical monitoring dashboard

It must NOT feel like:

- a video game
- a crypto dashboard
- a cyberpunk interface
- a generic SaaS template
- an overly decorative admin panel

--------------------------------------------------
2. CORE DESIGN DIRECTION
--------------------------------------------------

Change the primary theme to a LIGHT / WHITE interface.

The primary visual language should be:

- white
- very light gray
- subtle borders
- dark charcoal typography
- restrained accent colors
- subtle shadows
- clean geometry
- technical grid
- professional whitespace

The main ecosystem visualization canvas should be WHITE.

Do not use the current large dark navy canvas.

The application should feel spacious and premium.

--------------------------------------------------
3. GLOBAL COLOR SYSTEM
--------------------------------------------------

Use a restrained professional palette.

Base:

Background:
#F7F8FA

Surface:
#FFFFFF

Primary text:
#111827

Secondary text:
#64748B

Muted text:
#94A3B8

Border:
#E2E8F0

Strong border:
#CBD5E1

Canvas:
#FFFFFF

Grid:
very subtle light gray

Accent:
Use a restrained blue as the primary system accent.

Suggested:

Primary:
#2563EB

Primary hover:
#1D4ED8

Success:
#16A34A

Warning:
#D97706

Danger:
#DC2626

Do not use too many colors simultaneously.

The node colors must remain configurable by the administrator.

--------------------------------------------------
4. MAIN APPLICATION LAYOUT
--------------------------------------------------

Redesign the overall layout into:

--------------------------------------------------
TOP NAVIGATION
--------------------------------------------------

Left:

NEXUS logo/mark

NEXUS

Persistent Business & Trust Digital Twin

Center/right:

World selector

Simulation date

Simulation status

Local storage indicator

Settings

--------------------------------------------------
SECONDARY TOOLBAR
--------------------------------------------------

Create a clean toolbar below the main header.

Include:

WORLD
OWNERSHIP
FINANCIAL
ASSETS
ENTITIES
TIMELINE
EVENTS

Make these look like professional segmented navigation tabs rather than basic HTML buttons.

Active tab should have a subtle accent background/border.

--------------------------------------------------
MAIN WORKSPACE
--------------------------------------------------

Use a large white graph canvas.

The graph canvas should occupy most of the viewport.

Right side:

Entity Inspector / Details panel.

Bottom:

Contextual creation toolbar.

--------------------------------------------------
5. GRAPH CANVAS
--------------------------------------------------

This is the most important visual upgrade.

The graph canvas should look like a professional infinite technical workspace.

WHITE BACKGROUND.

Add a subtle GRID MESH.

The grid should consist of very faint horizontal and vertical lines.

Example concept:

+----+----+----+----+
|    |    |    |    |
+----+----+----+----+
|    |    |    |    |
+----+----+----+----+
|    |    |    |    |
+----+----+----+----+

The grid must be subtle.

Do NOT make the grid visually dominant.

Recommended:

small grid:
#F1F5F9

major grid:
#E2E8F0

The canvas should support:

- zoom
- pan
- node dragging
- node selection
- fit-to-view
- reset view

Existing functionality must continue working.

--------------------------------------------------
6. GRAPH BACKGROUND
--------------------------------------------------

Create a proper graph-workspace background.

Use CSS/SVG background patterns rather than a large raster image.

The background should remain crisp at every zoom level.

Prefer:

- CSS repeating-linear-gradient
OR
- SVG pattern

depending on the existing graph implementation.

The grid must remain visually stable during zoom/pan.

--------------------------------------------------
7. GRAPH CONTROLS
--------------------------------------------------

Redesign the existing:

+
-
fit/reset

controls.

They should become a compact floating control group.

Example:

┌─────┐
│  +  │
├─────┤
│  −  │
├─────┤
│ ⌗  │
└─────┘

White background.

Subtle border.

Small shadow.

Rounded corners.

Professional iconography.

Do not use oversized controls.

--------------------------------------------------
8. NODE REDESIGN
--------------------------------------------------

The current circular blue nodes are too basic.

Redesign nodes to look significantly more professional.

Use visually rich but restrained node cards.

Preferred node structure:

        ●
   ┌───────────────┐
   │ ESTONIAN OÜ   │
   │ Company       │
   │ Estonia       │
   └───────────────┘

OR a compact circular/core + information label approach.

The node itself should have:

- configurable accent color
- white/light surface
- subtle border
- subtle shadow
- small icon/type indicator
- entity name
- entity type
- optional country/jurisdiction
- optional key metric

Example:

┌─────────────────────────┐
│ ●  ESTONIAN TECH OÜ     │
│    Company · Estonia    │
│                         │
│    €124K cash           │
└─────────────────────────┘

Do not make nodes unnecessarily huge.

Keep the ecosystem readable when many nodes exist.

--------------------------------------------------
9. NODE COLOR CONFIGURATION
--------------------------------------------------

IMPORTANT NEW FUNCTIONALITY:

When creating or editing an entity, provide:

NODE COLOR

with a color picker.

The administrator must be able to choose the node's accent color.

Example:

Color:
[ ● ]

Allow:

- native color picker
- HEX input
- predefined professional color palette

Suggested palette:

Blue
Indigo
Purple
Green
Emerald
Amber
Orange
Red
Rose
Pink
Cyan
Teal
Slate

Do not force entity types to use fixed colors.

The administrator controls the color.

Store the selected color in the entity data.

Example:

entity.nodeColor = "#2563EB"

The color must survive:

- page reload
- IndexedDB persistence
- export JSON
- import JSON
- device migration

--------------------------------------------------
10. NODE VISUAL STATES
--------------------------------------------------

Nodes should visually respond to interaction.

Normal:

clean white/light node.

Hover:

slightly elevated.

Selected:

accent-colored border/ring.

Connected:

subtle emphasis on related nodes.

Unrelated nodes when one node is selected:

slightly fade/dim them.

Do not use excessive animation.

Use transitions around 150–250ms.

--------------------------------------------------
11. NODE ICONS
--------------------------------------------------

Each entity type may have a small professional icon.

Examples:

Person → user icon

Company → building/company icon

Trust → shield/structure icon

Asset → box/asset icon

Property → building icon

Investment → chart icon

Bank account → wallet icon

IP → code/lightbulb icon

Section 8 → research/document icon

Do not use large colorful illustrations.

Use small monochrome or accent-colored icons.

If an icon library already exists in the project, reuse it.

Otherwise use a lightweight icon library or inline SVG.

--------------------------------------------------
12. RELATIONSHIP LINES
--------------------------------------------------

Improve graph edges substantially.

Different relationships should have visually distinct styles.

Examples:

OWNERSHIP
──────────────►

CONTROL
- - - - - - - ►

FINANCIAL FLOW
══════════════►

INVESTMENT
───────────●──►

LICENSE
- - - - - - - ►

SERVICE
──────────────►

Do not overload the graph.

The relationship label should be subtle and readable.

Use a small white/transparent label background when necessary.

--------------------------------------------------
13. FINANCIAL FLOW ANIMATION
--------------------------------------------------

For active financial flows, use subtle directional animation.

Example:

ESTONIAN OÜ ────────●────────► INDIAN IT

The small moving dot represents the configured flow.

Keep animation extremely subtle.

Do not turn the application into a flashy animated visualization.

Allow the animation to be disabled in settings if practical.

--------------------------------------------------
14. ENTITY INSPECTOR
--------------------------------------------------

Redesign the right-side inspector.

Current panel is too plain.

Create a professional detail panel.

Example:

┌──────────────────────────────────┐
│ ENTITY                           │
│                                  │
│ ● ESTONIAN TECH OÜ               │
│   Company · Estonia              │
│                                  │
│ ──────────────────────────────── │
│                                  │
│ Cash                    €124,000 │
│ Revenue                  €28,000 │
│ Expenses                 €12,000 │
│ Net Position            €112,000 │
│                                  │
│ ──────────────────────────────── │
│                                  │
│ OWNERSHIP                        │
│ Founder                  93%     │
│ YC                       7%      │
│                                  │
│ RELATIONSHIPS                    │
│ → Indian IT Services             │
│ → Clients                        │
│                                  │
│ [ Edit Entity ]                  │
└──────────────────────────────────┘

Use sections/tabs where appropriate.

Do not make the inspector excessively wide.

--------------------------------------------------
15. TOP METRIC CARDS
--------------------------------------------------

The existing metric cards are too dark and basic.

Replace them with clean white cards.

Example:

┌──────────────────────┐
│ TOTAL CASH            │
│                       │
│ €790,000              │
│ +12.4%                │
└──────────────────────┘

Use:

- white background
- thin border
- subtle shadow
- small label
- large value
- optional small trend/context indicator

Do not use fake trends.

Only display trend information when the underlying simulation data actually exists.

Metrics should include:

Entities

Assets

Total Cash

Revenue

Expenses

Net Position

Active Flows

Events

--------------------------------------------------
16. SIMULATION CONTROLS
--------------------------------------------------

Redesign:

Play
+1 Day
+1 Month
+1 Year
Date picker

into a professional simulation toolbar.

Example:

[ ▶ Run ] [ + Day ] [ + Month ] [ + Year ] [ 01 Jan 2026 ]

Use icons where useful.

Keep controls compact.

The date should remain highly visible.

--------------------------------------------------
17. ADMIN CREATION TOOLBAR
--------------------------------------------------

The bottom toolbar currently contains:

+ Entity
+ Relationship
+ Financial Flow
+ Asset
+ Employee
+ Investment
+ Contract
+ Event

Keep all functionality.

But redesign it as a floating command bar.

Example:

┌───────────────────────────────────────────────────────┐
│ + Entity  + Relationship  + Flow  + Asset  + Event  │
└───────────────────────────────────────────────────────┘

Use a white surface.

Subtle shadow.

Border.

Rounded corners.

Do not make each button visually heavy.

--------------------------------------------------
18. ENTITY CREATION FORM
--------------------------------------------------

Enhance the existing entity creation form.

Fields:

Entity Name

Entity Type

Country

Jurisdiction

Status

Description

Node Color

Optional metadata

The Node Color field must be visually prominent.

Provide:

Color picker
HEX input
Preset colors

Preview the node color immediately while creating.

Example:

Node Color
[██████] #2563EB

Preview:

● Indian IT Services
  Company · India

--------------------------------------------------
19. ENTITY EDITING
--------------------------------------------------

When editing an existing entity, allow:

- name
- type
- country
- jurisdiction
- status
- description
- node color
- metadata

Changing node color should immediately update the graph.

Persist the change to IndexedDB.

--------------------------------------------------
20. EMPTY STATES
--------------------------------------------------

Create professional empty states.

Example:

No entity selected

"Select an entity from the ecosystem map to inspect its calculated state."

No events:

"No recorded events for this period."

No relationships:

"This entity has no configured relationships."

Avoid generic emoji-based empty states.

--------------------------------------------------
21. TYPOGRAPHY
--------------------------------------------------

Use a professional modern sans-serif.

Preferred:

Inter

or another clean system-compatible sans-serif.

Hierarchy:

Application title:
16–20px

Section labels:
10–11px uppercase / letter spacing

Entity names:
13–15px

Major metrics:
20–28px

Normal text:
12–14px

Avoid oversized typography.

--------------------------------------------------
22. ICONOGRAPHY
--------------------------------------------------

Use one consistent icon system.

Do not mix random icon styles.

Icons should be:

- thin/medium stroke
- monochrome
- professional
- small

--------------------------------------------------
23. RESPONSIVENESS
--------------------------------------------------

Maintain desktop-first behavior.

On smaller screens:

- inspector becomes a drawer
- bottom toolbar becomes horizontally scrollable
- metrics become responsive grid
- graph remains usable
- controls remain accessible

Do not break the graph canvas.

--------------------------------------------------
24. DARK MODE
--------------------------------------------------

Do NOT remove the possibility of dark mode if the existing application already supports it.

However:

LIGHT MODE should become the default.

The light theme must be the primary design shown in the application.

If dark mode exists, redesign it consistently rather than simply inverting colors.

--------------------------------------------------
25. VISUAL QUALITY BAR
--------------------------------------------------

The result should look like a finished product.

It should NOT look like:

- a Tailwind tutorial
- a Bootstrap dashboard
- a developer prototype
- a basic admin CRUD interface

It should look like:

"professional enterprise systems visualization software."

The interface should be restrained and intelligent.

--------------------------------------------------
26. DO NOT CHANGE THESE
--------------------------------------------------

Preserve all existing:

- IndexedDB persistence
- JSON import
- JSON export
- entity creation
- entity editing
- entity deletion
- relationships
- financial flows
- assets
- employees
- investments
- contracts
- events
- simulation engine
- timeline
- world views
- ownership view
- financial view
- asset view
- entity view
- event view

Only improve their UI where required.

--------------------------------------------------
27. DO NOT INTRODUCE
--------------------------------------------------

Do NOT introduce:

- backend
- API
- database server
- authentication
- AI agents
- autonomous decisions
- cloud services
- paid services
- unnecessary frameworks

The application must remain:

HTML
Tailwind CSS
JavaScript
IndexedDB
Client-side graph visualization
GitHub Pages compatible

--------------------------------------------------
28. IMPORTANT IMPLEMENTATION INSTRUCTION
--------------------------------------------------

Before changing code:

1. Inspect the existing project structure.
2. Identify the existing graph implementation.
3. Identify the existing entity creation/editing logic.
4. Identify IndexedDB/storage implementation.
5. Identify current CSS/Tailwind implementation.
6. Identify current simulation state management.
7. Preserve all existing functionality.
8. Modify the UI layer and visualization layer in place.

Do NOT create a second parallel application.

Do NOT replace working functionality simply to achieve the new visual design.

--------------------------------------------------
29. FINAL VISUAL TARGET
--------------------------------------------------

The final interface should resemble a professional technical ecosystem workspace:

White application shell.

White infinite graph canvas.

Very subtle grid mesh.

Clean nodes with configurable accent colors.

Thin professional relationship lines.

Subtle animated financial flows.

Floating graph controls.

Premium entity inspector.

Clean metric cards.

Minimal top navigation.

Minimal floating command bar.

Strong whitespace.

No unnecessary decoration.

The graph and relationships should be the visual centerpiece.

The application should feel calm, precise, technical, and premium.

--------------------------------------------------
30. FINAL PRINCIPLE
--------------------------------------------------

NEXUS is not supposed to look like a game.

It should look like a:

"living technical map of an organization's structure and financial ecosystem."

The visual design should communicate:

STRUCTURE
RELATIONSHIPS
OWNERSHIP
MONEY
ASSETS
TIME

without visual clutter.

Make the redesign polished enough that the current screenshot looks like an early prototype compared with the finished version.