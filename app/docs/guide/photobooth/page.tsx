import Image from "next/image";
import Link from "next/link";

const subPages = [
  {
    title: "Setting Up the Photobooth",
    href: "/docs/guide/setting-up-photobooth",
    description: "Select a saved set, verify your camera live view, and start a session.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Taking Photos",
    href: "/docs/guide/taking-photos",
    description: "Capture photos with live preview, countdown timer, and automatic frame placement.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "QR Code Sharing",
    href: "/docs/guide/sharing",
    description: "Upload photos to Google Drive and generate a scannable QR code for guests.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
  },
  {
    title: "Guest Display",
    href: "/docs/guide/guest-display",
    description: "Show a live photo slideshow and QR code on a secondary monitor for your guests.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
];

export default function PhotoboothPage() {
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
          <span className="text-gray-900 font-medium">Photobooth</span>
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
              <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Photobooth</h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Run live photobooth sessions — capture photos with countdown timers, share instantly via QR code, and show a slideshow on a guest display.
            </p>
          </div>

          {/* Prerequisite callout */}
          <div className="mb-10 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <span className="font-medium text-amber-900">Required before starting:</span>
                <span className="text-amber-800"> You must have a camera connected and at least one saved collage set from the{" "}
                  <Link href="/docs/guide/collages" className="underline hover:text-amber-900">Collage Creator</Link>
                  {" "}before you can run a photobooth session.
                </span>
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
              <p className="text-xs text-gray-500">The photobooth interface — left sidebar shows camera controls, center displays the guest preview with session gallery below, right sidebar lists all photo sessions.</p>
            </div>
          </div>

          {/* Understanding the Interface */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Understanding the Interface</h2>
            <p className="text-gray-600 mb-6">
              The photobooth interface is organized into four main areas, each designed for a specific part of your workflow:
            </p>

            {/* Interface areas grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Camera Controls",
                  desc: "Connect your camera, toggle live view, and adjust settings like shutter speed, aperture, ISO, and white balance.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>,
                  color: "bg-green-50 border-green-200",
                  iconColor: "text-green-600",
                },
                {
                  title: "Guest Display",
                  desc: "Main preview area showing live camera feed with view controls. Open on a second screen for guests to see themselves.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  title: "Operator Interface",
                  desc: "Main operator controls with shutter button, countdown timer display, including photobooth auto and pause buttons",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  color: "bg-rose-50 border-rose-200",
                  iconColor: "text-rose-600",
                },
                {
                  title: "Photo Sessions",
                  desc: "List of all photobooth sessions with dates and photo counts. Load previous sessions or create new ones.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                  color: "bg-orange-50 border-orange-200",
                  iconColor: "text-orange-600",
                },
              ].map((area) => (
                <div key={area.title} className={`bg-white rounded-xl p-5 border ${area.color} hover:shadow-sm transition-shadow`}>
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${area.color} ${area.iconColor} mb-3`}>
                    {area.icon}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-1">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick reference diagram */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-5">Interface Layout</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  {/* Top bar */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg px-5 py-4 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-700 text-sm">Top Bar</span>
                      <span className="text-slate-500 text-xs">Capture Center Logo · Photobooth Title · Account Dropdown</span>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className="flex gap-4 h-80">
                    {/* Control Center */}
                    <div className="w-36 bg-gradient-to-b from-green-50 to-green-100/50 border-2 border-green-300 rounded-lg p-5 flex flex-col">
                      <div className="font-semibold text-green-700 text-sm mb-4">Control Center</div>
                      <div className="space-y-3 text-xs text-green-600 flex-1">
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-green-300">Camera Status</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-green-300">Live View</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-green-300">Settings</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-green-300">Polling</div>
                      </div>
                    </div>

                    {/* Center panel */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Guest display */}
                      <div className="flex-1 bg-gradient-to-b from-blue-50 to-blue-100/50 border-2 border-blue-300 rounded-lg p-4">
                        <div className="font-semibold text-blue-700 text-sm mb-3">Guest Display</div>
                        <div className="flex gap-2 text-xs text-blue-600">
                          <div className="bg-white/70 rounded px-3 py-2 border border-blue-300 flex-1 text-center">Live Preview</div>
                          <div className="bg-white/70 rounded px-3 py-2 border border-blue-300 flex-1 text-center">View Controls</div>
                          <div className="bg-white/70 rounded px-3 py-2 border border-blue-300 flex-1 text-center">2nd Screen</div>
                        </div>
                      </div>
                      {/* Session gallery */}
                      <div className="h-20 bg-gradient-to-b from-purple-50 to-purple-100/50 border-2 border-purple-300 rounded-lg p-4">
                        <div className="flex items-center justify-between h-full">
                          <div>
                            <div className="font-semibold text-purple-700 text-sm mb-1">Session Gallery</div>
                            <div className="text-xs text-purple-600">Photo Grid · Navigation · Finalize</div>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="w-8 h-8 bg-purple-200 rounded border border-purple-300"></div>
                            <div className="w-8 h-8 bg-purple-200 rounded border border-purple-300"></div>
                            <div className="w-8 h-8 bg-purple-200 rounded border border-purple-300"></div>
                          </div>
                        </div>
                      </div>
                      {/* Operator interface */}
                      <div className="h-20 bg-gradient-to-b from-rose-50 to-rose-100/50 border-2 border-rose-300 rounded-lg p-4">
                        <div className="flex items-center justify-between h-full">
                          <div>
                            <div className="font-semibold text-rose-700 text-sm mb-1">Operator Interface</div>
                            <div className="text-xs text-rose-600">Shutter Button · Countdown Timer · Operator Controls</div>
                          </div>
                          <div className="flex gap-2 items-center">
                            <div className="w-12 h-8 bg-rose-200 rounded border border-rose-300 flex items-center justify-center text-xs font-semibold text-rose-700">03</div>
                            <div className="w-10 h-10 bg-rose-300 rounded-full border border-rose-400"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="w-36 bg-gradient-to-b from-orange-50 to-orange-100/50 border-2 border-orange-300 rounded-lg p-5 flex flex-col">
                      <div className="font-semibold text-orange-700 text-sm mb-4">Photo Sessions</div>
                      <div className="space-y-3 text-xs text-orange-600 flex-1">
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-orange-300">Session List</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-orange-300">Active Badge</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-orange-300">Load Button</div>
                        <div className="bg-white/70 rounded px-4 py-2.5 border border-orange-300">Session Info</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Photos Are Stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">How Photos Are Stored</h2>
            <p className="text-gray-600 mb-6">
              The photobooth uses a simple folder system to keep your photos organized. You select a working folder when setting up, and the program automatically creates numbered subfolders for each session.
            </p>

            {/* Folder structure diagram */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Folder Structure</h3>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 font-mono text-xs">
                <div className="space-y-2">
                  {/* Working folder */}
                  <div className="flex items-center gap-3 text-gray-100">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                    <span className="font-semibold">Intania Job fair</span>
                    <span className="text-gray-500 text-xs">(your working folder)</span>
                  </div>

                  {/* Vertical line from working folder */}
                  <div className="ml-2 pl-1 border-l border-gray-600">
                    <div className="space-y-2">
                      {/* PTB file */}
                      <div className="flex items-center gap-2 text-blue-400">
                        <div className="w-4 h-px bg-gray-600"></div>
                        <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="font-semibold">.ptb</span>
                        <span className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded text-xs border border-blue-700">This tracks the session state</span>
                      </div>

                      {/* First session */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-px bg-gray-600 mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-orange-400">
                            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                            <span className="font-semibold">Intania Job fair_001</span>
                          </div>
                          {/* Photos */}
                          <div className="ml-6 pl-1 border-l border-gray-700 mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_001.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_002.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_003.jpeg</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Second session */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-px bg-gray-600 mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-orange-400">
                            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                            <span className="font-semibold">Intania Job fair_002</span>
                          </div>
                          {/* Photos */}
                          <div className="ml-6 pl-1 border-l border-gray-700 mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_001.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_002.jpeg</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Third session */}
                      <div className="flex items-center gap-2 text-orange-400">
                        <div className="w-4 h-px bg-gray-600"></div>
                        <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                        <span className="font-semibold">Intania Job fair_003</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How the Session System Works</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Think of a <strong>working folder</strong> as the event location — like "Sarah's Wedding" or "Company Party". All photos from that event go in this one folder. Within that folder, each <strong>session</strong> represents a group that comes through the photobooth — in the order they arrive. Session 001 is the first group, Session 002 is the second group, and so on. The <code className="bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-mono">.ptb</code> file quietly keeps track of everything in the background.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* In this section */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">In this section</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {subPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-100 text-green-500 group-hover:bg-green-200 group-hover:text-green-700 transition-colors shrink-0 mt-0.5">
                    {page.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors text-sm mb-0.5">{page.title}</h3>
                    <p className="text-gray-500 text-sm">{page.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-green-400 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom nav */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
            <Link
              href="/docs/guide/setting-up-photobooth"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Next: Setting Up the Photobooth
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
