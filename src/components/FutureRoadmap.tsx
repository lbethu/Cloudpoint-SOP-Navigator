const ROADMAP_ITEMS = [
  {
    phase: 'Phase 1',
    label: 'Prototype (Current)',
    items: [
      'Source-imported SOP knowledge base',
      'Full-text search across all SOP fields',
      'Category filtering',
      'SOP detail view',
      'Print / Save as PDF',
      'Upload UI (parsing not connected)',
    ],
    active: true,
  },
  {
    phase: 'Phase 2',
    label: 'Internal Review',
    items: [
      'Internal review of imported SOP content',
      'Additional SOPs from other source documents',
      'SOP owner and department assignments',
      'UI feedback and refinement',
    ],
    active: false,
  },
  {
    phase: 'Phase 3',
    label: 'Cloud Integration',
    items: [
      'Google Drive SOP folder connection',
      'SharePoint document library integration',
      'Google Cloud Storage bucket',
      'Internal API for SOP retrieval',
      'Live document parsing (DOCX, PDF)',
    ],
    active: false,
  },
  {
    phase: 'Phase 4',
    label: 'Governance',
    items: [
      'SOP approval workflow',
      'Version history and change tracking',
      'SOP ownership and review dates',
      'Role-based access control',
    ],
    active: false,
  },
  {
    phase: 'Phase 5',
    label: 'AI Assistance',
    items: [
      'AI-assisted SOP draft generation',
      'Natural language Q&A over approved SOPs',
      'SOP gap analysis and recommendations',
      'SOP usage analytics',
    ],
    active: false,
  },
];

export function FutureRoadmap() {
  return (
    <div className="border-t border-slate-200 bg-slate-50 print:hidden">
      <div className="max-w-screen-xl mx-auto px-5 py-6">
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Future Roadmap
          </h2>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ROADMAP_ITEMS.map((phase) => (
            <div key={phase.phase}
              className={`rounded-lg border p-3 ${
                phase.active
                  ? 'bg-white border-blue-200 shadow-sm'
                  : 'bg-white border-slate-200'
              }`}>
              <div className="flex items-center gap-1.5 mb-2">
                <span className={`text-xs font-mono font-bold
                  ${phase.active ? 'text-blue-600' : 'text-slate-400'}`}>
                  {phase.phase}
                </span>
                {phase.active && (
                  <span className="text-xs bg-blue-600 text-white rounded px-1 py-0.5 font-medium
                                   leading-none">
                    Now
                  </span>
                )}
              </div>
              <p className={`text-xs font-semibold mb-2
                ${phase.active ? 'text-slate-800' : 'text-slate-600'}`}>
                {phase.label}
              </p>
              <ul className="space-y-1">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-slate-400 leading-snug">
                    <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
