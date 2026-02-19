'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    ["500+", "Active Listings"],
    ["2,000+", "Happy Families"],
    ["15+", "Neighborhoods"],
    ["24/7", "Client Support"],
  ];

  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-[8vw] py-24 md:py-32 bg-[#1A1A2E]/40"
    >
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="
            w-full aspect-[4/5]
            bg-gradient-to-br from-[#1A1A2E] to-[#252545]
            border border-[#C9A84C]/20
            relative overflow-hidden
          ">
            {/* Decorative Interior */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="300" height="360" viewBox="0 0 300 360">
                <rect x="40" y="60" width="220" height="280" fill="none" stroke="rgba(201,168,76,0.2)" />
                <line x1="40" y1="180" x2="260" y2="180" stroke="rgba(201,168,76,0.1)" />
                <rect x="60" y="80" width="80" height="80" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" />
                <rect x="160" y="80" width="80" height="80" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" />
                <rect x="60" y="200" width="180" height="120" fill="rgba(201,168,76,0.04)" stroke="rgba(201,168,76,0.15)" />

                {[...Array(4)].map((_, i) => (
                  <circle key={i} cx={80 + i * 60} cy={340} r="6" fill="rgba(201,168,76,0.4)" />
                ))}
              </svg>
            </div>

            {/* Gold Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="
              card-glass absolute
              -bottom-6 -right-6
              px-6 py-4
              min-w-[160px]
            "
          >
            <div className="font-serif text-4xl font-bold text-[#C9A84C]">
              12+
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#A09070]">
              Years of Trust
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">✦ Our Story</div>
          <div className="gold-line mb-6" />

          <h2 className="
            font-serif
            text-[clamp(32px,4vw,52px)]
            font-light
            text-[#F5F0E8]
            leading-[1.2]
            mb-6
          ">
            Sharjah’s Most <br />
            <em className="text-[#C9A84C] not-italic">Trusted</em> Real Estate <br />
            Partner
          </h2>

          <p className="text-[15px] leading-relaxed text-[#A09070] mb-4 font-light">
            Established with a vision to redefine luxury real estate rental in
            the UAE, Monopoly Prime has grown into Sharjah’s most prestigious
            property consultancy — connecting discerning clients with
            exceptional homes.
          </p>

          <p className="text-[15px] leading-relaxed text-[#A09070] mb-10 font-light">
            We understand that a home is more than a property — it’s a lifestyle.
            Our expert team combines deep local knowledge with a commitment to
            personalized service, guiding you every step of the journey.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map(([num, label]) => (
              <div key={label} className="border-l-2 border-[#C9A84C] pl-4">
                <div className="font-serif text-3xl font-bold text-[#C9A84C]">
                  {num}
                </div>
                <div className="text-xs tracking-wider uppercase text-[#A09070]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
