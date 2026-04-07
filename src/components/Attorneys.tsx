"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ATTORNEYS = [
  {
    name: "Adriaan van der Berg",
    role: "Senior Partner",
    speciality: "Property Law",
    years: "37 years",
    initials: "AV",
  },
  {
    name: "Liesl Marais",
    role: "Partner",
    speciality: "Estate Planning & Wills",
    years: "19 years",
    initials: "LM",
  },
  {
    name: "Marco Hendricks",
    role: "Associate",
    speciality: "Commercial Contracts",
    years: "8 years",
    initials: "MH",
  },
  {
    name: "Priya Naidoo",
    role: "Associate",
    speciality: "Family Law",
    years: "6 years",
    initials: "PN",
  },
];

export default function Attorneys() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".attorney-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
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
    <section id="our-team" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4">The team</p>
          <h2
            className="font-display text-[var(--text)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Four attorneys.
            <br />
            One standard.
          </h2>
        </div>

        {/* Attorney cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATTORNEYS.map((attorney) => (
            <div
              key={attorney.name}
              className="attorney-card border-b border-[var(--border)] pb-8"
            >
              {/* Photo placeholder with initials */}
              <div className="aspect-[3/4] bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mb-6">
                <span className="font-display text-[2rem] text-[var(--text-faint)]">
                  {attorney.initials}
                </span>
              </div>

              {/* Details */}
              <h3 className="font-display text-[1.2rem] text-[var(--text)]">
                {attorney.name}
              </h3>
              <p className="font-ui text-[var(--accent)] mt-1">{attorney.role}</p>
              <p className="font-ui text-[var(--text-faint)] mt-2">
                {attorney.speciality}
              </p>
              <p className="font-ui text-[var(--text-faint)] mt-1">
                {attorney.years}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
