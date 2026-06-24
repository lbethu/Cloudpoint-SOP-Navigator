// ─────────────────────────────────────────────────────────────────────────────
// Cloudpoint SOP Navigator — SOP Service Layer
//
// Future integration point:
//   Replace the local SOPS import with SOPs fetched from:
//   - Google Drive API (folder of approved SOP documents)
//   - SharePoint REST API (document library)
//   - Google Cloud Storage (JSON objects or DOCX/PDF files with parsing)
//   - Internal REST API (company knowledge base endpoint)
//
//   Example future implementation:
//     export async function getAllSops(): Promise<SOP[]> {
//       const res = await fetch('/api/sops', { headers: authHeaders });
//       return res.json();
//     }
//
//   The SOP interface in src/types/sop.ts defines the required data shape.
//   Any external source must return data conforming to that interface.
// ─────────────────────────────────────────────────────────────────────────────

import type { SOP, CategoryKey } from '../types/sop';
import { SOPS, CATEGORIES } from '../data/sops';

// ── Search helper ─────────────────────────────────────────────────────────────
// Searches across all meaningful SOP text fields, case-insensitively.
function matchesSOP(sop: SOP, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  const haystack = [
    sop.id,
    sop.title,
    sop.sourceFileName,
    sop.department ?? '',
    sop.owner ?? '',
    sop.category,
    sop.workflowType,
    sop.purpose,
    sop.whenToUse,
    sop.expectedOutput,
    sop.sourceSummary,
    sop.version ?? '',
    ...sop.tags,
    ...sop.requiredTools,
    ...sop.rolesResponsibilities,
    ...sop.inputsNeeded,
    ...sop.steps,
    ...sop.qualityChecks,
    ...sop.notes,
    ...sop.commonIssues.map((ci) => `${ci.issue} ${ci.fix}`),
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

// ── Public API ────────────────────────────────────────────────────────────────

/** Return all SOPs from the knowledge base. */
export function getAllSops(): SOP[] {
  return SOPS;
}

/** Search SOPs by query string and optional category filter. */
export function searchSops(query: string, category: CategoryKey = 'All'): SOP[] {
  return SOPS.filter((sop) => {
    const catMatch =
      category === 'All' ||
      sop.category === category ||
      (category === 'Sales' && sop.department?.toLowerCase().includes('sales')) ||
      (category === 'Marketing' && sop.department?.toLowerCase().includes('marketing'));
    return catMatch && matchesSOP(sop, query);
  });
}

/** Retrieve a single SOP by its ID. */
export function getSopById(id: string): SOP | undefined {
  return SOPS.find((s) => s.id === id);
}

/** Return the list of available categories. */
export function getCategories(): readonly string[] {
  return CATEGORIES;
}

/** Compute summary statistics for the knowledge base. */
export function getStats() {
  const total = SOPS.length;
  const sources = new Set(SOPS.map((s) => s.sourceFileName)).size;
  const categories = new Set(SOPS.map((s) => s.category)).size;
  const drafts = SOPS.filter(
    (s) => s.reviewStatus.toLowerCase().includes('draft') || s.reviewStatus.toLowerCase().includes('imported')
  ).length;
  const approved = SOPS.filter((s) => s.reviewStatus.toLowerCase() === 'approved').length;
  return { total, sources, categories, drafts, approved };
}

/** Return category counts scoped to a given search query. */
export function getCategoryCounts(query: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const cat of CATEGORIES) {
    counts[cat] =
      cat === 'All'
        ? SOPS.filter((s) => matchesSOP(s, query)).length
        : SOPS.filter((s) => {
            const catMatch =
              s.category === cat ||
              (cat === 'Sales' && s.department?.toLowerCase().includes('sales')) ||
              (cat === 'Marketing' && s.department?.toLowerCase().includes('marketing'));
            return catMatch && matchesSOP(s, query);
          }).length;
  }
  return counts;
}
