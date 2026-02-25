"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowUpRight } from "lucide-react";

const MonopolySignatureTrust = () => {
  return (
    <section className="py-24 bg-[#050505] flex justify-center px-6 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group max-w-6xl w-full"
      >
        {/* Animated Border Gradient Layer */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[2.5rem] opacity-50 group-hover:via-primary/40 transition-all duration-700" />

        {/* Main Glass Body */}
        <div className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl rounded-[2.5rem] p-1 md:p-2 overflow-hidden">
          <div className="bg-[#050505]/40 rounded-[2.3rem] px-8 md:px-16 py-10 md:py-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* 1. RATING ARCHITECTURE */}
            <div className="flex flex-col items-center relative">
              <div className="relative mb-2">
                {/* Custom SVG Laurel Wreaths for a "Signature" Look */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-primary">
                    <path d="M35 10C25 15 10 30 5 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="36" cy="10" r="2" fill="currentColor"/>
                    <circle cx="30" cy="22" r="2" fill="currentColor"/>
                    <circle cx="22" cy="34" r="2" fill="currentColor"/>
                  </svg>
                </div>
                
                <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                  4.2
                </h2>

                <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-x-[-1]">
                  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-primary">
                    <path d="M35 10C25 15 10 30 5 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="36" cy="10" r="2" fill="currentColor"/>
                    <circle cx="30" cy="22" r="2" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < 4 ? "fill-primary text-primary" : "text-white/10"} 
                  />
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden lg:block h-20 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* 2. CORE SLOGAN - The "Matters" Phrasing */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-2xl md:text-4xl font-light text-white leading-tight tracking-tight">
                It <span className="text-primary  font-medium group-hover:text-primary/95 transition-colors">Matters</span> which <br className="hidden md:block" />
                <span className="font-bold tracking-tighter uppercase text-3xl md:text-5xl">Agency</span> you Trust
              </p>
              
            </div>

            {/* DIVIDER */}
            <div className="hidden lg:block h-20 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* 3. GOOGLE AUTHORITY */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="flex items-center gap-1.5 mb-3 group-hover:scale-105 transition-transform duration-500">
                <span className="text-[#4285F4] font-black text-2xl tracking-tighter">G</span>
                <span className="text-[#EA4335] font-black text-2xl tracking-tighter">o</span>
                <span className="text-[#FBBC05] font-black text-2xl tracking-tighter">o</span>
                <span className="text-[#4285F4] font-black text-2xl tracking-tighter">g</span>
                <span className="text-[#34A853] font-black text-2xl tracking-tighter">l</span>
                <span className="text-[#EA4335] font-black text-2xl tracking-tighter">e</span>
              </div>
              
              <div className="text-center lg:text-right group-hover:translate-y-[-2px] transition-transform duration-500">
                {/* <p className="text-3xl font-black text-white leading-none">52+</p> */}
                <div className="flex items-center gap-2 group/btn cursor-pointer mt-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover/btn:text-primary transition-colors border-b border-gray-800 pb-0.5">
                    Verified Reviews
                  </span>
                  <ArrowUpRight size={12} className="text-gray-500 group-hover/btn:text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MonopolySignatureTrust;