const pillars = [
  {
    label: "Tethered shooting, done right",
    body: "Every decision — from PTP mode detection to live preview latency — was made with working photographers in mind. Not hobbyists. Not demo setups.",
  },
  {
    label: "Your gear, your workflow",
    body: "Works with the cameras already in your bag. Fujifilm, Canon, Sony. No proprietary hardware, no dongles.",
  },
  {
    label: "Always improving, always listening",
    body: "Built on real feedback from photographers in the field. Every release is shaped by the people who use it — at actual events, with actual clients.",
  },
];

export default function ForPhotographers() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — statement */}
          <div>
            <p className="text-sm font-semibold text-purple-600 tracking-widest uppercase mb-5">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Made by photographers,<br />for photographers.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Photobooth software has always been an afterthought — clunky interfaces designed by developers who've never set foot at an event. We built IPH Photobooth from the other side of the lens.
            </p>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0 divide-y divide-gray-100 border-y border-gray-100">
            {pillars.map((pillar, i) => (
              <div key={i} className="py-7 flex gap-5">
                <span className="text-xs font-semibold text-gray-300 tabular-nums pt-1 w-4 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{pillar.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
