import type { SOP } from '../types/sop';
import { Badge } from './Badge';

interface SOPCardProps {
  sop: SOP;
  isSelected: boolean;
  onSelect: (sop: SOP) => void;
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return iso; }
}

function statusVariant(status: string): 'status-approved' | 'status-draft' {
  return status.toLowerCase() === 'approved' ? 'status-approved' : 'status-draft';
}

export function SOPCard({ sop, isSelected, onSelect }: SOPCardProps) {
  return (
    <button
      onClick={() => onSelect(sop)}
      className={`w-full text-left rounded-xl border p-4 transition-all duration-150 group
        ${isSelected
          ? 'border-blue-500 bg-blue-50 shadow-sm ring-1 ring-blue-200'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
        }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className={`text-xs font-mono font-semibold
          ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
          {sop.id}
        </span>
        <Badge variant="category">{sop.category}</Badge>
      </div>

      {/* Title */}
      <h3 className={`text-sm font-semibold leading-snug mb-1.5
        ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
        {sop.title}
      </h3>

      {/* Summary */}
      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
        {sop.sourceSummary}
      </p>

      {/* Source file */}
      <div className="flex items-center gap-1.5 mb-2.5">
        <svg className="w-3 h-3 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 16 16"
          stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 2h5.5L12 4.5V14H4V2z" />
        </svg>
        <span className="text-xs text-slate-400 truncate">{sop.sourceFileName}</span>
      </div>

      {/* Meta chips */}
      <div className="flex flex-wrap gap-1 mb-3">
        {sop.department && (
          <Badge variant="tag">{sop.department}</Badge>
        )}
        <Badge variant="tag">{sop.workflowType}</Badge>
        {sop.requiredTools.slice(0, 2).map((t) => (
          <Badge key={t} variant="tag">{t}</Badge>
        ))}
        {sop.requiredTools.length > 2 && (
          <Badge variant="tag">+{sop.requiredTools.length - 2} tools</Badge>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0
            ${sop.reviewStatus.toLowerCase() === 'approved' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
          <Badge variant={statusVariant(sop.reviewStatus)}>{sop.reviewStatus}</Badge>
        </div>
        <span className="text-xs text-slate-400">Imported {fmtDate(sop.importedDate)}</span>
      </div>
    </button>
  );
}
