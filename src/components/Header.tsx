import { SOURCE_NOTE } from '../data/sops';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 print:hidden flex-shrink-0">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white"
              stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5
                   7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5
                   2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125
                   1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-slate-900 leading-tight tracking-tight">
              Cloudpoint SOP Navigator
            </h1>
            <p className="text-xs text-slate-500 leading-tight">
              Internal SOP Search &amp; Procedure Assistant
            </p>
          </div>
        </div>

        {/* Source note */}
        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200
                        rounded-md px-3 py-1.5 max-w-xl">
          <svg viewBox="0 0 20 20" fill="currentColor"
            className="w-3.5 h-3.5 text-amber-500 flex-shrink-0">
            <path fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17
                 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10
                 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1
                 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-amber-700">{SOURCE_NOTE}</span>
        </div>
      </div>
    </header>
  );
}
