"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  History,
  Target,
  Users,
  Compass,
  Eye,
  ArrowUpRight,
  ShieldCheck,
  ArrowDown,MapPin
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSignature from "@/components/Contact";
import TitanMonolithFooter from "@/components/Footer";
import MonopolyAbsoluteGlass from "@/components/Popup";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const crew = [
  { name: "Osama Yacoub", role: "Executive Strategist", img: "/images/crew1.webp" },
  { name: "Lead Advisor", role: "Dubai Portfolio", img: "/images/crew2.webp" },
  { name: "Market Analyst", role: "Sharjah Corridor", img: "/images/crew3.webp" },
  { name: "Legal Counsel", role: "Acquisition Protocol", img: "/images/crew4.webp" },
];

const SignatureAbout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // 1. Kinetic Typography Reveal
      gsap.from(self.selector(".hero-title"), {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
      });

      // 2. Horizon Image Parallax
      gsap.to(self.selector(".parallax-img"), {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: self.selector(".parallax-img"),
          scrub: true,
        },
      });

      // 3. Section Transitions
      const sections = self.selector(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-[#050505] text-white selection:bg-amber-500/30">

        {/* --- 1. HERO: THE MONOLITH --- */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden">
          {/* Ambient signature glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[150px] rounded-full" />

          <div className="max-w-7xl px-6 md:px-0 mx-auto w-full z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[10px]">Est. 2016</span>
            </div>

            <h1 className="hero-title text-[clamp(3rem,12vw,12rem)] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">Different.</span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <p className="hero-title text-neutral-500 text-sm md:text-lg uppercase tracking-[0.4em] max-w-xl leading-relaxed font-light">
                Monopoly Prime Properties is the definitive architectural bridge between elite investors and the UAE's most iconic developments.
              </p>
              <div className="animate-bounce p-4 rounded-full border border-white/10">
                <ArrowDown size={20} className="text-amber-500" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE VISIONARY AXIS (Mission/Vision) --- */}
        <section className="reveal-section py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-[#050505]">
          {/* Background Decorative Element: The "Signature" Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative">

            {/* The Central "Golden Thread" - Vertical Divider on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent z-20" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-[4rem] overflow-hidden backdrop-blur-3xl bg-white/[0.02]">

              {/* --- MISSION: THE COMPASS --- */}
              <div className="relative p-12 lg:p-24 flex flex-col justify-center group border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                {/* Background Hover Text */}
                <span className="absolute -top-10 -left-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-amber-500/[0.03] transition-colors duration-700">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-700">
                      <Compass
                        className="text-amber-500 transition-transform group-hover:rotate-[135deg] duration-1000"
                        size={32}
                      />
                    </div>
                    <div className="h-px w-12 bg-amber-500/30" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    OUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 italic font-serif font-light lowercase">
                      Mission.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    To curate a portfolio of architectural excellence while providing
                    <span className="text-white font-medium"> unrivaled discretion </span>
                    and surgical precision in every acquisition.
                  </p>

                  <div className="mt-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                      Precision Protocol <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* --- VISION: THE EYE --- */}
              <div className="relative p-12 lg:p-24 flex flex-col justify-center group overflow-hidden">
                {/* Background Hover Text */}
                <span className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-amber-500/[0.03] transition-colors duration-700">
                  02
                </span>

                <div className="relative z-10 lg:pl-12">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-700">
                      <Eye
                        className="text-amber-500 transition-transform group-hover:scale-125 duration-700"
                        size={32}
                      />
                    </div>
                    <div className="h-px w-12 bg-amber-500/30" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    OUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-white italic font-serif font-light lowercase">
                      Vision.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    To define the future of the Emirates' skyline by connecting
                    <span className="text-white font-medium"> global capital </span>
                    with the region's most exclusive off-market opportunities.
                  </p>

                  <div className="mt-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="flex items-center gap-2 text-white font-bold uppercase tracking-[0.3em] text-[10px]">
                      Future Horizon <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* --- 4. THE CREW OF STRATEGISTS --- */}
        <section className="reveal-section py-40 px-6 lg:px-12 bg-white/[0.02]">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">The <span className="text-amber-500">Crew.</span></h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
              {crew.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -20 }}
                  className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5"
                >
                  <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-2">{member.role}</p>
                    <h4 className="text-2xl font-bold tracking-tight">{member.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. THE FINAL CALL --- */}
        <section className="py-40 bg-primary text-black px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8">
              Ready to Commence
            </h4>
            <h2 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Let's Build <br /> Your Legacy.
            </h2>
            <button className="px-16 py-6 border-2 border-black rounded-full font-black uppercase tracking-[0.4em] text-xs hover:bg-black hover:text-white transition-all">
              Contact Strategists
            </button>
          </div>
        </section>

        <footer className="bg-[#020202] py-12 px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center opacity-30 gap-6">
          <p className="text-[10px] uppercase font-black tracking-[0.6em]">
            {" "}
            Sharjah &bull; UAE
          </p>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-primary" />
            <span className="text-[10px] uppercase font-bold tracking-widest italic">
              Your Trusted
            </span>
          </div>
        </footer>
      </main>
      <ContactSignature />
      <TitanMonolithFooter />
      <MonopolyAbsoluteGlass />
    </>
  );
};

export default SignatureAbout;