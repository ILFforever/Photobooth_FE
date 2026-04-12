import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const settings = [
  {
    name: "Photo Count",
    range: "1 – 10",
    description: "How many individual shots are taken per round. This should match the number of frames in your collage set.",
  },
  {
    name: "Delay Before 1st Photo",
    range: "1 – 15 seconds",
    description: "The countdown displayed before the first capture in a round. Gives guests time to get into position.",
  },
  {
    name: "Delay Between Photos",
    range: "1 – 10 seconds",
    description: "The pause between each shot in a multi-photo round. Allows guests to reset their pose.",
  },
  {
    name: "Photo Review Time",
    range: "1 – 10 seconds",
    description: "How long each captured photo is shown on screen before the next countdown begins.",
  },
];

export default function DelaySettingsPage() {
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
          <Link href="/docs/guide/setting-up-photobooth" className="hover:text-purple-600 transition-colors">Setting Up</Link>
          <Chevron />
          <span className="text-gray-900 font-medium">Delay Settings</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Delay Settings</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 shrink-0">Optional</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Control the pacing of each photobooth round — how many shots are taken, how long guests have to prepare, and how long each photo is shown before the next countdown.
          </p>

          {/* Screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-xs">
            <Image
              src="/photos/guide/photobooth/delay-settings/delay.png"
              alt="Delay Settings panel"
              width={400}
              height={500}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The Delay Settings panel — each control uses a numbered selector.</p>
            </div>
          </div>

          {/* Settings reference */}
          <div className="space-y-3">
            {settings.map((s) => (
              <div key={s.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
                  <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{s.range}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/select-set" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Select Set
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/naming-scheme" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: Naming Scheme
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
