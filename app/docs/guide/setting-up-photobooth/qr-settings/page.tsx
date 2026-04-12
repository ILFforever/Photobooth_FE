import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function QrSettingsPage() {
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
          <span className="text-gray-900 font-medium">QR Settings</span>
        </nav>

        <article>
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">QR Settings</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 shrink-0">Optional</span>
          </div>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
            When enabled, photos are automatically uploaded to Google Drive after each capture. Guests scan a QR code to download their photos instantly.
          </p>

          {/* Panel screenshot + requirements side by side at top */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 items-start">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/qr-settings/qr-settings.png"
                alt="QR Settings panel"
                width={400}
                height={600}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">Toggle QR upload on, pick a Drive folder, and choose the upload mode.</p>
              </div>
            </div>

            {/* Requirements right next to the panel */}
            <div className="space-y-3 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Before you start</h2>
              <p className="text-sm text-gray-600">Two things must be in place before QR upload will activate:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold shrink-0 mt-0.5">1</span>
                  <p className="text-sm text-gray-700">A Google account signed in — see <Link href="/docs/guide/signing-in" className="text-indigo-600 hover:underline font-medium">Signing In</Link></p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold shrink-0 mt-0.5">2</span>
                  <p className="text-sm text-gray-700">A Google Drive base folder selected in the QR Settings panel</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">If either is missing, the status badge stays <span className="inline-flex items-center px-2 py-0.5 rounded border border-red-900 bg-red-900 text-red-300 text-xs font-medium">Not Set</span> even with QR upload toggled on.</p>
            </div>
          </div>


          {/* How folders work + per-session QR */}
          <div className="mb-10 p-4 bg-blue-50 rounded-lg border border-blue-100 space-y-3">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="font-medium text-blue-900">How folders work</span>
                <p className="text-blue-800 text-sm mt-0.5">When you start a new session, the app automatically creates a new folder in your Google Drive named after the session. All photos for that session are stored in this folder, keeping everything organized and easy to find.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-3 border-t border-blue-100">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
              <div>
                <span className="font-medium text-blue-900">One QR code per session</span>
                <p className="text-blue-800 text-sm mt-0.5">Each session generates its own unique QR code linking exclusively to that session&apos;s folder. Guests from different sessions cannot access each other&apos;s photos.</p>
              </div>
            </div>
          </div>

          {/* Per-session QR — removed, merged into callout above */}

          {/* Selecting a folder */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Selecting a Google Drive folder</h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            Click <strong>Select Folder…</strong> to open the Google Drive folder browser. Navigate to the desired location and click <strong>Select Current</strong> to confirm.
          </p>
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-lg mx-auto">
            <Image
              src="/photos/guide/photobooth/qr-settings/folder-drive.png"
              alt="Select Google Drive Folder dialog"
              width={700}
              height={750}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">A dialog opens over the app — browse your Drive, navigate into any folder, or create a new one, then click <strong>Select Current</strong> to confirm.</p>
            </div>
          </div>

          {/* Upload mode */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upload mode</h2>
          <div className="space-y-3 mb-12">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">All Session Photos</h3>
              <p className="text-sm text-gray-600">Every individual photo taken during the session uploads to Google Drive <strong>immediately after capture</strong>, alongside the collage, GIF, and video (if enabled).</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Collage Photos Only</h3>
              <p className="text-sm text-gray-600">Uploads only the photos used to build the collage, plus the collage itself, GIF, and video (if enabled). Photos not included in the final layout stay on-device. Photos are only uploaded when the operator <strong>press the next button and transition to the Finalize page.</strong></p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/naming-scheme" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Naming Scheme
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/gif-generation" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: GIF Generation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
