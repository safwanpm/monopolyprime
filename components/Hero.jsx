"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  Wallet,
  ArrowRight,
  ChevronDown,
  Award,
  Globe,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [mode, setMode] = useState("buy");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { 
      icon: <Award size={16} className="text-primary" />, 
      value: "04+", 
      label: "Years Excellence", 
      desc: "Market leadership since 2022" 
    },
    { 
      icon: <Globe size={16} className="text-primary" />, 
      value: "500+", 
      label: "Premium Units", 
      desc: "Exclusive Dubai portfolio" 
    },
    { 
      icon: <ShieldCheck size={16} className="text-primary" />, 
      value: "100%", 
      label: "Secure Deals", 
      desc: "RERA Certified Advisory" 
    },
  ];

  return (
    <section className="relative min-h-[100dvh] w-full bg-secondary flex flex-col justify-end overflow-hidden pb-10 lg:pb-20">
      {/* --- Adaptive Background Image --- */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/background.webp"
          alt="UAE Luxury Real Estate"
          fill
          priority
          className="object-cover grayscale brightness-[0.35] object-[70%_center] lg:object-center transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent lg:via-transparent" />
      </motion.div>

      {/* --- Main Content --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12"
      >
        {/* 1. Buy/Rent Toggle */}
        <motion.div
          variants={itemVariants}
          className="flex gap-1  w-fit mb-8  pt-36 "
        >
          {["buy", "rent"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                mode === item
                  ? "bg-primary text-white "
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* 2. Dynamic Heading */}
        <motion.div variants={itemVariants} className="mb-10 lg:mb-16">
          <span className="text-primary  font-bold tracking-[0.4em] uppercase text-[9px] md:text-[11px] mb-4 block">
            The Pinnacle of UAE Living
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-[120px] font-bold text-white leading-[0.9] tracking-tighter">
            FIND THE <br />
            <span className="text-primary">
              {mode === "buy" ? "INVESTMENT." : "RESIDENCE."}
            </span>
          </h1>
        </motion.div>

        {/* 3. New Animated Stats Matrix (Replacing Search Bar) */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl lg:rounded-xl overflow-hidden shadow-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover="hover"
              className="relative p-8 border-b md:border-r border-white/5 cursor-default overflow-hidden group"
            >
              {/* Subtle hover background highlight */}
              <motion.div 
                variants={{ hover: { opacity: 1, x: 0 } }}
                initial={{ opacity: 0, x: -100 }}
                className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {stat.icon}
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
                
                <motion.h3 
                  variants={{ hover: { y: -5 } }}
                  className="text-3xl lg:text-4xl font-bold text-white tracking-tighter transition-colors group-hover:text-primary"
                >
                  {stat.value}
                </motion.h3>

                <motion.p 
                  variants={{ 
                    initial: { opacity: 0, y: 10 }, 
                    hover: { opacity: 1, y: 0 } 
                  }}
                  className="text-[11px] text-gray-400 mt-2 font-medium leading-tight"
                >
                  {stat.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}

          {/* Action Button - Kept same style as original */}
          <button className="p-6 lg:p-8 bg-primary flex items-center justify-between group hover:bg-primary/100 transition-all duration-700">
            <span className="text-secondary font-black uppercase text-xs lg:text-sm tracking-tighter">
              Begin Exploration
            </span>
            <motion.div 
              whileHover={{ rotate: -45 }}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white transition-all duration-700"
            >
              <ArrowRight size={18} className="text-black group-hover:text-white " />
            </motion.div>
          </button>
        </motion.div>

        {/* 4. Trust Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col md:flex-row gap-6 md:gap-20 items-start md:items-center opacity-40 hover:opacity-100 transition-all duration-700"
        >
          {[
            { num: "01.", label: "Curated Portfolio" },
            { num: "02.", label: "Bespoke Advisory" },
            { num: "03.", label: "Off-Market Access" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:flex-col md:items-start md:gap-0"
            >
              <span className="text-white font-bold text-lg md:text-xl">
                {stat.num}
              </span>
              <span className="text-white text-[9px] uppercase font-bold tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;