"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  Home, 
  Building2, 
  TrendingUp, 
  Search, 
  ArrowUpRight, 
  Plus 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { 
    id: "01", 
    title: "Property Sales", 
    desc: "Assisting clients in buying and selling residential and commercial properties, ensuring smooth transactions and market-leading value.", 
    icon: <Home size={28} />, 
    span: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    id: "02", 
    title: "Property Rentals", 
    desc: "From short-term to long-term rentals, we bridge the gap between tenants and landlords with absolute confidence.", 
    icon: <Key size={28} />, 
    span: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    id: "03", 
    title: "Off-Plan Properties", 
    desc: "Access the latest projects from trusted developers with expert guidance to secure premier investment opportunities.", 
    icon: <Building2 size={28} />, 
    span: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    id: "04", 
    title: "Real Estate Investment", 
    desc: "Maximize returns through strategic property investments across the high-yield markets of Dubai and Sharjah.", 
    icon: <TrendingUp size={28} />, 
    span: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    id: "05", 
    title: "Property Consulting", 
    desc: "In-depth market insights and personalized pricing strategies to support every step of your real estate journey.", 
    icon: <Search size={28} />, 
    span: "md:col-span-3",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  }
];

const ServiceMatrix = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance reveal
      gsap.fromTo(".apex-card", 
        { opacity: 0, y: 70 },
        {
          opacity: 1, y: 0,
          duration: 1, stagger: 0.1, ease: "power4.out",
          scrollTrigger: { trigger: ".apex-grid", start: "top 85%" }
        }
      );

      const cards = document.querySelectorAll(".apex-card");
      cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          // Calculate mouse position relative to center of card
          const x = (e.clientX - left - width / 2);
          const y = (e.clientY - top - height / 2);
          
          // 1. Kinetic Image Motion (Parallax)
          gsap.to(card.querySelector(".bg-image"), { 
            x: x * 0.05, 
            y: y * 0.05, 
            scale: 1.15, 
            rotate: x * 0.01, 
            duration: 0.7, 
            ease: "power2.out" 
          });

          // 2. Magnetic Content Pull
          gsap.to(card.querySelector(".card-inner"), { 
            x: x * 0.1, 
            y: y * 0.1, 
            duration: 0.4, 
            ease: "power3.out" 
          });

          // 3. Floating Icon Movement
          gsap.to(card.querySelector(".icon-box"), { 
            x: x * 0.15, 
            y: y * 0.15, 
            duration: 0.3 
          });
        });

        card.addEventListener("mouseleave", () => {
          // Reset all positions smoothly
          gsap.to(card.querySelector(".bg-image"), { x: 0, y: 0, scale: 1, rotate: 0, duration: 0.8 });
          gsap.to(card.querySelector(".card-inner"), { x: 0, y: 0, duration: 0.8 });
          gsap.to(card.querySelector(".icon-box"), { x: 0, y: 0, duration: 0.8 });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#020202] py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-black tracking-[0.5em] uppercase text-[10px]">What We Do</span>
            </div>
            <h2 className="text-6xl md:text-[140px] font-black text-white tracking-tighter uppercase leading-[0.75]">
              Signature <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">Expertise.</span>
            </h2>
          </div>
          <button className="flex items-center gap-4 text-white/40 hover:text-amber-500 transition-colors uppercase text-[10px] font-black tracking-[0.4em] border-b border-white/5 pb-2 mb-2">
            Protocol Scope <Plus size={14} className="text-amber-500" />
          </button>
        </header>

        {/* --- APEX GRID --- */}
        <div className="apex-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`apex-card group relative min-h-[450px] rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-amber-500/50 ${item.span}`}
            >
              {/* --- VIVID BACKGROUND LAYER --- */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="bg-image w-full h-full object-cover grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-[0.8] transition-all duration-1000"
                />
                {/* Thin Gradient Protection for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* GHOST ID */}
              <span className="absolute top-10 right-10 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter group-hover:text-amber-500/5 transition-colors">
                {item.id}
              </span>

              {/* KINETIC CONTENT */}
              <div className="card-inner relative z-10 h-full flex flex-col justify-between p-12 pointer-events-none">
                <div className="flex justify-between items-start">
                  {/* <div className="icon-box w-16 h-16 rounded-[1.5rem] bg-amber-500 flex items-center justify-center text-black shadow-2xl transition-transform">
                    {item.icon}
                  </div> */}
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-500">
                    <ArrowUpRight size={20} className="text-white group-hover:text-black transition-colors" />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-white uppercase tracking-tight group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-base leading-relaxed font-medium max-w-[450px] drop-shadow-lg">
                    {item.desc}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/60 group-hover:text-amber-500 transition-colors">
                      Operational Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* SCANLINE EFFECT */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent h-[2px] animate-scan z-20" />
            </div>
          ))}
        </div>

        {/* --- SIGNATURE FOOTER --- */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 relative">
          <p className="text-white/5 text-[120px] font-black tracking-tighter uppercase absolute left-0 bottom-[-40px] select-none pointer-events-none">
            Titan
          </p>
          <div className="flex gap-10 z-10">
            {['Strategy', 'Integrity', 'Legacy'].map((word) => (
              <span key={word} className="text-white/20 text-[10px] font-black uppercase tracking-[0.8em]">{word}</span>
            ))}
          </div>
          <div className="text-right z-10">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest">Global HQ — Dubai & Sharjah</p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest mt-2">© 2026 Signature Collective Group</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-scan {
          animation: scan 7s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceMatrix;