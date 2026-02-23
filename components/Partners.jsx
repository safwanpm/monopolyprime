"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Use your actual company logos here
const partnerLogos = [
  { id: 1, name: "Partner A", url: "./images/partner1.png" },
  { id: 2, name: "Partner B", url: "./images/partner2.png" },
  { id: 3, name: "Partner C", url: "./images/partner4.png" },
  { id: 4, name: "Partner D", url: "./images/partner1.png"},
//   { id: 5, name: "Partner E", url: "/logos/partner5.png" },
//   { id: 6, name: "Partner F", url: "/logos/partner6.png" },
];

const PartnerNexus = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Seamless Infinite Loop
      const marqueeContent = marqueeRef.current;
      const clone = marqueeContent.innerHTML;
      marqueeContent.innerHTML += clone; // Duplicate for seamless loop

      gsap.to(marqueeContent, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });

      // 2. Magnetic Hover for individual slates
      const slates = document.querySelectorAll(".glass-slate");
      slates.forEach(slate => {
        slate.addEventListener("mousemove", (e) => {
          const rect = slate.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
          gsap.to(slate, { x, y, scale: 1.05, duration: 0.4 });
        });
        slate.addEventListener("mouseleave", () => {
          gsap.to(slate, { x: 0, y: 0, scale: 1, duration: 0.6 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#020202] py-24 overflow-hidden relative">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-amber-500" />
          <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-[9px]">Strategic Tie-ups</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          The <span className="text-white/20 italic">Nexus.</span>
        </h2>
      </div>

      {/* --- KINETIC MARQUEE --- */}
      <div className="relative flex items-center">
        {/* Masking Gradients for "Fade-in/out" effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

        <div ref={marqueeRef} className="flex gap-6 py-10 whitespace-nowrap">
          {partnerLogos.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`}
              className="glass-slate flex-shrink-0 w-64 h-36 rounded-[2rem] bg-white border border-white/10 backdrop-blur-xl flex items-center justify-center p-8 transition-all hover:border-amber-500/40 relative group"
            >
              {/* Internal Glow Follower */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl rounded-full" />
              
              <img 
                src={partner.url} 
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
              
              {/* Technical ID */}
              <span className="absolute bottom-4 right-6 text-[8px] font-mono text-white/5 group-hover:text-amber-500/30 transition-colors">
                REF_0{partner.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- BRAND STRIP --- */}
      <div className="mt-12 flex justify-center opacity-10">
        <p className="text-[10px] font-black uppercase tracking-[1em] text-white">Monopoly Prime Properties Alliance</p>
      </div>

    </section>
  );
};

export default PartnerNexus;