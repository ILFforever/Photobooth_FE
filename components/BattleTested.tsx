import Image from "next/image";

const events = [
  {
    src: "/events/foss-asia.jpg",
    name: "FOSSASIA Summit",
    description: "Open-source technology conference drawing thousands of attendees from across Asia.",
  },
  {
    src: "/events/mba.jpg",
    name: "MBA Blue Memories — CU MBA Exec #39",
    description: "Graduation evening for the Chulalongkorn University MBA Executive Class #39 — high-volume, back-to-back captures all night.",
  },
];

export default function BattleTested() {
  return (
    <section className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-purple-600 tracking-widest uppercase mb-5">
            Proven in the field
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
            Battle-tested at real events.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            IPH Photobooth isn&apos;t a concept — it&apos;s the tool our own production house,{" "}
            <span className="text-gray-900 font-medium">Intania Productions</span>, deploys at live events. Every feature exists because we needed it ourselves.
          </p>
        </div>

        {/* Event photos */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {events.map((event) => (
            <div key={event.name} className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={event.src}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-5 border-t border-gray-100">
                <p className="font-semibold text-gray-900 mb-1">{event.name}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center border-t border-gray-200 pt-10">
          <div>
            <p className="text-2xl font-bold text-gray-900">Intania Productions</p>
            <p className="text-sm text-gray-500 mt-1">The production house behind IPH Photobooth</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-gray-200" />
          <div className="flex flex-wrap gap-8 text-sm text-gray-500">
            <div>
              <span className="block text-2xl font-bold text-gray-900 tabular-nums">100+</span>
              Guests per event
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-900 tabular-nums">Multi-hour</span>
              Continuous sessions
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-900 tabular-nums">Zero</span>
              Tolerance for downtime
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
