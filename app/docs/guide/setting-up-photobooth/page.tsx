import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const settings = [
  {
    href: "/docs/guide/setting-up-photobooth/working-folder",
    name: "Working Folder",
    required: true,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>,
    description: "The folder where all session photos are saved. The app creates numbered subfolders automatically — one per session.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/select-set",
    name: "Select Set",
    required: true,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>,
    description: "The collage template to use for this session. Defines how many photos are taken per round and how they are arranged in the final composite.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/delay-settings",
    name: "Delay Settings",
    required: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    description: "Controls the countdown timer before each capture and the interval between shots in a multi-photo round.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/naming-scheme",
    name: "Naming Scheme",
    required: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z" /></svg>,
    description: "Determines how output files are named — typically a custom prefix plus an auto-incrementing number.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/qr-settings",
    name: "QR Settings",
    required: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
    description: "Upload completed collages to Google Drive and generate a scannable QR code guests can use to download their photos.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/gif-generation",
    name: "GIF Generation",
    required: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>,
    description: "Automatically assemble the individual shots from each round into an animated GIF saved alongside the collage.",
  },
  {
    href: "/docs/guide/setting-up-photobooth/print-settings",
    name: "Print Settings",
    required: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
    description: "Configure automatic printing of each collage after capture — printer selection, number of copies, and paper size.",
  },
];

export default function SettingUpPhotoboothPage() {
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
          <Link href="/docs/guide/photobooth" className="hover:text-purple-600 transition-colors">Photobooth</Link>
          <Chevron />
          <span className="text-gray-900 font-medium">Setting Up</span>
        </nav>

        <article>
          {/* Hero */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Photobooth</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Setting Up</h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
            All session configuration lives in the <strong className="text-gray-700">Photobooth tab</strong> of the Control Center. Two settings are required before you can shoot; the rest are optional enhancements.
          </p>

          {/* Prereq callout */}
          <div className="mb-10 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-sm">
                <span className="font-semibold text-amber-900">Before you start: </span>
                you need at least one collage set saved in the{" "}
                <Link href="/docs/guide/collages" className="underline hover:text-amber-900">Collage Creator</Link>.
                The photobooth cannot run without a set to define the photo layout.
              </p>
            </div>
          </div>

          {/* Screenshot */}
          <div className="mb-14 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/photos/guide/photobooth/photobooth-settings.png"
              alt="Photobooth tab in the Control Center"
              width={1388}
              height={868}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The Photobooth tab — click it in the Control Center left sidebar to access all session settings.</p>
            </div>
          </div>

          {/* Setting cards */}
          <div className="mb-14">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">In this section</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {settings.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-indigo-300 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-100 text-indigo-500 group-hover:bg-indigo-200 group-hover:text-indigo-700 transition-colors shrink-0 mt-0.5">
                    {s.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">{s.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                        s.required ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-500"
                      }`}>
                        {s.required ? "Required" : "Optional"}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{s.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/docs/guide/photobooth"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Photobooth Overview
            </Link>
            <Link
              href="/docs/guide/setting-up-photobooth/working-folder"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Next: Working Folder
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
