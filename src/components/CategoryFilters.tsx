import type { CategoryKey } from '../types/sop';
import { CATEGORIES } from '../data/sops';

interface CategoryFiltersProps {
  active: CategoryKey;
  onChange: (cat: CategoryKey) => void;
  counts: Record<string, number>;
}

export function CategoryFilters({ active, onChange, counts }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat as CategoryKey)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs
                        font-medium border transition-all duration-150 select-none
                        ${isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
          >
            {cat}
            {cat !== 'All' && count > 0 && (
              <span className={`text-xs rounded px-1 py-0.5 leading-none
                ${isActive ? 'bg-blue-500 text-blue-100' : 'bg-slate-100 text-slate-500'}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
