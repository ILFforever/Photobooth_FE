import Image from "next/image";
import Link from "next/link";

const Chevron = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default function NamingSchemePage() {
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
          <span className="text-gray-900 font-medium">Naming Scheme</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 012-2z" /></svg>
            </span>
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Setting Up</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Naming Scheme</h1>
            <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 shrink-0">Optional</span>
          </div>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Set the naming pattern for output files. Use a custom prefix and the <code className="font-mono text-base">{"{number}"}</code> token to include an auto-incrementing counter in each filename.
          </p>

          {/* Screenshot */}
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm max-w-lg">
            <Image
              src="/photos/guide/photobooth/naming-scheme/naming.png"
              alt="Naming Scheme panel"
              width={700}
              height={400}
              className="w-full h-auto"
            />
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200">
              <p className="text-xs text-gray-500">The Naming Scheme panel — enter a pattern in the Photo Naming Pattern field.</p>
            </div>
          </div>

          {/* Token reference */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pattern tokens</h2>
          <div className="space-y-3 mb-10">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-1.5">
                <code className="text-sm font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">{"{number}"}</code>
                <span className="text-sm text-gray-500">included in pattern</span>
              </div>
              <p className="text-sm text-gray-600">Inserts a zero-padded 4-digit counter. For example, a pattern of <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">IPH_{"{number}"}</code> produces <strong>IPH_0001</strong>, <strong>IPH_0002</strong>, and so on.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-1.5">
                <code className="text-sm font-mono font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">omitted</code>
                <span className="text-sm text-gray-500">no token in pattern</span>
              </div>
              <p className="text-sm text-gray-600">The counter is appended automatically. A pattern of <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">IPH</code> still produces <strong>IPH_0001</strong>.</p>
            </div>
          </div>

          {/* Counter note */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-800">The counter resets to <strong>0001</strong> at the start of each new session.</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/docs/guide/setting-up-photobooth/delay-settings" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Delay Settings
            </Link>
            <Link href="/docs/guide/setting-up-photobooth/qr-settings" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
              Next: QR Settings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
