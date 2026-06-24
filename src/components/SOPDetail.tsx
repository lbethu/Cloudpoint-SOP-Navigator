import type { SOP } from '../types/sop';
import { Badge } from './Badge';

interface SOPDetailProps {
  sop: SOP;
  onClose: () => void;
}

const NOT_IN_SOURCE = 'Not specified in source document.';

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return iso; }
}

function statusVariant(s: string): 'status-approved' | 'status-draft' {
  return s.toLowerCase() === 'approved' ? 'status-approved' : 'status-draft';
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 py-2 border-b border-slate-100 last:border-0">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide
                       sm:w-40 flex-shrink-0 mb-0.5 sm:mb-0 sm:pt-0.5">
        {label}
      </span>
      <span className="text-sm text-slate-800">{children}</span>
    </div>
  );
}

function Section({ title, children, printBreak }: {
  title: string; children: React.ReactNode; printBreak?: boolean;
}) {
  return (
    <section className={`mt-7 ${printBreak ? 'print:break-before-page' : ''}`}>
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (!items.length) return <p className="text-sm text-slate-400 italic">{NOT_IN_SOURCE}</p>;
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
          <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-300" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function StepList({ items }: { items: string[] }) {
  if (!items.length) return <p className="text-sm text-slate-400 italic">{NOT_IN_SOURCE}</p>;

  // Group steps by phase prefix [Phase Name]
  type Group = { phase: string; steps: { num: number; text: string }[] };
  const groups: Group[] = [];
  let currentGroup: Group | null = null;
  let globalNum = 0;

  for (const item of items) {
    const match = item.match(/^\[([^\]]+)\]\s*(.*)/);
    if (match) {
      const phase = match[1];
      const text = match[2];
      if (!currentGroup || currentGroup.phase !== phase) {
        currentGroup = { phase, steps: [] };
        groups.push(currentGroup);
      }
      globalNum++;
      currentGroup.steps.push({ num: globalNum, text });
    } else {
      if (!currentGroup) {
        currentGroup = { phase: '', steps: [] };
        groups.push(currentGroup);
      }
      globalNum++;
      currentGroup.steps.push({ num: globalNum, text: item });
    }
  }

  return (
    <div className="space-y-5">
      {groups.map((group, gi) => (
        <div key={gi}>
          {group.phase && (
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {group.phase}
              </span>
              <div className="flex-1 h-px bg-blue-100" />
            </div>
          )}
          <ol className="space-y-2">
            {group.steps.map(({ num, text }) => (
              <li key={num} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600
                                 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {num}
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export function SOPDetail({ sop, onClose }: SOPDetailProps) {
  return (
    <article className="sop-detail h-full flex flex-col">
      {/* ── Action bar ─────────────────────────────────────────────────── */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200
                      px-5 py-3 flex items-center justify-between gap-4 flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm text-slate-500
                       hover:text-slate-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10H5m5-5-5 5 5 5" />
            </svg>
            <span className="hidden sm:inline">Back</span>
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-mono text-slate-400 truncate">{sop.id}</span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex-shrink-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                     text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20"
            stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0
                 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L13.66
                 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662
                 0-1.18-.568-1.12-1.227L6.34 18m7.318 0h-7.318" />
          </svg>
          Print / Save as PDF
        </button>
      </div>

      {/* ── Document body ───────────────────────────────────────────────── */}
      <div className="overflow-y-auto flex-1 px-5 py-7 print:px-0 print:py-0">
        <div className="max-w-3xl mx-auto">

          {/* Print header */}
          <div className="hidden print:block mb-8 pb-5 border-b-2 border-slate-200">
            <p className="text-xs text-slate-400 mb-1">
              Cloudpoint SOP Navigator — Internal Use Only — Source: {sop.sourceFileName}
            </p>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{sop.title}</h1>
            <p className="text-sm text-slate-500">
              {sop.id} · {sop.reviewStatus} · Imported {fmtDate(sop.importedDate)}
            </p>
          </div>

          {/* Screen title */}
          <div className="print:hidden mb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold text-blue-600">{sop.id}</span>
              <Badge variant="category">{sop.category}</Badge>
              <Badge variant={statusVariant(sop.reviewStatus)}>{sop.reviewStatus}</Badge>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-1">{sop.title}</h1>
            <p className="text-xs text-violet-600 font-medium">Source: {sop.sourceFileName}</p>
          </div>

          {/* ── Metadata block ───────────────────────────────────────────── */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-1 mb-2
                          print:border print:rounded-none print:bg-white">
            <MetaRow label="SOP ID">{sop.id}</MetaRow>
            {sop.version && <MetaRow label="Version">{sop.version}</MetaRow>}
            <MetaRow label="Source File">
              <span className="text-violet-700 font-medium">{sop.sourceFileName}</span>
            </MetaRow>
            <MetaRow label="Department">{sop.department ?? NOT_IN_SOURCE}</MetaRow>
            <MetaRow label="Owner">{sop.owner ?? NOT_IN_SOURCE}</MetaRow>
            <MetaRow label="Category">{sop.category}</MetaRow>
            <MetaRow label="Workflow Type">{sop.workflowType}</MetaRow>
            <MetaRow label="Imported">{fmtDate(sop.importedDate)}</MetaRow>
            <MetaRow label="Review Status">
              <span className={sop.reviewStatus.toLowerCase() === 'approved'
                ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold'}>
                {sop.reviewStatus}
              </span>
            </MetaRow>
            <MetaRow label="Tools">
              <span className="flex flex-wrap gap-1 mt-0.5">
                {sop.requiredTools.length > 0
                  ? sop.requiredTools.map((t) => <Badge key={t} variant="tag">{t}</Badge>)
                  : <span className="text-slate-400 italic text-sm">{NOT_IN_SOURCE}</span>}
              </span>
            </MetaRow>
            <MetaRow label="Tags">
              <span className="flex flex-wrap gap-1 mt-0.5">
                {sop.tags.slice(0, 8).map((t) => <Badge key={t} variant="tag">{t}</Badge>)}
              </span>
            </MetaRow>
          </div>

          {/* ── Source note banner ──────────────────────────────────────── */}
          <div className="my-4 flex items-start gap-2 bg-amber-50 border border-amber-200
                          rounded-lg px-4 py-3">
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor"
              viewBox="0 0 20 20">
              <path fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17
                   2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485
                   2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75
                   0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Internal Review Required —</strong> This SOP was imported from{' '}
              <em>{sop.sourceFileName}</em>. Content reflects the source document and has not
              yet been formally reviewed for production use. Fields marked
              &ldquo;Not specified in source document.&rdquo; were absent from the original file.
            </p>
          </div>

          {/* ── Purpose ────────────────────────────────────────────────── */}
          <Section title="Purpose / Objective">
            <p className="text-sm text-slate-700 leading-relaxed">{sop.purpose || NOT_IN_SOURCE}</p>
          </Section>

          {/* ── When to Use ────────────────────────────────────────────── */}
          <Section title="When to Use This SOP">
            <p className="text-sm text-slate-700 leading-relaxed">{sop.whenToUse || NOT_IN_SOURCE}</p>
          </Section>

          {/* ── Roles & Responsibilities ────────────────────────────────── */}
          <Section title="Roles & Responsibilities">
            <BulletList items={sop.rolesResponsibilities} />
          </Section>

          {/* ── Required Tools ──────────────────────────────────────────── */}
          <Section title="Required Tools / Systems">
            <BulletList items={sop.requiredTools} />
          </Section>

          {/* ── Inputs ──────────────────────────────────────────────────── */}
          <Section title="Inputs Needed">
            <BulletList items={sop.inputsNeeded} />
          </Section>

          {/* ── Steps ───────────────────────────────────────────────────── */}
          <Section title="Step-by-Step Procedure" printBreak>
            <StepList items={sop.steps} />
          </Section>

          {/* ── Quality Checks ──────────────────────────────────────────── */}
          <Section title="Quality Checks / Review Criteria">
            {sop.qualityChecks.length > 0 ? (
              <ul className="space-y-2">
                {sop.qualityChecks.map((check, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none"
                      viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {check}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400 italic">{NOT_IN_SOURCE}</p>
            )}
          </Section>

          {/* ── Expected Output ─────────────────────────────────────────── */}
          <Section title="Expected Output">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                {sop.expectedOutput || NOT_IN_SOURCE}
              </p>
            </div>
          </Section>

          {/* ── Common Issues ───────────────────────────────────────────── */}
          {sop.commonIssues.length > 0 && (
            <Section title="Common Issues / Notes">
              <div className="space-y-3">
                {sop.commonIssues.map((ci, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 overflow-hidden">
                    <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex gap-2">
                      <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none"
                        viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73
                             0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898
                             0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <p className="text-xs font-medium text-slate-700">{ci.issue}</p>
                    </div>
                    <div className="px-4 py-2.5 flex gap-2">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                        viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0
                             001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <p className="text-xs text-slate-600 leading-relaxed">{ci.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* ── Notes ───────────────────────────────────────────────────── */}
          {sop.notes.length > 0 && (
            <Section title="Notes from Source Document">
              <BulletList items={sop.notes} />
            </Section>
          )}

          {/* ── Source Summary ──────────────────────────────────────────── */}
          <Section title="Source-Based Summary">
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
              <p className="text-sm text-slate-700 leading-relaxed italic">{sop.sourceSummary}</p>
            </div>
          </Section>

          {/* ── Related SOPs ────────────────────────────────────────────── */}
          {sop.relatedSops.length > 0 && (
            <Section title="Related SOPs">
              <div className="flex flex-wrap gap-2">
                {sop.relatedSops.map((id) => (
                  <span key={id}
                    className="inline-flex items-center px-3 py-1 rounded-lg border
                               border-blue-200 bg-blue-50 text-blue-700 text-xs font-mono font-medium">
                    {id}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* Print footer */}
          <div className="hidden print:block mt-10 pt-5 border-t border-slate-300">
            <p className="text-xs text-slate-400">
              Cloudpoint SOP Navigator · Internal Use Only · {sop.id} · Printed {new Date().toLocaleDateString()}
            </p>
            <p className="text-xs text-amber-600 mt-1">
              {sop.reviewStatus} — Source imported from {sop.sourceFileName}. Review before production use.
            </p>
          </div>

          <div className="h-14 print:hidden" />
        </div>
      </div>
    </article>
  );
}
