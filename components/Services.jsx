'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { icon: "🏙️", title: "Residential Rentals", desc: "From studio apartments to sprawling villas — every home perfectly matched to your lifestyle." },
  { icon: "🏢", title: "Commercial Spaces", desc: "Prime office and retail spaces in Sharjah's most vibrant business districts." },
  { icon: "📋", title: "Lease Management", desc: "Full-service lease administration ensuring seamless tenancy from day one." },
  { icon: "🔍", title: "Property Scouting", desc: "Our experts personally scout and vet every property before it reaches your shortlist." },
  { icon: "⚖️", title: "Legal Assistance", desc: "Comprehensive support with RERA regulations, contracts, and documentation." },
  { icon: "🌟", title: "Concierge Services", desc: "White-glove relocation support, home styling, and utility setup." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      className="px-6 md:px-16 lg:px-[8vw] py-24 md:py-32"
    >
      {/* Header */}
      <div ref={ref} className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-label inline-block"
        >
          ✦ What We Offer
        </motion.div>

        <div className="gold-line mx-auto my-4" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="
            font-serif
            text-[clamp(36px,5vw,60px)]
            font-light
            text-[#F5F0E8]
          "
        >
          Premium <em className="text-[#C9A84C] not-italic">Services</em>
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ backgroundColor: "rgba(26,26,46,0.9)" }}
            className="
              relative
              bg-[#1A1A2E]/40
              p-10 md:p-12
              border border-[#C9A84C]/10
              transition-colors duration-300
              cursor-pointer
              overflow-hidden
              group
            "
          >
            {/* Background Icon Animation */}
            <motion.div
              whileHover={{ scale: 8, opacity: 0.04 }}
              className="
                absolute top-6 right-6
                text-4xl
                pointer-events-none
              "
            >
              {s.icon}
            </motion.div>

            {/* Icon */}
            <div className="
              w-10 h-10 mb-6
              flex items-center justify-center
              bg-[#C9A84C]/10
              text-xl
            ">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="
              font-serif text-xl
              text-[#F5F0E8]
              mb-3
            ">
              {s.title}
            </h3>

            {/* Description */}
            <p className="
              text-sm leading-relaxed
              text-[#A09070]
              font-light
            ">
              {s.desc}
            </p>

            {/* CTA */}
            <div className="
              mt-6 text-[11px]
              tracking-[0.2em]
              uppercase
              text-[#C9A84C]
            ">
              Learn More →
            </div>

            {/* Subtle Hover Glow */}
            <div className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_60%)]
              pointer-events-none
            " />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
