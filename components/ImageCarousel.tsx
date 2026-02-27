"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/photos/photobooth.png", alt: "IPH Photobooth - Live Preview" },
  { src: "/photos/collage_creator.png", alt: "IPH Photobooth - Collage Creator" },
  { src: "/photos/qr.png", alt: "IPH Photobooth - QR Code Sharing" },
];

function getPosition(index: number, current: number, total: number) {
  const diff = (index - current + total) % total;
  // diff: 0 = center, 1 = right, total-1 = left
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  if (diff === total - 1) return "left";
  return "hidden";
}

const positionStyles: Record<string, React.CSSProperties> = {
  center: {
    transform: "translateX(0%) scale(1)",
    zIndex: 20,
    opacity: 1,
    filter: "brightness(1)",
  },
  left: {
    transform: "translateX(-68%) scale(0.7)",
    zIndex: 10,
    opacity: 0.7,
    filter: "brightness(0.5)",
  },
  right: {
    transform: "translateX(68%) scale(0.7)",
    zIndex: 10,
    opacity: 0.7,
    filter: "brightness(0.5)",
  },
  hidden: {
    transform: "translateX(0%) scale(0.5)",
    zIndex: 0,
    opacity: 0,
    filter: "brightness(0.3)",
  },
};

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative group bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Carousel track */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((img, index) => {
            const position = getPosition(index, current, images.length);
            return (
              <div
                key={img.src}
                className="absolute w-[70%] aspect-[16/10] rounded-lg overflow-hidden shadow-2xl"
                style={{
                  ...positionStyles[position],
                  transition: "all 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 70vw, 720px"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
