import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageWithLoader from "@/components/ImageWithLoader";
import Link from "next/link";
import { mdiMagnetOn, mdiEyeOff, mdiEyeOutline , mdiLock, mdiDragHorizontalVariant, mdiKeyboard, mdiShapePlusOutline, mdiPlus, mdiDownload, mdiContentSave, mdiApplicationEditOutline } from "@mdi/js";

export default function CollagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs" className="hover:text-purple-600 transition-colors">
              Docs
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/docs/guide" className="hover:text-purple-600 transition-colors">
              User Guide
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">Collage Creator</span>
          </nav>

          <article>
            {/* Hero Header */}
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
            <div className="mb-14 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <span className="font-medium text-amber-900">Important:</span>
                  <span className="text-amber-800"> You must create and save at least one set before you can use Photobooth Mode. A set defines the layout template for your photo sessions.</span>
                </div>
              </div>
            </div>

            {/* Collage Creator overview screenshot */}
            <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <ImageWithLoader
                src="/photos/guide/collages/collage-creator.png"
                alt="Collage Creator interface showing a completed collage with photos, frames, and overlays"
                width={1388}
                height={868}
                className="w-full h-auto"
              />
              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
                <p className="text-xs text-gray-500">The Collage Creator workspace — browse photos on the left, design your collage in the center, and use the bottom toolbar to switch sets, backgrounds, and canvas sizes.</p>
              </div>
            </div>

            {/* On this page */}
            <div className="mb-14 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">On this page</h4>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: "Understanding Sets", href: "#sets" },
                  { label: "Setting Up the Canvas", href: "#canvas" },
                  { label: "Adding Backgrounds", href: "#backgrounds" },
                  { label: "Adding Frames", href: "#frames" },
                  { label: "Adding Overlays", href: "#overlays" },
                  { label: "Saving & Using Sets", href: "#saving" },
                  { label: "Additional Panel Tabs", href: "#tabs" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: Understanding Sets */}
            <section id="sets" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">1</span>
                <h2 className="text-2xl font-semibold text-gray-900">Understanding Sets</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  A <strong>set</strong> is a reusable template that defines how photos are arranged during a photobooth session. Each set is made up of three layers:
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    {
                      label: "Canvas",
                      desc: "The base size and dimensions of your layout. This determines the final output resolution.",
                      color: "bg-purple-100 text-purple-600",
                    },
                    {
                      label: "Frames",
                      desc: "Photo cutout zones placed on the canvas. Each frame defines where a guest photo will appear. You can use multiple shapes and sizes.",
                      color: "bg-indigo-100 text-indigo-600",
                    },
                    {
                      label: "Overlays",
                      desc: "PNG images layered above or below the frames. Use these for branding, decorations, borders, or event themes.",
                      color: "bg-pink-100 text-pink-600",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                      <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-semibold shrink-0 ${item.color}`}>
                        {item.label}
                      </span>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Visual layer diagram */}
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

            {/* Section 2: Setting Up the Canvas */}
            <section id="canvas" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">2</span>
                <h2 className="text-2xl font-semibold text-gray-900">Setting Up the Canvas</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  The canvas is the foundation of your set. It defines the overall dimensions and aspect ratio of the final collage output. Click <strong>Select Size</strong> in the bottom toolbar to open the canvas size picker.
                </p>

                {/* Frame size relative to canvas tip */}
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

                {/* Canvas size picker screenshot */}
                <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImageWithLoader
                    src="/photos/guide/collages/canvas-open.png"
                    alt="Canvas size picker showing preset sizes: Custom, 4x6, 6x4, 5x5, and 4x6 HD"
                    width={1388}
                    height={868}
                    className="w-full h-auto"
                  />
                  <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Choose from preset canvas sizes or create a custom one. Toggle <strong>Auto</strong> to automatically match the canvas size to your background image.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Preset sizes</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Quick-select from common canvas sizes like 4x6, 6x4, 5x5, or 4x6 HD. Dimensions are shown in pixels below each preset.
                    </p>
                    <div className="grid sm:grid-cols-4 gap-2">
                      {[
                        { size: "1200 × 1800", label: "4x6" },
                        { size: "1800 × 1200", label: "6x4" },
                        { size: "1500 × 1500", label: "5x5" },
                        { size: "2400 × 3600", label: "4x6 HD" },
                      ].map((item) => (
                        <div key={item.label} className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                          <span className="block font-medium text-sm text-gray-900">{item.label}</span>
                          <span className="text-xs text-gray-500 font-mono">{item.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Custom canvas screenshot */}
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Custom canvas sizes</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Click <strong>Custom</strong> to open the custom canvas dialog. Choose from preset templates or enter exact dimensions.
                    </p>
                    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      <ImageWithLoader
                        src="/photos/guide/collages/custom-canvas.png"
                        alt="Custom Canvas Size dialog with Standard Paper, Social Media, and Photo Print presets"
                        width={716}
                        height={451}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-3 grid sm:grid-cols-3 gap-2">
                      {[
                        { category: "Standard Paper", examples: "A4, A3, A5, Letter, Legal" },
                        { category: "Social Media", examples: "Instagram, Facebook, Twitter" },
                        { category: "Photo Prints", examples: "4×6, 5×7, 8×10, 11×14" },
                      ].map((item) => (
                        <div key={item.category} className="p-2.5 bg-gray-50 rounded-lg">
                          <span className="block text-xs font-semibold text-gray-700">{item.category}</span>
                          <span className="text-xs text-gray-500">{item.examples}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">You can also enter a custom name, width, height, and unit (PX, MM, CM, or IN) for full control.</p>
                  </div>

                  {/* Auto Canvas Matching */}
                  <div id="auto-canvas" className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="flex-1">
                        <span className="font-medium text-blue-900">Auto Canvas Matching</span>
                        <p className="text-blue-800 text-sm mt-1">When <strong>Auto</strong> is enabled, the canvas size automatically adjusts to match your background image dimensions. This eliminates the need for manual sizing—just upload your background and the canvas adapts instantly.</p>
                        <p className="text-blue-800 text-sm mt-1">Disable Auto to manually set canvas dimensions independent of your background image.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Adding Backgrounds */}
            <section id="backgrounds" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">3</span>
                <h2 className="text-2xl font-semibold text-gray-900">Adding Backgrounds</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  The background fills the entire canvas behind your frames and photos. It sets the visual theme of your collage.
                </p>

                {/* Background section screenshot */}
                <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImageWithLoader
                    src="/photos/guide/collages/background.png"
                    alt="Background section showing the background preview area with add image button and controls"
                    width={2880}
                    height={1800}
                    className="w-full h-auto"
                  />
                  <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">The Background section in the frame selector—click <span className="font-medium text-gray-700">Add Image</span> or drag and drop an image directly onto the Background button to set your canvas background.</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      Adding a Background
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        "Click <span class=\"font-semibold text-gray-700\">Add Image</span> when the Background section is open",
                        "Or drag and drop directly onto the <span class=\"font-semibold text-gray-700\">Background</span> button",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-500 mt-0.5 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: text }} />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        PNG, JPG
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      Adjusting Position
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        "Click to select, then drag to scale and position",
                        "Drag on the canvas to move the background around",
                        "Background can be larger/smaller than canvas for creative effects",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-500 mt-0.5 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Auto canvas link */}
                <div className="mt-5 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Want the canvas to match your background?</span>
                      <p className="text-blue-800 text-sm mt-0.5">Enable the <strong>Auto</strong> toggle in the canvas settings to automatically size the canvas to your background image.</p>
                      <p className="text-blue-800 text-sm mt-1">See <a href="#auto-canvas" className="text-blue-900 hover:text-blue-950 underline font-medium">Auto Canvas Matching</a> for details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Adding Frames */}
            <section id="frames" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">4</span>
                <h2 className="text-2xl font-semibold text-gray-900">Adding Frames</h2>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100 mb-6">
                <p className="text-gray-700 mb-4">
                  Frames define the cutout zones where guest photos will appear. You have full control over their shape, size, and position on the canvas.
                </p>

                {/* Quick Steps Banner */}
                <div className="bg-white rounded-lg p-4 border border-indigo-200 shadow-sm">
                  <h4 className="text-sm font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-5">
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImageWithLoader
                    src="/photos/guide/collages/frame-creator.png"
                    alt="Frame Creator interface showing frame shape selection panel on the left, a frame preview on the canvas, and dimension controls at the bottom"
                    width={2880}
                    height={1800}
                    className="w-full h-auto"
                  />
                  <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Select frame shapes from the left panel (Rectangle, Rounded Rectangle, Circle, Square), then set exact dimensions (Width × Height) and position (X, Y) using the bottom toolbar.</p>
                  </div>
                </div>

                {/* Edit existing frame tip */}
                <div className="mt-5 mb-5 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Edit Existing Frames</span>
                      <p className="text-blue-800 text-sm mt-0.5">If you have a frame already selected, clicking the Frame Creator tab will load that frame into the editor, allowing you to modify its layout, shapes, and dimensions.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Frame Options with enhanced header */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d={mdiShapePlusOutline} />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Frame Options</h4>
                      <span className="ml-auto text-xs text-gray-400">Design Flexibility</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        {
                          title: "Multiple Shapes",
                          desc: "Choose from rectangular, rounded, circular, and other frame shapes to match your event theme.",
                          icon: mdiShapePlusOutline,
                          useMdi: true,
                        },
                        {
                          title: "Custom Sizes",
                          desc: "Set the exact width and height for each frame cutout independently.",
                          icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
                        },
                        {
                          title: "Free Positioning",
                          desc: "Drag and place frames anywhere on the canvas. No grid restrictions.",
                          icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
                        },
                        {
                          title: "Multiple Frames",
                          desc: "Add as many photo cutouts as you need for your layout.",
                          icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
                        },
                        {
                          title: "Layer Ordering",
                          desc: "Grab the three-line drag handle to reorder frames—drag up to place above, down to place below other frames.",
                          icon: mdiDragHorizontalVariant,
                          useMdi: true,
                        },
                      ].map((item) => (
                        <div key={item.title} className="group flex items-start gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 shrink-0 mt-0.5 group-hover:bg-indigo-200 transition-colors">
                            {item.useMdi ? (
                              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d={item.icon} />
                              </svg>
                            ) : (
                              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                              </svg>
                            )}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toolbar controls with enhanced header */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Toolbar Controls</h4>
                      <span className="ml-auto text-xs text-gray-400">Precision Tools</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 shrink-0 mt-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiMagnetOn} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">Snapping</span>
                          <p className="text-gray-500 text-xs mt-0.5">Toggle magnet icon for snap-to-grid alignment.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-pink-50/50 border border-pink-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 text-pink-600 shrink-0 mt-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiEyeOff} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">Show/Hide Overlays</span>
                          <p className="text-gray-500 text-xs mt-0.5">Toggle overlays on canvas. See <a href="#overlays" className="text-purple-600 hover:text-purple-700 underline font-medium">Adding Overlays</a>.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/50 border border-amber-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiLock} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">Lock/Unlock Frames</span>
                          <p className="text-gray-500 text-xs mt-0.5">Prevent accidental movement. Look for <span className="font-medium text-gray-700">&quot;locked&quot;</span> indicator.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-100 border border-gray-200">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-200 text-gray-700 shrink-0 mt-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiKeyboard} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">Keyboard Shortcuts</span>
                          <p className="text-gray-500 text-xs mt-0.5"><span className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Ctrl+C</span> Copy · <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Ctrl+V</span> Paste · <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-300">Del</span> Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Saving system info */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d={mdiContentSave} />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Saving System</h4>
                      <span className="ml-auto text-xs text-gray-400">Persistence</span>
                    </div>

                    {/* Save buttons screenshot */}
                    <div className="mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <ImageWithLoader
                        src="/photos/guide/collages/save-buttons.png"
                        alt="Save buttons toolbar showing New, Load, and Save options"
                        width={2880}
                        height={1800}
                        className="w-full h-auto"
                      />
                      <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                        <p className="text-xs text-gray-500">The saving toolbar—use <span className="font-medium text-gray-700">New</span> to start fresh, <span className="font-medium text-gray-700">Load</span> to retrieve saved frames, or <span className="font-medium text-gray-700">Save</span> to store your current frame configuration.</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3 mb-4">
                      <div className="flex flex-col items-center text-center p-3 rounded-lg bg-red-50 border border-red-100">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mb-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiPlus} />
                          </svg>
                        </span>
                        <span className="font-medium text-gray-900 text-sm mb-1">New Frame</span>
                        <p className="text-gray-500 text-xs">Click <span className="font-medium text-gray-700">+</span> to clear canvas and start fresh</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-3 rounded-lg bg-blue-50 border border-blue-100">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiDownload} />
                          </svg>
                        </span>
                        <span className="font-medium text-gray-900 text-sm mb-1">Load Frame</span>
                        <p className="text-gray-500 text-xs">Click download icon to load a saved frame</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-3 rounded-lg bg-green-50 border border-green-100">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mb-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d={mdiContentSave} />
                          </svg>
                        </span>
                        <span className="font-medium text-gray-900 text-sm mb-1">Save Frame</span>
                        <p className="text-gray-500 text-xs">Save with options: <span className="font-medium text-gray-700">Save</span>, <span className="font-medium text-gray-700">Save & Apply</span>, or <span className="font-medium text-gray-700">Cancel</span></p>
                      </div>
                    </div>

                    {/* Save frame screenshot */}
                    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <ImageWithLoader
                        src="/photos/guide/collages/frame-creator-save.png"
                        alt="Save Frame modal showing options to Save, Save & Apply, or Cancel with a name input field"
                        width={2880}
                        height={1800}
                        className="w-full h-auto"
                      />
                      <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                        <p className="text-xs text-gray-500">The Save Frame modal—enter a name for your frame and choose <span className="font-medium text-gray-700">Save</span> to store it, <span className="font-medium text-gray-700">Save & Apply</span> to save and immediately use it, or <span className="font-medium text-gray-700">Cancel</span> to close without saving.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section: Selecting Frames */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d={mdiApplicationEditOutline} />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Selecting a Frame</h4>
                      <span className="ml-auto text-xs text-gray-400">Apply to Session</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      After creating and saving your frames, close the Frame Creator tab then click the frame icon in the bottom toolbar to select which frame configuration to use for your photobooth session.
                    </p>

                    {/* Frame selector screenshot */}
                    <div className="mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <ImageWithLoader
                        src="/photos/guide/collages/frame-select.png"
                        alt="Frame selection panel showing available frame configurations with thumbnail previews and selection interface"
                        width={2880}
                        height={1800}
                        className="w-full h-auto"
                      />
                      <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                        <p className="text-xs text-gray-500">The frame selection panel—browse your saved frame configurations and click to select the one you want to use.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
                      <span className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d={mdiApplicationEditOutline} />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 text-sm">Frame Selection</span>
                        <p className="text-gray-600 text-sm mt-0.5">The frame you select becomes part of your collage set. Together with your chosen background, this creates a complete set that the operator can select for use during a photobooth session.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold text-green-900 text-sm">Pro Tip:</span>
                        <p className="text-green-800 text-sm mt-0.5 leading-relaxed">During a photobooth session, guest photos are automatically placed into each frame cutout in order. The number of frames determines how many photos are taken per session.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Adding Overlays */}
            <section id="overlays" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">5</span>
                <h2 className="text-2xl font-semibold text-gray-900">Adding Overlays</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Overlays are transparent PNG images that add decorations, branding, or borders to your collage. You can place overlays both above and below the photo frames. Manage them from the <strong>Layers</strong> panel on the left side of the editor.
                </p>

                {/* Layers panel screenshot */}
                <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImageWithLoader
                    src="/photos/guide/collages/layers.png"
                    alt="Layers panel showing overlay management with position, transform, and appearance controls"
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                  />
                  <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">The Layers panel lets you manage overlays — adjust position, scale, rotation, opacity, and choose whether they render above or below the frames. Click on the overlay name to rename it.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Overlay Positioning */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Positioning Overlays</h4>
                      <span className="ml-auto text-xs text-gray-400">Layer Order</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Each overlay sits in one of two sections in the Layers panel. To change where an overlay renders, drag it between the <strong>Above Frames</strong> and <strong>Below Frames</strong> sections, or use the <strong>Above</strong> / <strong>Below</strong> buttons at the bottom of the panel.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        {
                          title: "Above Frames",
                          desc: "Overlays placed here render on top of everything — including photos. Best for borders, watermarks, and branding that should always be visible.",
                          icon: "M5 15l7-7 7 7",
                        },
                        {
                          title: "Below Frames",
                          desc: "Overlays placed here render behind the frames but above the background. Use for subtle textures or decorative elements that sit behind the photos.",
                          icon: "M19 9l-7 7-7-7",
                        },
                      ].map((item) => (
                        <div key={item.title} className="group flex items-start gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-pink-100 text-pink-600 shrink-0 mt-0.5 group-hover:bg-pink-200 transition-colors">
                            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Layer Properties */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </span>
                      <h4 className="font-semibold text-gray-900">Layer Properties</h4>
                      <span className="ml-auto text-xs text-gray-400">Fine-tune Controls</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        {
                          title: "Position & Transform",
                          desc: "Set X/Y coordinates, scale, rotation, and opacity to precisely place each overlay.",
                          icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
                        },
                        {
                          title: "Blend Mode",
                          desc: "Choose how the overlay blends with layers below (Normal, Multiply, Screen, etc.).",
                          icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                        },
                        {
                          title: "Visibility",
                          desc: "Toggle overlay visibility with the eye icon to preview your collage without specific layers.",
                          icon: mdiEyeOutline ,
                          useMdi: true,
                        },
                        {
                          title: "Rename",
                          desc: "Click on the overlay name in the Layers panel to rename it for easier identification.",
                          icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                        },
                        {
                          title: "Add Overlays",
                          desc: "Click the + Add Overlays button at the top of the Layers panel to upload new PNG overlays.",
                          icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                        },
                      ].map((item) => (
                        <div key={item.title} className="group flex items-start gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-100 text-purple-600 shrink-0 mt-0.5 group-hover:bg-purple-200 transition-colors">
                            {item.useMdi ? (
                              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d={item.icon} />
                              </svg>
                            ) : (
                              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                              </svg>
                            )}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <span className="font-medium text-amber-900">Important:</span>
                        <span className="text-amber-800"> Overlays cannot be saved on their own — they are stored as part of the set. If you add or change overlays, make sure to save the set afterwards (see <a href="#saving" className="text-amber-900 hover:text-amber-950 underline font-medium">Saving &amp; Using Sets</a>) or your overlay changes will be lost.</span>
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
                        <span className="text-blue-800"> Overlays must be PNG files with transparency. The transparent areas will let the layers below show through. You can add multiple overlays and reorder them between the <strong>Above Frames</strong> and <strong>Below Frames</strong> sections.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Saving & Using Sets */}
            <section id="saving" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">6</span>
                <h2 className="text-2xl font-semibold text-gray-900">Saving & Using Sets</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  Once you&apos;ve configured your canvas, frames, backgrounds, and overlays, save your work as a named set. You can create multiple sets for different events or styles.
                </p>

                {/* Custom set overview screenshot */}
                <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <ImageWithLoader
                    src="/photos/guide/collages/custom-set.png"
                    alt="Custom Sets panel showing saved sets with thumbnail previews, Load and Delete buttons, and the Save Current Setup button"
                    width={724}
                    height={456}
                    className="w-full h-auto"
                  />
                  <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                    <p className="text-xs text-gray-500">The Custom Sets panel — click <span className="font-medium text-gray-700">Save Current Setup</span> to save your current canvas, frame, and background as a named set. Saved sets are listed below with thumbnail previews and <span className="font-medium text-gray-700">Load</span> / <span className="font-medium text-gray-700">Delete</span> actions.</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-200 space-y-8">
                  {/* Step 1 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-1">Save your set</h4>
                      <p className="text-gray-600 text-sm mb-4">Click <strong>Save Current Setup</strong> in the Custom Sets panel to open the save dialog. Give your set a name and optional description — the modal shows a <strong>Current Configuration</strong> summary of the canvas size, frame, and background being saved.</p>
                      {/* Save set modal screenshot */}
                      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <ImageWithLoader
                          src="/photos/guide/collages/custom-set-modal.png"
                          alt="Create Custom Set modal showing Name and Description fields alongside a Current Configuration summary of canvas, frame, and background"
                          width={724}
                          height={456}
                          className="w-full h-auto"
                        />
                        <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                          <p className="text-xs text-gray-500">The Create Custom Set modal — enter a <span className="font-medium text-gray-700">Name</span> and optional <span className="font-medium text-gray-700">Description</span> for your set. The <span className="font-medium text-gray-700">Current Configuration</span> summary shows the canvas size, frame, and background that will be saved. Click <span className="font-medium text-gray-700">Save Set</span> to confirm or <span className="font-medium text-gray-700">Cancel</span> to discard.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+7px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-1">Start your photobooth session</h4>
                      <p className="text-gray-600 text-sm">Switch to Photobooth Mode. Guest photos will be automatically placed into the frame cutouts defined by your set.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-green-900">Good to know:</span>
                    <span className="text-green-800"> You can edit and update saved sets at any time. Changes won&apos;t affect photos already taken with the previous version of the set.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Additional Panel Tabs */}
            <section id="tabs" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">7</span>
                <h2 className="text-2xl font-semibold text-gray-900">Additional Panel Tabs</h2>
              </div>

              <div className="space-y-6">

                {/* Working Folder */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Working Folder</h3>
                      <p className="text-sm text-gray-500">Import a folder of images to browse and drag into frames</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <ImageWithLoader
                      src="/photos/guide/collages/working-folder.png"
                      alt="Working Folder panel showing a grid of imported photo thumbnails with filenames and dimensions, alongside the canvas with photos already placed in frames"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                      <p className="text-xs text-gray-500">The Working Folder panel — click <span className="font-medium text-gray-700">Change Folder</span> to point to a local folder of images. All photos in the folder appear as a searchable grid, ready to drag directly into frames on the canvas.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Change Folder",
                        desc: "Click the Change Folder button to select a local directory. All images in that folder are loaded into the panel immediately.",
                        icon: "M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        title: "Search Images",
                        desc: "Use the search bar to filter photos by filename, useful when working with a large folder.",
                        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        title: "Drag to Place",
                        desc: "Drag any thumbnail from the panel directly onto a frame on the canvas to place that photo into it.",
                        icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        title: "Test or Export Manually",
                        desc: "Use the working folder to test your layout with real photos, or manually fill frames before exporting the collage.",
                        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                        color: "bg-blue-100 text-blue-600",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5 ${item.color}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{item.title}</span>
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Edit Tab */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Edit Tab</h3>
                      <p className="text-sm text-gray-500">Fine-tune photos placed inside frames — activates when a frame is selected</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-blue-800 text-sm">The Edit tab only becomes active when you click on a frame that already has a photo in it. It gives you numeric control over the photo&apos;s appearance without using the on-canvas drag handles.</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <ImageWithLoader
                      src="/photos/guide/collages/edit.png"
                      alt="Image Controls panel showing Scale, Rotation, Position, and Flip controls for a photo inside a frame, with Reset and Remove buttons at the bottom"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                      <p className="text-xs text-gray-500">The Image Controls panel — click any frame containing a photo to activate it. Adjust <span className="font-medium text-gray-700">Scale</span>, <span className="font-medium text-gray-700">Rotation</span>, and <span className="font-medium text-gray-700">Position</span> with sliders, or use <span className="font-medium text-gray-700">Flip</span> to mirror the image. <span className="font-medium text-gray-700">Reset</span> restores defaults; <span className="font-medium text-gray-700">Remove</span> clears the photo from the frame.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Scale", desc: "Zoom the photo in or out within its frame cutout using the scale slider.", color: "bg-violet-100 text-violet-600" },
                      { title: "Rotation", desc: "Rotate the photo clockwise or counter-clockwise in degrees.", color: "bg-violet-100 text-violet-600" },
                      { title: "Position", desc: "Nudge the photo's X and Y position. You can also drag the preview thumbnail to pan the image within the frame.", color: "bg-violet-100 text-violet-600" },
                      { title: "Flip", desc: "Mirror the photo horizontally or vertically with the flip buttons.", color: "bg-violet-100 text-violet-600" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                        <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 ${item.color}`}>
                          {item.title}
                        </span>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Export Tab */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Export Tab</h3>
                      <p className="text-sm text-gray-500">Save the current collage as a PNG file</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <ImageWithLoader
                      src="/photos/guide/collages/export.png"
                      alt="Export panel showing canvas dimensions (600 × 1800), the active frame name, and an Export as PNG button"
                      width={724}
                      height={456}
                      className="w-full h-auto"
                    />
                    <div className="bg-white px-4 py-2.5 border-t border-gray-100">
                      <p className="text-xs text-gray-500">The Export panel — shows the current canvas size and active frame, then click <span className="font-medium text-gray-700">Export as PNG</span> to save the full-resolution collage to your computer.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900 text-sm">Export as PNG</span>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">The export renders the collage at full canvas resolution (e.g. 600 × 1800 px) with all layers — background, frames, photos, and overlays — composited together. The panel also displays the current canvas size and active frame for confirmation before you export.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Next: Photobooth Mode */}
            <Link href="/docs/guide/taking-photos" className="block bg-purple-50 rounded-xl p-6 border border-purple-100 hover:border-purple-200 hover:shadow-md transition-all group mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    Next: Start Taking Photos →
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Now that you&apos;ve created a set, learn how to use Photobooth Mode to capture photos with your guests.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-500 group-hover:bg-purple-200 transition-colors shrink-0 ml-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Need Help */}
            <section className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Need Help with Collages?</h2>
              <p className="text-gray-700 mb-6">
                If you&apos;re having trouble designing your collage sets or need inspiration, our support team can help.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hammymukura@gmail.com"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </a>
                <Link
                  href="/docs/guide"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Back to User Guide
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
