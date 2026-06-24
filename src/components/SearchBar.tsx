interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  resultCount: number;
  totalCount: number;
}

export function SearchBar({ value, onChange, resultCount, totalCount }: SearchBarProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 20 20"
            stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M8.25 15.75a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM21 21l-5.197-5.197" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search SOPs by title, task, keyword, department, process, or tool…"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10
                     text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                     transition-all duration-150"
          spellCheck={false}
          autoFocus
        />
        {value.length > 0 && (
          <button
            onClick={() => onChange('')}
            className="absolute inset-y-0 right-0 flex items-center pr-3
                       text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94
                   10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06
                   10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      {value.trim().length > 0 && (
        <p className="mt-1.5 text-xs text-slate-500 pl-1">
          {resultCount === 0
            ? 'No matching SOPs'
            : `${resultCount} of ${totalCount} SOP${totalCount !== 1 ? 's' : ''} match`}
        </p>
      )}
    </div>
  );
}
