import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function SelectSetPage() {
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
          <span className="text-gray-900 font-medium">Select Set</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Select Set</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 shrink-0">Required</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            A set is the collage template for your session — it defines how many photo zones are captured per round and how they are arranged in the final output. You must load one before the photobooth can start.
          </p>

          {/* Set list + set card side by side */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <Image
                src="/photos/guide/photobooth/select-set/select-set.png"
                alt="Select Set panel showing saved sets"
                width={700}
                height={400}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200 mt-auto">
                <p className="text-xs text-gray-500">All saved sets listed with zone count. <strong>Not Set</strong> badge until one is loaded.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <Image
                src="/photos/guide/photobooth/select-set/set-card-double.png"
                alt="Expanded set cards — selected and available"
                width={700}
                height={600}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200 mt-auto">
                <p className="text-xs text-gray-500">The active set shows a blue checkmark and <strong>Selected</strong>. Click <strong>Use This Set</strong> on another to switch.</p>
              </div>
            </div>
          </div>

          {/* How to load */}
          <div className="mb-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">Click the <strong>&rsaquo;</strong> arrow on any set to expand it, then click <strong>Use This Set</strong> to load it for your session.</p>
          </div>

          {/* Once loaded */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Once loaded</h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            After loading a set, the session gallery reflects the number of photo zones defined by that set. To advance to the next step, select exactly the same number of images as there are zones in the set.
          </p>
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-800">Photos can be captured without a valid set loaded, but image selection will be disabled and the <strong>Finalize</strong> screen cannot be reached until a set is loaded.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/select-set/current-session.png"
              alt="Session gallery after set is loaded"
              width={1388}
              height={400}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">Session gallery with <strong>My very cool set</strong> loaded — 3 zones active, ready to capture.</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/working-folder" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Working Folder
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/delay-settings" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: Delay Settings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
