"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface EventEntry {
  src: string;
  src2?: string;
  collage?: string;
  name: string;
  description: string;
}

const events: EventEntry[] = [
  {
    src: "/events/foss-asia.jpg",
    collage: "/events/foss-asia collage.png",
    name: "FOSSASIA Summit",
    description: "Open-source technology conference drawing thousands of attendees from across Asia.",
  },
  {
    src: "/events/Intania OPH.JPG",
    collage: "/events/Intania OPH collage.png",
    name: "Chula Open House OPH",
    description: "Chulalongkorn University open house event featuring IPH Photobooth — welcoming prospective students with interactive photo experiences.",
  },
  {
    src: "/events/mba.jpg",
    collage: "/events/mba collage.png",
    name: "MBA Blue Memories — CU MBA Exec #39",
    description: "Graduation evening for the Chulalongkorn University MBA Executive Class #39 — high-volume, back-to-back captures all night.",
  },
  {
    src: "/events/TCT.jpg",
    collage: "/events/TCT collage.png",
    name: "ไทยเจริญทอง การทอ — 30th Anniversary",
    description: "30th anniversary celebration for Thai Charoen Thong Karn Tho — high-volume guest sessions across a milestone evening.",
  },
  {
    src: "/events/IPH Photobooth Workshop.jpg",
    src2: "/events/IPH Photobooth Workshop 2.jpg",
    name: "IPH Photobooth Workshop",
    description: "Hands-on workshop demonstrating IPH Photobooth setup, operation, and collage workflows for event teams.",
  },
];

function EventCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = events.length;

  const go = useCallback((index: number, dir: "next" | "prev") => {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => go((current - 1 + total) % total, "prev"), [current, total, go]);
  const next = useCallback(() => go((current + 1) % total, "next"), [current, total, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const event = events[current];

  return (
    <div className="mb-14">
      <div
        className="relative rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* Fixed-height image zone — never changes size */}
        <div className="relative h-80 sm:h-96">
          <div
            key={animKey}
            className={direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"}
            style={{ position: "absolute", inset: 0, display: "flex" }}
          >
            {event.collage ? (
              <>
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={event.src}
                    alt={event.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="w-px bg-gray-100 flex-shrink-0" />
                <div className="relative flex-1 bg-gray-50 overflow-hidden">
                  <Image
                    src={event.collage}
                    alt={`${event.name} — sample output`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest text-gray-400 uppercase select-none">
                    Output
                  </span>
                </div>
              </>
            ) : event.src2 ? (
              <>
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={event.src}
                    alt={event.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="w-px bg-gray-100 flex-shrink-0" />
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={event.src2}
                    alt={`${event.name} 2`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={event.src}
                  alt={event.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
          </div>

          {/* Prev / Next — positioned within image zone */}
          <button
            onClick={prev}
            aria-label="Previous event"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-white active:scale-95 transition-all duration-150 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next event"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-white active:scale-95 transition-all duration-150 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Caption — fixed height, no reflow */}
        <div className="px-6 py-5 border-t border-gray-100 flex items-center justify-between gap-4 min-h-[72px]">
          <div
            key={`caption-${animKey}`}
            className="animate-fadein"
          >
            <p className="font-semibold text-gray-900 mb-0.5">{event.name}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? "next" : "prev")}
                aria-label={`Go to ${events[i].name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gray-900 w-5" : "bg-gray-300 hover:bg-gray-400 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

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
            <span className="text-gray-900 font-medium">Intania Production House</span>, deploys at live events. Every feature exists because we needed it ourselves.
          </p>
        </div>

        {/* Carousel */}
        <EventCarousel />

        {/* Trust bar */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center border-t border-gray-200 pt-10">
          <div>
            <p className="text-2xl font-bold text-gray-900">Intania Production House</p>
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
