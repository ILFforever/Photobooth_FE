"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "Fujifilm · Canon · Sony", label: "Supported cameras" },
  { value: "Multi-hour", label: "Continuous session tested" },
  { value: "IPH Chula", label: "Deployed by" },
  { value: "Open Source", label: "MIT licensed" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="border-y border-gray-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Description paragraph — fades in on scroll */}
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Capture memorable moments at events with live preview, photo collages, QR code sharing, and dedicated guest display.
          </p>
          <p className="text-xs text-gray-400 tracking-wide">
            Built by ILFforever · Licensed to Intania Production House
          </p>
        </motion.div>

        {/* Stats row — staggered fade in */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {i > 0 && <span className="hidden sm:block w-px h-5 bg-gray-200" />}
              <div className="text-center sm:text-left">
                <span className="block text-sm font-semibold text-gray-900">{stat.value}</span>
                <span className="block text-xs text-gray-400">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
