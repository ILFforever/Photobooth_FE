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
      { title: "Quick Start", href: "/docs/guide/collages/guide", description: "Workflow overview and tab reference for the Collage Creator." },
      { title: "Setting Up the Canvas", href: "/docs/guide/collages/canvas", description: "Choose the output size and aspect ratio." },
      { title: "Adding Backgrounds", href: "/docs/guide/collages/backgrounds", description: "Set the background image for your canvas." },
      { title: "Adding Frames", href: "/docs/guide/collages/frames", description: "Create and position photo cutout zones." },
      { title: "Adding Overlays", href: "/docs/guide/collages/overlays", description: "Layer PNG decorations above or below frames." },
      { title: "Saving & Using Sets", href: "/docs/guide/collages/saving", description: "Save your layout as a named set, and export or import sets as .ptbs files." },
      { title: "Additional Tabs", href: "/docs/guide/collages/panels", description: "Reference for the Working Folder, Edit, and Export panels." },
    ],
  },
  {
    title: "Setting Up the Photobooth",
    description: "Configure your photobooth settings, connect equipment, and prepare everything before your event.",
    accent: "text-orange-600 bg-orange-100",
    border: "border-orange-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pages: [
      { title: "Overview", href: "/docs/guide/photobooth", description: "Understand the photobooth interface, how sessions work, and what each area does." },
      { title: "Setting Up", href: "/docs/guide/setting-up-photobooth", description: "Configure settings, select a collage set, and verify connections." },
      { title: "Working Folder", href: "/docs/guide/setting-up-photobooth/working-folder", description: "Set the folder where session photos are saved." },
      { title: "Select Set", href: "/docs/guide/setting-up-photobooth/select-set", description: "Load a collage template to define the session layout." },
      { title: "Delay Settings", href: "/docs/guide/setting-up-photobooth/delay-settings", description: "Configure the countdown timer and interval between shots." },
      { title: "Naming Scheme", href: "/docs/guide/setting-up-photobooth/naming-scheme", description: "Customize how output files are named." },
      { title: "QR Settings", href: "/docs/guide/setting-up-photobooth/qr-settings", description: "Upload to Google Drive and generate guest download QR codes." },
      { title: "GIF Generation", href: "/docs/guide/setting-up-photobooth/gif-generation", description: "Automatically create animated GIFs from each round of shots." },
      { title: "Print Settings", href: "/docs/guide/setting-up-photobooth/print-settings", description: "Configure automatic printing after each capture." },
    ],
  },
  {
    title: "Using the Photobooth",
    description: "Run your photobooth session — capture photos, share with guests, and display live slideshow.",
    accent: "text-green-600 bg-green-100",
    border: "border-green-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pages: [
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
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="mb-10 flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="/docs" className="text-gray-500 hover:text-purple-600 transition-colors">
                Docs
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">User Guide</span>
            </nav>

            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                User Guide
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Complete reference guides for every part of IPH Photobooth, from initial setup to running live events.
              </p>
            </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="bg-gray-50 rounded-2xl p-8">
              {/* Section heading */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${section.accent}`}>
                    {section.icon}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-11">
                  {section.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group flex flex-col p-4 rounded-lg bg-white border border-gray-200 hover:border-purple-200 hover:bg-gray-50 transition-all"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm mb-1">
                      {page.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{page.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28" style={{marginTop: '17rem'}}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
              <nav className="space-y-1">
                <Link href="/docs" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                  Documentation Home
                </Link>
                <Link href="/docs/developer" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                  Developer Docs
                </Link>
                <Link href="/releases" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                  Releases
                </Link>
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Can't find what you're looking for? Check our troubleshooting guides or reach out for support.
                </p>
                <Link
                  href="/docs/guide/troubleshooting"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  Troubleshooting
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
