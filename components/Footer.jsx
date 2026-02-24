"use client";
import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Zap,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const TitanMonolithFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Reveal animation for footer elements
      gsap.from(".footer-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#" },
    { name: "Off-Plan", href: "#" },
    { name: "Investments", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#020202] pt-40 pb-12 px-6 lg:px-24 relative overflow-hidden border-t border-white/10"
    >
      {/* --- NEON GRADIENT ACCENT --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 shadow-[0_0_30px_#f59e0b]" />

      <div className=" px-6 md:px-2 max-w-7xl mx-auto relative z-10">
        {/* --- SECTION 1: THE BRAND STATEMENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-8 footer-reveal">
            <div className="py-2  flex justify-start">
              <Image
                src="/images/log_white.png"
                alt="MonopolyPrime Properties"
                width={800}
                height={200}
                priority
                className="w-[150px] md:w-[350px] lg:w-[500px] object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-8">
              <button className="px-12 py-5 bg-amber-500 text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Inquire Now
              </button>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:text-right footer-reveal">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-sm ml-auto mb-8 uppercase tracking-tighter italic opacity-60">
              "We architect the transitions that define your real estate legacy
              in the Emirates."
            </p>
            <div className="text-[10px] font-black tracking-[0.6em] text-amber-500 uppercase">
              Sharjah • Dubai • London
            </div>
          </div>
        </div>

        {/* --- SECTION 2: THE TECHNICAL NAV (VISIBLE & SHARP) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32 footer-reveal">
          {/* Quick Links */}
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-amber-500/50 transition-colors">
            <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white font-bold uppercase tracking-widest text-sm hover:text-amber-500 flex items-center justify-between group"
                  >
                    {link.name}{" "}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hub */}
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-amber-500/50 transition-colors lg:col-span-2">
            <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">
              Direct Protocols
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <Phone size={18} className="text-amber-500" />
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    +971 6 5XX XXXX
                  </span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <Mail size={18} className="text-amber-500" />
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    private@titan.ae
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-amber-500" />
                <span className="text-white/60 text-xs leading-relaxed uppercase tracking-widest">
                  Executive Tower, Aljada <br /> Sharjah, UAE
                </span>
              </div>
            </div>
          </div>

          {/* Status Monitor */}
          <div className="bg-amber-500 p-10 rounded-[3rem] flex flex-col justify-between text-black">
            <Zap size={32} fill="black" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                System Status
              </p>
              <p className="text-2xl font-black uppercase tracking-tighter">
                Operational
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: THE FINAL STRIP --- */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 footer-reveal">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-amber-500" />
              <Link href={'https://www.instagram.com/conceptra_/'} 
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                Conceptra
              </Link>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              © 2026 MonopolyPrimeProperties
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-amber-500 transition-colors"
          >
            Ascend{" "}
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default TitanMonolithFooter;
