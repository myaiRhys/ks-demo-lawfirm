"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "37+", label: "Years in practice" },
  { value: "94%", label: "Client retention" },
  { value: "4", label: "Senior attorneys" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">
          {/* Left column */}
          <div ref={leftRef}>
            <p className="eyebrow mb-4">About the firm</p>
            <h2
              className="font-display text-[var(--text)] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              37 years of
              <br />
              principled practice
            </h2>

            <div className="space-y-6 body-text">
              <p>
                Founded in 1987 by Adriaan van der Berg, the firm has grown from
                a single-attorney practice in the Cape Town City Bowl into one
                of the Western Cape&apos;s most respected boutique firms. We have
                never sought to be the largest — only the most trusted.
              </p>
              <p>
                Our practice is built on long-term relationships. The majority
                of our clients have been with us for over a decade, and many
                came to us through personal referral. We believe this is the
                only meaningful measure of a law firm&apos;s quality.
              </p>
              <p>
                We operate with a deliberate limit on case load. Every client
                receives direct access to a senior attorney, not a junior
                associate. This is not common in our industry. We believe it
                should be.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--border)]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[2.5rem] text-[var(--text)]">
                    {stat.value}
                  </p>
                  <p className="font-ui text-[var(--text-faint)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Quote */}
          <div ref={rightRef} className="flex items-center">
            <blockquote className="border-l-2 border-[var(--accent)] pl-8">
              <p
                className="font-display italic text-[var(--text-muted)] text-[1.4rem] leading-[1.6]"
              >
                &ldquo;We do not measure success by billable hours. We measure it by
                the outcomes we secure for the people who trust us.&rdquo;
              </p>
              <footer className="font-ui text-[var(--text-faint)] mt-6">
                — Adriaan van der Berg, Senior Partner
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
