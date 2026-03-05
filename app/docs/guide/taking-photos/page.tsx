import Image from "next/image";
import Link from "next/link";

export default function TakingPhotosPage() {
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
            <span className="text-gray-900 font-medium">Taking Photos</span>
          </nav>

          <article>
            {/* Hero */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Photobooth</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Taking Photos</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Capture photos with live preview, countdown timer, and automatic collage placement. The photobooth mode is designed for fast, intuitive operation during events.
              </p>
            </div>

            {/* Prerequisites callout */}
            <div className="mb-10 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-blue-900">Before you begin:</span>
                  <span className="text-blue-800"> Make sure your camera is connected and live view is active. You must have at least one saved collage set to start a photobooth session.</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/taking-photos.png"
                alt="Photobooth interface"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The photobooth interface — live view from your camera on the left, current session gallery on the right, and controls at the bottom.</p>
              </div>
            </div>

            {/* Starting a Session */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Starting a Photobooth Session</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Before you can take photos, you need to start a photobooth session with a saved set:
                </p>
                <ol className="space-y-4">
                  {[
                    { step: "1", title: "Select a set", desc: "Click the set selector in the bottom toolbar to choose your saved layout." },
                    { step: "2", title: "Verify live view", desc: "Ensure your camera is connected and the live preview is visible on the left." },
                    { step: "3", title: "Position subjects", desc: "Guide guests to position themselves within the frame using the live preview." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-semibold shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-0.5">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Capturing Photos */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Capturing Photos</h2>
              <div className="space-y-6">
                {/* Capture methods */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                    Capture Methods
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-2">Click Capture Button</h4>
                      <p className="text-gray-600 text-sm">Click the circular capture button in the bottom center of the screen.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-2">Keyboard Shortcut</h4>
                      <p className="text-gray-600 text-sm">Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Space</kbd> to trigger capture with your keyboard.</p>
                    </div>
                  </div>
                </div>

                {/* Countdown timer */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Countdown Timer
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you trigger a capture, a countdown timer gives guests time to prepare:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Large numbers display on both your screen and the guest display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Default countdown is 3 seconds (configurable in settings)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Flash effect appears when photo is captured</span>
                    </li>
                  </ul>
                </div>

                {/* After capture */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    After Capture
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Once a photo is captured:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Photo appears in the current session gallery on the right</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Guest display shows the captured photo briefly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Photos automatically fill the frames in your set (left to right, top to bottom)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>Live view resumes automatically for the next shot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Managing Session Photos */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Managing Session Photos</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  The session gallery on the right shows all photos from the current session. You can:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "View Full Size",
                      desc: "Click any photo to view it at full resolution",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    },
                    {
                      title: "Remove Photos",
                      desc: "Delete unwanted photos from the session",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    },
                    {
                      title: "Reorder Frames",
                      desc: "Drag photos to change their frame positions",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" /></svg>
                    },
                    {
                      title: "Print or Export",
                      desc: "Print individual photos or export to file",
                      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    },
                  ].map((action) => (
                    <div key={action.title} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 text-green-600 shrink-0">
                        {action.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-0.5">{action.title}</h4>
                        <p className="text-gray-600 text-sm">{action.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Tips for Great Photos</h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Good Lighting", desc: "Ensure even lighting on subjects' faces for best results" },
                    { title: "Frame Spacing", desc: "Leave space around subjects if your frames have borders" },
                    { title: "Test Shots", desc: "Take test photos before the event to verify positioning" },
                    { title: "Background", desc: "Use a simple, uncluttered background for cleaner photos" },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-white/70 rounded-lg p-4 border border-green-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
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
                href="/docs/guide/collages/saving"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous: Saving & Using Sets
              </Link>
              <Link
                href="/docs/guide/sharing"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Next: QR Code Sharing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
