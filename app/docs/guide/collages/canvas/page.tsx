import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function CanvasPage() {
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
            <span className="text-gray-900 font-medium">Canvas</span>
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Setting Up the Canvas</h1>
            <p className="text-lg text-gray-500 mb-12">
              The canvas is the foundation of your set. It defines the overall dimensions and aspect ratio of the final collage output.
            </p>

            {/* Canvas size picker */}
            <section className="mb-12">
              <p className="text-gray-700 mb-5">
                Click <strong>Select Size</strong> in the bottom toolbar to open the canvas size picker.
              </p>

              <div className="mb-5 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-blue-900">Frame size is relative to canvas</span>
                    <p className="text-blue-800 text-sm mt-0.5">A frame will appear larger on a smaller canvas and smaller on a larger canvas. Frame dimensions are set as pixels, but their visual size depends on the overall canvas size.</p>
                  </div>
                </div>
              </div>

              <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/photos/guide/collages/canvas-open.png"
                  alt="Canvas size picker showing preset sizes"
                  width={1388}
                  height={868}
                  className="w-full h-auto"
                />
                <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Choose from preset canvas sizes or create a custom one. Toggle <strong>Auto</strong> to automatically match the canvas size to your background image.</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Preset sizes */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Preset sizes</h3>
                  <p className="text-gray-600 text-sm mb-4">Quick-select from common canvas sizes. Dimensions are shown in pixels below each preset.</p>
                  <div className="grid sm:grid-cols-4 gap-2">
                    {[
                      { size: "1200 × 1800", label: "4x6" },
                      { size: "1800 × 1200", label: "6x4" },
                      { size: "1500 × 1500", label: "5x5" },
                      { size: "2400 × 3600", label: "4x6 HD" },
                    ].map((item) => (
                      <div key={item.label} className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <span className="block font-medium text-sm text-gray-900">{item.label}</span>
                        <span className="text-xs text-gray-500 font-mono">{item.size}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom canvas */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Custom canvas sizes</h3>
                  <p className="text-gray-600 text-sm mb-4">Click <strong>Custom</strong> to open the custom canvas dialog. Choose from preset templates or enter exact dimensions.</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-4">
                    <Image
                      src="/photos/guide/collages/custom-canvas.png"
                      alt="Custom Canvas Size dialog"
                      width={716}
                      height={451}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2 mb-3">
                    {[
                      { category: "Standard Paper", examples: "A4, A3, A5, Letter, Legal" },
                      { category: "Social Media", examples: "Instagram, Facebook, Twitter" },
                      { category: "Photo Prints", examples: "4×6, 5×7, 8×10, 11×14" },
                    ].map((item) => (
                      <div key={item.category} className="p-2.5 bg-white rounded-lg border border-gray-200">
                        <span className="block text-xs font-semibold text-gray-700">{item.category}</span>
                        <span className="text-xs text-gray-500">{item.examples}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">You can also enter a custom name, width, height, and unit (PX, MM, CM, or IN) for full control.</p>
                </div>

                {/* Auto canvas */}
                <div id="auto-canvas" className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Auto Canvas Matching</span>
                      <p className="text-blue-800 text-sm mt-1">When <strong>Auto</strong> is enabled, the canvas size automatically adjusts to match your background image dimensions. This eliminates the need for manual sizing — just upload your background and the canvas adapts instantly.</p>
                      <p className="text-blue-800 text-sm mt-1">Disable Auto to manually set canvas dimensions independent of your background image.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link href="/docs/guide/collages" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Collage Overview
              </Link>
              <Link href="/docs/guide/collages/backgrounds" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                Next: Backgrounds
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
