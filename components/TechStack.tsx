"use client";

import { useEffect, useRef, useCallback } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseOpacity: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

const CONNECTION_DISTANCE = 150;
const DOT_COUNT = 60;
const SPEED = 0.3;

function ConstellationGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const initPoints = useCallback((width: number, height: number) => {
    sizeRef.current = { w: width, h: height };
    pointsRef.current = Array.from({ length: DOT_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * SPEED,
        vy: Math.sin(angle) * SPEED,
        baseOpacity: 0.15 + Math.random() * 0.4,
        opacity: 0,
        pulseSpeed: 0.3 + Math.random() * 0.7,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (pointsRef.current.length === 0) {
        initPoints(rect.width, rect.height);
      } else {
        sizeRef.current = { w: rect.width, h: rect.height };
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const t = time / 1000;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const points = pointsRef.current;

      // Update positions and opacity
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        p.opacity =
          p.baseOpacity *
          (0.5 + 0.5 * Math.sin(t * p.pulseSpeed + p.pulseOffset));
      }

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const lineOpacity =
              (1 - dist / CONNECTION_DISTANCE) *
              Math.min(points[i].opacity, points[j].opacity) *
              0.6;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(168, 162, 220, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 195, 240, ${p.opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [initPoints]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Tauri", color: "bg-orange-500" },
      { name: "Rust", color: "bg-orange-600" },
      { name: "Node.js", color: "bg-green-500" },
    ],
  },
  {
    category: "Camera Integration",
    technologies: [
      { name: "libgphoto2", color: "bg-purple-500" },
      { name: "PTP Protocol", color: "bg-indigo-500" },
    ],
  },
  {
    category: "Virtualization",
    technologies: [
      { name: "VirtualBox", color: "bg-blue-700" },
      { name: "VM Control", color: "bg-gray-600" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative pt-24 pb-4 bg-gray-900 text-white">
      <ConstellationGrid />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-lg text-gray-400">
            IPH Photobooth is built with cutting-edge open-source technologies
            for reliability, performance, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    <span className={`w-2 h-2 rounded-full ${tech.color}`} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Source on GitHub
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Want to learn more? Check out our{" "}
            <a href="/docs" className="text-purple-400 hover:text-purple-300">
              technical documentation
            </a>
            .
          </p>
        </div>
      </div>

      {/* Separator from footer */}
      <div className="relative z-10 mt-8 mx-auto max-w-4xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>
    </section>
  );
}
