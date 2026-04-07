"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      "Adriaan handled the conveyancing on our Constantia property with complete precision. We had a complex situation involving a deceased estate, and he navigated every complication without once making us feel uncertain.",
    author: "M. Louw, Constantia",
  },
  {
    quote:
      "Liesl drafted our wills and set up our trust. She asked questions no one else had thought to ask, and the result was a plan that genuinely reflects what we want for our children.",
    author: "T. & S. Ferreira, Stellenbosch",
  },
  {
    quote:
      "When our largest supplier tried to exit our contract mid-project, Marco had us in a strong legal position within 48 hours. Calm, methodical, and absolutely on top of the detail.",
    author: "C. Abrahams, Paarl",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-item", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-[var(--bg-surface)] border-t border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4">Client words</p>
          <h2
            className="font-display text-[var(--text)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            What our clients say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item border-l border-[var(--border)] pl-8"
            >
              <blockquote
                className="font-display italic text-[1rem] text-[var(--text-muted)] leading-[1.9]"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="font-ui text-[var(--text-faint)] mt-6 uppercase">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
