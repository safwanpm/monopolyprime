"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Bath,
  MapPin,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

/* =========================
   PROPERTY DATA
========================= */

const properties = [
  {
    id: 1,
    title: "The Sky Penthouse",
    location: "Business Bay, Dubai",
    price: "AED 12.5M",
    image: "/images/property1.webp",
    beds: 4,
    baths: 5,
    sqft: "4,200",
    tag: "Exclusive",
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    location: "Frond K, Dubai",
    price: "AED 45.0M",
    image: "/images/property2.webp",
    beds: 6,
    baths: 7,
    sqft: "11,500",
    tag: "Beachfront",
  },
  {
    id: 3,
    title: "Modernist Mansion",
    location: "Dubai Hills Estate",
    price: "AED 28.0M",
    image: "/images/property3.webp",
    beds: 5,
    baths: 6,
    sqft: "8,900",
    tag: "New Launch",
  },
];

/* =========================
   PROPERTY CARD
========================= */

const PropertyCard = ({ prop, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  // Magnetic effect (client only)
  useEffect(() => {
    if (!cardRef.current || !iconRef.current) return;

    const card = cardRef.current;
    const icon = iconRef.current;

    const xTo = gsap.quickTo(icon, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(icon, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 md:hover:scale-110 transition-transform duration-700"
        >
          <Image
            src={prop.image}
            alt={prop.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-60 md:group-hover:opacity-100 grayscale-[0.5] md:group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* BADGES */}
        <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-primary text-[9px] font-black uppercase tracking-[0.2em]">
              {prop.tag}
            </span>
          </div>

          <div className="bg-primary px-3 py-1.5 rounded-lg shadow-xl shadow-amber-500/20">
            <span className="text-black font-bold text-xs">
              {prop.price}
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING CONTENT */}
      <div className="relative -mt-24 mx-4 z-10">
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] shadow-2xl transition-all duration-500 md:group-hover:border-amber-500/40">
          
          {/* HEADER */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500/80 mb-1">
                <MapPin size={12} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  {prop.location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white md:group-hover:text-primary transition-colors">
                {prop.title}
              </h3>
            </div>

            <div
              ref={iconRef}
              className="bg-white text-black p-3 rounded-full md:group-hover:bg-primary transition-colors"
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-2">
            <Stat label="Beds" value={prop.beds} icon={<BedDouble size={14} />} />
            <Stat label="Baths" value={prop.baths} icon={<Bath size={14} />} bordered />
            <Stat label="Size" value={`${prop.sqft} SQFT`} />
          </div>

          {/* ACTIONS */}
          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-3">
            <a
              href={`https://wa.me/971588017015?text=I'm interested in ${prop.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300"
            >
              <MessageCircle size={14} fill="currentColor" />
              WhatsApp
            </a>

            <a
              href="tel:+971588017015"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Phone size={14} fill="currentColor" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================
   STAT COMPONENT
========================= */

const Stat = ({ label, value, icon, bordered }) => (
  <div className={`flex flex-col ${bordered ? "border-x border-white/5 px-4" : ""}`}>
    <span className="text-[8px] text-neutral-500 uppercase font-black tracking-[0.2em]">
      {label}
    </span>
    <div className="flex items-center gap-1.5 text-white font-bold text-xs">
      {icon && <span className="text-amber-500/50">{icon}</span>}
      {value}
    </div>
  </div>
);

/* =========================
   MAIN COMPONENT
========================= */

const PropertyCollection = () => {
  const portals = [
    {
      name: "Dubizzle",
      tag: "Market Dominance",
      desc: "Explore our verified collection on the region's largest marketplace.",
      href: "https://uae.dubizzle.com/ar/property-agencies/monopoly-prime-properties-10357/",
      color: "from-red-500/20",
    },
    {
      name: "Bayut",
      tag: "Elite Standards",
      desc: "Deep-dive into our exclusive inventory with TruCheck™ certification.",
      href: "https://www.bayut.com/companies/monopoly-prime-properties-105666/",
      color: "from-emerald-500/20",
    },
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              className="h-1 bg-primary mb-6"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Curated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">
                Masterpieces
              </span>
            </h2>
          </div>

          <button className="flex items-center gap-3 text-neutral-500 hover:text-white uppercase text-[10px] font-black tracking-[0.3em] group">
            All Listings
            <ChevronRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
          {properties.map((prop, idx) => (
            <PropertyCard key={prop.id} prop={prop} index={idx} />
          ))}
        </div>

        {/* PORTAL SECTION (Bayut + Dubizzle) */}
       <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "Dubizzle",
              tag: "Market Dominance",
              desc: "Explore our verified collection on the region's largest marketplace.",
              href: "https://uae.dubizzle.com/ar/property-agencies/monopoly-prime-properties-10357/",
              color: "from-red-500/20",
            },
            {
              name: "Bayut",
              tag: "Elite Standards",
              desc: "Deep-dive into our exclusive inventory with TruCheck™ certification.",
              href: "https://www.bayut.com/companies/monopoly-prime-properties-105666/",
              color: "from-emerald-500/20",
            },
          ].map((portal, idx) => (
            <motion.a
              key={portal.name}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500 md:hover:border-amber-500/40 md:hover:bg-neutral-900/40 will-change-transform"
            >
              {/* Gradient Glow (Desktop Only for iOS safety) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${portal.color} to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                {/* Top Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="h-1 w-4 rounded-full bg-primary" />
                      <span className="h-1 w-1 rounded-full bg-amber-500/40" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                      {portal.tag}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none">
                    View on <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                      {portal.name}
                    </span>
                  </h3>
                </div>

                {/* Bottom Content */}
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-[180px] text-[11px] text-neutral-400 font-medium leading-relaxed uppercase tracking-wider">
                    {portal.desc}
                  </p>

                  <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white md:group-hover:bg-primary md:group-hover:text-black md:group-hover:rotate-[360deg] transition-transform duration-700 will-change-transform">
                    <ArrowUpRight size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Decorative Background Text (Desktop hover only) */}
              <div className="absolute -top-6 -right-6 text-9xl font-black text-white/[0.01] uppercase pointer-events-none md:group-hover:text-white/[0.03] transition-colors duration-700 select-none">
                {portal.name}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCollection;