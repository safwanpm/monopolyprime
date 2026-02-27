"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Fingerprint,
  Target,
  TrendingUp,
  Search,
  Key,
  Compass,
  ChevronDown
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import ContactSignature from "@/components/Contact";
import TitanMonolithFooter from "@/components/Footer";
import MonopolyAbsoluteGlass from "@/components/Popup";

const services = [
  {
    id: "01",
    title: "Property Sales",
    concept: "Strategic Disposition",
    protocolTitle: "Sales Execution Framework",
    desc: "End-to-end sales management for residential and commercial assets across the UAE. From accurate valuation to negotiation and final transfer, we ensure seamless and profitable transactions.",
    icon: <Target size={32} />,
    bgImage: "/images/service1.webp"
  },
  {
    id: "02",
    title: "Property Rentals",
    concept: "Income Maximization",
    protocolTitle: "Leasing Management System",
    desc: "Comprehensive rental solutions designed to maximize occupancy and protect asset value.",
    icon: <Key size={32} />,
    bgImage: "/images/service2.webp"
  },
  {
    id: "03",
    title: "Off-Plan Ventures",
    concept: "Pre-Launch Investment",
    protocolTitle: "Developer Access Program",
    desc: "Exclusive access to high-potential off-plan projects before public release.",
    icon: <Compass size={32} />,
    bgImage: "/images/service3.avif"
  },
  {
    id: "04",
    title: "Portfolio Strategy",
    concept: "Asset Growth Planning",
    protocolTitle: "Investment Structuring",
    desc: "Customized portfolio strategies designed to balance risk and maximize returns.",
    icon: <TrendingUp size={32} />,
    bgImage: "/images/service4.webp"
  },
  {
    id: "05",
    title: "Market Consulting",
    concept: "Market Intelligence",
    protocolTitle: "Strategic Advisory Services",
    desc: "In-depth market research and advisory solutions.",
    icon: <Search size={32} />,
    bgImage: "/images/service5.webp"
  }
];

const AdaptiveSignatureServices = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <Navbar />

      <section className="bg-[#050505] text-white py-16 md:py-24 px-6 lg:px-24 min-h-screen overflow-hidden">

        {/* HEADER */}
        <div className="max-w-[1440px] mx-auto mb-16 lg:mb-24 pt-20">
          <div className="flex items-center gap-3 mb-4">
            <Fingerprint size={18} className="text-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              Monopoly Protocol
            </span>
          </div>

          <h2 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            OPERATIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">
              MASTERY.
            </span>
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto">

          {/* ================= MOBILE ================= */}
          <div className="lg:hidden space-y-4">
            {services.map((item, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  className={`border rounded-[2rem] overflow-hidden ${
                    isOpen
                      ? "bg-white/[0.05] border-primary/30"
                      : "bg-white/[0.02] border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                    className="w-full p-8 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-bold ${isOpen ? "text-primary" : "text-neutral-600"}`}>
                        {item.id}
                      </span>
                      <h3 className="text-xl font-black uppercase tracking-tighter">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : "text-neutral-600"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-8 pb-8 border-t border-white/5 overflow-hidden"
                      >
                        <p className="text-neutral-400 text-sm leading-relaxed pt-6">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:grid grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5 space-y-4">
              {services.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer p-8 rounded-2xl border ${
                    activeIdx === idx
                      ? "bg-white/[0.05] border-primary/40"
                      : "border-white/5 opacity-40 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-bold ${activeIdx === idx ? "text-primary" : "text-neutral-600"}`}>
                        {item.id}
                      </span>
                      <h3 className="text-2xl font-black uppercase tracking-tighter">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight
                      size={20}
                      className={`transition-all duration-300 ${
                        activeIdx === idx ? "text-primary" : "opacity-0 -translate-x-4"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-7 sticky top-24">
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[3rem] min-h-[620px] overflow-hidden shadow-2xl">

                {/* Animated Background Change */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={services[activeIdx].bgImage}
                    src={services[activeIdx].bgImage}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                  />
                </AnimatePresence>

                <div className="relative z-10 p-16">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                    >
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
                        {services[activeIdx].concept}
                      </span>
                      <h4 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                        {services[activeIdx].protocolTitle}
                      </h4>

                      <p className="text-neutral-300 text-xl leading-relaxed max-w-xl">
                        {services[activeIdx].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="max-w-[1440px] mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-12">
            {["Strategy", "Integrity", "Legacy"].map((word) => (
              <span key={word} className="text-neutral-800 text-[10px] font-black uppercase tracking-[0.8em]">
                {word}
              </span>
            ))}
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Monopoly Prime Properties. All Rights Reserved.
          </p>
        </div>

      </section>

      <ContactSignature />
      <TitanMonolithFooter />
      <MonopolyAbsoluteGlass />
    </>
  );
};

export default AdaptiveSignatureServices;