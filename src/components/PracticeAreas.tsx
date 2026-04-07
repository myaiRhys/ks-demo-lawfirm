"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AREAS = [
  {
    num: "01",
    title: "Property Law",
    desc: "From residential conveyancing to complex commercial property transactions, we guide clients through one of the most significant financial decisions of their lives. We act for buyers, sellers, developers, and lenders across the Western Cape.",
  },
  {
    num: "02",
    title: "Commercial Contracts",
    desc: "We draft, review, and negotiate commercial agreements for businesses of all sizes — shareholders' agreements, service contracts, joint ventures, and supplier terms. Clarity upfront prevents disputes later.",
  },
  {
    num: "03",
    title: "Estate Planning & Wills",
    desc: "A well-drafted will and a considered estate plan are among the most important gifts you can leave your family. We make the process straightforward, and ensure your wishes are legally sound and clearly expressed.",
  },
  {
    num: "04",
    title: "Family Law",
    desc: "Divorce, maintenance, custody arrangements, and antenuptial contracts require both legal precision and human sensitivity. We approach family matters with the gravity and discretion they deserve.",
  },
];

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".practice-card", {
        opacity: 0,
        y: 40,
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
    <section
      id="practice-areas"
      ref={sectionRef}
      className="py-32 px-6 bg-[var(--bg-surface)] border-t border-b border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4">What we do</p>
          <h2
            className="font-display text-[var(--text)] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Areas of practice
          </h2>
          <p className="font-ui text-[13px] text-[var(--text-faint)] max-w-[500px] normal-case tracking-normal">
            We limit our practice to four core areas. Specialisation allows
            depth — and depth is what our clients&apos; matters demand.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {AREAS.map((area) => (
            <div
              key={area.num}
              className="practice-card group bg-[var(--bg)] border border-[var(--border)] p-10 transition-all duration-300 hover:border-[var(--border-md)] hover:bg-[var(--bg-raised)]"
            >
              <p className="font-ui text-[var(--accent)] mb-6">{area.num}</p>
              <h3 className="font-display text-[1.5rem] text-[var(--text)] mb-4">
                {area.title}
              </h3>
              <hr className="border-[var(--border)] my-4" />
              <p className="text-[14px] text-[var(--text-muted)] leading-[1.8] mb-6">
                {area.desc}
              </p>
              <a
                href="#contact"
                className="font-ui text-[var(--accent)] hover:opacity-70 transition-opacity cursor-pointer"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
