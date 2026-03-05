import Image from "next/image";
import Link from "next/link";

const subPages = [
  {
    title: "Setting Up the Canvas",
    href: "/docs/guide/collages/canvas",
    description: "Choose the output size and aspect ratio of your collage.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" /></svg>,
  },
  {
    title: "Adding Backgrounds",
    href: "/docs/guide/collages/backgrounds",
    description: "Set the background image that fills the canvas behind your frames.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  {
    title: "Adding Frames",
    href: "/docs/guide/collages/frames",
    description: "Create and position photo cutout zones on the canvas.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>,
  },
  {
    title: "Adding Overlays",
    href: "/docs/guide/collages/overlays",
    description: "Layer PNG decorations above or below your photo frames.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
  {
    title: "Saving & Using Sets",
    href: "/docs/guide/collages/saving",
    description: "Save your layout as a named set and start your photobooth session.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>,
  },
  {
    title: "Additional Tabs",
    href: "/docs/guide/collages/panels",
    description: "Reference for the Working Folder, Edit, and Export panels.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>,
  },
];

export default function CollagesPage() {
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
            <span className="text-gray-900 font-medium">Collage Creator</span>
          </nav>

          <article>
            {/* Hero */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Design</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Collage Creator</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Design custom photo layouts by combining canvases, frames, backgrounds, and overlays into reusable sets for your photobooth sessions.
              </p>
            </div>

            {/* Important callout */}
            <div className="mb-10 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <span className="font-medium text-amber-900">Required before Photobooth Mode:</span>
                  <span className="text-amber-800"> You must create and save at least one set before you can start a photobooth session. A set defines the layout template for your photos.</span>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/collages/collage-creator.png"
                alt="Collage Creator interface"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The Collage Creator workspace — browse photos on the left, design your collage in the center, and use the bottom toolbar to switch sets, backgrounds, and canvas sizes.</p>
              </div>
            </div>

            {/* Understanding Sets */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">Understanding Sets</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  A <strong>set</strong> is a reusable template that defines how photos are arranged during a photobooth session. Each set is made up of three layers:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Canvas", desc: "The base size and dimensions of your layout. This determines the final output resolution.", color: "bg-purple-100 text-purple-600" },
                    { label: "Frames", desc: "Photo cutout zones placed on the canvas. Each frame defines where a guest photo will appear. You can use multiple shapes and sizes.", color: "bg-indigo-100 text-indigo-600" },
                    { label: "Overlays", desc: "PNG images layered above or below the frames. Use these for branding, decorations, borders, or event themes.", color: "bg-pink-100 text-pink-600" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                      <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-semibold shrink-0 ${item.color}`}>
                        {item.label}
                      </span>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Layer diagram */}
                <div className="bg-white rounded-lg p-5 border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Layer Order (top to bottom)</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Top Overlay", color: "border-pink-300 bg-pink-50 text-pink-700", desc: "PNG overlay rendered on top of everything" },
                      { label: "Photos", color: "border-indigo-300 bg-indigo-50 text-indigo-700", desc: "Guest photos placed inside frame cutouts" },
                      { label: "Frames", color: "border-indigo-300 bg-indigo-50 text-indigo-700", desc: "Frame shapes that mask photo areas" },
                      { label: "Bottom Overlay", color: "border-pink-300 bg-pink-50 text-pink-700", desc: "PNG overlay rendered below frames" },
                      { label: "Background", color: "border-purple-300 bg-purple-50 text-purple-700", desc: "Background image or color filling the canvas" },
                    ].map((layer, i) => (
                      <div key={i} className={`flex items-center gap-3 rounded-lg border p-3 ${layer.color}`}>
                        <span className="font-medium text-sm min-w-[120px]">{layer.label}</span>
                        <span className="text-sm opacity-75">{layer.desc}</span>
                      </div>
                    ))}
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
                    className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:bg-white hover:shadow-sm transition-all group"
                  >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-100 text-purple-500 group-hover:bg-purple-200 group-hover:text-purple-700 transition-colors shrink-0 mt-0.5">
                      {page.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors text-sm mb-0.5">{page.title}</h3>
                      <p className="text-gray-500 text-sm">{page.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-purple-400 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
              <Link
                href="/docs/guide/collages/canvas"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Next: Setting Up the Canvas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
