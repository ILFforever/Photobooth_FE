import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function SettingUpPhotoboothPage() {
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
          <Link href="/docs/guide/photobooth" className="hover:text-purple-600 transition-colors">Using the Photobooth</Link>
          <Chevron />
          <span className="text-gray-900 font-medium">Setting Up</span>
        </nav>

        <article>
          {/* Hero */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Photobooth</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Setting Up the Photobooth</h1>
          <p className="text-lg text-gray-500 mb-12">
            Select your saved collage set, verify your camera live view, and get ready to start shooting.
          </p>

          {/* Prerequisites callout */}
          <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <span className="font-medium text-amber-900">Before starting:</span>
                <span className="text-amber-800"> Make sure your camera is connected and you have created at least one collage set in the{" "}
                  <Link href="/docs/guide/collages" className="underline hover:text-amber-900">Collage Creator</Link>.
                  The photobooth requires a set to define the photo layout.
                </span>
              </div>
            </div>
          </div>

          {/* Explore Photobooth CTA */}
          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="font-medium text-green-900">About the Photobooth interface</span>
                <span className="text-green-800"> The photobooth has four main areas: camera controls, guest preview, operator interface, and photo sessions. <Link href="/docs/guide/photobooth" className="underline hover:text-green-900 font-medium">Learn more</Link></span>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/setting-up.png"
              alt="Setting up photobooth session"
              width={1388}
              height={868}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The photobooth interface ready to start — use the set selector in the bottom toolbar to choose your layout.</p>
            </div>
          </div>

          {/* Step 1: Select a Set */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-semibold shrink-0">1</span>
                Select Your Set
              </h2>
              <p className="text-gray-700 mb-4">
                Choose the collage layout you want to use for this session:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Locate the set selector in the bottom toolbar center</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Click the dropdown to see all your saved sets</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>Select a set to load it as the active layout template</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step 2: Verify Live View */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-semibold shrink-0">2</span>
                Verify Live View
              </h2>
              <p className="text-gray-700 mb-4">
                Once your set is loaded, confirm the camera live view is active:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>The live preview appears in the left panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>You should see a real-time feed from your camera</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>If the preview is missing, check your <Link href="/docs/guide/camera-connection" className="text-green-600 hover:text-green-700 underline">camera connection</Link></span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step 3: You're Ready */}
          <section className="mb-12">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-semibold shrink-0">3</span>
                You&apos;re Ready to Capture
              </h2>
              <p className="text-gray-700 mb-4">
                With your set loaded and live view active, you can now:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Take Photos", desc: "Click the capture button or press Space to start a countdown and capture a photo", href: "/docs/guide/taking-photos" },
                  { title: "Enable QR Sharing", desc: "Upload photos to Google Drive and generate a QR code for guests", href: "/docs/guide/sharing" },
                  { title: "Enable Guest Display", desc: "Open a slideshow and QR code on a secondary monitor", href: "/docs/guide/guest-display" },
                  { title: "Switch Sets", desc: "Change your collage layout at any time via the set selector", href: null },
                ].map((action) => (
                  <div key={action.title} className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-medium text-gray-900 text-sm mb-0.5">
                      {action.href ? (
                        <Link href={action.href} className="hover:text-green-600 transition-colors">{action.title}</Link>
                      ) : action.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{action.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom nav */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/docs/guide/photobooth"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Photobooth Overview
            </Link>
            <Link
              href="/docs/guide/taking-photos"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Next: Taking Photos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
