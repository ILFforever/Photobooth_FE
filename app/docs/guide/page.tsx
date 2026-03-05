import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    description: "Everything you need to install the app and get your camera connected.",
    accent: "text-purple-600 bg-purple-100",
    border: "border-purple-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    pages: [
      { title: "Installation & Setup", href: "/docs/guide/getting-started", description: "Download, install, and configure your photobooth." },
      { title: "Camera Connection", href: "/docs/guide/camera-connection", description: "Connect and configure your PTP-compatible camera." },
      { title: "Signing In", href: "/docs/guide/signing-in", description: "Connect your Google account to enable photo sharing." },
    ],
  },
  {
    title: "Collage Creator",
    description: "Design and save collage sets before starting a photobooth session. The photobooth requires at least one saved set to run.",
    accent: "text-amber-600 bg-amber-100",
    border: "border-amber-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    pages: [
      { title: "Overview", href: "/docs/guide/collages", description: "What is a set and how the layers work." },
      { title: "Setting Up the Canvas", href: "/docs/guide/collages/canvas", description: "Choose the output size and aspect ratio." },
      { title: "Adding Backgrounds", href: "/docs/guide/collages/backgrounds", description: "Set the background image for your canvas." },
      { title: "Adding Frames", href: "/docs/guide/collages/frames", description: "Create and position photo cutout zones." },
      { title: "Adding Overlays", href: "/docs/guide/collages/overlays", description: "Layer PNG decorations above or below frames." },
      { title: "Saving & Using Sets", href: "/docs/guide/collages/saving", description: "Save your layout and start a photobooth session." },
      { title: "Additional Tabs", href: "/docs/guide/collages/panels", description: "Reference for the Working Folder, Edit, and Export panels." },
    ],
  },
  {
    title: "Setting Up the Photobooth",
    description: "Configure your photobooth session before shooting — select a collage set, verify your camera connection, and prepare for guests.",
    accent: "text-orange-600 bg-orange-100",
    border: "border-orange-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pages: [
      { title: "Setting Up the Photobooth", href: "/docs/guide/setting-up-photobooth", description: "Start a session with your saved collage set and verify camera live view." },
    ],
  },
  {
    title: "Using the Photobooth",
    description: "Capture photos, share with guests, and display a live slideshow during your photobooth session.",
    accent: "text-green-600 bg-green-100",
    border: "border-green-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pages: [
      { title: "Overview", href: "/docs/guide/photobooth", description: "How photobooth sessions work and what's covered in this section." },
      { title: "Taking Photos", href: "/docs/guide/taking-photos", description: "Capture photos with live preview and countdown timer." },
      { title: "QR Code Sharing", href: "/docs/guide/sharing", description: "Let guests download photos instantly via QR code." },
      { title: "Guest Display", href: "/docs/guide/guest-display", description: "Show a live photo slideshow on a secondary monitor." },
    ],
  },
  {
    title: "Maintenance",
    description: "Keep your software up to date and resolve common issues.",
    accent: "text-sky-600 bg-sky-100",
    border: "border-sky-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pages: [
      { title: "Updating Software", href: "/docs/guide/updating", description: "Keep your photobooth up to date with the latest features." },
      { title: "Troubleshooting", href: "/docs/guide/troubleshooting", description: "Solutions to common issues and error messages." },
    ],
  },
];

export default function GuidePage() {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
            ← Back to home
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <Link href="/docs" className="text-purple-600 hover:text-purple-700 text-sm">
            Docs
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">User Guide</h1>
        <p className="text-lg text-gray-500 mb-14">
          Reference guides for all parts of IPH Photobooth.
        </p>

        <div className="space-y-14">
          {sections.map((section, i) => (
            <section key={section.title}>
              {i > 0 && <hr className="border-gray-100 mb-14" />}

              {/* Section heading */}
              <div className={`flex items-center gap-3 mb-3 pb-3 border-b ${section.border}`}>
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg shrink-0 ${section.accent}`}>
                  {section.icon}
                </span>
                <h2 className="text-base font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-500 mb-5 text-sm leading-relaxed">
                {section.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="flex flex-col bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:bg-white hover:shadow-sm transition-all group"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm mb-1">
                      {page.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{page.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
