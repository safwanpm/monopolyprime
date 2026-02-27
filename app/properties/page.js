"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Layers,
  Maximize,
  X,
  BedDouble,
  Bath,
  Scaling,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSignature from "@/components/Contact";
import TitanMonolithFooter from "@/components/Footer";
import MonopolyAbsoluteGlass from "@/components/Popup";

/* -----------------------------
   DEVICE DETECTION (iOS Fix)
------------------------------ */
const isHoverDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover)").matches;

/* -----------------------------
   DATA
------------------------------ */
const COLLECTIONS = [
  {
    id: 1,
    name: "The Palm Heights",
    price: "12M",
    img: "/images/property1.webp",
    tags: ["Sea View", "Private Pool"],
    beds: 4,
    baths: 5,
    size: "3,850",
  },
  {
    id: 2,
    name: "Desert Rose Estate",
    price: "45M",
    img: "/images/property2.webp",
    tags: ["Golf Course", "Smart Home"],
    beds: 6,
    baths: 7,
    size: "12,400",
  },
  {
    id: 3,
    name: "Obsidian Towers",
    price: "8.5M",
    img: "/images/property3.webp",
    tags: ["Downtown", "Furnished"],
    beds: 3,
    baths: 3,
    size: "2,100",
  },
  {
    id: 4,
    name: "Azure Marina",
    price: "5.2M",
    img: "/images/property1.webp",
    tags: ["Marina View"],
    beds: 2,
    baths: 2,
    size: "1,450",
  },
  {
    id: 5,
    name: "The Grand Manor",
    price: "62M",
    img: "/images/property2.webp",
    tags: ["Exclusive"],
    beds: 7,
    baths: 8,
    size: "18,000",
  },
  {
    id: 6,
    name: "Sky Garden Apt",
    price: "3.8M",
    img: "/images/property3.webp",
    tags: ["Family Friendly"],
    beds: 3,
    baths: 3,
    size: "1,900",
  },
];

export default function AllCollectionsPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  /* -----------------------------
     CHUNK INTO GROUPS OF 3
  ------------------------------ */
  const chunkedProperties = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < COLLECTIONS.length; i += 3) {
      chunks.push(COLLECTIONS.slice(i, i + 3));
    }
    return chunks;
  }, []);

  return (
    <>
      <Navbar />

      {/* ==============================
         FULLSCREEN MODAL (iOS Safe)
      =============================== */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 overscroll-none"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              layoutId={selectedImg}
              className="relative w-full h-full max-w-6xl max-h-[80vh] will-change-transform transform-gpu"
            >
              <Image
                src={selectedImg}
                alt="Fullscreen"
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==============================
         MAIN CONTENT
      =============================== */}
      <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/30 overscroll-none">

        {/* HEADER */}
        <section className="pt-40 border-b border-white/5 mx-auto max-w-7xl px-6 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative mb-20"
          >
            <span className="absolute -top-10 -left-4 text-[22vw] lg:text-[200px] font-black text-white/[0.02] select-none pointer-events-none">
              ULTRA
            </span>

            <h1 className="relative z-10 flex flex-col leading-[0.85]">
              <span className="flex flex-wrap items-center gap-4 text-3xl md:text-6xl lg:text-[90px] font-light text-white/90">
                THE
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-primary overflow-hidden whitespace-nowrap font-medium"
                >
                  DEFINITIVE
                </motion.span>
              </span>

              <span className="text-[12vw] md:text-7xl lg:text-[100px] font-black tracking-tighter text-white flex items-baseline">
                COLLECTION
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-primary ml-1"
                >
                  .
                </motion.span>
              </span>
            </h1>
          </motion.div>
        </section>

        {/* GRID */}
        <section className="py-16 mx-auto max-w-7xl px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

            {chunkedProperties.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>

                {group.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer will-change-transform transform-gpu"
                  >
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 border border-white/10 shadow-2xl">

                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        quality={85}
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* TAGS */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="flex flex-col gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-bold text-primary uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImg(item.img);
                          }}
                          className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
                        >
                          <Maximize size={14} />
                        </button>
                      </div>

                      {/* STATS */}
                      {isHoverDevice && (
                        <div className="absolute bottom-1/4 left-4 right-4 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex justify-around items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="text-center">
                            <BedDouble size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-[8px] font-bold uppercase">
                              {item.beds} Bds
                            </p>
                          </div>

                          <div className="text-center">
                            <Bath size={14} className="text-primary mx-auto mb-1" />
                            <p className="text-[8px] font-bold uppercase">
                              {item.baths} Bth
                            </p>
                          </div>

                          <div className="text-center">
                            <Scaling size={12} className="text-primary mx-auto mb-1" />
                            <p className="text-[8px] font-bold uppercase">
                              {item.size} ft²
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tighter truncate">
                        {item.name}
                      </h3>

                      <div className="flex justify-between items-center mt-1">
                        <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5">
                          <MapPin size={10} className="text-primary" />
                          Dubai
                        </p>
                        <p className="text-primary font-bold text-sm">
                          AED {item.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* PORTAL CARD */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden flex flex-col p-8 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold tracking-tighter mb-6">
                    EXPLORE ON <br />
                    <span className="text-white/40">PORTALS</span>
                  </h3>

                  <div className="flex flex-col gap-4 mt-auto">
                    <a
                      href="#"
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-primary hover:text-black transition-all duration-500"
                    >
                      Bayut
                      <ExternalLink size={16} />
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-red-600 hover:text-white transition-all duration-500"
                    >
                      Dubizzle
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>
        </section>
      </main>

      <ContactSignature />
      <TitanMonolithFooter />
      <MonopolyAbsoluteGlass />
    </>
  );
}