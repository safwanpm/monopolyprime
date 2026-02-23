"use client";
import React, { useEffect, useRef } from 'react';
import { Star, MapPin, Quote, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: "01",
    name: "Khalid Al-Hashemi",
    location: "Sharjah Waterfront",
    comment: "The precision in their market analysis is surgical. They secured a legacy asset that outperformed all benchmarks.",
    image: "/images/service1.webp"
  },
  {
    id: "02",
    name: "Elena Rodriguez",
    location: "Dubai Hills Estate",
    comment: "Signature real estate requires a signature mindset. Their team delivered strategic insight that is rare in the Emirates.",
    image: "/images/service2.webp"
  },
  {
    id: "03",
    name: "Omar Bin Sulayem",
    location: "Aljada, Sharjah",
    comment: "Their off-plan consultations are the gold standard. We secured units in a pre-launch phase with immediate equity growth.",
 image: "/images/service3.webp" }
];

const TitanAbsolute = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Forced Visibility Check: Reset any hidden states immediately
    gsap.set(".absolute-card", { opacity: 1, y: 0 });

    let ctx = gsap.context(() => {
      // 2. Simple, fail-safe reveal for the entire grid at once
      gsap.from(".absolute-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".absolute-grid",
          start: "top 90%", // Triggers earlier to ensure visibility
        }
      });

      // 3. Kinetic Interaction
      const cards = document.querySelectorAll(".absolute-card");
      cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) * 0.1;
          const y = (e.clientY - top - height / 2) * 0.1;
          
          gsap.to(card.querySelector(".card-inner"), { x: x * 0.4, y: y * 0.4, duration: 0.3 });
          gsap.to(card.querySelector(".card-bg-img"), { x: -x * 0.2, y: -y * 0.2, scale: 1.05, duration: 0.5 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector(".card-inner"), { x: 0, y: 0, duration: 0.5 });
          gsap.to(card.querySelector(".card-bg-img"), { x: 0, y: 0, scale: 1, duration: 0.5 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#020202] py-24 px-6 lg:px-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-amber-500/[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-16 border-l-2 border-amber-500 pl-8">
          <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[9px] mb-2 block">
            Verified Protocol
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Client <span className="text-white/20">Portfolios.</span>
          </h2>
        </header>

        {/* --- ABSOLUTE GRID --- */}
        <div className="absolute-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="absolute-card group relative min-h-[440px] rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50"
            >
              {/* IMAGE BACKDROP - Static visibility ensured */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="card-bg-img w-full h-full object-cover grayscale opacity-20 brightness-75 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent" />
              </div>

              {/* KINETIC CONTENT */}
              <div className="card-inner relative z-10 h-full flex flex-col justify-between p-10 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <Quote size={20} fill="currentColor" />
                  </div>
                  <div className="flex gap-0.5 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* PURE WHITE TEXT for 100% visibility */}
                  <p className="text-white text-xl leading-snug font-semibold tracking-tight">
                    "{item.comment}"
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-neutral-400 text-[9px] uppercase font-bold tracking-widest">
                        <MapPin size={10} className="text-amber-500" /> {item.location}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                      <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Texture Layer */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>
          ))}
        </div>

        {/* --- BRANDING FOOTER --- */}
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