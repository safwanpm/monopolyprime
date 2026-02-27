"use client";
import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";

const partnerLogos = [
  { id: 1, name: "Partner A", url: "/images/partner1.png" },
  { id: 2, name: "Partner B", url: "/images/partner2.png" },
  { id: 3, name: "Partner C", url: "/images/partner3.png" },
  { id: 4, name: "Partner D", url: "/images/partner4.png" },
];

const PartnerNexus = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  // Duplicate logos using React instead of innerHTML (Safari safe)
  const extendedLogos = useMemo(() => {
    return [...partnerLogos, ...partnerLogos, ...partnerLogos];
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Hardware accelerated animation
    tweenRef.current = gsap.to(marqueeRef.current, {
      x: "-33.333%",
      repeat: -1,
      duration: 35,
      ease: "none",
      force3D: true,
    });

    const container = containerRef.current;
    if (!container) return;

    const handleEnter = () => {
      if (window.innerWidth > 768 && tweenRef.current) {
        gsap.to(tweenRef.current, { timeScale: 0.4, duration: 0.6 });
      }
    };

    const handleLeave = () => {
      if (window.innerWidth > 768 && tweenRef.current) {
        gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6 });
      }
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      tweenRef.current && tweenRef.current.kill();
    };
  }, []);

  // Optimized tilt effect (Safari friendly)
  const handleTilt = (e) => {
    if (window.innerWidth <= 768) return;

    const slate = e.currentTarget;
    const rect = slate.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;

    gsap.to(slate, {
      x,
      y,
      rotateX: -y * 0.3,
      rotateY: x * 0.3,
      duration: 0.4,
      ease: "power2.out",
      force3D: true,
    });
  };

  const resetTilt = (e) => {
    const slate = e.currentTarget;

    gsap.to(slate, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
      force3D: true,
    });
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#020202] py-24 lg:py-40 overflow-hidden relative"
    >
      {/* Optimized blur (lighter for Safari performance) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0 will-change-transform" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 lg:mb-28 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                className="h-[1px] bg-primary"
              />
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[9px] md:text-[11px]">
                Collaborations
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.85]">
              ELITE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-neutral-800">
                PARTNERS
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] text-neutral-500 text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-widest leading-relaxed font-bold border-l border-white/10 pl-6 mb-2">
            Forging alliances with the global architects of modern luxury living.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-30 pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex gap-6 md:gap-12 py-12 md:py-20 whitespace-nowrap will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {extendedLogos.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              onPointerMove={handleTilt}
              onPointerLeave={resetTilt}
              className="glass-slate relative flex-shrink-0 w-64 h-36 md:w-80 md:h-48 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:bg-white/[0.08] will-change-transform"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

              <Image
                src={partner.url}
                alt={partner.name}
                width={220}
                height={120}
                priority={idx < 4}
                className="relative z-10 object-contain brightness-[2.2] transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-700 blur-2xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 lg:mt-20 max-w-7xl mx-auto px-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default PartnerNexus;