"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  History,
  Target,
  Users,
  MapPin,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    id: "01",
    title: "Market Mastery",
    desc: "A decade of dominance in the Sharjah and Dubai luxury corridors, managing over 500+ premium assets.",
    icon: <History size={24} />,
  },
  {
    id: "02",
    title: "Strategic Vision",
    desc: "To be the architectural bridge between elite investors and the Middle East's most iconic developments.",
    icon: <Target size={24} />,
  },
  {
    id: "03",
    title: "Elite Network",
    desc: "Our circle includes the most trusted developers and legal strategists in the UAE.",
    icon: <Users size={24} />,
  },
];

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // 1️⃣ Kinetic Text Reveal (UNCHANGED)
      gsap.from(self.selector(".reveal-text"), {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: self.selector(".reveal-text"),
          start: "top 85%",
        },
      });

      // 2️⃣ Parallax Image Reveal (UNCHANGED — blur kept)
      gsap.from(self.selector(".about-image"), {
        scale: 1.2,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: self.selector(".about-image"),
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      // 3️⃣ Magnetic Hover (UNCHANGED behavior)
      const cards = self.selector(".milestone-card");

      cards.forEach((card) => {
        const content = card.querySelector(".card-content");

        const move = (e) => {
          const { left, top, width, height } =
            card.getBoundingClientRect();
          const x =
            (e.clientX - left - width / 2) * 0.1;
          const y =
            (e.clientY - top - height / 2) * 0.1;

          gsap.to(content, {
            x,
            y,
            duration: 0.4,
          });
        };

        const leave = () => {
          gsap.to(content, {
            x: 0,
            y: 0,
            duration: 0.6,
          });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);

        // Cleanup per card (IMPORTANT for Safari)
        self.add(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[#020202] text-white overflow-hidden"
    >
      {/* --- SECTION 1: HERO MANIFESTO --- */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-amber-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-[2px] bg-amber-500 mb-12"
          />
          <h1 className="reveal-text text-7xl md:text-[160px] font-black tracking-tighter uppercase leading-[0.75] mb-12">
            The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-white to-neutral-800">
              Architects
            </span>
            <br /> of Value.
          </h1>
          <p className="reveal-text text-neutral-400 text-sm md:text-xl uppercase tracking-[0.5em] font-light max-w-2xl leading-relaxed">
            Redefining the standard of elite real estate in Sharjah and across
            the Emirates.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: THE IMAGE PORTAL --- */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/about.webp"
            alt="Sharjah Skyline"
            fill
            className="about-image object-cover grayscale brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-amber-500 font-bold tracking-[1em] uppercase text-xs mb-4 block">
              Headquarters
            </span>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Sharjah &bull; Dubai
            </h3>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MILESTONES --- */}
      <section className="py-32 px-6 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="reveal-text text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                Our <span className="text-amber-500">Credo.</span>
              </h2>
              <p className="reveal-text text-neutral-400 text-lg leading-relaxed max-w-lg border-l border-amber-500/30 pl-8">
                We believe that real estate isn't just about square footage—
                it's about the precision of the transaction and the legacy of the location.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <img
                  src="./images/owner.jpeg"
                  alt="Owner"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 hover:opacity-100"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="milestone-card group relative min-h-[350px] rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 p-12 overflow-hidden transition-all duration-500 hover:border-amber-500/40 hover:bg-[#0c0c0c]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                <div className="card-content relative z-10 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-black shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="absolute bottom-8 right-8 text-white/5 font-black text-6xl group-hover:text-amber-500/10 transition-colors">
                  {item.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA + FOOTER unchanged --- */}
    </main>
  );
};

export default AboutPage;