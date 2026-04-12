import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function GifGenerationPage() {
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
          <span className="text-gray-900 font-medium">GIF Generation</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">GIF Generation</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 shrink-0">Optional</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Automatically create an animated GIF, MP4, or both from your session photos when the operator advances to the Finalize screen.
          </p>

          {/* Panel screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-sm">
            <Image
              src="/photos/guide/photobooth/gif-generation/image.png"
              alt="GIF Generation panel"
              width={520}
              height={560}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The GIF Generation panel — toggle auto generate, pick an output format, and choose which photos to include.</p>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4 mb-10">

            {/* Auto Generate */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Auto Generate</h3>
              <p className="text-sm text-gray-600">When enabled, a GIF and/or MP4 is automatically created each time the operator clicks <strong>Next</strong> and transitions to the Finalize page. Disable this to skip generation entirely.</p>
            </div>

            {/* Output Format */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Output Format</h3>
              <div className="space-y-2">
                {[
                  { label: "GIF + MP4", desc: "Generates both an animated GIF and an MP4 video — the default." },
                  { label: "GIF", desc: "Generates only an animated GIF." },
                  { label: "MP4", desc: "Generates only an MP4 video." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <code className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0 mt-0.5">{item.label}</code>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Source */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Photo Source</h3>
              <div className="space-y-2">
                {[
                  { label: "Collage Only", desc: "Uses only the finished collage images as frames in the slideshow." },
                  { label: "All Session Photos", desc: "Uses every photo captured during the session, including individual shots." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <code className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0 mt-0.5">{item.label}</code>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timing note */}
          <div className="mb-12 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-blue-800 text-sm">GIF and video files are generated when the operator presses <strong>Next</strong> and will be uploaded to Google Drive automatically if <Link href="/docs/guide/setting-up-photobooth/qr-settings" className="underline hover:text-blue-900">QR Settings</Link> is enabled.</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/qr-settings" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              QR Settings
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/print-settings" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: Print Settings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
