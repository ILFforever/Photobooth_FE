import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mdiMagnetOn, mdiEyeOff, mdiLock, mdiDragHorizontalVariant, mdiKeyboard, mdiShapePlusOutline, mdiPlus, mdiDownload, mdiContentSave, mdiApplicationEditOutline } from "@mdi/js";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function FramesPage() {
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
            <span className="text-gray-900 font-medium">Frames</span>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Adding Frames</h1>
            <p className="text-lg text-gray-500 mb-12">
              Frames define the cutout zones where guest photos will appear. You have full control over their shape, size, and position on the canvas.
            </p>

            {/* Quick start */}
            <div className="mb-8 bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100">
              <div className="bg-white rounded-lg p-4 border border-indigo-200 shadow-sm">
                <h4 className="text-sm font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Quick Start: Create Your First Frame
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {[
                    { num: 1, text: "Open Frame Creator" },
                    { num: 2, text: "Select a shape" },
                    { num: 3, text: "Set dimensions" },
                    { num: 4, text: "Position on canvas" },
                    { num: 5, text: "Save your frame" },
                  ].map((step, i) => (
                    <React.Fragment key={step.num}>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-medium text-xs">
                        <span className="w-4 h-4 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center text-[10px] font-bold">{step.num}</span>
                        {step.text}
                      </span>
                      {i < 4 && <svg className="w-4 h-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Frame creator screenshot */}
            <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/photos/guide/collages/frame-creator.png"
                alt="Frame Creator interface showing shape selection panel, frame preview, and dimension controls"
                width={2880}
                height={1800}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">Select frame shapes from the left panel (Rectangle, Rounded Rectangle, Circle, Square), then set exact dimensions (Width × Height) and position (X, Y) using the bottom toolbar.</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <span className="font-medium text-blue-900">Edit Existing Frames</span>
                  <p className="text-blue-800 text-sm mt-0.5">If you have a frame already selected, clicking the Frame Creator tab will load that frame into the editor, allowing you to modify its layout, shapes, and dimensions.</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Frame options */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={mdiShapePlusOutline} /></svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Frame Options</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Multiple Shapes", desc: "Choose from rectangular, rounded, circular, and other frame shapes to match your event theme.", icon: mdiShapePlusOutline, useMdi: true },
                    { title: "Custom Sizes", desc: "Set the exact width and height for each frame cutout independently.", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
                    { title: "Free Positioning", desc: "Drag and place frames anywhere on the canvas. No grid restrictions.", icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" },
                    { title: "Multiple Frames", desc: "Add as many photo cutouts as you need for your layout.", icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" },
                    { title: "Layer Ordering", desc: "Grab the three-line drag handle to reorder frames — drag up to place above, down to place below other frames.", icon: mdiDragHorizontalVariant, useMdi: true },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 shrink-0 mt-0.5">
                        {item.useMdi ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={item.icon} /></svg>
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

              {/* Toolbar controls */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Toolbar Controls</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 border border-purple-100">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={mdiMagnetOn} /></svg>
                    </span>
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Snapping</span>
                      <p className="text-gray-500 text-xs mt-0.5">Toggle magnet icon for snap-to-grid alignment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-pink-50 border border-pink-100">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 text-pink-600 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={mdiEyeOff} /></svg>
                    </span>
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Show/Hide Overlays</span>
                      <p className="text-gray-500 text-xs mt-0.5">Toggle overlays on canvas. See <Link href="/docs/guide/collages/overlays" className="text-purple-600 hover:text-purple-700 underline font-medium">Adding Overlays</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={mdiLock} /></svg>
                    </span>
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Lock/Unlock Frames</span>
                      <p className="text-gray-500 text-xs mt-0.5">Prevent accidental movement. Look for the <span className="font-medium text-gray-700">&quot;locked&quot;</span> indicator.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-200 text-gray-700 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={mdiKeyboard} /></svg>
                    </span>
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Keyboard Shortcuts</span>
                      <p className="text-gray-500 text-xs mt-0.5">
                        <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Ctrl+C</kbd> Copy ·{" "}
                        <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Ctrl+V</kbd> Paste ·{" "}
                        <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Del</kbd> Delete
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saving frames */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={mdiContentSave} /></svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Saving Frames</h2>
                </div>

                <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/photos/guide/collages/save-buttons.png"
                    alt="Save buttons toolbar showing New, Load, and Save options"
                    width={2880}
                    height={1800}
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                    <p className="text-xs text-gray-500">The saving toolbar — use <strong>New</strong> to start fresh, <strong>Load</strong> to retrieve saved frames, or <strong>Save</strong> to store your current frame configuration.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { icon: mdiPlus, label: "New Frame", desc: "Click + to clear canvas and start fresh", color: "bg-red-100 text-red-600", bg: "bg-red-50 border-red-100" },
                    { icon: mdiDownload, label: "Load Frame", desc: "Click download icon to load a saved frame", color: "bg-blue-100 text-blue-600", bg: "bg-blue-50 border-blue-100" },
                    { icon: mdiContentSave, label: "Save Frame", desc: "Save, Save & Apply, or Cancel", color: "bg-green-100 text-green-600", bg: "bg-green-50 border-green-100" },
                  ].map((item) => (
                    <div key={item.label} className={`flex flex-col items-center text-center p-3 rounded-lg border ${item.bg}`}>
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 ${item.color}`}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={item.icon} /></svg>
                      </span>
                      <span className="font-medium text-gray-900 text-sm mb-1">{item.label}</span>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/photos/guide/collages/frame-creator-save.png"
                    alt="Save Frame modal showing Save, Save & Apply, and Cancel options"
                    width={2880}
                    height={1800}
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                    <p className="text-xs text-gray-500">The Save Frame modal — enter a name, then choose <strong>Save</strong> to store it, <strong>Save & Apply</strong> to save and immediately use it, or <strong>Cancel</strong> to close without saving.</p>
                  </div>
                </div>
              </div>

              {/* Selecting frames */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={mdiApplicationEditOutline} /></svg>
                  </span>
                  <h2 className="font-semibold text-gray-900">Selecting a Frame for Your Session</h2>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  After creating and saving your frames, close the Frame Creator tab then click the frame icon in the bottom toolbar to select which frame configuration to use for your photobooth session.
                </p>
                <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/photos/guide/collages/frame-select.png"
                    alt="Frame selection panel showing available frame configurations"
                    width={2880}
                    height={1800}
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Browse your saved frame configurations and click to select the one you want to use.</p>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <span className="font-semibold text-green-900 text-sm">Pro Tip:</span>
                      <p className="text-green-800 text-sm mt-0.5 leading-relaxed">During a photobooth session, guest photos are automatically placed into each frame cutout in order. The number of frames determines how many photos are taken per session.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link href="/docs/guide/collages/backgrounds" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Backgrounds
              </Link>
              <Link href="/docs/guide/collages/overlays" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                Next: Overlays
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        </div>
      
    </div>
  );
}
