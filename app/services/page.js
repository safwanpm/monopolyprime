"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Fingerprint, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Search, 
  Key, 
  Compass,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";
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
    stat: "98% Closing Rate",
    detail: "Advanced market analysis and premium buyer network across Dubai and Sharjah.",
    metricLabel: "Sales Performance Index",
    bgImage: "/images/service1.webp" 
  },
  {
    id: "02",
    title: "Property Rentals",
    concept: "Income Maximization",
    protocolTitle: "Leasing Management System",
    desc: "Comprehensive rental solutions designed to maximize occupancy and protect asset value. We handle tenant sourcing, screening, contracts, renewals, and ongoing property coordination.",
    icon: <Key size={32} />,
    stat: "94% Occupancy",
    detail: "Strict tenant vetting, legal compliance, and structured lease management.",
    metricLabel: "Occupancy Strength",
    bgImage: "/images/service2.webp"
  },
  {
    id: "03",
    title: "Off-Plan Ventures",
    concept: "Pre-Launch Investment",
    protocolTitle: "Developer Access Program",
    desc: "Exclusive access to high-potential off-plan projects before public release. Secure prime units with competitive pricing directly from leading UAE developers.",
    icon: <Compass size={32} />,
    stat: "Priority Access",
    detail: "Strategic partnerships with top-tier developers across emerging districts.",
    metricLabel: "Investment Advantage",
    bgImage: "/images/service3.avif"
  },
  {
    id: "04",
    title: "Portfolio Strategy",
    concept: "Asset Growth Planning",
    protocolTitle: "Investment Structuring",
    desc: "Customized portfolio strategies designed to balance risk, maximize returns, and scale long-term wealth through intelligent acquisition and divestment planning.",
    icon: <TrendingUp size={32} />,
    stat: "12% Avg. ROI",
    detail: "Data-backed performance forecasting and diversified real estate positioning.",
    metricLabel: "Return Optimization",
    bgImage: "/images/service4.webp"
  },
  {
    id: "05",
    title: "Market Consulting",
    concept: "Market Intelligence",
    protocolTitle: "Strategic Advisory Services",
    desc: "In-depth market research and advisory solutions to help investors and property owners make informed decisions with confidence in evolving market conditions.",
    icon: <Search size={32} />,
    stat: "Live Market Data",
    detail: "Real-time trend analysis, pricing insights, and demand forecasting.",
    metricLabel: "Decision Accuracy",
    bgImage: "/images/service5.webp"
  }
];

const AdaptiveSignatureServices = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-[#050505] text-white py-16 md:py-24 px-6 lg:px-24 min-h-screen overflow-hidden">
        
        {/* --- HEADER --- */}
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
          {isMobile ? (
            /* --- MOBILE VIEW: TACTILE ACCORDION --- */
            <div className="space-y-4">
              {services.map((item, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div key={idx} className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? "bg-white/[0.05] border-primary/30" : "bg-white/[0.02] border-white/10"}`}>
                    <button onClick={() => setActiveIdx(isOpen ? null : idx)} className="w-full p-8 flex items-center justify-between text-left">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-bold ${isOpen ? "text-primary" : "text-neutral-600"}`}>{item.id}</span>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{item.title}</h3>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown size={20} className={isOpen ? "text-primary" : "text-neutral-600"} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-10 border-t border-white/5 pt-6">
                          <p className="text-neutral-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                          <div className="flex justify-between items-center bg-white/[0.03] p-4 rounded-xl border border-white/5">
                            <div className="flex flex-col text-primary font-black text-xs uppercase italic">{item.stat}</div>
                            <button className="flex items-center gap-2 text-white font-black text-[9px] uppercase tracking-widest hover:text-primary transition-colors">Inquire <ArrowUpRight size={14}/></button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            /* --- DESKTOP LG VIEW: SIGNATURE SHOWROOM --- */
            <div className="grid grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                {services.map((item, idx) => (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group cursor-pointer p-8 rounded-2xl border transition-all duration-500 ${activeIdx === idx ? "bg-white/[0.05] border-primary/40 translate-x-4" : "bg-transparent border-white/5 opacity-40 hover:opacity-100"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className={`text-sm font-bold ${activeIdx === idx ? "text-primary" : "text-neutral-600"}`}>{item.id}</span>
                        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter">{item.title}</h3>
                      </div>
                      <ArrowRight size={20} className={`transition-all duration-500 ${activeIdx === idx ? "text-primary translate-x-0" : "text-neutral-800 -translate-x-4 opacity-0"}`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-7 sticky top-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[#0a0a0a] border border-white/10 rounded-[3rem] min-h-[620px] flex flex-col justify-between overflow-hidden shadow-2xl"
                  >
                    <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.25 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
                      <img src={services[activeIdx].bgImage} alt="" className="w-full h-full object-cover grayscale brightness-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-black/5 to-transparent" />
                    </motion.div>

                    <div className="relative z-10 p-16 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-12">
                           <div className="flex items-center gap-6">
                             <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-black shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                               {services[activeIdx].icon}
                             </div>
                             <div>
                               <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{services[activeIdx].concept}</span>
                               <h4 className="text-5xl font-black uppercase tracking-tighter leading-none">
                                  {services[activeIdx].protocolTitle.split(' ')[0]} <br /> {services[activeIdx].protocolTitle.split(' ')[1]}
                               </h4>
                             </div>
                           </div>
                           <span className="text-[12rem] font-black text-white/[0.03] leading-none select-none tracking-tighter">{services[activeIdx].id}</span>
                        </div>
                        <p className="text-neutral-300 text-xl leading-relaxed max-w-xl mb-12 drop-shadow-md">{services[activeIdx].desc}</p>
                      </div>

                      <div className="space-y-10">
                        <div className="flex items-center gap-8">
                          <div className="h-[2px] flex-1 bg-white/10" />
                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest block mb-1">{services[activeIdx].metricLabel}</span>
                            <span className="text-3xl font-black text-white tracking-tight">{services[activeIdx].stat}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                             <div className="flex items-center gap-2">
                                <ShieldCheck size={14} className="text-primary" />
                                <span className="text-[9px] uppercase font-black tracking-widest text-neutral-400">Monopoly Prime Standards</span>
                             </div>
                             <p className="text-xs text-neutral-500 max-w-[280px] italic">{services[activeIdx].detail}</p>
                          </div>
                          <button className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:scale-105 transition-all">
                            Initialize Brief <ArrowUpRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <div className="max-w-[1440px] mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-12">
            {["Strategy", "Integrity", "Legacy"].map((word) => (
              <span key={word} className="text-neutral-800 text-[10px] font-black uppercase tracking-[0.8em]">{word}</span>
            ))}
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 Monopoly Prime Properties. All Rights Reserved.</p>
        </div>
      </section>

      <ContactSignature />
      <TitanMonolithFooter />
      <MonopolyAbsoluteGlass />
    </>
  );
};

export default AdaptiveSignatureServices;