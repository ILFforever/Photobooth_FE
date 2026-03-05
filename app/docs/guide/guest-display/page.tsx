import Image from "next/image";
import Link from "next/link";

export default function GuestDisplayPage() {
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
            <span className="text-gray-900 font-medium">Guest Display</span>
          </nav>

          <article>
            {/* Hero */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-orange-50 via-amber-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-orange-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-orange-600 tracking-wide uppercase">Display</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Guest Display</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Connect a second monitor to show a live photo slideshow, countdown timer, and QR code. Give guests an exciting, interactive experience while you control the photobooth from your main screen.
              </p>
            </div>

            {/* Prerequisites callout */}
            <div className="mb-10 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-orange-900">Required:</span>
                  <span className="text-orange-800"> A second monitor connected to your computer. Guest Display can be enabled from the top bar menu.</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/photobooth/guest-display.png"
                alt="Guest display interface"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The Guest Display shows a full-screen slideshow of captured photos, countdown during capture, and QR code for easy sharing.</p>
              </div>
            </div>

            {/* What is Guest Display */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">What is Guest Display?</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Guest Display is a secondary monitor output designed specifically for your event guests. While you control the photobooth from your main screen, guests see an engaging, full-screen experience on a separate display.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Live Slideshow",
                      desc: "Photos appear automatically after capture in a beautiful slideshow",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                      color: "text-purple-600 bg-purple-100"
                    },
                    {
                      title: "Countdown Timer",
                      desc: "Large numbers help guests prepare for the perfect shot",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      color: "text-orange-600 bg-orange-100"
                    },
                    {
                      title: "QR Code Display",
                      desc: "Easily scannable QR code for instant photo downloads",
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                      color: "text-blue-600 bg-blue-100"
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="bg-white rounded-lg p-4 border border-gray-100 flex flex-col items-center text-center">
                      <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-3`}>
                        {feature.icon}
                      </span>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Setting Up Guest Display */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Setting Up Guest Display</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Follow these steps to set up a secondary monitor for your guests:
                </p>
                <ol className="space-y-4">
                  {[
                    { step: "1", title: "Connect Monitor", desc: "Plug in a second monitor to your computer (HDMI, DisplayPort, etc.)" },
                    { step: "2", title: "Configure Display", desc: "Open Windows display settings and set up extended desktop mode" },
                    { step: "3", title: "Enable Guest Display", desc: "Click the Guest Display icon in the top bar and select your secondary monitor" },
                    { step: "4", title: "Position Display", desc: "Arrange monitors so guests can see the secondary screen clearly" },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold shrink-0">
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

            {/* Display States */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Display States</h2>
              <p className="text-gray-600 mb-5">
                The Guest Display automatically changes based on what's happening in the photobooth:
              </p>
              <div className="space-y-4">
                {[
                  {
                    state: "Idle Screen",
                    desc: "When the photobooth is ready, guests see a welcoming idle screen with branding or instructions",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    color: "border-orange-300 bg-orange-50 text-orange-700"
                  },
                  {
                    state: "Countdown",
                    desc: "Large countdown numbers appear when a photo is about to be taken (3, 2, 1...)",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    color: "border-amber-300 bg-amber-50 text-amber-700"
                  },
                  {
                    state: "Flash Effect",
                    desc: "Screen flashes white briefly when the photo is captured",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                    color: "border-yellow-300 bg-yellow-50 text-yellow-700"
                  },
                  {
                    state: "Photo Display",
                    desc: "Captured photo appears full screen for a few seconds",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                    color: "border-purple-300 bg-purple-50 text-purple-700"
                  },
                  {
                    state: "Gallery Slideshow",
                    desc: "All photos from the current session cycle through in an automatic slideshow",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                    color: "border-indigo-300 bg-indigo-50 text-indigo-700"
                  },
                  {
                    state: "QR Code",
                    desc: "When sharing is enabled, a large QR code appears for guests to scan",
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                    color: "border-blue-300 bg-blue-50 text-blue-700"
                  },
                ].map((item) => (
                  <div key={item.state} className={`flex items-center gap-4 rounded-lg border p-4 ${item.color}`}>
                    <span className="shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.state}</h4>
                      <p className="text-sm opacity-75">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Display Features */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Display Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Automatic Transitions",
                    desc: "Display smoothly transitions between states without operator intervention",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  },
                  {
                    title: "Full Screen Mode",
                    desc: "Guest Display runs in full screen for an immersive experience",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  },
                  {
                    title: "Custom Branding",
                    desc: "Add your logo or event branding to the idle screen",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  },
                  {
                    title: "Photo Duration Control",
                    desc: "Adjust how long each photo displays in slideshow mode",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                      {feature.icon}
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Monitor Placement Tips */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Monitor Placement Tips</h2>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Eye Level", desc: "Position the monitor at eye level for comfortable viewing" },
                    { title: "Angle Towards Guests", desc: "Tilt the display slightly toward where guests will be standing" },
                    { title: "Avoid Glare", desc: "Place away from windows or bright lights that cause glare" },
                    { title: "Cable Management", desc: "Secure cables to prevent tripping hazards during events" },
                    { title: "Distance", desc: "Place 4-6 feet away so guests can see without standing too close" },
                    { title: "Test Before Event", desc: "Run a test session to verify visibility from guest positions" },
                  ].map((tip) => (
                    <div key={tip.title} className="bg-white/70 rounded-lg p-4 border border-orange-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Troubleshooting</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-4">
                  {[
                    {
                      issue: "Guest Display not showing",
                      solution: "Verify the secondary monitor is connected and enabled in Windows display settings. Try opening Guest Display again from the top bar."
                    },
                    {
                      issue: "Display appears on wrong monitor",
                      solution: "Use Windows display settings to set your main monitor. Guest Display will appear on the secondary monitor."
                    },
                    {
                      issue: "Photos look distorted",
                      solution: "Check the resolution settings on the secondary monitor match its native resolution."
                    },
                    {
                      issue: "Display is blank",
                      solution: "Make sure you have captured at least one photo in the current session. The display may be in idle mode."
                    },
                  ].map((item) => (
                    <div key={item.issue} className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.issue}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between">
              <Link
                href="/docs/guide/sharing"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous: QR Code Sharing
              </Link>
              <Link
                href="/docs/guide"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Back to User Guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
