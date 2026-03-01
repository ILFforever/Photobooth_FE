import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs" className="hover:text-purple-600 transition-colors">
              Docs
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">
              User Guide
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">Getting Started</span>
          </nav>

          <article>
            {/* Hero Header */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Quick Start</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Getting Started</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Get IPH Photobooth up and running in minutes. Follow this guide to install, configure, and start taking beautiful photos.
              </p>
              {/* Estimated time */}
              <div className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>~5 min setup</span>
              </div>
            </div>

            {/* On this page */}
            <div className="mb-14 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">On this page</h4>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: "System Requirements", href: "#requirements" },
                  { label: "Download & Installation", href: "#installation" },
                  { label: "Connect Your Camera", href: "#camera" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <section id="requirements" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">1</span>
                <h2 className="text-2xl font-semibold text-gray-900">System Requirements</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">Before you begin, make sure your system meets these requirements:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Operating System", value: "Windows 10 or 11 (64-bit)" },
                    { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: "RAM", value: "8 GB recommended (4 GB min)" },
                    { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", label: "Storage", value: "250 MB for application" },
                    { icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z", label: "Camera", value: "PTP-compatible USB camera" },
                  ].map((req) => (
                    <div key={req.label} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-50 text-purple-500 shrink-0 mt-0.5">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={req.icon} /></svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-900 text-sm">{req.label}</span>
                        <p className="text-gray-500 text-sm">{req.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Download & Install */}
            <section id="installation" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">2</span>
                <h2 className="text-2xl font-semibold text-gray-900">Download & Installation</h2>
              </div>

              {/* Vertical timeline steps */}
              <div className="relative pl-8 border-l-2 border-purple-200 space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Download the Installer</h3>
                    <p className="text-gray-700 mb-4">
                      Visit our <Link href="/#download" className="text-purple-600 hover:underline font-medium">download page</Link> to get the latest MSI installer.
                      The download includes everything you need — no separate downloads required.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      File size: approximately 200-300 MB
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Run the Installer</h3>
                    <ol className="space-y-3">
                      {[
                        <>Locate the downloaded <code className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">.msi</code> file</>,
                        "Double-click the file to launch the installer",
                        <>Click &quot;Install&quot; when prompted by Windows SmartScreen <span className="text-gray-400">(this is normal)</span></>,
                        "Follow the installation wizard prompts",
                        "Wait for the installation to complete",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold shrink-0 mt-0.5">{i + 1}</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Launch the Application</h3>
                    <p className="text-gray-700 mb-4">
                      After installation completes, launch IPH Photobooth from your Start menu:
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-100 space-y-3 font-mono text-sm">
                      <div className="flex items-center gap-3 text-gray-700">
                        <kbd className="bg-gray-100 px-2.5 py-1 rounded border border-gray-200 text-xs font-sans font-medium">Win</kbd>
                        <span className="text-gray-400">then type</span>
                        <code className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded">IPH Photobooth</code>
                        <span className="text-gray-400">then press</span>
                        <kbd className="bg-gray-100 px-2.5 py-1 rounded border border-gray-200 text-xs font-sans font-medium">Enter</kbd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Connect Camera */}
            <section id="camera" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">3</span>
                <h2 className="text-2xl font-semibold text-gray-900">Connect Your Camera</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Supported Cameras</h3>
                  <p className="text-gray-700 mb-4">
                    IPH Photobooth works with PTP-compatible cameras. Most modern DSLR and mirrorless cameras are supported:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { name: "Fujifilm X-Series", status: "Full Support" },
                      { name: "Canon EOS Series", status: "Full Support" },
                    ].map((cam) => (
                      <div key={cam.name} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{cam.name}</span>
                          <span className="text-green-600 text-xs ml-2">{cam.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mt-4">
                    Other camera brands may function but some camera settings from the app may not work.
                  </p>
                </div>

                {/* Link to camera connection guide */}
                <Link href="/docs/guide/camera-connection" className="block bg-purple-50 rounded-xl p-6 border border-purple-100 hover:border-purple-200 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                        Follow the camera connection guide →
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Step-by-step instructions for connecting Fujifilm, Canon, and other PTP-compatible cameras.
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-500 group-hover:bg-purple-200 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </section>

            {/* What's Next */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What&apos;s Next?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: "/docs/guide/taking-photos", title: "Taking Photos", desc: "Capturing, countdown, and photo settings.", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" },
                  { href: "/docs/guide/collages", title: "Photo Collages", desc: "Create beautiful 2x2 collages automatically.", icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" },
                  { href: "/docs/guide/sharing", title: "QR Code Sharing", desc: "Let guests download photos instantly.", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" },
                  { href: "/docs/guide/troubleshooting", title: "Troubleshooting", desc: "Solutions to common issues.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 text-purple-400 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                      </span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm ml-11">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
