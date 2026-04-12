import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function PrintSettingsPage() {
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
          <span className="text-gray-900 font-medium">Print Settings</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Print Settings</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 shrink-0">Optional</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Configure automatic printing of each collage after capture — printer selection, number of copies, and paper size.
          </p>

          {/* Panel screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-sm">
            <Image
              src="/photos/guide/photobooth/print-settings/image.png"
              alt="Print Settings panel"
              width={520}
              height={560}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The Print Settings panel — configure margins and export resolution for high-quality prints.</p>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4 mb-10">

            {/* Border Fit */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Border Fit</h3>
              <p className="text-sm text-gray-600">Adds white margins to double-page prints for printer cutting. This setting is useful when printing two images on a single sheet and need extra space to prevent content from being cut off during physical trimming.</p>
            </div>

            {/* Border Size */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Border Size (Inches)</h3>
              <p className="text-sm text-gray-600 mb-3">Control the exact margins added to your print:</p>
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-3">
                  <code className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0 mt-0.5">Top / Bottom</code>
                  <p className="text-sm text-gray-600">Sets the margin for the upper and lower edges of the print (e.g., 0.08 in).</p>
                </div>
                <div className="flex items-start gap-3">
                  <code className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0 mt-0.5">Outer Sides</code>
                  <p className="text-sm text-gray-600">Controls the margin for the left and right exterior edges (e.g., 0.05 in).</p>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> No gap is added between the two copies — the printer cuts there. While outer edges have margins, the center where the two pages meet remains seamless.
                </p>
              </div>
            </div>

            {/* Export Resolution */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Export Resolution</h3>
              <p className="text-sm text-gray-600 mb-3">Target megapixels for print export scaling. Defines the technical quality of the file being sent to the printer.</p>
              <div className="flex items-start gap-3 mb-4">
                <code className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0 mt-0.5">Target</code>
                <p className="text-sm text-gray-600">Set the export resolution (e.g., 15 MP). The software will scale or render the final image to this megapixel resolution to ensure print clarity.</p>
              </div>
              <div className="bg-amber-50 rounded-lg border border-amber-100 p-3">
                <p className="text-amber-800 text-sm">
                  <strong>Resolution tradeoff:</strong> Higher megapixel values produce larger, more detailed prints but increase file size.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/gif-generation" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              GIF Generation
            </Link>
            <Link href="/docs/guide/taking-photos" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: Taking Photos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
