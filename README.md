# Cloudpoint SOP Navigator

**Internal SOP Search & Procedure Assistant**

> Source-based SOP prototype — imported SOPs require internal review before production use.

---

## What is this?

Cloudpoint SOP Navigator is an internal web application that lets Cloudpoint employees quickly search, find, open, and export standard operating procedures from a structured knowledge base.

All SOP content in this prototype was extracted directly from uploaded company source documents. No procedures, steps, or policies have been invented. Missing fields are marked "Not specified in source document."

---

## How to Install

```bash
cd "Cloudpoint SOP Navigator"
npm install
```

---

## How to Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app loads immediately with no external services required.

To build for production:

```bash
npm run build
```

---

## Source SOPs Included

| SOP ID   | Title                                        | Source File                                                    |
|----------|----------------------------------------------|----------------------------------------------------------------|
| SOP-201  | Creating Campaigns                           | 201- Creating Campaigns.docx                                   |
| SOP-209  | Creating and Sending Proposals and Quotes    | 209- Creating and Sending Proposals and Quotes.docx            |
| SOP-216  | Inbound Lead Qualification Process           | 216- Inbound Lead Qualification Process.docx                   |
| SOP-220  | Marketing Content Review & Approval          | 220-Marketing Content Review & Approval SOP.docx               |

---

## Where SOP Data is Stored

All SOP data is in:

```
src/data/sops.ts
```

This file contains a TypeScript array of SOP objects. Each object was built by extracting content from the source `.docx` files. The data structure is defined in:

```
src/types/sop.ts
```

The service layer that queries the data is in:

```
src/services/sopService.ts
```

---

## How to Add a New SOP Manually

1. Open `src/data/sops.ts`
2. Add a new object to the `SOPS` array following the same structure
3. Fill in fields from the source document
4. Mark any missing field with `'Not specified in source document.'`
5. Save — the SOP will appear immediately in search and filters

SOP ID format: use the document number from your SOP system (e.g., `'SOP-221'`)

---

## How the Upload Section Works in Prototype Mode

The **Upload SOPs** tab provides a future-ready UI:

- Users can select `.pdf`, `.docx`, `.txt`, `.md`, or `.json` files
- Files are listed in the UI with their names and sizes
- Status shows: **"Prototype mode — file parsing not connected yet"**

The upload section does **not** parse, convert, or store files in prototype mode. It is a UI placeholder for the planned upload workflow.

---

## How Upload Support Can Be Expanded

In a future version, the upload pipeline would:

1. **Parse DOCX files** using `mammoth.js` (browser-side) or a Node.js server
2. **Parse PDF files** using `pdf.js` or a server-side PDF extraction service
3. **Convert extracted text** into structured SOP JSON matching the `SOP` interface
4. **Send the document** to an internal API endpoint for review and approval
5. **Store approved SOPs** in Google Drive, SharePoint, or Google Cloud Storage
6. **Trigger an approval workflow** before the SOP becomes searchable
7. **Update the search index** automatically when a new SOP is approved

The integration point is documented in `src/components/UploadSOPPanel.tsx` and `src/services/sopService.ts`.

---

## How to Connect Google Drive / SharePoint / Google Cloud

The service layer in `src/services/sopService.ts` is the single integration point.

### Google Drive

```typescript
// Replace getAllSops() with:
export async function getAllSops(): Promise<SOP[]> {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const files = await res.json();
  // Download and parse each file, return SOP[]
}
```

### SharePoint

```typescript
export async function getAllSops(): Promise<SOP[]> {
  const res = await fetch(
    `https://{tenant}.sharepoint.com/sites/{site}/_api/web/lists/getbytitle('SOPs')/items`,
    { headers: { Accept: 'application/json;odata=verbose', Authorization: `Bearer ${token}` } }
  );
  const data = await res.json();
  return data.d.results.map(mapSharePointItemToSOP);
}
```

### Google Cloud Storage

```typescript
export async function getAllSops(): Promise<SOP[]> {
  const res = await fetch(
    `https://storage.googleapis.com/storage/v1/b/${BUCKET}/o`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const items = await res.json();
  // Download each object and parse into SOP[]
}
```

### Internal API

```typescript
export async function getAllSops(): Promise<SOP[]> {
  const res = await fetch('/api/v1/sops');
  return res.json(); // Must match the SOP interface
}
```

In all cases, the returned data must match the `SOP` interface in `src/types/sop.ts`. The UI requires no changes.

---

## Source-of-Truth Rule

> All SOP content in this application must be derived from official Cloudpoint source documents.
>
> Fields not present in the source document must be marked: `"Not specified in source document."`
>
> Do not invent steps, policies, departments, or approval workflows.
>
> All imported SOPs should be reviewed by the relevant department or team lead before being used as production operating procedures.

---

## File Structure

```
Cloudpoint SOP Navigator/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── sop.ts              ← SOP TypeScript interface
    ├── data/
    │   └── sops.ts             ← Structured SOP knowledge base (source-imported)
    ├── services/
    │   └── sopService.ts       ← Service layer (future cloud integration point)
    └── components/
        ├── Badge.tsx
        ├── Header.tsx
        ├── SearchBar.tsx
        ├── CategoryFilters.tsx
        ├── StatsSummary.tsx
        ├── SOPCard.tsx
        ├── SOPDetail.tsx
        ├── UploadSOPPanel.tsx
        ├── EmptyState.tsx
        └── FutureRoadmap.tsx
```
