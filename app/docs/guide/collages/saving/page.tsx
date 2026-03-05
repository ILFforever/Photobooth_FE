import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function SavingPage() {
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
            <Link href="/docs/guide/collages" className="hover:text-purple-600 transition-colors">Collage Creator</Link>
            <Chevron />
            <span className="text-gray-900 font-medium">Saving & Using Sets</span>
          </nav>

          <article>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </span>
              <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Collage Creator</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Saving & Using Sets</h1>
            <p className="text-lg text-gray-500 mb-12">
              Once you&apos;ve configured your canvas, frames, backgrounds, and overlays, save your work as a named set. You can create multiple sets for different events or styles.
            </p>

            {/* Saving a set */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Saving a Set</h2>

              <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/photos/guide/collages/custom-set.png"
                  alt="Custom Sets panel showing saved sets with thumbnails, Load and Delete buttons"
                  width={724}
                  height={456}
                  className="w-full h-auto"
                />
                <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                  <p className="text-xs text-gray-500">The Custom Sets panel — click <strong>Save Current Setup</strong> to save your current canvas, frame, and background as a named set. Saved sets are listed below with thumbnail previews and <strong>Load</strong> / <strong>Delete</strong> actions.</p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-purple-200 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Save your set</h3>
                    <p className="text-gray-600 text-sm mb-4">Click <strong>Save Current Setup</strong> in the Custom Sets panel. Give your set a name and optional description — the modal shows a <strong>Current Configuration</strong> summary of the canvas size, frame, and background being saved.</p>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src="/photos/guide/collages/custom-set-modal.png"
                        alt="Create Custom Set modal showing Name and Description fields alongside a Current Configuration summary"
                        width={724}
                        height={456}
                        className="w-full h-auto"
                      />
                      <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                        <p className="text-xs text-gray-500">Enter a <strong>Name</strong> and optional <strong>Description</strong>. The <strong>Current Configuration</strong> summary shows the canvas size, frame, and background that will be saved. Click <strong>Save Set</strong> to confirm.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-1">Start your photobooth session</h3>
                    <p className="text-gray-600 text-sm">Switch to Photobooth Mode. Guest photos will be automatically placed into the frame cutouts defined by your set.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-medium text-green-900">Good to know:</span>
                    <span className="text-green-800"> You can edit and update saved sets at any time. Changes won&apos;t affect photos already taken with the previous version of the set.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link href="/docs/guide/collages/overlays" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Overlays
              </Link>
              <Link href="/docs/guide/collages/panels" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                Next: Additional Tabs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
