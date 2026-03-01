"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function UpdatingPage() {
  const [updateType, setUpdateType] = useState<"msi" | "vm">("msi");

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
            <span className="text-gray-900 font-medium">Updating Software</span>
          </nav>

          <article>
            {/* Hero Header */}
            <div className="relative mb-14">
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white rounded-2xl -z-10" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 text-purple-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-purple-600 tracking-wide uppercase">Updates</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Updating Software</h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Keep IPH Photobooth up to date with the latest features, improvements, and bug fixes.
              </p>
              {/* Estimated time */}
              <div className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>~3 min to update</span>
              </div>
            </div>

            {/* On this page */}
            <div className="mb-14 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">On this page</h4>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: "Automatic Update Check", href: "#automatic" },
                  { label: "Manual Update", href: "#manual" },
                  { label: "Download & Install", href: "#download" },
                  { label: "Troubleshooting Updates", href: "#troubleshooting" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Automatic Update Check */}
            <section id="automatic" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">1</span>
                <h2 className="text-2xl font-semibold text-gray-900">Automatic Update Check</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-5">
                  IPH Photobooth automatically checks for updates each time you launch the application. When a new version is available, you&apos;ll see a notification in the app for each component.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <span className="text-sm font-medium text-gray-700 mb-2 block">MSI Installer Update</span>
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        src="/photos/update-avail.png"
                        alt="MSI update available notification"
                        width={800}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 mb-2 block">VM Update</span>
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        src="/photos/vm-update-avail.png"
                        alt="VM update available notification"
                        width={800}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Tip:</span>
                      <span className="text-blue-800"> We recommend updating both components as soon as possible to get the latest features and security improvements.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Manual Update */}
            <section id="manual" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">2</span>
                <h2 className="text-2xl font-semibold text-gray-900">Manual Update</h2>
              </div>

              {/* Vertical timeline steps */}
              <div className="relative pl-8 border-l-2 border-purple-200 space-y-8 ml-4">
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Check for Updates in App</h3>
                    <p className="text-gray-700 mb-4">
                      You can manually check for updates at any time through the app:
                    </p>
                    <ol className="space-y-3">
                      {[
                        "Open IPH Photobooth",
                        <>Click on the <span className="font-medium">IPH logo</span> or press <kbd className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">F1</kbd> to expand the top bar menu</>,
                        <>Click on <span className="font-medium">About</span></>,
                        <>Click on <span className="font-medium">Version</span></>,
                        <>Click on <span className="font-medium">Check for Updates</span></>,
                        <>Click <span className="font-medium">Update Now</span> on the item you want to update</>,
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold shrink-0 mt-0.5">{i + 1}</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Download from Website</h3>
                    <p className="text-gray-700 mb-4">
                      Alternatively, you can always download the latest version directly from our website:
                    </p>
                    <Link
                      href="/#download"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Go to Download Page
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Download & Install */}
            <section id="download" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">3</span>
                <h2 className="text-2xl font-semibold text-gray-900">Download & Install</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Choose the update method you need and follow the steps below:
              </p>

              {/* Toggle between MSI and VM */}
              <div className="mb-6">
                <div className="inline-flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setUpdateType("msi")}
                    className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                      updateType === "msi"
                        ? "bg-white text-purple-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    MSI Installer
                  </button>
                  <button
                    onClick={() => setUpdateType("vm")}
                    className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                      updateType === "vm"
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    VM Update
                  </button>
                </div>
              </div>

              {/* Important Notes */}
              <div className="space-y-3 mb-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-green-900">Your settings are safe:</span>
                      <span className="text-green-800"> Updating preserves all your settings, photos, and preferences. No data is lost during the update process.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MSI Installer Section */}
              {updateType === "msi" && (
                <div className="relative pl-8 border-l-2 border-purple-200 space-y-8 ml-4">
                  {/* Step 1 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Step 1: Download the Update</h3>
                      <p className="text-gray-700 mb-4">
                        Download the latest MSI installer from our website. The file size is typically 200-300 MB.
                      </p>
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src="/photos/update-download.png"
                          alt="Download MSI installer"
                          width={1200}
                          height={600}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-50" />
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Step 2: Run the Installer</h3>
                      <p className="text-gray-700 mb-4">
                        Simply run the new MSI installer. It will automatically detect your existing installation and update it to the latest version.
                      </p>
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 mb-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-sm text-amber-800">The application will automatically restart during installation. Finish any ongoing work before proceeding.</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src="/photos/update-install.png"
                          alt="Install MSI update"
                          width={1200}
                          height={600}
                          className="w-full"
                        />
                      </div>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-green-800">Your settings, photos, and preferences are preserved during the update.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VM Update Section */}
              {updateType === "vm" && (
                <div className="relative pl-8 border-l-2 border-indigo-200 space-y-8 ml-4">
                  {/* Step 1 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-50" />
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Step 1: Download the Update</h3>
                      <p className="text-gray-700 mb-4">
                        Download the latest VM update from our website.
                      </p>
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src="/photos/vm-download.png"
                          alt="Download VM update"
                          width={1200}
                          height={600}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-50" />
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Step 2: Run the Installer</h3>
                      <p className="text-gray-700 mb-4">
                        Run the VM installer to update the virtual machine component.
                      </p>
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src="/photos/vm-install.png"
                          alt="Install VM update"
                          width={1200}
                          height={600}
                          className="w-full"
                        />
                      </div>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-green-800">Your settings, photos, and preferences are preserved during the update.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Troubleshooting Updates */}
            <section id="troubleshooting" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">4</span>
                <h2 className="text-2xl font-semibold text-gray-900">Troubleshooting Updates</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Installer won't run",
                    solution: "Right-click the MSI file and select \"Run as administrator\". Make sure Windows SmartScreen isn't blocking the installation."
                  },
                  {
                    title: "Update fails partway through",
                    solution: "Close IPH Photobooth if it's running, then try running the installer again. Ensure you have sufficient disk space (at least 500 MB free)."
                  },
                  {
                    title: "App won't start after update",
                    solution: "Restart your computer and try again. If the issue persists, you may need to uninstall and reinstall the application."
                  },
                ].map((item) => (
                  <details key={item.title} className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
                    <summary className="list-none cursor-pointer font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-all [&::-webkit-details-marker]:hidden">
                      <div className="p-5 flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </span>
                          {item.title}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-open:rotate-180 transition-transform">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </summary>
                    <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                      <p className="text-gray-700 pl-11 pt-4">{item.solution}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Still need help */}
            <section className="mt-16 bg-purple-50 rounded-xl p-8 border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Need Help Updating?</h2>
              <p className="text-gray-700 mb-6">
                If you encounter any issues while updating IPH Photobooth, our support team is here to assist you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@intania.com"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </a>
                <Link
                  href="/docs/guide/troubleshooting"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-5 py-2 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Troubleshooting Guide
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
