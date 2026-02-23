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

const MonopolyAbsoluteGlass = () => {
  const [open, setOpen] = useState(false);
  const dockRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    const ctx = gsap.context(() => {
      gsap.to(".glass-dock", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, dockRef);
    return () => ctx.revert();
  }, [open]);

  return (
    <>
      {/* --- 1. THE FULL GLASS COMMAND DOCK (BOTTOM CENTER) --- */}
      <div className="fixed bottom-10 left-0 w-full flex justify-center z-[90] px-6 pointer-events-none">
        <div ref={dockRef} className="glass-dock pointer-events-auto">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="group relative flex items-center bg-white/[0.03] backdrop-blur-[40px] border border-white/20 rounded-full pl-5 pr-3 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer hover:border-amber-500/50 transition-all duration-700"
          >
            {/* GLASS LOGO INSET */}
            <div className=" rounded-full  px-4 py-2 mr-6 group-hover:bg-amber-500 transition-all duration-500">
              <Image
                src="/images/log_white.png"
                alt="Logo"
                width={70}
                height={25}
                className="object-contain group-hover:brightness-0 transition-all"
              />
            </div>

            {/* ACTION LABEL */}
            <div className="flex flex-col mr-12">
              <span className="text-amber-500 text-[8px] font-black uppercase tracking-[0.5em] leading-none mb-1">
                Prime
              </span>
              <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                Connect
              </span>
            </div>

            {/* AMBER GLASS TRIGGER */}
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <ArrowUpRight size={18} />
            </div>

            {/* INTERNAL REFRACTION LIGHT */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>

      {/* --- 2. THE SIGNATURE HUB (FULLSCREEN CONTENT) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            {/* DEEP BLUR BACKDROP */}
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
              {/* CLOSE PROTOCOL */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-[110] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-500 transition-all"
              >
                <X size={18} />
              </button>

              {/* --- TOP/LEFT: THE BRAND MONOLITH --- */}
              <div className="lg:col-span-5 relative p-8 md:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-black to-neutral-900/50">
                <div className="absolute inset-0 opacity-10 lg:opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 lg:mb-10">
                    <ShieldCheck size={16} className="text-amber-500" />
                    <span className="text-amber-500 font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[8px] lg:text-[10px]">
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
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
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
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                        <Globe size={14} />
                      </div>
                      <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white">
                        monopolyprime.ae
                      </span>
                    </a>
                  </div>
                  <p className="text-white/20 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em]">
                    Dubai • Sharjah • London
                  </p>
                </div>
              </div>

              {/* --- BOTTOM/RIGHT: THE ACTION TERMINAL --- */}
              <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 bg-[#080808] flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto space-y-10 lg:space-y-14">
                  {/* PRIMARY ACTION */}
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-center lg:text-left">
                      <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[8px] lg:text-[10px] mb-2 block">
                        Transmission Protocol
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter">
                        Connect <br className="hidden lg:block" />{" "}
                        <span className="text-white/20">Immediately.</span>
                      </h3>
                    </div>

                    <button className="group relative w-full py-6 lg:py-8 bg-amber-500 text-black font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-xs rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.97]">
                      <span className="relative z-10 flex items-center justify-center gap-3 lg:gap-4">
                        <MessageSquare size={18} fill="currentColor" /> Message
                        on WhatsApp
                      </span>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      <button className="flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-4 py-5 lg:py-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <Calendar size={18} className="text-amber-500" />
                        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white/60">
                          Book Viewing
                        </span>
                      </button>
                      <button className="flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-4 py-5 lg:py-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <LayoutGrid size={18} className="text-amber-500" />
                        <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-white/60">
                          Full Portfolio
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* EXTERNAL NODES */}
                  <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-10 border-t border-white/5">
                    <span className="text-neutral-600 font-black uppercase tracking-[0.3em] text-[8px] block text-center lg:text-left">
                      Market Channels
                    </span>
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 lg:p-6 bg-[#2c8444]/5 border border-[#2c8444]/20 rounded-xl lg:rounded-2xl hover:bg-[#2c8444]/10 transition-all"
                      >
                        <span className="text-white font-bold uppercase tracking-widest text-[9px] lg:text-[11px]">
                          Bayut
                        </span>
                        <ExternalLink size={12} className="text-white/40" />
                      </a>
                      <a
                        href="#"
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

                {/* GHOST LOGO BACKGROUND */}
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
