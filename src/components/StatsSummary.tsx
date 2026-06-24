interface Stats {
  total: number;
  sources: number;
  categories: number;
  drafts: number;
  approved: number;
}

export function StatsSummary({ stats }: { stats: Stats }) {
  const items = [
    { label: 'Total SOPs',        value: stats.total },
    { label: 'Source Documents',  value: stats.sources },
    { label: 'Categories',        value: stats.categories },
    { label: 'Under Review',      value: stats.drafts },
    { label: 'Approved',          value: stats.approved },
  ];
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
      {items.map(({ label, value }) => (
        <div key={label} className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 uppercase tracking-wide font-medium whitespace-nowrap">
            {label}
          </span>
          <span className="text-xs font-bold text-slate-700">{value}</span>
        </div>
      ))}
    </div>
  );
}
