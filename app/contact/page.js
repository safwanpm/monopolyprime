"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Linkedin,
  ArrowRight,
  Plus,
  Compass
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TitanMonolithFooter from "@/components/Footer";
import MonopolyAbsoluteGlass from "@/components/Popup";

const ContactSignature = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selections, setSelections] = useState({ goal: "", region: "", timeline: "" });

  const steps = [
    {
      id: "goal",
      question: "What is your objective?",
      options: ["Capital Growth", "Luxury Residence", "Portfolio Exit", "Rental Income"],
    },
    {
      id: "region",
      question: "Preferred Location?",
      options: ["Dubai Prime", "Sharjah Waterfront", "Abu Dhabi", "Northern Emirates"],
    },
    {
      id: "timeline",
      question: "Acquisition Timeline?",
      options: ["Immediate", "3 - 6 Months", "Off-Plan / 2026", "Exploring"],
    },
  ];

  const nextStep = (category, value) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };

  // --- UNIQUE WHATSAPP MESSAGE GENERATOR ---
  const generateWhatsAppLink = () => {
    const phoneNumber = "971588017015";
    const message = `Hello Monopoly Prime, I would like to discuss a personalized strategy:
• Objective: ${selections.goal}
• Preferred Region: ${selections.region}
• Timeline: ${selections.timeline}

Please connect me with a specialist.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
    <Navbar/>
    <section className="relative  pt-24 bg-[#050505] min-h-screen text-white flex flex-col justify-between overflow-hidden">
      
      {/* 1. TOP NAV / LOGO AREA */}
      <div className="relative max-w-7xl mx-auto z-20 px-6 lg:px-12 py-10 flex justify-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">Monopoly Prime</span>
        </div>
        {/* <Link href="tel:+971588017015" className="text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-primary transition-colors">
          Priority Line: +971 588 017 015
        </Link> */}
      </div>

      {/* 2. MAIN INTERACTIVE CORE */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-4 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* Left Side: The Dynamic Narrative */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary">
              <Compass size={16} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">
              Personalized Consultation
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95] tracking-tighter uppercase">
            Define <br />
            <span className="text-primary italic">your</span> <br /> 
            {selections.goal ? selections.goal.split(' ')[0] : "Strategy."}
          </h1>
          
          <div className="mt-12 space-y-4">
            {Object.entries(selections).map(([key, value]) => (
              value && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={key} 
                  className="flex items-center gap-4 text-neutral-500"
                >
                  <div className="w-4 h-[1px] bg-primary" />
                  <span className="text-xs uppercase font-bold tracking-widest">
                    {key}: <span className="text-white">{value}</span>
                  </span>
                </motion.div>
              )
            ))}
          </div>
        </div>

        {/* Right Side: The Selection Deck */}
        <div className="lg:col-span-6 relative">
          <AnimatePresence mode="wait">
            {activeStep < steps.length ? (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-white/90">
                  {steps[activeStep].question}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps[activeStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => nextStep(steps[activeStep].id, opt)}
                      className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-2xl text-left hover:bg-white hover:text-black transition-all duration-500"
                    >
                      <Plus size={16} className="absolute top-6 right-6 text-primary group-hover:text-black transition-colors" />
                      <span className="text-sm font-black uppercase tracking-widest">{opt}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary p-12 lg:p-16 rounded-[3rem] text-black text-center"
              >
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Tailored <br /> Brief Ready.
                </h3>
                <p className="text-black/70 text-sm font-medium mb-10 max-w-[280px] mx-auto">
                  Message sent will include your choices for <span className="font-bold underline">{selections.goal}</span>.
                </p>
                <Link 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:scale-105 transition-transform"
                >
                  Send Brief to WhatsApp <ArrowRight size={16} />
                </Link>
                <button 
                  onClick={() => {setActiveStep(0); setSelections({goal:"", region:"", timeline:""})}}
                  className="block mx-auto mt-8 text-[9px] uppercase font-black tracking-widest border-b border-black/20 pb-1"
                >
                  Restart Brief
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. FOOTER INFO */}
      <div className="relative z-20 px-6 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-end md:items-center border-t border-white/5 gap-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {/* <MapPin size={14} className="text-primary" /> */}
            {/* <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Sharjah HQ — Al Taawun St</span> */}
          </div>
          <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
        
        </div>

        <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-600">
          {/* © 2026 Monopoly Prime Properties. All Rights Reserved. */}
        </div>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
    <TitanMonolithFooter/>
    <MonopolyAbsoluteGlass/>
    </>
  );
};

export default ContactSignature;