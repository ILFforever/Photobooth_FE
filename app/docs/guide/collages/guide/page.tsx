import Link from "next/link";
import Image from "next/image";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const workflow = [
  {
    num: 1,
    title: "Set a Background",
    desc: "Choose a color, gradient, or image to fill the canvas background.",
    href: "/docs/guide/collages/backgrounds",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
  },
  {
    num: 2,
    title: "Choose a Frame",
    desc: "Pick a frame template to organize your guest photo cutout zones.",
    href: "/docs/guide/collages/frames",
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    dot: "bg-indigo-500",
  },
  {
    num: 3,
    title: "Save as a Custom Set",
    desc: "Save your background and frame layout as a reusable template. Saved sets are available in Photobooth mode.",
    href: "/docs/guide/collages/saving",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    num: 4,
    title: "Add Photos",
    desc: "Use the File Gallery tab to browse and place photos from your working folder. Not required for Photobooth mode — photos are captured automatically during a session.",
    href: "/docs/guide/collages/panels",
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    dot: "bg-cyan-500",
    optional: true,
  },
  {
    num: 5,
    title: "Arrange & Edit",
    desc: "Adjust photo position, scale, rotation, and layer order. Not required for Photobooth mode.",
    href: "/docs/guide/collages/panels",
    color: "bg-teal-100 text-teal-700 border-teal-200",
    dot: "bg-teal-500",
    optional: true,
  },
  {
    num: 6,
    title: "Export",
    desc: "Render and save the finished collage as an image. Not required for Photobooth mode — export is done after the session.",
    href: "/docs/guide/collages/panels",
    color: "bg-green-100 text-green-700 border-green-200",
    dot: "bg-green-500",
    optional: true,
  },
];

const tabs = [
  {
    title: "Custom Sets",
    desc: "Set the background and frame layout as a reusable template. Saved sets are available directly in Photobooth mode.",
    links: [
      { label: "Learn Backgrounds", href: "/docs/guide/collages/backgrounds" },
      { label: "Learn Frames", href: "/docs/guide/collages/frames" },
      { label: "Saving & Using Sets", href: "/docs/guide/collages/saving" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Background",
    desc: "Set the canvas background with solid colors, gradients, or a custom image.",
    links: [{ label: "Open Background guide", href: "/docs/guide/collages/backgrounds" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Frames",
    desc: "Choose a frame template to organise photo cutout zones on the canvas.",
    links: [{ label: "Open Frames guide", href: "/docs/guide/collages/frames" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    accent: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "File Gallery",
    desc: "Browse and select photos from your active working folder.",
    links: [{ label: "Open Additional Tabs guide", href: "/docs/guide/collages/panels" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    accent: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Edit",
    desc: "Adjust the selected photo's position, scale, and rotation.",
    links: [{ label: "Open Additional Tabs guide", href: "/docs/guide/collages/panels" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    accent: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Layers",
    desc: "View and reorder all photos on the canvas. Drag to change z-order.",
    links: [{ label: "Open Additional Tabs guide", href: "/docs/guide/collages/panels" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "bg-rose-50 border-rose-100",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    title: "Export",
    desc: "Render and save the current canvas to a high-resolution image.",
    links: [{ label: "Open Additional Tabs guide", href: "/docs/guide/collages/panels" }],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    accent: "bg-green-50 border-green-100",
    iconBg: "bg-green-100 text-green-600",
  },
];

export default function CollageGuidePage() {
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
          <Link href="/docs/guide/collages" className="hover:text-purple-600 transition-colors">Collage Creator</Link>
          <Chevron />
          <span className="text-gray-900 font-medium">Quick Start</span>
        </nav>

        <article>
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </span>
            <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Collage Creator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Collage Creator Guide</h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            A quick reference for the Collage Creator workflow and all available tabs. Follow the six steps below to build your first layout, then use the tab reference to explore each feature in depth.
          </p>

          {/* In-app guide screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/collages/collage-help.png"
              alt="Collage Creator Guide modal showing the workflow steps and tab reference"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                The in-app Collage Creator Guide — accessible from the help icon inside the Collage Creator. Left panel shows the six-step workflow; right panel is a tab reference.
              </p>
            </div>
          </div>

          {/* Workflow */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Workflow</h2>
            <p className="text-gray-500 text-sm mb-6">Follow these six steps in order to design a layout and prepare it for Photobooth mode.</p>

            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gray-200" aria-hidden="true" />

              <div className="space-y-3">
                {workflow.map((step) => (
                  <Link
                    key={step.num}
                    href={step.href}
                    className="group relative flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
                  >
                    <span className={`relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shrink-0 border ${step.color}`}>
                      {step.num}
                    </span>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors">{step.title}</h3>
                        {step.optional && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200">Optional</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-purple-400 shrink-0 mt-2 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Tab reference */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tab Reference</h2>
            <p className="text-gray-500 text-sm mb-6">Each tab in the Collage Creator sidebar serves a distinct purpose. Click any card to read the full guide for that tab.</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {tabs.map((tab) => (
                <Link
                  key={tab.title}
                  href={tab.links[0].href}
                  className={`group flex items-start gap-4 rounded-xl p-5 border hover:shadow-sm hover:border-purple-200 transition-all ${tab.accent}`}
                >
                  <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5 ${tab.iconBg}`}>
                    {tab.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors mb-1">{tab.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{tab.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom nav */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/collages" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Collage Creator
            </Link>
            <Link
              href="/docs/guide/collages/canvas"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Next: Setting Up the Canvas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
