"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  MessageSquare,
  Calendar,
  Phone,
  ArrowUpRight,
  Zap,
  Globe,
  ExternalLink,
  ShieldCheck,
  LayoutGrid,
} from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

const MonopolyAbsoluteGlass = () => {
  const [open, setOpen] = useState(false);
  const dockRef = useRef(null);

  /* ✅ iOS Viewport Height Fix */
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };

    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  /* ✅ Safari-Safe Body Scroll Lock */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [open]);

  /* ✅ Optimized GSAP Floating Animation */
  useEffect(() => {
    if (!dockRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".glass-dock", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true, // 🔥 GPU acceleration
      });
    }, dockRef);

    return () => ctx.revert();
  }, []);

  /* ✅ Battery Saver (MacBooks / iOS tabs) */
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.resume();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <>
      {/* --- GLASS COMMAND DOCK --- */}
      <div className="fixed bottom-10 left-0 w-full flex justify-center z-[90] px-6 pointer-events-none">
        <div ref={dockRef} className="glass-dock pointer-events-auto">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="group relative flex items-center bg-white/[0.03] backdrop-blur-[40px] border border-white/20 rounded-full pl-5 pr-3 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer hover:border-primary/50 transition-all duration-700"
          >
            <div className="rounded-full px-4 py-2 mr-6 group-hover:bg-primary transition-all duration-500">
              <Image
                src="/images/log_white.png"
                alt="Logo"
                width={70}
                height={25}
                className="object-contain group-hover:brightness-0 transition-all"
              />
            </div>

            <div className="flex flex-col mr-12">
              <span className="text-primary text-[8px] font-black uppercase tracking-[0.5em] leading-none mb-1">
                Prime
              </span>
              <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                Connect
              </span>
            </div>

            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <ArrowUpRight size={18} />
            </div>

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>

      {/* --- SIGNATURE HUB --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(24px)" }}
              className="absolute inset-0 bg-black/90"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, filter: "blur(20px)" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl h-full max-h-[90vh] lg:max-h-[800px] bg-[#050505] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-y-auto lg:overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] grid grid-cols-1 lg:grid-cols-12"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-[110] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-all"
              >
                <X size={18} />
              </button>

              {/* --- BRAND PANEL --- */}
              <div className="lg:col-span-5 relative p-8 md:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-black to-neutral-900/50">
                <div className="absolute inset-0 opacity-10 lg:opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 lg:mb-10">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className="text-primary font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[8px] lg:text-[10px]">
                      Elite Verified
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/images/log_white.png"
                      alt="MonopolyPrime Properties Logo"
                      width={600}
                      height={200}
                      priority
                      className="w-[220px] md:w-[350px] lg:w-[520px] object-contain"
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-10 lg:mt-0 space-y-6 lg:space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                    <a
                      href="tel:+971588017015"
                      className="group flex items-center gap-3 lg:gap-4"
                    >
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <Phone size={14} />
                      </div>
                      <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white">
                        +971 58 801 7015
                      </span>
                    </a>

                    <a
                      href="mailto:info@monopolyprime.ae"
                      className="group flex items-center gap-3 lg:gap-4"
                    >
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <Globe size={14} />
                      </div>
                      <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white">
                        monopolyprime.ae
                      </span>
                    </a>
                  </div>

                  <p className="text-white/20 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em]">
                    Sharjah • UAE
                  </p>
                </div>
              </div>

              {/* --- ACTION TERMINAL --- */}
              <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 bg-[#080808] flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto space-y-10 lg:space-y-14">
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-center lg:text-left">
                      <span className="text-primary font-black uppercase tracking-[0.4em] text-[8px] lg:text-[10px] mb-2 block">
                        Transmission Protocol
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">
                        Connect <br className="hidden lg:block" />
                        <span className="text-white/20"> Immediately.</span>
                      </h3>
                    </div>

                    <Link
                      href=" https://wa.me/971588017015?text=Hello%20I%20am%20interested%20in%20your%20property"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full py-6 lg:py-8 bg-primary text-black font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.97] flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 lg:gap-4">
                        <MessageSquare size={18} fill="currentColor" />
                        Message on WhatsApp
                      </span>
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      <button className="flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-4 py-5 lg:py-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <Calendar size={18} className="text-primary" />
                        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white/60">
                          Book Viewing
                        </span>
                      </button>

                      <button className="flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-4 py-5 lg:py-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <LayoutGrid size={18} className="text-primary" />
                        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white/60">
                          Full Portfolio
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* ✅ RESTORED MARKET CHANNELS */}
                  <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-10 border-t border-white/5">
                    <span className="text-neutral-600 font-black uppercase tracking-[0.3em] text-[8px] block text-center lg:text-left">
                      Market Channels
                    </span>

                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <a
                        href="https://www.bayut.com/companies/monopoly-prime-properties-105666/"
                        className="flex items-center justify-between p-4 lg:p-6 bg-[#2c8444]/5 border border-[#2c8444]/20 rounded-xl lg:rounded-2xl hover:bg-[#2c8444]/10 transition-all"
                      >
                        <span className="text-white font-bold uppercase tracking-widest text-[9px] lg:text-[11px]">
                          Bayut
                        </span>
                        <ExternalLink size={12} className="text-white/40" />
                      </a>

                      <a
                        href="https://uae.dubizzle.com/ar/property-agencies/monopoly-prime-properties-10357/"
                        className="flex items-center justify-between p-4 lg:p-6 bg-[#ff385c]/5 border border-[#ff385c]/20 rounded-xl lg:rounded-2xl hover:bg-[#ff385c]/10 transition-all"
                      >
                        <span className="text-white font-bold uppercase tracking-widest text-[9px] lg:text-[11px]">
                          Dubizzle
                        </span>
                        <ExternalLink size={12} className="text-white/40" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 p-6 lg:p-10 opacity-5 pointer-events-none">
                  <Zap className="w-24 h-24 lg:w-48 lg:h-48 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MonopolyAbsoluteGlass;
