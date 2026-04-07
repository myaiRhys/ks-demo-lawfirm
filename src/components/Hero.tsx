"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll(".hero-animate");

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative ampersand */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display text-[rgba(232,226,217,0.015)]"
          style={{ fontSize: "40vw", lineHeight: 1 }}
        >
          &
        </span>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <p className="hero-animate eyebrow mb-8">Established 1987 · Cape Town</p>

        {/* Headline */}
        <h1
          className="hero-animate font-display text-[var(--text)] leading-[1.1]"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          Counsel for
          <br />
          what matters
          <br />
          most
        </h1>

        {/* Vertical divider */}
        <div className="hero-animate h-10 flex items-center justify-center my-10">
          <div className="w-px h-full bg-[var(--accent)]" />
        </div>

        {/* Sub text */}
        <p
          className="hero-animate text-[var(--text-muted)] text-lg max-w-[480px] mx-auto leading-[1.7] italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Boutique legal counsel for individuals and businesses navigating
          property, commerce, and personal matters in Cape Town and beyond.
        </p>

        {/* Buttons */}
        <div className="hero-animate flex flex-wrap items-center justify-center gap-4 mt-12">
          <a href="#contact" className="btn-primary">
            Book a consultation
          </a>
          <a href="#practice-areas" className="btn-ghost">
            Our practice areas
          </a>
        </div>
      </div>
    </section>
  );
}
