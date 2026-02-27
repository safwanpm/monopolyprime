"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Eye,
  ArrowUpRight,
  ArrowDown,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSignature from "@/components/Contact";
import TitanMonolithFooter from "@/components/Footer";
import MonopolyAbsoluteGlass from "@/components/Popup";
import Link from "next/link";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

const SignatureAbout = () => {
  const containerRef = useRef(null);

  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const supportsHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  const crew = useMemo(
    () => [
      { name: "Osama Yacoub", role: "Executive Strategist", img: "/images/crew1.jpeg" },
      { name: "Lead Advisor", role: "Dubai Portfolio", img: "/images/crew2.webp" },
      { name: "Market Analyst", role: "Sharjah Corridor", img: "/images/crew3.webp" },
      { name: "Legal Counsel", role: "Acquisition Protocol", img: "/images/crew1.jpeg" },
    ],
    []
  );

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector;

      // Force GPU acceleration
      gsap.set(q(".hero-title, .reveal-section, .parallax-img"), {
        force3D: true,
      });

      // Hero reveal
      gsap.from(q(".hero-title"), {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
      });

      // Parallax (iOS optimized scrub)
      const parallaxImg = q(".parallax-img")[0];
      if (parallaxImg) {
        gsap.to(parallaxImg, {
          yPercent: 20,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: parallaxImg,
            scrub: isIOS ? 1 : true,
          },
        });
      }

      // Section reveals
      q(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isIOS]);

  return (
    <>
      <Navbar />

      <main
        ref={containerRef}
        className="bg-[#050505] text-white selection:bg-primary/30 overscroll-none"
      >
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] blur-[150px] rounded-full will-change-transform transform-gpu" />

          <div className="max-w-7xl px-6 md:px-0 mx-auto w-full z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px]">
                Est. 2016
              </span>
            </div>

            <h1 className="hero-title text-[clamp(3rem,12vw,12rem)] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">
                Different.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <p className="hero-title text-neutral-500 text-sm md:text-lg uppercase tracking-[0.4em] max-w-xl leading-relaxed font-light">
                Monopoly Prime Properties is the definitive architectural bridge
                between elite investors and the UAE's most iconic developments.
              </p>

              <div className="animate-bounce p-4 rounded-full border border-white/10">
                <ArrowDown size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="reveal-section py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-[#050505]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none will-change-transform transform-gpu" />

          <div className="max-w-7xl mx-auto px-6 md:px-0 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-[4rem] overflow-hidden backdrop-blur-3xl bg-white/[0.02]">

              {/* Mission */}
              <div className="relative p-12 lg:p-24 flex flex-col justify-center group border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                <span className="absolute -top-10 -left-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.03] transition-colors duration-700">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-700">
                      <Compass
                        className="text-primary transition-transform group-hover:rotate-[135deg] duration-1000"
                        size={32}
                      />
                    </div>
                    <div className="h-px w-12 bg-primary/30" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    OUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/70 to-primary font-light">
                      Mission.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    To curate a portfolio of architectural excellence while providing
                    <span className="text-white font-medium"> unrivaled discretion </span>
                    and surgical precision in every acquisition.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative p-12 lg:p-24 flex flex-col justify-center group overflow-hidden">
                <span className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.03] transition-colors duration-700">
                  02
                </span>

                <div className="relative z-10 lg:pl-12">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-700">
                      <Eye
                        className="text-primary transition-transform group-hover:scale-125 duration-700"
                        size={32}
                      />
                    </div>
                    <div className="h-px w-12 bg-primary/30" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    OUR <br />
                    <span className="text-primary bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-white font-light">
                      Vision.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    To define the future of the Emirates' skyline by connecting
                    <span className="text-white font-medium"> global capital </span>
                    with the region's most exclusive off-market opportunities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CREW */}
        <section className="reveal-section py-40 px-6 lg:px-12 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 md:px-0">
            <div className="mb-24">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">
                The <span className="text-primary">Crew.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
              {crew.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={supportsHover ? { y: -20 } : {}}
                  className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:grayscale transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="hidden md:block text-primary font-bold text-sm md:text-[10px] uppercase tracking-widest mb-2">
                      {member.role}
                    </p>
                    <h4 className="text-sm md:text-lg lg:text-2xl font-bold tracking-tight">
                      {member.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
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
              <Link href="tel:+971588017015"> Contact Strategists</Link>
             
            </button>
          </div>
        </section>

        <footer className="bg-[#020202] py-12 px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center opacity-30 gap-6">
          <p className="text-[10px] uppercase font-black tracking-[0.6em]">
            Sharjah • UAE
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