"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_DETAILS = [
  { label: "Address", value: "14 Bree Street, Cape Town City Bowl, 8001" },
  { label: "Telephone", value: "+27 21 555 0190" },
  { label: "Email", value: "counsel@vanderberg.co.za" },
];

const MATTER_TYPES = [
  "Property Law",
  "Commercial Contracts",
  "Estate Planning & Wills",
  "Family Law",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
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
    <section id="contact" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div className="contact-content">
            <p className="eyebrow mb-4">Get in touch</p>
            <h2
              className="font-display text-[var(--text)] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              Book a
              <br />
              consultation
            </h2>

            <p className="text-[var(--text-muted)] text-[15px] leading-[1.8] mb-10">
              Initial consultations are R950 for 45 minutes. We will review your
              matter in advance and come prepared. No vague advice, no billable
              hours wasted on orientation.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label}>
                  <p className="font-ui text-[var(--text-faint)] mb-1">
                    {detail.label}
                  </p>
                  <p className="text-[var(--text)]">{detail.value}</p>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="font-ui text-[var(--text-faint)] space-y-1">
              <p>Mon – Thu&nbsp;&nbsp;08:30 – 17:00</p>
              <p>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08:30 – 13:00</p>
              <p>Weekends&nbsp;&nbsp;&nbsp;By appointment</p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="contact-content">
            <form
              action="mailto:counsel@vanderberg.co.za"
              method="POST"
              encType="text/plain"
              className="space-y-8"
            >
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+27 ..."
                />
              </div>

              <div className="relative">
                <label htmlFor="matter">Matter type</label>
                <div className="relative">
                  <select id="matter" name="matter" required defaultValue="">
                    <option value="" disabled>
                      Select a matter type
                    </option>
                    {MATTER_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--text-faint)] pointer-events-none">
                    ↓
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="description">Brief description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Tell us briefly about your matter..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Request a consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
