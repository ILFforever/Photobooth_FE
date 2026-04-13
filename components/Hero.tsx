"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Split headline into words for staggered reveal
const HEADLINE_WORDS = ["IPH", "Photobooth"];

export default function Hero() {
  const [version, setVersion] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const rotatingWords = ["Tethering", "Collage", "Photo Sharing", "Photobooth"];
  const [wordIndex, setWordIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const done = wordIndex === rotatingWords.length - 1;

  // Ambient glow that follows cursor over the screenshot window
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Scroll-driven tilt
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  // Rotating word with shutter flash
  useEffect(() => {
    if (done) return;
    const pause = setTimeout(() => {
      setFlash(true);
      setTimeout(() => {
        setWordIndex((i) => i + 1);
        setFlash(false);
      }, 120);
    }, 1800);
    return () => clearTimeout(pause);
  }, [wordIndex, done]);

  useEffect(() => {
    fetch("/api/version")
      .then((res) => res.json())
      .then((data) => { if (data.version) setVersion(data.version); })
      .catch(() => {});
  }, []);

  return (
    <section ref={containerRef} className="pt-28 pb-0 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Meta line */}
        <motion.p
          className="text-center text-sm text-gray-400 mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {version ? `v${version} · ` : ""}Windows 10 / 11 · Open Source
        </motion.p>

        {/* Headline — word-by-word stagger */}
        <div className="text-center mb-6 overflow-hidden">
          <h1 className="font-[family-name:var(--font-jost)] text-[clamp(3rem,10vw,9rem)] font-extrabold text-gray-900 tracking-tight leading-none">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.2em] last:mr-0"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "center bottom", display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Tagline with shutter-flash on word swap */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.p
            className="text-[clamp(1.25rem,3.5vw,2.5rem)] font-light tracking-wide text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional{" "}
            <span className="relative inline-block">
              {/* Shutter flash overlay */}
              <AnimatePresence>
                {flash && (
                  <motion.span
                    className="absolute inset-0 bg-white rounded-sm pointer-events-none"
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  />
                )}
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="text-purple-600 inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Software
          </motion.p>
        </div>

        {/* Screenshot — 3D tilt + cursor-tracked ambient glow */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1200px" }}
        >
          <motion.div
            style={{ rotateX, scale, translateY, transformOrigin: "center top" }}
            className="relative mx-auto max-w-6xl"
            ref={windowRef}
            onMouseMove={handleMouseMove}
          >
            {/* Cursor-tracked ambient glow */}
            <div
              className="absolute -inset-4 rounded-2xl -z-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(147,51,234,0.12), transparent 70%)`,
              }}
            />

            {/* Static top glow */}
            <div className="absolute -inset-x-4 -top-4 h-16 bg-purple-200/40 blur-2xl rounded-full -z-10" />

            <div className="rounded-xl overflow-hidden border border-gray-200/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-b border-gray-800">
                <div className="flex gap-1.5">
                  {/* Traffic lights with hover delight */}
                  {[
                    { color: "bg-red-500/80", hover: "hover:bg-red-500" },
                    { color: "bg-yellow-500/80", hover: "hover:bg-yellow-400" },
                    { color: "bg-green-500/80", hover: "hover:bg-green-400" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${dot.color} ${dot.hover} transition-colors duration-150 cursor-default`}
                    />
                  ))}
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500">IPH Photobooth</span>
                </div>
              </div>
              <ImageCarousel />
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
