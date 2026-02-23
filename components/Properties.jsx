"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BedDouble, Bath, MapPin, ChevronRight ,MessageCircle ,Phone} from 'lucide-react';
import gsap from 'gsap';

const properties = [
  {
    id: 1,
    title: "The Sky Penthouse",
    location: "Business Bay, Dubai",
    price: "AED 12.5M",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200",
    beds: 4,
    baths: 5,
    sqft: "4,200",
    tag: "Exclusive"
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    location: "Frond K, Dubai",
    price: "AED 45.0M",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    beds: 6,
    baths: 7,
    sqft: "11,500",
    tag: "Beachfront"
  },
  {
    id: 3,
    title: "Modernist Mansion",
    location: "Dubai Hills Estate",
    price: "AED 28.0M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    beds: 5,
    baths: 6,
    sqft: "8,900",
    tag: "New Launch"
  }
];

const PropertyCard = ({ prop, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    if (!card || !icon) return;

    // GSAP QuickTo for smooth performance
    const xTo = gsap.quickTo(icon, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(icon, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Magnetic effect strength (0.2 = 20% of distance)
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
      transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      {/* Container for Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5">
        <motion.img
          src={prop.image}
          alt={prop.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
        />

        {/* Top Badges */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-amber-500 text-[9px] font-black uppercase tracking-[0.2em]">{prop.tag}</span>
          </div>
          <div className="bg-amber-500 px-3 py-1.5 rounded-lg shadow-xl shadow-amber-500/20">
            <span className="text-black font-bold text-xs">{prop.price}</span>
          </div>
        </div>
      </div>

      {/* Floating Details Card */}
      <div className="relative -mt-24 mx-4 z-10">
        <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:border-amber-500/40">

          {/* --- HEADER: LOCATION & TITLE --- */}
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-500/80 mb-1">
                <MapPin size={12} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{prop.location}</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight group-hover:text-amber-500 transition-colors">
                {prop.title}
              </h3>
            </div>

            <div
              ref={iconRef}
              className="bg-white text-black p-3 rounded-full flex-shrink-0 group-hover:bg-amber-500 transition-colors cursor-pointer"
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* --- STATS GRID --- */}
          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-[8px] text-neutral-500 uppercase font-black tracking-[0.2em]">Beds</span>
              <div className="flex items-center gap-1.5 text-white font-bold">
                <BedDouble size={14} className="text-amber-500/50" /> {prop.beds}
              </div>
            </div>
            <div className="flex flex-col border-x border-white/5 px-4">
              <span className="text-[8px] text-neutral-500 uppercase font-black tracking-[0.2em]">Baths</span>
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Bath size={14} className="text-amber-500/50" /> {prop.baths}
              </div>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-[8px] text-neutral-500 uppercase font-black tracking-[0.2em]">Size</span>
              <div className="text-white font-bold text-xs whitespace-nowrap">
                {prop.sqft} <span className="text-[9px] text-neutral-500 tracking-tighter">SQFT</span>
              </div>
            </div>
          </div>

          {/* --- SIGNATURE ACTION ROW --- */}
          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-3">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/971588017015?text=I'm interested in ${prop.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 py-3 rounded-xl text-[#25D366] text-[10px] font-black uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-all duration-300"
            >
              <MessageCircle size={14} fill="currentColor" /> WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:+971588017015"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
            >
              <Phone size={14} fill="currentColor" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PropertyCollection = () => {
  return (
    <section className="bg-[#050505] py-24 px-6 lg:px-12 selection:bg-amber-500 selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              className="h-1 bg-amber-500"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Curated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
                Masterpieces
              </span>
            </h2>
          </div>

          <button className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.3em] group">
            All Listings
            <ChevronRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* --- PROPERTY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
          {properties.map((prop, idx) => (
            <PropertyCard key={prop.id} prop={prop} index={idx} />
          ))}
        </div>

        {/* --- NEW: LARGE SIGNATURE FOOTER --- */}
      {/* --- THE SIGNATURE PORTAL BLOCK --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { 
              name: "Dubizzle", 
              tag: "Market Dominance",
              desc: "Explore our verified collection on the region's largest marketplace.", 
              href: "#", 
              color: "from-red-500/20" 
            },
            { 
              name: "Bayut", 
              tag: "Elite Standards",
              desc: "Deep-dive into our exclusive inventory with TruCheck™ certification.", 
              href: "#", 
              color: "from-emerald-500/20" 
            }
          ].map((portal, idx) => (
            <motion.a
              key={portal.name}
              href={portal.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500 hover:border-amber-500/40 hover:bg-neutral-900/40"
            >
              {/* Animated Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="h-1 w-4 rounded-full bg-amber-500" />
                      <span className="h-1 w-1 rounded-full bg-amber-500/40" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
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

                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-[180px] text-[11px] text-neutral-400 font-medium leading-relaxed uppercase tracking-wider">
                    {portal.desc}
                  </p>
                  
                  <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-700">
                    <ArrowUpRight size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Decorative Large Background Text */}
              <div className="absolute -top-6 -right-6 text-9xl font-black text-white/[0.01] uppercase pointer-events-none group-hover:text-white/[0.03] transition-all duration-1000 select-none">
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