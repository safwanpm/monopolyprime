"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const partnerLogos = [
  { id: 1, name: "Partner A", url: "./images/partner1.png" },
  { id: 2, name: "Partner B", url: "./images/partner2.png" },
  { id: 3, name: "Partner C", url: "./images/partner3.png" },
  { id: 4, name: "Partner D", url: "./images/partner4.png" },
];

const PartnerNexus = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const marqueeContent = marqueeRef.current;
      if (!container || !marqueeContent) return;

      if (!marqueeContent.dataset.cloned) {
        const clone = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clone;
        marqueeContent.innerHTML += clone;
        marqueeContent.dataset.cloned = "true";
      }

      tweenRef.current = gsap.to(marqueeContent, {
        xPercent: -33.33,
        repeat: -1,
        duration: 35,
        ease: "none",
      });

      const handleEnter = () => {
        if (window.innerWidth > 768 && tweenRef.current) {
          gsap.to(tweenRef.current, { timeScale: 0.4, duration: 1.2 });
        }
      };

      const handleLeave = () => {
        if (window.innerWidth > 768 && tweenRef.current) {
          gsap.to(tweenRef.current, { timeScale: 1, duration: 1.2 });
        }
      };

      container.addEventListener("mouseenter", handleEnter);
      container.addEventListener("mouseleave", handleLeave);

      const slates = container.querySelectorAll(".glass-slate");
      slates.forEach((slate) => {
        const handleMove = (e) => {
          if (window.innerWidth <= 768) return;
          const rect = slate.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.2;

          gsap.to(slate, {
            x,
            y,
            rotateX: -y * 0.5,
            rotateY: x * 0.5,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleSlateLeave = () => {
          gsap.to(slate, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });
        };

        slate.addEventListener("mousemove", handleMove);
        slate.addEventListener("mouseleave", handleSlateLeave);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#020202] py-24 lg:py-40 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[100px] md:blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/[0.03] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 lg:mb-28 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                className="h-[1px] bg-amber-500" 
              />
              <span className="text-amber-500 font-black tracking-[0.5em] uppercase text-[9px] md:text-[11px]">
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

      <div className="relative flex items-center group/marquee">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-30 pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex gap-6 md:gap-12 py-12 md:py-20 whitespace-nowrap will-change-transform"
        >
          {partnerLogos.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
           
              className="glass-slate group relative flex-shrink-0 w-64 h-36 md:w-80 md:h-48 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl flex items-center justify-center transition-all duration-500 hover:border-amber-500/50 hover:bg-white/[0.08]"
              style={{ perspective: "1200px" }}
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

              <img
                src={partner.url}
                alt={partner.name}
                
                className="relative z-10 w-[80%] h-[80%] max-w-[80%] max-h-[80%] object-contain brightness-[2.5] opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 lg:mt-20 max-w-7xl mx-auto px-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default PartnerNexus;