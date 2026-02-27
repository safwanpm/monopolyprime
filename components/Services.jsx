"use client";
import React from "react";
import {
  Home,
  Key,
  Building2,
  TrendingUp,
  Search,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Property Sales",
    desc: "Assisting clients in buying and selling residential and commercial properties, ensuring smooth transactions and market-leading value.",
    icon: <Home size={28} />,
    span: "md:col-span-2",
    image: "/images/service1.webp",
  },
  {
    id: "02",
    title: "Property Rentals",
    desc: "From short-term to long-term rentals, we bridge the gap between tenants and landlords with absolute confidence.",
    icon: <Key size={28} />,
    span: "md:col-span-1",
    image: "/images/service2.webp",
  },
  {
    id: "03",
    title: "Off-Plan Properties",
    desc: "Access the latest projects from trusted developers with expert guidance to secure premier investment opportunities.",
    icon: <Building2 size={28} />,
    span: "md:col-span-1",
    image: "/images/property1.webp",
  },
  {
    id: "04",
    title: "Real Estate Investment",
    desc: "Maximize returns through strategic property investments across the high-yield markets of Dubai and Sharjah.",
    icon: <TrendingUp size={28} />,
    span: "md:col-span-2",
    image: "/images/service4.webp",
  },
  {
    id: "05",
    title: "Property Consulting",
    desc: "In-depth market insights and personalized pricing strategies to support every step of your real estate journey.",
    icon: <Search size={28} />,
    span: "md:col-span-3",
    image: "/images/service5.webp",
  },
];

const ServiceMatrix = () => {
  return (
    <section className="bg-[#020202] py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px]">
                What We Do
              </span>
            </div>

            <h2 className="text-5xl md:text-[100px] lg:text-[140px] font-black text-white tracking-tighter uppercase leading-[0.75]">
              Signature <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">
                Expertise.
              </span>
            </h2>
          </div>

          <button className="flex items-center gap-4 text-white/40 hover:text-primary transition-colors uppercase text-[10px] font-black tracking-[0.4em] border-b border-white/5 pb-2 mb-2">
            Protocol Scope <Plus size={14} className="text-primary" />
          </button>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`group relative min-h-[450px] rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary/50 ${item.span}`}
            >
              {/* Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-[0.8] transition-all duration-700 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Large ID */}
              <span className="absolute top-10 right-10 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter group-hover:text-primary/5 transition-colors duration-500">
                {item.id}
              </span>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-12">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <ArrowUpRight
                      size={20}
                      className="text-white group-hover:text-black transition-colors duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-white text-base leading-relaxed font-medium max-w-[450px] drop-shadow-lg">
                    {item.desc}
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 group-hover:text-primary transition-colors duration-500">
                      Operational Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* Scan line (CSS only – Safari safe) */}
              <div className="absolute inset-0 pointer-events-none h-[2px] bg-gradient-to-b from-white/[0.04] to-transparent animate-scan z-20" />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="hidden md:flex mt-32 pt-12 border-t border-white/5 flex-col md:flex-row justify-between items-center gap-12 relative">
          <p className="text-white/5 text-6xl md:text-[120px] font-black tracking-tighter uppercase absolute left-0 bottom-[-40px] select-none pointer-events-none">
            Monopoly
          </p>

          <div className="flex gap-10 z-10">
            {["Strategy", "Integrity", "Legacy"].map((word) => (
              <span
                key={word}
                className="text-white/20 text-[10px] font-black uppercase tracking-[0.8em]"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="text-right z-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest">
              Sharjah - UAE
            </p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest mt-2">
              © Monopoly Prime Properties
            </p>
          </div>
        </footer>
      </div>

      {/* Scan Animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(120%); }
        }
        .animate-scan {
          animation: scan 7s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceMatrix;