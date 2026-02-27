"use client";
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { Star, MapPin, Quote, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const TitanAbsolute = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Memoized testimonials (no re-creation on render)
  const testimonials = useMemo(
    () => [
      {
        id: "01",
        name: "Ashna Shameer",
        location: "Sharjah, UAE",
        comment:
          "Wonderful rental experience. Mr. Osama was professional, responsive, and extremely helpful from paperwork to maintenance. Truly appreciate his support.",
        image: "/images/service1.webp",
      },
      {
        id: "02",
        name: "Mjd Alzoubi",
        location: "Sharjah, UAE",
        comment:
          "Best rental experience I’ve had. Osama Yacoub was honest, professional, and handled everything promptly. Highly recommended.",
        image: "/images/service2.webp",
      },
      {
        id: "03",
        name: "Saurav Bhatia",
        location: "Sharjah, UAE",
        comment:
          "Great experience throughout. Osama was helpful, responsive, and made the 1 BHK process smooth and hassle-free. Reliable agent.",
        image: "/images/property2.webp",
      },
    ],
    []
  );

  const handleMove = useCallback((card, inner, bg, e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(inner, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(bg, {
      x: -x * 0.2,
      y: -y * 0.2,
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleLeave = useCallback((inner, bg) => {
    gsap.to(inner, { x: 0, y: 0, duration: 0.5 });
    gsap.to(bg, { x: 0, y: 0, scale: 1, duration: 0.5 });
  }, []);

  useEffect(() => {
    gsap.set(".absolute-card", { opacity: 1, y: 0 });

    const ctx = gsap.context(() => {
      gsap.from(".absolute-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".absolute-grid",
          start: "top 90%",
        },
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const inner = card.querySelector(".card-inner");
        const bg = card.querySelector(".card-bg-img");
        if (!inner || !bg) return;

        inner.style.willChange = "transform";
        bg.style.willChange = "transform";

        const move = (e) => handleMove(card, inner, bg, e);
        const leave = () => handleLeave(inner, bg);

        card.addEventListener("mousemove", move, { passive: true });
        card.addEventListener("mouseleave", leave);

        card._cleanup = () => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        };
      });
    }, containerRef);

    return () => {
      cardsRef.current.forEach((card) => {
        if (card?._cleanup) card._cleanup();
      });
      ctx.revert();
    };
  }, [handleMove, handleLeave]);

  return (
    <section
      ref={containerRef}
      className="bg-[#020202] py-24 px-6 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <header className="mb-16 border-l-2 border-primary pl-8">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-[9px] mb-2 block">
            Verified Protocol
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Client <span className="text-white/20">Portfolios.</span>
          </h2>
        </header>

        {/* GRID */}
        <div className="absolute-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="absolute-card group relative min-h-[440px] rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/50"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="card-bg-img w-full h-full object-cover grayscale opacity-20 brightness-75 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="card-inner relative z-10 h-full flex flex-col justify-between p-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <Quote size={20} fill="currentColor" />
                  </div>
                  <div className="flex gap-0.5 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-white text-sm md:text-lg leading-snug font-semibold tracking-tight">
                    "{item.comment}"
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-neutral-400 text-[9px] uppercase font-bold tracking-widest">
                        <MapPin size={10} className="text-primary" />
                        {item.location}
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowUpRight
                        size={16}
                        className="text-white group-hover:text-black transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex justify-between items-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">
          <span>Titan Real Estate</span>
          <div className="flex gap-4">
            <span>Sharjah</span>
            <span>//</span>
            <span>Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitanAbsolute;