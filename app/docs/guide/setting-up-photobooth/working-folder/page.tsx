import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function WorkingFolderPage() {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <Chevron />
          <Link href="/docs" className="hover:text-purple-600 transition-colors">Docs</Link>
          <Chevron />
          <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">User Guide</Link>
          <Chevron />
          <Link href="/docs/guide/setting-up-photobooth" className="hover:text-purple-600 transition-colors">Setting Up</Link>
          <Chevron />
          <span className="text-gray-900 font-medium">Working Folder</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Working Folder</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 shrink-0">Required</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            The Working Folder is where all photos from your session are saved. The app creates a numbered subfolder inside it for each session automatically — you never need to manage files manually.
          </p>

          {/* Side by side */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/working-folder/no-folder.png"
                alt="Working Folder not set"
                width={700}
                height={200}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500"><strong>Not Set</strong> — photobooth cannot start.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/working-folder/selected-folder.png"
                alt="Working Folder selected"
                width={700}
                height={200}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500"><strong>Set</strong> — folder name badge and full path shown.</p>
              </div>
            </div>
          </div>

          {/* How to set */}
          <div className="mb-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">Click <strong>Browse…</strong> to open a folder picker and select any folder on your computer. The selected path will appear under Location.</p>
          </div>

          {/* Populated state */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Once populated</h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            After setting a folder and starting a session, the interface will load any existing photos from that folder into the Session Gallery. The working folder path remains visible in the Control Center sidebar throughout your session.
          </p>
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/working-folder/photobooth-selected.png"
              alt="Photobooth with working folder populated"
              width={1388}
              height={868}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">Working folder set to <code className="font-mono">C:\Users\Asun\Desktop\Test</code> — existing session photos are loaded into the gallery automatically.</p>
            </div>
          </div>

          {/* Parsing warning */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Parsing warning</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Occasionally when loading a folder the app may show a parsing warning. This is not common and usually resolves on its own.
                </p>
              </div>
            </div>
            <ol className="space-y-3 pl-8">
              <li className="flex items-start gap-3 text-sm text-amber-800">
                <span className="font-semibold shrink-0 text-amber-700">1.</span>
                <span>Try loading the folder again — click <strong>Browse…</strong> and re-select the same folder.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-amber-800">
                <span className="font-semibold shrink-0 text-amber-700">2.</span>
                <span>If the warning persists, select a different folder or create a new empty folder and use that instead.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-amber-800">
                <span className="font-semibold shrink-0 text-amber-700">3.</span>
                <div>
                  <span><strong>Advanced:</strong> locate the <code className="font-mono text-xs bg-amber-100 px-1 py-0.5 rounded">.ptb</code> file inside the folder, open it in VS Code or any text editor, and fix the malformed JSON manually. The file is human-readable — look for missing commas, unclosed brackets, or stray characters near the end.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Setting Up
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/select-set" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: Select Set
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
