"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Wallet, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mode, setMode] = useState('buy'); // UAE Market: buy or rent

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#050505] flex flex-col justify-end overflow-hidden pb-10 lg:pb-20">
      
      {/* --- Adaptive Background Image --- */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="./images/background.jpg" 
          alt="UAE Luxury Real Estate" 
          className="w-full h-full object-cover grayscale brightness-[0.35] object-[70%_center] lg:object-center transition-all duration-700"
        />
        {/* Mobile-optimized vignette: Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent lg:via-transparent" />
      </motion.div>

      {/* --- Main Content --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12"
      >
        
        {/* 1. Buy/Rent Toggle (Luxury Style) */}
        <motion.div variants={itemVariants} className="flex gap-1  w-fit mb-8  pt-36 ">
          {['buy', 'rent'].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                mode === item ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* 2. Dynamic Heading */}
        <motion.div variants={itemVariants} className="mb-10 lg:mb-16">
          <span className="text-amber-500  font-bold tracking-[0.4em] uppercase text-[9px] md:text-[11px] mb-4 block">
            The Pinnacle of UAE Living
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-[120px] font-bold text-white leading-[0.9] tracking-tighter">
            FIND THE <br /> 
            <span className="text-amber-500">
              {mode === 'buy' ? 'INVESTMENT.' : 'RESIDENCE.'}
            </span>
          </h1>
        </motion.div>

        {/* 3. Search Matrix (The Responsive Grid) */}
        <motion.div 
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl lg:rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Field: Neighborhood */}
          <div className="p-6 lg:p-8 border-b md:border-r border-white/5 hover:bg-white/[0.05] transition-all cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={14} className="text-amber-500" />
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Neighborhood</span>
            </div>
            <div className="flex items-center justify-between">
              <select className="bg-transparent text-white font-medium text-sm lg:text-base w-full outline-none appearance-none cursor-pointer">
                <option className="bg-[#111]">Palm Jumeirah</option>
                <option className="bg-[#111]">Dubai Marina</option>
                <option className="bg-[#111]">Business Bay</option>
                <option className="bg-[#111]">Downtown Dubai</option>
              </select>
              <ChevronDown size={14} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
            </div>
          </div>

          {/* Field: Asset Type */}
          <div className="p-6 lg:p-8 border-b lg:border-b-0 md:border-r border-white/5 hover:bg-white/[0.05] transition-all cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={14} className="text-amber-500" />
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Asset Class</span>
            </div>
            <div className="flex items-center justify-between">
              <select className="bg-transparent text-white font-medium text-sm lg:text-base w-full outline-none appearance-none cursor-pointer">
                <option className="bg-[#111]">Signature Villa</option>
                <option className="bg-[#111]">Penthouse</option>
                <option className="bg-[#111]">Townhouse</option>
                <option className="bg-[#111]">Hotel Apartment</option>
              </select>
              <ChevronDown size={14} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
            </div>
          </div>

          {/* Field: Budget (Dynamic) */}
          <div className="p-6 lg:p-8 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.05] transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <Wallet size={14} className="text-amber-500" />
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                {mode === 'buy' ? 'Investment (AED)' : 'Annual Rent (AED)'}
              </span>
            </div>
            <input 
              type="text" 
              placeholder={mode === 'buy' ? "5M - 20M+" : "150k - 500k"}
              className="bg-transparent text-white font-medium text-sm lg:text-base w-full outline-none placeholder:text-white/20"
            />
          </div>

          {/* Action Button (Stretches on Mobile) */}
          <button className="p-6 lg:p-8 bg-amber-500  flex items-center justify-between group hover:bg-[#9A7A2E]  transition-all duration-700">
            <span className="text-white group-hover:text-white font-black uppercase text-xs lg:text-sm tracking-tighter transition-colors">
              Begin Exploration
            </span>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/30 group-hover:rotate-[-45deg] transition-all duration-700">
              <ArrowRight size={18} className="text-black group-hover:text-white" />
            </div>
          </button>
        </motion.div>

        {/* 4. Trust Bar (Simplified for Phone) */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col md:flex-row gap-6 md:gap-20 items-start md:items-center opacity-40 hover:opacity-100 transition-all duration-700"
        >
           {[
             { num: '01.', label: 'Curated Portfolio' },
             { num: '02.', label: 'Bespoke Advisory' },
             { num: '03.', label: 'Off-Market Access' }
           ].map((stat, i) => (
             <div key={i} className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <span className="text-white font-bold text-lg md:text-xl">{stat.num}</span>
                <span className="text-white text-[9px] uppercase font-bold tracking-[0.2em]">{stat.label}</span>
             </div>
           ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;