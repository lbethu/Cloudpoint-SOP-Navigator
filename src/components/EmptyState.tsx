interface EmptyStateProps {
  query: string;
  onClear: () => void;
}

export function EmptyState({ query, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 21l-5.197-5.197M8.25 15.75a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
        </svg>
      </div>
      <p className="text-sm font-medium text-slate-700 mb-1">
        No matching SOP found
        {query && <span className="text-slate-400"> for &ldquo;{query}&rdquo;</span>}
      </p>
      <p className="text-xs text-slate-400 max-w-xs mb-4">
        Try a different keyword, tool name, or workflow — for example: &ldquo;proposal&rdquo;,
        &ldquo;pipedrive&rdquo;, &ldquo;lead&rdquo;, or &ldquo;approval tier&rdquo;.
      </p>
      <button
        onClick={onClear}
        className="text-xs font-medium text-blue-600 hover:text-blue-700 underline underline-offset-2"
      >
        Clear search and show all SOPs
      </button>
    </div>
  );
}
