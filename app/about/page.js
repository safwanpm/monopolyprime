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
import { Phone, Instagram, whatsapp } from "lucide-react";
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
      { name: "Ahamed elrahmany ", role: "Executive Strategist", number: "+971582342954", whatsapp: "971582342954", img: "/images/ahmed.jpeg" },
      { name: "Adnan jafar ", role: "Executive Strategist", number: "+971559884285", whatsapp: "971559884285", img: "/images/adnan.jpeg" },
      { name: "Hayder", role: "Dubai Portfolio", number: "+971582110586", whatsapp: "971582110586", img: "/images/crew2.webp" },
      { name: "Mosthafa", role: "Sharjah Corridor", number: "+971526683019", whatsapp: "971526683019", img: "/images/crew3.webp" },
      { name: "Mukhtar muhammed", role: "Acquisition Protocol", number: "+971588419025", whatsapp: "971588419025", img: "/images/crew1.jpeg" },
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
      } );
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
      

        {/* CREW */}
        <section className="reveal-section py-40 px-6 lg:px-12 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 md:px-0">
            <div className="mb-24">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">
                The <span className="text-primary">Crew.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
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
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 text-center md:text-left">

                    <h4 className="text-sm md:text-lg lg:text-2xl font-bold tracking-tight">
                      {member.name}
                    </h4>

                    <div className="flex items-center justify-center md:justify-start gap-3 mt-3">

                      {/* Call */}
                      <a
                        href={`tel:${member.number}`}
                        className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-full 
                 bg-black/40 md:bg-white/10 backdrop-blur-xl border border-white/20 
                 active:scale-95 hover:bg-primary hover:text-black transition"
                      >
                        <Phone className="w-5 h-5 md:w-4 md:h-4" />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(
                          "Hello, I would like to enquire about your services."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-full
  bg-black/40 md:bg-white/10 backdrop-blur-xl border border-white/20
  active:scale-95 hover:bg-green-500 hover:text-white transition"
                      >
                        <svg className="w-5 h-5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.46 0 .08 5.38.08 11.98c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63a11.94 11.94 0 005.84 1.49h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.2-3.53-8.4z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-full 
                 bg-black/40 md:bg-white/10 backdrop-blur-xl border border-white/20 
                 active:scale-95 hover:bg-pink-500 hover:text-white transition"
                      >
                        <Instagram className="w-5 h-5 md:w-4 md:h-4" />
                      </a>

                    </div>
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
            <h2 className="text-6xl md:text-[114px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Where Mission<br /> Meets Value.
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