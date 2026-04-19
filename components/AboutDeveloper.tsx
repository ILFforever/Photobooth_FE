"use client";

import Image from "next/image";

export default function AboutDeveloper() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/developer/ILFforever.JPG"
                alt="ILFforever — Photographer & Developer of IPH Photobooth"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:pt-8">

            {/* Label */}
            <p className="text-sm font-semibold text-purple-600 tracking-widest uppercase mb-5">
              About the Developer
            </p>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Hello, I'm Ham, the Developer of Photobooth-IPH            </h2>

            {/* Story */}
            <div className="text-lg text-gray-500 leading-relaxed space-y-6">
              <p className="text-gray-900 font-medium">
                I'm a Computer Engineering student, photographer, and core team member at Intania Production House.
              </p>

              <p>
                I'm currently in my second year at Chulalongkorn University (CEDT), and outside of lectures I'm part of Intania Production House as a producer and staff member, and a core team member of the CU Photography Club — so I spend a lot of time at events, on both sides of the camera.
              </p>

              <p className="text-gray-900 font-medium">
                I built IPH Photobooth because I needed it. Not as a side project, not as a hypothetical — but as something my team would actually depend on at real events, with real clients watching.
              </p>

              <p>
                The tethered shooting, the collage editor, the instant QR sharing — every feature came from a real problem I encountered in the field.
              </p>

              <p className="text-gray-900 font-medium">
               I'm the one setting up the booth, troubleshooting on the spot, and handing guests their photos at the end of the night. That's what keeps this software honest.
              </p>
            </div>

            {/* Credibility indicators */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900 tabular-nums mb-1">1000+</p>
                  <p className="text-sm text-gray-500">Photos captured</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 tabular-nums mb-1">10+</p>
                  <p className="text-sm text-gray-500">Events delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 tabular-nums mb-1">Zero</p>
                  <p className="text-sm text-gray-500">Compromised shoots</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
