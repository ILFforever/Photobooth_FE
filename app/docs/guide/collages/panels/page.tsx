import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function PanelsPage() {
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
            <span className="text-gray-900 font-medium">Additional Tabs</span>
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Additional Tabs</h1>
            <p className="text-lg text-gray-500 mb-8">
              Reference for the additional panels in the Collage Creator — Working Folder, Edit, and Export.
            </p>

            <div className="mb-10 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-amber-900">Not required for Photobooth mode</span>
                  <p className="text-amber-800 text-sm mt-0.5">The tabs covered here — Working Folder, Edit, and Export — are only used when working with collages as standalone exports. They are not part of the photobooth session workflow. If you are setting up for a photobooth session, you only need to <Link href="/docs/guide/collages/saving" className="underline font-medium hover:text-amber-950">save a set</Link> and start shooting.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">

              {/* Working Folder */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">Working Folder</h2>
                      <p className="text-sm text-gray-500">Import a folder of images to browse and drag into frames</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src="/photos/guide/collages/working-folder.png"
                      alt="Working Folder panel showing a grid of imported photo thumbnails"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Click <strong>Change Folder</strong> to point to a local folder of images. All photos appear as a searchable grid, ready to drag directly into frames on the canvas.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Change Folder", desc: "Select a local directory. All images in that folder load into the panel immediately.", icon: "M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" },
                      { title: "Search Images", desc: "Use the search bar to filter photos by filename.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                      { title: "Drag to Place", desc: "Drag any thumbnail from the panel directly onto a frame on the canvas.", icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" },
                      { title: "Test or Export Manually", desc: "Use the working folder to test your layout with real photos before your session.", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 shrink-0 mt-0.5">
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

              {/* Edit Tab */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">Edit Tab</h2>
                      <p className="text-sm text-gray-500">Fine-tune photos inside frames — activates when a frame containing a photo is selected</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <p className="text-blue-800 text-sm">The Edit tab only becomes active when you click on a frame that already has a photo in it. It gives you precise numeric control over the photo&apos;s appearance — useful as an alternative to the on-canvas drag handles, which you can still use for resizing and moving.</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src="/photos/guide/collages/edit.png"
                      alt="Image Controls panel showing Scale, Rotation, Position, and Flip controls"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Adjust <strong>Scale</strong>, <strong>Rotation</strong>, and <strong>Position</strong> with sliders, or use <strong>Flip</strong> to mirror the image. <strong>Reset</strong> restores defaults; <strong>Remove</strong> clears the photo from the frame.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Scale", desc: "Zoom the photo in or out within its frame cutout using the scale slider." },
                      { title: "Rotation", desc: "Rotate the photo clockwise or counter-clockwise in degrees." },
                      { title: "Position", desc: "Nudge the photo's X and Y position, or drag the preview thumbnail to pan within the frame." },
                      { title: "Flip", desc: "Mirror the photo horizontally or vertically with the flip buttons." },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 bg-violet-100 text-violet-600">
                          {item.title}
                        </span>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Export Tab */}
              <section>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">Export Tab</h2>
                      <p className="text-sm text-gray-500">Save the current collage as a full-resolution PNG file</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src="/photos/guide/collages/export.png"
                      alt="Export panel showing canvas dimensions and Export as PNG button"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-200">
                      <p className="text-xs text-gray-500">The Export panel shows the current canvas size and active frame — click <strong>Export as PNG</strong> to save the full-resolution collage to your computer.</p>
                    </div>
                  </div>

                  {/* Summary fields */}
                  <div className="mb-5 bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
                    {[
                      { label: "Canvas", desc: "Base canvas size.", badge: null },
                      { label: "Output", desc: "Exported resolution — scales up based on the MP setting.", badge: null },
                      { label: "Images", desc: "Frames filled with photos. Green check means all frames are ready.", badge: null },
                      { label: "Overlays", desc: "Number of overlay layers included.", badge: null },
                      { label: "Est. Size", desc: "Approximate PNG file size.", badge: null },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 px-4 py-2.5 group hover:bg-gray-50 transition-colors duration-150">
                        <span className="font-mono text-xs font-semibold text-gray-600 shrink-0 w-20">{item.label}</span>
                        <p className="text-gray-500 text-xs flex-1">{item.desc}</p>
                        {item.badge && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Options */}
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Options</h3>
                  <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
                    {[
                      { title: "Resolution", desc: "8 MP, 15 MP, 24 MP, or Custom. 15 MP is the default and suits most prints — higher settings increase file size.", hint: "15 MP recommended" },
                      { title: "Double Page", desc: "Exports two copies side-by-side. For Fuji 4×6 half-cut printing — the printer splits the sheet, producing two identical prints.", hint: "Fuji 4×6" },
                      { title: "Border Fit", desc: "Adds white margins around the image. Prevents cropping when the print aspect ratio doesn't exactly match the canvas.", hint: null },
                    ].map((item) => (
                      <div key={item.title} className="px-4 py-3 group hover:bg-gray-50 transition-colors duration-150">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                          {item.hint && (
                            <span className="text-[10px] text-gray-400 group-hover:text-purple-500 transition-colors duration-200">{item.hint}</span>
                          )}
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link href="/docs/guide/collages/saving" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Saving & Using Sets
              </Link>
              <Link href="/docs/guide/taking-photos" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                Next: Taking Photos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
