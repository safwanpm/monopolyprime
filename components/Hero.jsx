'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const buildingY = useTransform(scrollY, [0, 600], [0, 100]);

  const words = ["Luxury", "Premium", "Elite"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex(i => (i + 1) % words.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0D0D1A_0%,#1A1A2E_40%,#0D0D1A_100%)]" />

        {/* Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 900"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glow Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.12)_0%,transparent_70%)] blur-[40px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] blur-[60px]" />
      </motion.div>

      {/* Building Silhouette */}
      <motion.div
        style={{ opacity, y: buildingY }}
        className="absolute right-[-5%] bottom-0"
      >
        <svg width="700" height="650" viewBox="0 0 700 650" fill="none">
          <rect x="300" y="200" width="120" height="450" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.15)" />
          <rect x="200" y="320" width="90" height="330" fill="rgba(201,168,76,0.04)" stroke="rgba(201,168,76,0.1)" />
          <rect x="410" y="280" width="80" height="370" fill="rgba(201,168,76,0.04)" stroke="rgba(201,168,76,0.1)" />
          <rect x="100" y="380" width="70" height="270" fill="rgba(201,168,76,0.03)" stroke="rgba(201,168,76,0.08)" />
          <rect x="500" y="350" width="100" height="300" fill="rgba(201,168,76,0.03)" stroke="rgba(201,168,76,0.08)" />

          {[...Array(8)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <rect
                key={`w${row}${col}`}
                x={315 + col * 26}
                y={215 + row * 50}
                width="18"
                height="28"
                fill={Math.random() > 0.4
                  ? "rgba(201,168,76,0.4)"
                  : "rgba(201,168,76,0.1)"}
              />
            ))
          )}

          <line x1="0" y1="648" x2="700" y2="648" stroke="rgba(201,168,76,0.2)" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-[8vw]"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="section-label mb-6"
        >
          ✦ Sharjah's Premier Real Estate
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-[clamp(52px,8vw,110px)] font-light leading-none tracking-[-0.02em] text-[#F5F0E8]"
          >
            Find Your
          </motion.h1>
        </div>

        {/* Rotating Word */}
        <div className="flex items-center h-[clamp(60px,9vw,120px)]">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 60, opacity: 0, rotateX: -40 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -60, opacity: 0, rotateX: 40 }}
              transition={{ duration: 0.6 }}
              className="block font-serif text-[clamp(52px,8vw,110px)] font-bold leading-none tracking-[-0.02em] text-[#C9A84C]"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-serif text-[clamp(52px,8vw,110px)] font-light leading-none tracking-[-0.02em] text-[#F5F0E8] mb-8"
          >
            Rental Home
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-base leading-relaxed text-[#A09070] max-w-md mb-12 font-light"
        >
          Discover curated luxury residences across Sharjah’s most prestigious
          neighborhoods. From waterfront apartments to spacious villas — your
          perfect home awaits.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            Explore Properties
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline"
          >
            Watch Tour ▶
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex gap-10 md:gap-16 mt-20 pt-10 border-t border-[#C9A84C]/20 flex-wrap"
        >
          {[
            ["500+", "Properties"],
            ["12+", "Years"],
            ["98%", "Client Satisfaction"],
            ["AED 500M+", "Rentals Managed"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#C9A84C]">
                {num}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#A09070] mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#A09070]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
