// ─────────────────────────────────────────────────────────────────────────────
// UploadSOPPanel — Future-ready upload interface
//
// This component provides a UI for selecting SOP files. In prototype mode,
// it does not parse or process files — it only shows the UI and file list.
//
// Future integration point:
//   - Extract text from DOCX/PDF using mammoth.js (DOCX) or pdf.js (PDF)
//   - Convert extracted text into structured SOP JSON using a parsing service
//   - Send document to an internal API endpoint for processing
//   - Store SOPs in Google Drive, SharePoint, Google Cloud Storage,
//     or a company knowledge base
//   - Trigger an approval workflow before the SOP becomes searchable
//   - Add the processed SOP to the knowledge base and trigger re-index
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef } from 'react';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  status: 'ready' | 'prototype';
}

const ACCEPTED_TYPES = '.pdf,.docx,.txt,.md,.json';
const ACCEPTED_LABEL = 'PDF, DOCX, TXT, MD, JSON';

function fmtSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadSOPPanel() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(fileList: FileList) {
    const newFiles: UploadedFile[] = Array.from(fileList).map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      status: 'prototype' as const,
    }));
    setFiles((prev) => {
      const names = new Set(prev.map((p) => p.name));
      return [...prev, ...newFiles.filter((f) => !names.has(f.name))];
    });
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) addFiles(e.target.files);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  }

  return (
    <div className="border-t border-slate-200 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 py-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-200
                          flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 20 20"
              stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021
                   18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Upload SOPs</h2>
            <p className="text-xs text-slate-500">
              Future-ready upload interface — file parsing not connected in prototype mode
            </p>
          </div>
          <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded text-xs
                           font-medium bg-violet-50 text-violet-600 border border-violet-200">
            Prototype Mode
          </span>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`relative cursor-pointer rounded-xl border-2 border-dashed
                      transition-all duration-150 px-6 py-8 text-center
                      ${dragging
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPTED_TYPES}
            className="hidden"
            onChange={handleInput}
          />
          <svg className="w-8 h-8 text-slate-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125
                 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621
                 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621
                 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="text-sm text-slate-500 mb-1">
            <span className="font-medium text-blue-600">Click to select files</span>
            {' '}or drag and drop
          </p>
          <p className="text-xs text-slate-400">{ACCEPTED_LABEL} — up to 50 MB per file</p>
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file) => (
              <div key={file.name}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200
                           rounded-lg px-4 py-2.5">
                <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none"
                  viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 2h5.5L12 4.5V14H4V2z" />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700 truncate">{file.name}</p>
                  <p className="text-xs text-slate-400">{fmtSize(file.size)}</p>
                </div>
                <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200
                                 rounded px-2 py-0.5 font-medium flex-shrink-0">
                  Prototype mode — file parsing not connected yet
                </span>
                <button
                  onClick={() => removeFile(file.name)}
                  className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
                  aria-label="Remove file"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94
                         10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0
                         101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* What this will do */}
        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            When fully connected, this upload section will:
          </p>
          <ul className="space-y-1">
            {[
              'Extract text from DOCX and PDF files using local or server-side parsing',
              'Convert extracted content into structured SOP JSON (matching the SOP interface)',
              'Send the document to an internal API or cloud processing endpoint',
              'Store approved SOPs in Google Drive, SharePoint, or Google Cloud Storage',
              'Trigger an internal approval workflow before the SOP becomes searchable',
              'Add the processed SOP to the live knowledge base and update the search index',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-slate-500">
                <span className="text-slate-300 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
