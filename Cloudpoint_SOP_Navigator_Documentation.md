# Cloudpoint SOP Navigator
## Product Documentation

**Document Type:** Internal Product Documentation  
**Version:** 1.0  
**Prepared By:** Cloudpoint Technical Team  
**Date:** June 2026  
**Status:** Draft — For Internal Review and Approval

---

## 1. Executive Summary

Cloudpoint SOP Navigator is an internal web application that gives Cloudpoint employees a fast, structured way to find and follow standard operating procedures. Instead of searching through shared drives, asking a colleague, or referencing inconsistent documents, staff can open the Navigator, type a task or keyword, and get the right SOP in seconds.

The application maintains a structured SOP knowledge base covering GIS project workflows, QA/QC reviews, ArcGIS Online publishing, field data collection, utility data management, reporting, and client delivery. Each SOP is presented in a consistent, professional format that includes step-by-step instructions, quality checks, required tools, common issues, and a PDF-ready summary.

The current version is a working prototype. It runs as a local web application and includes eight starter SOPs. It is designed with a clear path toward cloud-based document storage, approval workflows, and future AI-assisted capabilities.

---

## 2. Problem Statement

Geospatial consulting work depends on repeatable, consistent procedures. Without them, quality suffers, projects slow down, and new staff take longer to become productive. The current challenge at most GIS consulting firms — including Cloudpoint — looks like this:

- SOPs and procedures are stored across shared drives, email threads, team wikis, and individual files with no central access point.
- Employees spend time asking experienced staff for steps they should be able to find themselves.
- SOP formats vary by author — some are detailed, some are not, and few follow a consistent structure.
- New GIS analysts and technicians need significant time to learn workflows that should be documented and accessible.
- QA/QC processes, field data review steps, and client delivery checklists require consistency across every project and every team member.
- When a procedure is not followed consistently, errors reach the client.

The core problem is not that procedures do not exist. It is that they are not organized, searchable, or structured in a way that makes them genuinely useful in the moment a team member needs them.

---

## 3. Proposed Solution

Cloudpoint SOP Navigator addresses this problem by creating a single, searchable, structured internal SOP library accessible from any browser.

The solution provides:

- **A central SOP library** — all procedures in one place, structured consistently, searchable by any relevant term.
- **A search-first interface** — users type what they are looking for. The system finds matching SOPs across titles, IDs, tags, software, steps, quality checks, and purpose fields.
- **Category filtering** — users can browse by workflow type: GIS, QA/QC, ArcGIS Online, Field Data, Reporting, Utility Data, and Client Delivery.
- **Consistent SOP format** — every SOP follows the same structure, making it easy to read, follow, and audit.
- **PDF-ready output** — any SOP can be printed or saved as a PDF directly from the browser, formatted cleanly as a professional internal document.
- **Future cloud integration** — the architecture is designed so that SOPs can later be pulled dynamically from Google Drive, SharePoint, Google Cloud Storage, or an internal API rather than stored in the application code.

---

## 4. Product Objectives

| # | Objective |
|---|-----------|
| 1 | Make SOPs faster to find — reduce the time a team member spends locating a procedure to under 30 seconds. |
| 2 | Standardize SOP format — every procedure follows the same structure so staff know exactly where to look for each type of information. |
| 3 | Support GIS and technical teams with the specific workflows they perform daily. |
| 4 | Reduce repeated procedural questions — staff should be able to self-serve for standard workflows. |
| 5 | Improve onboarding — new analysts and technicians can use the Navigator to understand workflows without requiring senior staff time. |
| 6 | Improve QA/QC consistency — QA reviewers can quickly access the correct review checklist for each dataset type. |
| 7 | Build a foundation for scalable internal knowledge management that can grow with the company. |

---

## 5. Target Users

| User Role | How They Use the Navigator |
|-----------|---------------------------|
| **GIS Analyst** | Looks up project setup procedures, QA/QC review steps, and data processing workflows. |
| **GIS Technician** | Follows step-by-step instructions for data editing, attribute review, and format exports. |
| **Field Data Team** | Reviews field data collection and import workflows before and after field events. |
| **QA/QC Reviewer** | Accesses standardized QA checklists and issue log procedures for each dataset type. |
| **Project Lead** | Confirms the correct procedure is being followed before approving deliverables. References the delivery checklist before client handoff. |
| **Web GIS Specialist** | Looks up ArcGIS Online publishing steps, sharing configurations, and hosted feature layer workflows. |
| **Technical Manager** | Reviews available SOPs, identifies gaps, and tracks the completeness of the internal knowledge base. |

---

## 6. Core Workflow

### User Journey

```
1. User opens Cloudpoint SOP Navigator in a browser
           ↓
2. User types a keyword, task, tool name, or workflow
   (e.g., "arcgis pro setup", "field import", "qa check", "delivery checklist")
           ↓
3. Search and category filter engine processes the input
           ↓
4. Matching SOP cards are displayed
   (showing title, ID, category, software, purpose preview, and status)
           ↓
5. User selects the relevant SOP card
           ↓
6. Full SOP detail view opens
   (purpose, steps, quality checks, tools, common issues, notes, PDF summary)
           ↓
7. User follows the procedure, or clicks Print / Save as PDF
           ↓
8. (Future) SOP content pulled live from Google Drive / SharePoint / Cloud Storage
```

### Workflow Diagram

```
User Search Input
       ↓
SOP Knowledge Base
       ↓
Search + Category Filter Engine
       ↓
Matching SOP Cards
       ↓
Full SOP Detail View
       ↓
┌──────────────────────────────┐
│  Follow Procedure Onscreen   │
│  OR                          │
│  Print / Save as PDF         │
│  OR (Future)                 │
│  Export to Word / Share Link │
└──────────────────────────────┘
```

---

## 7. Current Version Scope

### Version 1.0 — Prototype

Version 1.0 is a functional prototype that demonstrates the core value of the product. It includes all primary user-facing features and a starter set of eight GIS-specific SOPs.

**Included in V1.0:**

| Feature | Description |
|---------|-------------|
| Search bar | Full-text search across all SOP fields |
| Category filters | Filter by GIS, QA/QC, ArcGIS Online, Field Data, Reporting, Utility Data, Client Delivery |
| SOP result cards | Cards showing title, ID, category, software, purpose, and status |
| SOP detail view | Full structured document view with all procedure sections |
| Print / Save as PDF | Browser-based print with print-optimized CSS for clean document output |
| Local SOP data | 8 starter SOPs stored in a structured TypeScript data file |
| Draft review status | All SOPs marked as Draft requiring internal review |
| Stats summary | Total SOPs, categories, and last updated date |
| Responsive layout | Works on desktop and large tablet viewports |

> **Important:** This is a prototype. All SOP content must be reviewed and approved internally before being used as official operating procedures. The SOPs included in V1.0 are designed to demonstrate the product format and are not certified for production use without internal review.

---

## 8. Modules Included

### 8.1 SOP Knowledge Base Module

The knowledge base stores all SOP data in a structured TypeScript file (`src/data/sops.ts`). Each SOP is a typed object that includes 22 fields covering metadata, procedure steps, quality checks, and related SOPs.

The data structure is designed to be replaced in a future version with a live fetch from a document repository, API, or cloud storage service. The TypeScript interface (`src/types/sop.ts`) defines the exact shape that any future data source must conform to.

### 8.2 Search Module

The search engine scans the following fields for every query:

- SOP title
- SOP ID
- Category
- Department
- Workflow type
- Software and tools list
- Tags
- Purpose text
- When to use text
- Required tools
- Inputs needed
- Step-by-step procedure text
- Quality checks
- Common issues and fixes
- Expected output
- Notes and best practices
- PDF summary

Search is case-insensitive and returns results in real time as the user types. No backend or database query is required — the search runs client-side against the structured SOP data.

### 8.3 Category Filter Module

Users can narrow results by selecting one of seven categories:

- **All** — shows all SOPs
- **GIS** — project setup and core GIS workflows
- **QA/QC** — data quality review and issue log procedures
- **ArcGIS Online** — hosted layer publishing and AGOL workflows
- **Field Data** — field collection review and import workflows
- **Reporting** — map exports and project summary reports
- **Utility Data** — utility asset attribute review workflows
- **Client Delivery** — delivery package preparation checklists

Category filters and search work together — a user can filter by QA/QC and search "attributes" to narrow precisely.

### 8.4 SOP Card Module

Each SOP is represented as a card in the results list showing:

- SOP ID (e.g., SOP-GIS-001) in monospace format
- Category badge
- SOP title
- Purpose preview (truncated to two lines)
- Workflow type, department, and last updated date
- Software/tools as tags
- Review status indicator

The selected card is highlighted with a blue border and background to indicate the active SOP.

### 8.5 SOP Detail Module

The detail view opens the full structured SOP document, including:

- All metadata (ID, version, department, owner, users, status, tags)
- Purpose and when to use
- Required tools and inputs
- Step-by-step procedure with numbered steps
- Quality checks with check icons
- Expected output in a highlighted block
- Common issues and fixes in a two-part card format (issue / resolution)
- Notes and best practices
- PDF-ready summary
- Related SOP IDs

The detail view is designed to be readable on screen and clean when printed.

### 8.6 PDF / Print Module

Every SOP detail view includes a "Print / Save as PDF" button. When clicked, the browser's native print dialog opens. Custom CSS ensures:

- Only the SOP document is printed — the sidebar, search bar, and navigation are hidden.
- The document includes a print header (SOP ID, title, version, date) and a print footer (review status notice).
- Typography, spacing, and layout are optimized for A4 paper.
- Page breaks are managed to avoid splitting steps or sections mid-page.

Users can save directly to PDF from the print dialog using the browser's "Save as PDF" option, available in Chrome, Edge, Firefox, and Safari.

### 8.7 Future Cloud Integration Module

The application is built with a clear integration point for external document sources. In `src/data/sops.ts`, the local SOP array can be replaced with a call to any external service:

```
Current (V1):  Local TypeScript SOP array
Future (V2+):  API fetch from Google Drive, SharePoint, Google Cloud Storage,
               or internal document repository
```

The SOP TypeScript interface defines the expected data shape. Any external source that returns data matching this interface will work with the existing UI without modification.

---

## 9. SOP Data Structure

Each SOP in the knowledge base contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique identifier (e.g., SOP-GIS-001) |
| `title` | String | Full SOP title |
| `version` | String | Version number (e.g., 1.0) |
| `department` | String | Owning department (e.g., GIS Services) |
| `workflowType` | String | Workflow classification (e.g., Project Setup, QA/QC) |
| `category` | String | Category used for filtering |
| `software` | String[ ] | List of software and tools required |
| `intendedUsers` | String[ ] | Target roles for this SOP |
| `owner` | String | SOP owner or responsible team |
| `lastUpdated` | String | ISO date of last update |
| `reviewStatus` | String | Approval status (e.g., Draft, Approved) |
| `tags` | String[ ] | Searchable keywords |
| `purpose` | String | Why this SOP exists |
| `whenToUse` | String | When to apply this procedure |
| `requiredTools` | String[ ] | Access and tools needed before starting |
| `inputsNeeded` | String[ ] | Data inputs required to follow the SOP |
| `steps` | String[ ] | Ordered procedure steps |
| `qualityChecks` | String[ ] | Checks to verify successful completion |
| `expectedOutput` | String | What a correct result looks like |
| `commonIssues` | Object[ ] | Known problems and their resolutions |
| `notes` | String[ ] | Best practices and important guidance |
| `pdfSummary` | String | Short summary suitable for printed document headers |
| `relatedSops` | String[ ] | IDs of related procedures |

This structure ensures that every SOP is consistent, searchable, and complete regardless of who authored it. It also provides a clear schema for any future cloud-based document storage system to conform to.

---

## 10. Technology Used

| Technology | Purpose | Why Used |
|------------|---------|----------|
| **React 18** | UI component framework | Industry standard for interactive web UIs; enables fast, component-based development |
| **TypeScript** | Type-safe JavaScript | Ensures SOP data structure is enforced at compile time; prevents data shape errors |
| **Vite** | Build tool and dev server | Fast development startup and optimized production builds |
| **Tailwind CSS** | Utility-first styling framework | Enables rapid, consistent UI design without writing custom CSS files |
| **Local TypeScript SOP data** | SOP knowledge base | Zero-dependency data store for the prototype; easily replaced by an API in future versions |
| **Browser Print API** | PDF export | Uses the browser's native print-to-PDF capability; no external PDF library required |
| **Future: Service Layer** | Cloud document integration | Placeholder architecture for Google Drive, SharePoint, Google Cloud Storage, or internal API connections |

The technology choices prioritize simplicity, reliability, and maintainability. No backend server, database, or authentication system is required for the current prototype, which means it can be deployed anywhere a static web server is available.

---

## 11. System Architecture

### Current Architecture (V1.0)

```
Browser (React + TypeScript)
       ↓
App State (search query, selected category, selected SOP)
       ↓
Search + Filter Engine (client-side)
       ↓
Local SOP Data (src/data/sops.ts)
       ↓
SOP Detail View + Print/PDF Output
```

### Future Architecture (V2+)

```
Browser (React + TypeScript)
       ↓
SOP Service Layer (src/services/sopService.ts)
       ↓
┌─────────────────────────────────────────────────────┐
│  Google Drive API   │  SharePoint API  │  Internal  │
│  (Drive folder)     │  (Document lib)  │  REST API  │
│                     │                  │  / GCS     │
└─────────────────────────────────────────────────────┘
       ↓
Approved SOP Documents (fetched at runtime)
       ↓
Search + Filter Engine
       ↓
SOP Result Cards + Full Detail View + PDF Export
```

In the future architecture, the SOP data does not live in the application code. SOPs are stored in a managed document repository and fetched by the service layer. This means SOPs can be updated, approved, and managed by content owners without requiring a code deployment.

---

## 12. Current Starter SOP Library

| SOP ID | Title | Category | Purpose |
|--------|-------|----------|---------|
| SOP-GIS-001 | ArcGIS Pro Project Setup for Client GIS Work | GIS | Standardize how a new ArcGIS Pro project workspace is created for client GIS work |
| SOP-QA-001 | GIS Data QA/QC Review Before Client Delivery | QA/QC | Standardize checks for geometry, attributes, duplicates, projections, nulls, domains, and delivery readiness |
| SOP-AGOL-001 | Publishing Hosted Feature Layers to ArcGIS Online | ArcGIS Online | Standardize publishing reviewed GIS layers from ArcGIS Pro to ArcGIS Online |
| SOP-FIELD-001 | Field Data Collection Review and Import Workflow | Field Data | Standardize review of field-collected GIS data before production import or client sharing |
| SOP-REP-001 | Generating a PDF Map and Project Summary Report | Reporting | Standardize PDF map exports and project summary report creation |
| SOP-UTIL-001 | Utility Asset Data Attribute Completeness Review | Utility Data | Standardize review of utility asset fields including asset ID, material, diameter, install year, status, condition, pressure zone, and inspection date |
| SOP-DEL-001 | Client Delivery Package Preparation Checklist | Client Delivery | Standardize final preparation of GIS deliverables before client handoff |
| SOP-QA-002 | GIS Issue Log Creation and Review Workflow | QA/QC | Standardize how QA/QC issues are documented, categorized, assigned, corrected, and re-reviewed |

---

## 13. Example Use Cases

**Example 1 — ArcGIS Pro Project Setup**
A GIS analyst is starting a new utility mapping project. They search "ArcGIS Pro setup" in the Navigator. SOP-GIS-001 appears as the top result. The analyst opens it, follows the folder structure steps, creates the geodatabase, sets the coordinate reference system, and confirms the project log is complete — all within 10 minutes of project initiation.

**Example 2 — QA/QC Before Delivery**
A QA reviewer is about to review a processed water network dataset before it is included in a client delivery. They search "missing attributes" and get SOP-QA-001. They follow the geometry check, attribute completeness, duplicate detection, and domain review steps, then use the included issue log procedure to document all findings.

**Example 3 — Publishing to ArcGIS Online**
A web GIS specialist needs to publish a reviewed feature layer to the company's ArcGIS Online organization. They search "publish hosted feature layer" and find SOP-AGOL-001. They follow the naming convention, sharing configuration, and post-publish verification steps, then document the AGOL item ID as required.

**Example 4 — Field Data Review and Import**
A GIS analyst has received a sync notification from a Field Maps collection event. They search "field import" and open SOP-FIELD-001. The SOP walks them through feature count verification, GPS accuracy review, attachment confirmation, geometry checking, and the Append workflow to import into the production geodatabase.

**Example 5 — Client Delivery Preparation**
A project lead is preparing the final delivery package for a client. They search "client delivery" and open SOP-DEL-001. The checklist steps cover folder structure, format exports, PDF verification, metadata, ReadMe, delivery manifest, ZIP archive, and transfer confirmation — ensuring nothing is missed before handoff.

**Example 6 — QA Issue Log**
A technician is midway through a QA review and needs to know the correct way to log and track issues. They search "issue log" and find SOP-QA-002. The SOP explains how to create the log, assign issue IDs, categorize severity, track resolution, and obtain QA approval — ensuring a consistent audit trail across the project.

---

## 14. Benefits

### 14.1 Business Benefits

| Benefit | Impact |
|---------|--------|
| Faster SOP retrieval | Staff find the right procedure in seconds rather than minutes |
| Reduced dependency on senior staff | Analysts and technicians can self-serve for standard workflows |
| Better onboarding | New team members can learn workflows from structured, accessible SOPs |
| More consistent project delivery | Repeatable procedures reduce variation in output quality across projects and staff |
| Improved client delivery quality | Delivery checklists and QA procedures are consistently available and consistently followed |
| Internal knowledge management | Company knowledge is captured in one system rather than scattered across drives and individuals |

### 14.2 Technical Benefits

| Benefit | Impact |
|---------|--------|
| Structured SOP data | Each SOP has a consistent, typed data structure — easy to query, display, and export |
| Searchable metadata | Every field is searchable, including tags, steps, tools, and quality checks |
| Reusable UI components | Components can be extended or restyled without restructuring the application |
| Cloud-ready architecture | The service layer is designed to accept external data sources with minimal code change |
| No external dependencies at runtime | The prototype runs with no backend server, database, or API key required |
| PDF-ready output | Every SOP is printable and PDF-exportable without additional tooling |

---

## 15. Limitations of Current Version

The following limitations apply to Version 1.0 and are expected to be addressed in subsequent phases:

| Limitation | Detail |
|------------|--------|
| **Local SOP storage** | SOPs are stored in the application code. There is no live connection to a document repository. |
| **No authentication** | The prototype has no user login or access control. Anyone with the URL can view all SOPs. |
| **No Google Drive / SharePoint integration** | Cloud document fetching is architecturally planned but not implemented in V1. |
| **No SOP approval workflow** | SOPs cannot be submitted for review or formally approved within the application. |
| **No version history** | Changes to SOP content are not tracked within the system. |
| **No SOP editing UI** | SOPs are edited by modifying the data file directly — there is no admin interface. |
| **Draft content** | All starter SOPs are marked as Draft and require internal review before production use. |

These limitations are intentional at this stage. The prototype is designed to validate the concept and interface before committing to backend infrastructure.

---

## 16. Future Roadmap

### Phase 1 — Prototype *(Current)*

- Local structured SOP data
- Full-text search and category filtering
- SOP detail view with all structured sections
- Print / Save as PDF
- Eight starter SOPs
- Clean internal UI

### Phase 2 — Internal Review and Expansion

- Internal review and validation of SOP content with team leads
- Additional SOPs covering remaining workflow categories
- UI feedback and refinement based on team usage
- Defined SOP authoring template and style guide
- Confirm target document storage platform (Google Drive, SharePoint, or other)

### Phase 3 — Cloud Document Integration

- Connect the service layer to the approved document repository
- SOPs fetched dynamically at runtime from cloud storage or an internal API
- SOP upload workflow for content contributors
- Support for document attachments (diagrams, screenshots, reference files)

### Phase 4 — Governance and Access Control

- Version history for all SOPs
- Approval status tracking (Draft → In Review → Approved → Archived)
- SOP ownership assignments
- Review date tracking and expiry reminders
- Role-based access — view-only vs. editor vs. admin

### Phase 5 — AI Assistance

- AI-assisted SOP draft generation from bullet points or workflow descriptions
- SOP summarization for quick reference
- Natural language Q&A: "What do I check before client delivery?"
- SOP recommendations based on current task or project type
- Gap analysis — automatically identify missing SOP coverage for workflow areas

---

## 17. Approval Request

We are requesting approval to continue developing Cloudpoint SOP Navigator from the current prototype into a more complete internal SOP assistant.

The immediate next steps would be:

1. **Validate the SOP format** with team leads and QA/QC staff to confirm the 22-field structure is correct and complete for Cloudpoint's workflows.
2. **Review and formally approve the eight starter SOPs** or replace them with reviewed, authoritative versions.
3. **Confirm the target document storage platform** — whether future SOPs should be stored and managed in Google Drive, SharePoint, Google Cloud Storage, or another internal system.
4. **Define the ownership model** — who owns each SOP category, who approves changes, and what the review cycle should be.

The prototype is ready to demonstrate and can be deployed as a static web application immediately for internal review purposes.

---

## 18. Demo Script

*Estimated time: 3 minutes*

---

**Opening (20 seconds)**

"This is Cloudpoint SOP Navigator — an internal tool we've built to make standard operating procedures faster to find and easier to follow. The problem it solves is simple: our SOPs exist, but they're scattered, inconsistently formatted, and hard to locate when you need them. This tool puts them in one searchable place."

---

**The Search (30 seconds)**

"When I open the app, I'm immediately at the search bar. No menus, no folders to browse — just search. Let me type 'field import.'"

*[Type "field import" in the search bar]*

"The system searches across titles, tags, software, steps, and all procedure content — not just the name. You can see the matching SOP card has appeared almost instantly."

---

**The SOP Card (20 seconds)**

"The card shows me everything I need to decide if this is the right SOP — the ID, the category, what software it involves, a preview of the purpose, and the review status. I can see right away this covers the field data collection review workflow."

---

**The Detail View (60 seconds)**

"I'll click the card to open it."

*[Click the SOP card]*

"This is the full SOP. Every procedure follows the same structure — purpose, when to use it, required tools, inputs, then the numbered steps. I'll scroll down to show you the quality checks — these are the specific checks the reviewer needs to pass before the data is accepted. Below that are common issues and fixes — practical troubleshooting built directly into the procedure."

---

**Print / Save as PDF (20 seconds)**

"If I need a physical copy or want to attach this to a project file, I click Print / Save as PDF. The print CSS hides the search panel and sidebar — only the document prints. I can save directly to PDF from any browser."

---

**Future Integration (30 seconds)**

"Right now the SOPs are stored locally in the application. The system is built so that in a future version, this data can be pulled directly from Google Drive, SharePoint, or Google Cloud Storage. The interface doesn't change — only where the data comes from. SOPs could be updated in Drive and the Navigator would reflect the change immediately."

---

**Closing (20 seconds)**

"We're asking for approval to move this from prototype to a validated internal tool — starting with a review of the SOP content, adding more procedures, and deciding on the right document storage platform. Happy to answer questions."

---

## 19. Questions for Team Review and Approval

The following questions should be answered before proceeding to Phase 2:

| # | Question |
|---|----------|
| 1 | Should SOPs be stored and managed in **Google Drive**, **SharePoint**, **Google Cloud Storage**, or another internal system? |
| 2 | Who should own SOP approval — technical leads, department heads, or a dedicated knowledge manager? |
| 3 | Which SOP categories are most urgent to fill out completely (GIS, QA/QC, Field Data, Utility, Reporting, Delivery)? |
| 4 | Should Version 2 include a **UI for uploading or editing SOPs**, or should content management remain outside the app for now? |
| 5 | Should SOPs be **role-based** — with different staff seeing different procedure categories? |
| 6 | What final SOP format should be used as the Cloudpoint standard — should the 22-field structure be confirmed, reduced, or extended? |
| 7 | Is **PDF export sufficient** for deliverable needs, or should Word (.docx) export also be supported? |
| 8 | What is the intended **review cycle** for SOPs — quarterly, annual, or event-triggered? |
| 9 | Should the Navigator be hosted on an internal server, deployed to a cloud platform, or embedded in an existing internal portal? |
| 10 | Who are the **named SOP owners** for each category? |

---

## 20. Final Summary

Cloudpoint SOP Navigator is a practical internal productivity tool built specifically for the workflows of a geospatial consulting company. It addresses a real operational problem — procedures that exist but are hard to find, inconsistently formatted, and inaccessible at the moment they are needed.

The prototype demonstrates that the concept works. Eight detailed SOPs covering the most common GIS workflows are already searchable, structured, and printable. The technology is modern, lightweight, and maintainable. The architecture is explicitly designed to grow — from a local prototype into a cloud-connected, role-aware, AI-assisted knowledge system.

The path forward is clear:

1. Validate and approve the SOP format and content.
2. Expand the SOP library to cover remaining workflow areas.
3. Connect to the approved document storage platform.
4. Add governance, version control, and access management.
5. Introduce AI-assisted capabilities to reduce SOP authoring effort and improve search quality.

Cloudpoint SOP Navigator starts as eight SOPs in a clean interface. It ends as the single source of truth for how work gets done at Cloudpoint — consistent, searchable, and always up to date.

---

*Cloudpoint SOP Navigator — Internal Product Documentation v1.0*  
*Prepared by the Cloudpoint Technical Team — June 2026*  
*This document is for internal review and approval purposes.*
