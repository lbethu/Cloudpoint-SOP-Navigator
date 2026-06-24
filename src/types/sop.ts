// ─────────────────────────────────────────────────────────────────────────────
// Cloudpoint SOP Navigator — SOP Type Model
// Source-based: every SOP object is derived from an uploaded source document.
// Missing fields are marked "Not specified in source document."
// ─────────────────────────────────────────────────────────────────────────────

export interface CommonIssue {
  issue: string;
  fix: string;
}

export interface SOP {
  id: string;               // e.g. "SOP-201" — matches source document number
  title: string;
  sourceFileName: string;   // original filename of the uploaded document
  version?: string;         // extracted from source if available
  department?: string;      // extracted from source if available
  owner?: string;           // extracted from source if available
  category: string;         // maps to CategoryFilter
  workflowType: string;
  tags: string[];
  importedDate: string;     // date the document was imported/processed
  reviewStatus: string;     // "Draft / Source Imported" or "Approved" if source says so

  // Content sections — "Not specified in source document." if absent
  purpose: string;
  whenToUse: string;
  requiredTools: string[];
  rolesResponsibilities: string[];
  inputsNeeded: string[];
  steps: string[];
  qualityChecks: string[];
  expectedOutput: string;
  commonIssues: CommonIssue[];
  notes: string[];
  sourceSummary: string;    // short summary derived from the source document
  relatedSops: string[];
}

export type CategoryKey =
  | 'All'
  | 'Campaigns'
  | 'Lead Qualification'
  | 'Proposals & Quotes'
  | 'Content Review'
  | 'Sales'
  | 'Marketing';
