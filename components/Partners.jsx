"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const partnerLogos = [
  { id: 1, name: "Partner A", url: "./images/partner1.png" },
  { id: 2, name: "Partner B", url: "./images/partner2.png" },
  { id: 3, name: "Partner C", url: "./images/partner4.png" },
  { id: 4, name: "Partner D", url: "./images/partner1.png" },
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

      // Prevent duplicate cloning on Fast Refresh
      if (!marqueeContent.dataset.cloned) {
        const clone = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clone;
        marqueeContent.innerHTML += clone;
        marqueeContent.dataset.cloned = "true";
      }

      // GPU optimization (important for Safari)
      marqueeContent.style.willChange = "transform";

      // Infinite marquee
      tweenRef.current = gsap.to(marqueeContent, {
        xPercent: -33.33,
        repeat: -1,
        duration: 30,
        ease: "none",
      });

      // Hover speed control
      const handleEnter = () => {
        if (tweenRef.current) {
          gsap.to(tweenRef.current, { timeScale: 0.5, duration: 1 });
        }
      };

      const handleLeave = () => {
        if (tweenRef.current) {
          gsap.to(tweenRef.current, { timeScale: 1, duration: 1 });
        }
      };

      container.addEventListener("mouseenter", handleEnter);
      container.addEventListener("mouseleave", handleLeave);

      // 3D Magnetic Slate Effect
      const slates = container.querySelectorAll(".glass-slate");

      slates.forEach((slate) => {
        slate.style.willChange = "transform";

        const handleMove = (e) => {
          const rect = slate.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

          gsap.to(slate, {
            x,
            y,
            rotateX: -y * 0.5,
            rotateY: x * 0.5,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const handleSlateLeave = () => {
          gsap.to(slate, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          });
        };

        slate.addEventListener("mousemove", handleMove, { passive: true });
        slate.addEventListener("mouseleave", handleSlateLeave);

        slate._cleanup = () => {
          slate.removeEventListener("mousemove", handleMove);
          slate.removeEventListener("mouseleave", handleSlateLeave);
        };
      });

      container._cleanup = () => {
        container.removeEventListener("mouseenter", handleEnter);
        container.removeEventListener("mouseleave", handleLeave);
      };
    }, containerRef);

    return () => {
      const container = containerRef.current;
      if (container?._cleanup) container._cleanup();

      const slates = container?.querySelectorAll(".glass-slate");
      slates?.forEach((slate) => {
        if (slate._cleanup) slate._cleanup();
      });

      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#020202] py-32 overflow-hidden relative"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-black tracking-[0.5em] uppercase text-[10px]">
                Trusted Network
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.8]">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-700">
                PARTNERS
              </span>
            </h2>
          </div>

          <p className="max-w-[300px] text-neutral-500 text-[11px] uppercase tracking-widest leading-relaxed font-medium pb-2">
            Collaborating with global industry titans to redefine luxury living standards.
          </p>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative flex items-center group/marquee">
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex gap-8 py-10 whitespace-nowrap will-change-transform"
        >
          {partnerLogos.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="glass-slate group relative flex-shrink-0 w-72 h-44 rounded-[2.5rem] bg-white border border-white/5 backdrop-blur-1xl flex items-center justify-center p-12 transition-colors hover:border-amber-500/30 overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <img
                src={partner.url}
                alt={partner.name}
                className="relative z-10 max-w-full max-h-full object-contain grayscale brightness-200 opacity-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BRAND STRIP */}
      <div className="mt-20 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default PartnerNexus;