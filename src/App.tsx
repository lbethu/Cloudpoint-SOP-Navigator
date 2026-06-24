// ─────────────────────────────────────────────────────────────────────────────
// Cloudpoint SOP Navigator — Root Application
//
// Source-of-truth rule:
//   All SOP content is derived from uploaded company source documents.
//   No procedures, policies, or steps have been invented.
//   Missing fields are marked "Not specified in source document."
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo, useEffect } from 'react';
import type { SOP, CategoryKey } from './types/sop';
import {
  getAllSops, searchSops, getStats, getCategoryCounts,
} from './services/sopService';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilters } from './components/CategoryFilters';
import { StatsSummary } from './components/StatsSummary';
import { SOPCard } from './components/SOPCard';
import { SOPDetail } from './components/SOPDetail';
import { EmptyState } from './components/EmptyState';
import { UploadSOPPanel } from './components/UploadSOPPanel';
import { FutureRoadmap } from './components/FutureRoadmap';

// ─────────────────────────────────────────────────────────────────────────────

type Tab = 'search' | 'upload';

export default function App() {
  const [query, setQuery]               = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('All');
  const [selectedSop, setSelectedSop]   = useState<SOP | null>(null);
  const [activeTab, setActiveTab]       = useState<Tab>('search');

  // Auto-select the first SOP on load
  useEffect(() => {
    const all = getAllSops();
    if (all.length > 0) setSelectedSop(all[0]);
  }, []);

  // ── Derived data ───────────────────────────────────────────────────────────
  const filteredSops = useMemo(
    () => searchSops(query, activeCategory),
    [query, activeCategory]
  );

  const categoryCounts = useMemo(
    () => getCategoryCounts(query),
    [query]
  );

  const stats = useMemo(() => getStats(), []);
  const allSops = useMemo(() => getAllSops(), []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  function handleQueryChange(val: string) {
    setQuery(val);
    // Deselect if selected SOP no longer appears in results
    if (selectedSop && !searchSops(val, activeCategory).find((s) => s.id === selectedSop.id)) {
      setSelectedSop(null);
    }
  }

  function handleCategoryChange(cat: CategoryKey) {
    setActiveCategory(cat);
    if (selectedSop && !searchSops(query, cat).find((s) => s.id === selectedSop.id)) {
      setSelectedSop(null);
    }
  }

  function handleClear() {
    setQuery('');
    setActiveCategory('All');
    const all = getAllSops();
    setSelectedSop(all[0] ?? null);
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      <Header />

      {/* ── Tab bar ─────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 px-5 flex items-center gap-1
                      flex-shrink-0 print:hidden">
        {(['search', 'upload'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors
              ${activeTab === tab
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
          >
            {tab === 'search' ? 'SOP Search' : 'Upload SOPs'}
            {tab === 'upload' && (
              <span className="ml-1.5 text-xs bg-violet-100 text-violet-600 rounded
                               px-1.5 py-0.5 font-medium">
                Prototype
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Main content ────────────────────────────────────────────────── */}
      {activeTab === 'search' ? (
        <div className="flex flex-1 overflow-hidden">

          {/* ── Left sidebar: search + cards ──────────────────────────── */}
          <aside className={`flex flex-col border-r border-slate-200 bg-white
            ${selectedSop
              ? 'hidden lg:flex lg:w-[380px] xl:w-[420px] flex-shrink-0'
              : 'flex w-full'
            }`}>

            {/* Search + filters */}
            <div className="px-4 pt-4 pb-3 border-b border-slate-100 flex-shrink-0 space-y-3">
              <SearchBar
                value={query}
                onChange={handleQueryChange}
                resultCount={filteredSops.length}
                totalCount={allSops.length}
              />
              <CategoryFilters
                active={activeCategory}
                onChange={handleCategoryChange}
                counts={categoryCounts}
              />
            </div>

            {/* Stats strip */}
            <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50 flex-shrink-0">
              <StatsSummary stats={stats} />
            </div>

            {/* Cards list */}
            <div className="flex-1 overflow-y-auto">
              {filteredSops.length === 0 ? (
                <EmptyState query={query} onClear={handleClear} />
              ) : (
                <div className="p-3 space-y-3">
                  {filteredSops.map((sop) => (
                    <SOPCard
                      key={sop.id}
                      sop={sop}
                      isSelected={selectedSop?.id === sop.id}
                      onSelect={setSelectedSop}
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* ── Right panel: SOP detail ──────────────────────────────── */}
          <main className={`flex-1 overflow-hidden
            ${selectedSop ? 'flex flex-col' : 'hidden lg:flex lg:flex-col'}`}>
            {selectedSop ? (
              <SOPDetail
                sop={selectedSop}
                onClose={() => setSelectedSop(null)}
              />
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <div className="text-center max-w-sm px-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200
                                  flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0
                           0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5
                           3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504
                           1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9
                           0 00-9-9z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-700 mb-1">Select an SOP to view</p>
                  <p className="text-xs text-slate-400">
                    Search or browse the SOPs on the left, then click a card to open the full
                    procedure.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      ) : (
        /* ── Upload tab ─────────────────────────────────────────────── */
        <div className="flex-1 overflow-y-auto">
          <UploadSOPPanel />
          <FutureRoadmap />
        </div>
      )}

      {/* ── Roadmap footer on search tab ────────────────────────────── */}
      {activeTab === 'search' && !selectedSop && (
        <div className="flex-shrink-0 hidden lg:block">
          <FutureRoadmap />
        </div>
      )}
    </div>
  );
}
