"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

type CameraBrand = "fujifilm" | "canon" | "general";

const cameraSteps = {
  fujifilm: [
    {
      title: "Power on your camera",
      description: "Make sure your Fujifilm camera has a charged battery or is connected to AC power.",
    },
    {
      title: "Set up connection",
      description: "Configure USB settings before connecting:",
      substeps: [
        "Open MENU → NETWORK/USB SETTING",
        "Go to SELECT CONNECTION SETTING",
        "Set to 'USB Tether Shooting Auto'",
      ],
    },
    {
      title: "Connect via USB cable",
      description: "Connect the camera to your computer using a USB cable.",
    },
    {
      title: "Wait for detection",
      description: "The app will automatically detect and connect to your Fujifilm camera.",
    },
  ],
  canon: [
    {
      title: "Power on your camera",
      description: "Make sure your Canon camera has a charged battery or is connected to AC power.",
    },
    {
      title: "Set up connection",
      description: "Configure USB settings before connecting:",
      substeps: [
        "Open MENU → Yellow Settings Tab",
        "Select 'Communication'",
        "Choose 'PC Connect'",
        "Select 'Tethered'",
      ],
    },
    {
      title: "Connect via USB cable",
      description: "Use the USB cable that came with your camera. Connect it to your computer's USB port.",
    },
    {
      title: "Wait for detection",
      description: "The app will automatically detect and connect to your Canon camera.",
    },
  ],
  general: [
    {
      title: "Power on your camera",
      description: "Make sure your camera has a charged battery or is connected to AC power.",
    },
    {
      title: "Set up connection",
      description: "Configure USB settings before connecting:",
      substeps: [
        "Check your camera's USB settings",
        "Select 'PTP', 'Tethered', or 'PC Connect'",
      ],
    },
    {
      title: "Connect via USB cable",
      description: "Use a quality USB cable (preferably the one that came with your camera).",
    },
    {
      title: "Wait for detection",
      description: "The app will automatically detect and connect to your camera.",
    },
  ],
};

export default function CameraConnectionPage() {
  const [brand, setBrand] = useState<CameraBrand>("fujifilm");
  const steps = cameraSteps[brand];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-purple-600 hover:text-purple-700">
              ← Back to home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/docs" className="text-purple-600 hover:text-purple-700">
              Docs
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/docs/guide" className="text-purple-600 hover:text-purple-700">
              User Guide
            </Link>
          </nav>

          <article>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Camera Connection</h1>
            <p className="text-xl text-gray-600 mb-12">
              Connect your PTP-compatible camera to IPH Photobooth and start capturing photos.
            </p>

            {/* Supported Cameras */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Supported Cameras</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">
                  IPH Photobooth works with PTP-compatible cameras. Most modern DSLR and mirrorless cameras are supported:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">Fujifilm X-Series</span>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Full Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">Canon EOS Series</span>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Full Support</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Other camera brands may function but some camera settings from the app may not work.
                </p>
              </div>
            </section>

            {/* Connection Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connection Steps</h2>

              {/* Brand Selector */}
              <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-6">
                {[
                  { key: "fujifilm" as const, label: "Fujifilm" },
                  { key: "canon" as const, label: "Canon" },
                  { key: "general" as const, label: "Other" },
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setBrand(btn.key)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      brand === btn.key
                        ? "bg-white text-purple-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Steps */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-purple-600 font-semibold min-w-[1.5rem]">{index + 1}.</span>
                      <div className="flex-1">
                        <strong className="text-gray-900">{step.title}</strong>
                        {step.description && <span className="text-gray-600"> — {step.description}</span>}
                        {step.substeps && (
                          <div className="ml-6 mt-3 space-y-2">
                            {step.substeps.map((substep, i) => (
                              <div key={i} className="flex gap-3 text-sm">
                                <span className="text-purple-400 font-medium min-w-[1.5rem]">{index + 1}.{i + 1}</span>
                                <code className="text-gray-700">{substep}</code>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Cable Recommendation */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cable Recommendation</h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-4">For the best connection, use:</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span><strong>USB-C to USB-C</strong> or <strong>USB-C to USB-A</strong> cable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>Works with both <strong>USB 2.0</strong> and <strong>USB 3.0+</strong> cables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>The cable that came with your camera is usually the best choice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>Avoid cheap, uncertified cables — they can cause connection issues</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What to expect when connecting:</h4>
                  <p className="text-blue-700 leading-relaxed">
                    When connected correctly, the camera will briefly appear in Windows/File Explorer,
                    then disappear. This is <strong>normal behavior</strong> — the app takes exclusive
                    control of the camera for tethered shooting.
                  </p>
                </div>

                <div className="mt-4 p-3 bg-blue-100/50 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    <strong>Tip:</strong> If the camera stays visible in File Explorer, it may not be properly
                    connected to IPH Photobooth. Try unplugging and reconnecting the cable.
                  </p>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Troubleshooting</h2>
              <div className="space-y-3">
                {/* VM Not Running */}
                <details className="group rounded-xl border border-red-200 bg-red-50">
                  <summary className="list-none cursor-pointer rounded-xl hover:bg-red-100/50 transition-all [&::-webkit-details-marker]:hidden">
                    <div className="p-5 flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900">VM status LED is red / VM not booting</span>
                          <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-red-200 text-red-800">Important</span>
                        </div>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-400 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 border-t border-red-200/50">
                    <p className="text-gray-700 mt-4 mb-4">
                      The LED indicator in the <strong>top-left corner</strong> of the app shows the VM status. A <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> <span className="text-red-600 font-medium">red</span></span> LED means the VM is not running, which will prevent camera detection entirely.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-red-100 mb-4">
                      <h4 className="font-medium text-gray-900 mb-3 text-sm">How to fix:</h4>
                      <ol className="space-y-2.5">
                        {[
                          "Check that VirtualBox is installed — it's bundled with the MSI installer",
                          "Open Task Manager (Ctrl+Shift+Esc) and check if VirtualBox processes are running",
                          "Try restarting the IPH Photobooth application",
                          "Restart your computer to clear any stuck VM processes",
                          "Check if virtualization (VT-x / AMD-V) is enabled in your BIOS settings",
                          "Ensure no other virtualization software is conflicting with VirtualBox",
                          "Verify you have at least 4 GB of free RAM available",
                          "Check Windows Event Viewer for VirtualBox-related errors",
                          "Reinstall IPH Photobooth if the VM still won't start",
                        ].map((text, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs font-semibold shrink-0 mt-0.5">{i + 1}</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-amber-800">
                          <strong>Note:</strong> The VM typically takes under 20 seconds to boot after launching the app. Wait for the LED to turn <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> <span className="text-green-600 font-medium">green</span></span> before troubleshooting.
                        </span>
                      </div>
                    </div>
                  </div>
                </details>

                {/* Camera Not Detected */}
                <details className="group rounded-xl border border-yellow-200 bg-yellow-50">
                  <summary className="list-none cursor-pointer rounded-xl hover:bg-yellow-100/50 transition-all [&::-webkit-details-marker]:hidden">
                    <div className="p-5 flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900">Camera not detected</span>
                          <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-yellow-200 text-yellow-800">Common</span>
                        </div>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 border-t border-yellow-200/50">
                    <div className="mt-4 mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-green-800">
                          <strong>First:</strong> Make sure the VM LED is <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> green</span> before troubleshooting camera detection. If it&apos;s red, see the issue above.
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        "Try a different USB port on your computer",
                        "Replace the USB cable with a known-good one",
                        "Ensure the camera is powered on and set to PTP/Tethered mode",
                        "Restart both the camera and the IPH Photobooth application",
                        "Check if another application (e.g., Lightroom, EOS Utility) is using the camera",
                        "Test the camera on another computer to rule out hardware issues",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-yellow-500 mt-0.5 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                {/* Camera Disconnects Randomly */}
                <details className="group rounded-xl border border-blue-200 bg-blue-50">
                  <summary className="list-none cursor-pointer rounded-xl hover:bg-blue-100/50 transition-all [&::-webkit-details-marker]:hidden">
                    <div className="p-5 flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </span>
                        <div>
                          <span className="font-medium text-gray-900">Camera disconnects randomly</span>
                          <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-blue-200 text-blue-800">Common</span>
                        </div>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-400 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 border-t border-blue-200/50">
                    <ul className="mt-4 space-y-2.5">
                      {[
                        "Use the original USB cable that came with your camera — cheap cables are the #1 cause",
                        "Avoid USB hubs — connect directly to your computer's USB port",
                        "Check that the camera battery is fully charged or use AC power",
                        "Disable USB power saving: Device Manager → USB Root Hub → Properties → Power Management → uncheck 'Allow the computer to turn off this device'",
                        "Keep the cable away from power cables to avoid interference",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-500 mt-0.5 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>

              <div className="mt-4">
                <Link href="/docs/guide/troubleshooting" className="inline-flex items-center gap-2 text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  View full troubleshooting guide
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Next Steps */}
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Camera Connected?</h2>
              <p className="text-gray-700 mb-4">
                Great! You&apos;re ready to start taking photos. Learn more about capturing and settings.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs/guide/taking-photos"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <span>📸</span>
                  Taking Photos
                </Link>
                <Link
                  href="/docs/guide/getting-started"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  <span>←</span>
                  Back to Getting Started
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
