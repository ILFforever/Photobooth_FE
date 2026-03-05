import Image from "next/image";
import Link from "next/link";

export default function SharingPage() {
  return (
    <div className="bg-white pt-24 pb-16">
      
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs" className="hover:text-purple-600 transition-colors">Docs</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">User Guide</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">QR Code Sharing</span>
          </nav>

          <article>
            {/* Hero */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">Sharing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">QR Code Sharing</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Upload photos to Google Drive and generate a QR code so guests can download their photos instantly — no app required. The perfect way to share memories at any event.
              </p>
            </div>

            {/* Prerequisites callout */}
            <div className="mb-10 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-blue-900">Required before sharing:</span>
                  <span className="text-blue-800"> You must connect your Google account in Settings and have at least one photo captured in the current session.</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/qr-sharing.png"
                alt="QR code sharing interface"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The QR sidebar — upload photos, select a folder, and generate a scannable QR code for guests.</p>
              </div>
            </div>

            {/* How It Works */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">How QR Sharing Works</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-6">
                  The QR sharing feature lets guests instantly access their photos without installing any app:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Upload to Google Drive",
                      desc: "Photos from the current session are uploaded to your Google Drive account",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
                      color: "text-blue-600 bg-blue-100"
                    },
                    {
                      step: "2",
                      title: "Generate QR Code",
                      desc: "A unique QR code is created with the Google Drive folder link",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                      color: "text-indigo-600 bg-indigo-100"
                    },
                    {
                      step: "3",
                      title: "Guests Scan & Download",
                      desc: "Guests scan with their phone camera to open the folder and download photos",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                      color: "text-green-600 bg-green-100"
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${item.color} shrink-0`}>
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Setting Up Google Drive */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Setting Up Google Drive</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Before you can share photos, connect your Google account:
                </p>
                <ol className="space-y-4">
                  {[
                    { step: "1", title: "Open Settings", desc: "Click the settings icon in the top-right corner of the app" },
                    { step: "2", title: "Go to Integrations", desc: "Navigate to the Integrations section" },
                    { step: "3", title: "Connect Google", desc: "Click 'Connect Google Drive' and sign in to your Google account" },
                    { step: "4", title: "Grant Permissions", desc: "Allow the app to access your Google Drive for file uploads" },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-0.5">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="text-sm">
                      <span className="font-medium text-amber-900">Privacy Note:</span>
                      <span className="text-amber-800"> Photos are uploaded to your personal Google Drive. You retain full control and can delete them at any time. Guests only receive a link to view/download.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Uploading Photos */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Uploading Photos</h2>
              <div className="space-y-6">
                {/* Open QR sidebar */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Step 1: Open the QR Sidebar
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Click the QR code icon in the right sidebar to open the sharing panel.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">Location:</strong> Right sidebar, QR code icon
                    </p>
                  </div>
                </div>

                {/* Select destination */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Step 2: Choose a Destination Folder
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Select where to upload photos on your Google Drive:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span><strong className="text-gray-900">Existing folder:</strong> Browse your Google Drive and select a folder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span><strong className="text-gray-900">New folder:</strong> Create a new folder (auto-named with event date)</span>
                    </li>
                  </ul>
                </div>

                {/* Trigger upload */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Step 3: Upload Photos
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Click the upload button to begin uploading all photos from the current session:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Progress bar shows upload status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Uploads happen in the background — you can continue taking photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>A notification appears when upload completes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Using the QR Code */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Using the QR Code</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Once photos are uploaded, a QR code is automatically generated:
                </p>

                {/* Display options */}
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Display Options</h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      title: "Guest Display",
                      desc: "QR code shown automatically on secondary monitor",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    },
                    {
                      title: "Sidebar",
                      desc: "QR code visible in the right sidebar panel",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    },
                  ].map((option) => (
                    <div key={option.title} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 shrink-0">
                        {option.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-0.5">{option.title}</h4>
                        <p className="text-gray-600 text-sm">{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guest experience */}
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Guest Experience</h4>
                <div className="bg-white rounded-lg p-5 border border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Guests can scan the QR code with any smartphone:
                  </p>
                  <ol className="space-y-3 text-sm">
                    {[
                      "Open phone camera app (no special QR scanner needed)",
                      "Point camera at QR code",
                      "Tap the Google Drive link that appears",
                      "View and download photos directly to their device"
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Tips for Successful Sharing</h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Test Upload First", desc: "Do a test upload before your event to verify Google Drive connection" },
                    { title: "Good Lighting", desc: "Ensure the QR code is well-lit and easy to scan" },
                    { title: "Large QR Display", desc: "Use Guest Display for a larger, easier-to-scan QR code" },
                    { title: "Folder Organization", desc: "Create separate folders per event/session for better organization" },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-white/70 rounded-lg p-4 border border-blue-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between">
              <Link
                href="/docs/guide/taking-photos"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous: Taking Photos
              </Link>
              <Link
                href="/docs/guide/guest-display"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Next: Guest Display
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
