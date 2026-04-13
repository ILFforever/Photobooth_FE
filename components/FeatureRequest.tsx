export default function FeatureRequest() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-5">
            Shape the roadmap
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Missing something you need?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            IPH Photobooth is built around real workflows. If there&apos;s a feature that would make your setup better, tell us — we read every message and build what actually matters.
          </p>
          <a
            href="mailto:support@intania.com?subject=Feature Request"
            className="inline-flex items-center gap-2.5 bg-white text-gray-900 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Request a feature
          </a>
        </div>
      </div>
    </section>
  );
}
