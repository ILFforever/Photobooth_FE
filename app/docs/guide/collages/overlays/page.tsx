import Image from "next/image";
import Link from "next/link";
import { mdiEyeOutline, mdiKeyboard } from "@mdi/js";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function OverlaysPage() {
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
            <span className="text-gray-900 font-medium">Overlays</span>
          </nav>

          <article>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </span>
              <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Collage Creator</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Adding Overlays</h1>
            <p className="text-lg text-gray-500 mb-12">
              Overlays are transparent PNG images that add decorations, branding, or borders to your collage — placed above or below the photo frames.
            </p>

            {/* Layers panel screenshot */}
            <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/collages/layers.png"
                alt="Layers panel showing overlay management"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The Layers panel lets you manage overlays — adjust position, scale, rotation, opacity, and choose whether they render above or below the frames. Click on the overlay name to rename it.</p>
              </div>
            </div>

            {/* Positioning */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Positioning Overlays</h2>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Each overlay sits in one of two sections in the Layers panel. Drag it between <strong>Above Frames</strong> and <strong>Below Frames</strong>, or use the <strong>Above</strong> / <strong>Below</strong> buttons at the bottom of the panel.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Above Frames", desc: "Renders on top of everything — including photos. Best for borders, watermarks, and branding that should always be visible.", icon: "M5 15l7-7 7 7" },
                    { title: "Below Frames", desc: "Renders behind the frames but above the background. Use for subtle textures or decorative elements that sit behind the photos.", icon: "M19 9l-7 7-7-7" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 text-pink-600 shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Layer properties */}
            <section className="mb-8">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Layer Properties</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Position & Transform", desc: "Set X/Y coordinates, scale, rotation, and opacity to precisely place each overlay.", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
                    { title: "Blend Mode", desc: "Choose how the overlay blends with layers below (Normal, Multiply, Screen, etc.).", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
                    { title: "Rename", desc: "Click on the overlay name in the Layers panel to rename it for easier identification.", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
                    { title: "Add Overlays", desc: "Click the + Add Overlays button at the top of the Layers panel to upload new PNG overlays.", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
                    {
                      title: "Visibility",
                      desc: "Toggle overlay visibility with the eye icon to preview your collage without specific layers.",
                      mdiIcon: mdiEyeOutline,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 shrink-0 mt-0.5">
                        {"mdiIcon" in item ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={item.mdiIcon} /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                        )}
                      </span>
                      <div>
                        <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section className="mb-8">
              <div className="bg-gray-100 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-200 text-gray-700 shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={mdiKeyboard} /></svg>
                  </span>
                  <span className="font-medium text-gray-900 text-sm">Keyboard Shortcuts</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { keys: ["Del"], desc: "Remove selected layer" },
                    { keys: ["Ctrl", "D"], desc: "Duplicate layer" },
                    { keys: ["Ctrl", "H"], desc: "Toggle visibility" },
                    { keys: ["Esc"], desc: "Deselect layer" },
                  ].map((s) => (
                    <div key={s.desc} className="flex items-center gap-2 bg-white rounded-md px-3 py-2 border border-gray-200">
                      <span className="flex items-center gap-1 shrink-0">
                        {s.keys.map((k) => (
                          <kbd key={k} className="font-mono text-xs bg-gray-50 px-1.5 py-0.5 rounded border border-gray-300">{k}</kbd>
                        ))}
                      </span>
                      <span className="text-gray-500 text-xs">{s.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="mb-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <span className="font-medium text-amber-900">Important:</span>
                  <span className="text-amber-800"> Overlays cannot be saved on their own — they are stored as part of the set. If you add or change overlays, make sure to <Link href="/docs/guide/collages/saving" className="text-amber-900 underline font-medium hover:text-amber-950">save the set</Link> or your overlay changes will be lost.</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-blue-900">Tip:</span>
                  <span className="text-blue-800"> Overlays should be PNG files with transparency. You can add multiple overlays and reorder them between the <strong>Above Frames</strong> and <strong>Below Frames</strong> sections.</span>
                </div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link href="/docs/guide/collages/frames" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Frames
              </Link>
              <Link href="/docs/guide/collages/saving" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                Next: Saving & Using Sets
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
