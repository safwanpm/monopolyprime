"use client";

import React from "react";
import { Star, MapPin, Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
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
];

const TitanAbsolute = () => {
  return (
    <section className="bg-[#020202] py-24 px-6 lg:px-24 relative overflow-hidden">
      
      {/* Subtle Background Layer */}
      <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative min-h-[440px] rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/50"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-20 brightness-75 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                
                {/* Top Row */}
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

                {/* Middle Content */}
                <div className="space-y-6">
                  <p className="text-white text-sm md:text-lg leading-snug font-semibold tracking-tight">
                    "{item.comment}"
                  </p>

                  {/* Bottom Section */}
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

              {/* Texture Overlay */}
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