import Image from "next/image";
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiCamera } from '@mdi/js';

const subPages = [
  {
    title: "Setting Up the Photobooth",
    href: "/docs/guide/setting-up-photobooth",
    description: "Select a saved set, verify your camera live view, and start a session.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Taking Photos",
    href: "/docs/guide/taking-photos",
    description: "Capture photos with live preview, countdown timer, and automatic frame placement.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "QR Code Sharing",
    href: "/docs/guide/sharing",
    description: "Upload photos to Google Drive and generate a scannable QR code for guests.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
  },
  {
    title: "Guest Display",
    href: "/docs/guide/guest-display",
    description: "Show a live photo slideshow and QR code on a secondary monitor for your guests.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
];

export default function PhotoboothPage() {
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
          <span className="text-gray-900 font-medium">Photobooth</span>
        </nav>

        <article>
          {/* Hero */}
          <div className="relative mb-14">
            <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-2xl -z-10" />
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Photobooth</h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Run live photobooth sessions — capture photos with countdown timers, share instantly via QR code, and show a slideshow on a guest display.
            </p>
          </div>

          {/* Prerequisite callout */}
          <div className="mb-10 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <span className="font-medium text-amber-900">Required before starting:</span>
                <span className="text-amber-800"> You must have a camera connected and at least one saved collage set from the{" "}
                  <Link href="/docs/guide/collages" className="underline hover:text-amber-900">Collage Creator</Link>
                  {" "}before you can run a photobooth session.
                </span>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/photobooth-camera.png"
              alt="Photobooth camera controls"
              width={1388}
              height={868}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">Camera controls panel — connect your camera, toggle live view, and adjust shooting settings.</p>
            </div>
          </div>

          {/* Two Main Panels Section */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Control Center Tabs</h2>
            <p className="text-gray-600 mb-6">
              The left sidebar — called Control Center — has two tabs you'll switch between during setup. The <strong>Camera</strong> tab connects your camera; the <strong>Photobooth</strong> tab configures session behavior.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Camera Tab */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600">
                    <Icon path={mdiCamera} size={1} />
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">Camera Tab</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Shows the CAMERA section where you connect your camera and enable live view. Once connected, the live feed appears in the center Guest Display area.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Camera connection status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Live view toggle</span>
                  </li>
                </ul>
              </div>

              {/* Photobooth Tab */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">Photobooth Tab</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  All session configuration lives here. Set your working folder, load a collage set, configure delays, naming, QR sharing, GIF generation, and print settings before starting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Working Folder — where session photos are saved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Select Set — load your collage template</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>Delay Settings, Naming Scheme, QR Settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>GIF Generation and Print Settings</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Settings Screenshot */}
          <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/photobooth-settings.png"
              alt="Photobooth settings panel"
              width={1388}
              height={868}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">Photobooth settings — configure countdown timers, auto-capture intervals, and session preferences.</p>
            </div>
          </div>

          {/* Understanding the Interface */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Understanding the Interface</h2>
            <p className="text-gray-600 mb-6">
              The photobooth interface is organized into four main areas, each designed for a specific part of your workflow:
            </p>

            {/* Interface areas grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Control Center",
                  desc: "Left sidebar with Camera and Photobooth tabs. Switch between them to connect your camera or configure session settings.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>,
                  color: "bg-green-50 border-green-200",
                  iconColor: "text-green-600",
                },
                {
                  title: "Guest Display",
                  desc: "Center top area showing the live camera feed. Includes view controls and an \"Open on Second Screen\" button to send the feed to a secondary monitor.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  title: "Session Gallery",
                  desc: "Center area below the live view. Shows the current session's captured photos as thumbnails, with a Publish button to upload and share.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                  color: "bg-purple-50 border-purple-200",
                  iconColor: "text-purple-600",
                },
                {
                  title: "Operator Interface",
                  desc: "Bottom bar with a countdown timer, frame counter, shutter button, and photobooth auto/pause controls for running the session.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  color: "bg-rose-50 border-rose-200",
                  iconColor: "text-rose-600",
                },
                {
                  title: "Photo Sessions",
                  desc: "Right sidebar listing all past sessions with timestamps and photo counts. Click LOAD to restore a session, or start a new one. The active session is highlighted.",
                  icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                  color: "bg-orange-50 border-orange-200",
                  iconColor: "text-orange-600",
                },
              ].map((area) => (
                <div key={area.title} className={`bg-white rounded-xl p-5 border ${area.color} hover:shadow-sm transition-shadow`}>
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${area.color} ${area.iconColor} mb-3`}>
                    {area.icon}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-1">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick reference diagram */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Interface Layout</h3>
              </div>

              {/* Diagram */}
              <div className="bg-white p-8">
                {/* Top bar zone */}
                <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-3 mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Top Bar</span>
                  <span className="text-xs text-slate-400">App icon · Title · Account</span>
                </div>

                {/* Main 3-column layout */}
                <div className="flex gap-3" style={{minHeight: "340px"}}>

                  {/* Left — Control Center */}
                  <div className="w-48 shrink-0 rounded-lg border-2 border-dashed border-emerald-400 bg-emerald-50/60 p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-auto">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></div>
                      <span className="text-sm font-semibold text-emerald-700">Control Center</span>
                    </div>
                    <p className="text-xs text-emerald-600 leading-relaxed mt-3">
                      Camera tab — connect &amp; live view<br />
                      Photobooth tab — all session settings
                    </p>
                  </div>

                  {/* Center — stacked zones */}
                  <div className="flex-1 flex flex-col gap-3">
                    {/* Guest Display */}
                    <div className="rounded-lg border-2 border-dashed border-sky-400 bg-sky-50/60 px-5 py-4" style={{flex: "2"}}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0"></div>
                        <span className="text-sm font-semibold text-sky-700">Guest Display</span>
                      </div>
                      <p className="text-xs text-sky-600 leading-relaxed">
                        Live camera feed · thumbnail strip<br />
                        "Open on Second Screen" for guests
                      </p>
                    </div>

                    {/* Session Gallery */}
                    <div className="rounded-lg border-2 border-dashed border-violet-400 bg-violet-50/60 px-5 py-4" style={{flex: "2"}}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-violet-400 shrink-0"></div>
                        <span className="text-sm font-semibold text-violet-700">Session Gallery</span>
                      </div>
                      <p className="text-xs text-violet-600 leading-relaxed">
                        Collage previews for active session<br />
                        Publish button to upload &amp; share
                      </p>
                    </div>

                    {/* Operator Interface */}
                    <div className="rounded-lg border-2 border-dashed border-rose-400 bg-rose-50/60 px-5 py-4" style={{flex: "1"}}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0"></div>
                        <span className="text-sm font-semibold text-rose-700">Operator Interface</span>
                      </div>
                      <p className="text-xs text-rose-600 leading-relaxed">
                        Countdown · frame counter · auto/pause · shutter
                      </p>
                    </div>
                  </div>

                  {/* Right — Photo Sessions */}
                  <div className="w-48 shrink-0 rounded-lg border-2 border-dashed border-amber-400 bg-amber-50/60 p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-auto">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></div>
                      <span className="text-sm font-semibold text-amber-700">Photo Sessions</span>
                    </div>
                    <p className="text-xs text-amber-600 leading-relaxed mt-3">
                      All sessions listed with dates<br />
                      Active session highlighted<br />
                      LOAD to restore any session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Photos Are Stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">How Photos Are Stored</h2>
            <p className="text-gray-600 mb-6">
              The photobooth uses a simple folder system to keep your photos organized. You select a working folder when setting up, and the program automatically creates numbered subfolders for each session.
            </p>

            {/* Folder structure diagram */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Folder Structure</h3>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 font-mono text-xs">
                <div className="space-y-2">
                  {/* Working folder */}
                  <div className="flex items-center gap-3 text-gray-100">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                    <span className="font-semibold">Intania Job fair</span>
                    <span className="text-gray-500 text-xs">(your working folder)</span>
                  </div>

                  {/* Vertical line from working folder */}
                  <div className="ml-2 pl-1 border-l border-gray-600">
                    <div className="space-y-2">
                      {/* PTB file */}
                      <div className="flex items-center gap-2 text-blue-400">
                        <div className="w-4 h-px bg-gray-600"></div>
                        <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="font-semibold">.ptb</span>
                        <span className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded text-xs border border-blue-700">This tracks the session state</span>
                      </div>

                      {/* First session */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-px bg-gray-600 mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-orange-400">
                            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                            <span className="font-semibold">Intania Job fair_001</span>
                          </div>
                          {/* Photos */}
                          <div className="ml-6 pl-1 border-l border-gray-700 mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_001.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_002.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_003.jpeg</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Second session */}
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-px bg-gray-600 mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-orange-400">
                            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                            <span className="font-semibold">Intania Job fair_002</span>
                          </div>
                          {/* Photos */}
                          <div className="ml-6 pl-1 border-l border-gray-700 mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_001.jpeg</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <div className="w-4 h-px bg-gray-700"></div>
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <span>photo_002.jpeg</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Third session */}
                      <div className="flex items-center gap-2 text-orange-400">
                        <div className="w-4 h-px bg-gray-600"></div>
                        <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                        <span className="font-semibold">Intania Job fair_003</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How the Session System Works</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Think of a <strong>working folder</strong> as the event location — like "Sarah's Wedding" or "Company Party". All photos from that event go in this one folder. Within that folder, each <strong>session</strong> represents a group that comes through the photobooth — in the order they arrive. Session 001 is the first group, Session 002 is the second group, and so on. The <code className="bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-mono">.ptb</code> file quietly keeps track of everything in the background.
                  </p>
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
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-100 text-green-500 group-hover:bg-green-200 group-hover:text-green-700 transition-colors shrink-0 mt-0.5">
                    {page.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors text-sm mb-0.5">{page.title}</h3>
                    <p className="text-gray-500 text-sm">{page.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-green-400 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom nav */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
            <Link
              href="/docs/guide/setting-up-photobooth"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Next: Setting Up the Photobooth
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
