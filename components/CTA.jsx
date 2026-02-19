'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="px-6 md:px-16 lg:px-[8vw] py-20 md:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
        className="
          relative overflow-hidden text-center
          border border-[#C9A84C]/20
          bg-gradient-to-br
          from-[#1A1A2E]
          via-[#252545]
          to-[#1A1A2E]
          px-6 md:px-20 py-20 md:py-28
        "
      >
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,#C9A84C_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>

        {/* Glow */}
        <div className="
          absolute inset-0 flex items-center justify-center
          pointer-events-none
        ">
          <div className="
            w-[600px] h-[300px]
            bg-[radial-gradient(ellipse,rgba(201,168,76,0.12),transparent_70%)]
            blur-3xl
          " />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="section-label inline-block mb-6">
            ✦ Ready to Begin?
          </div>

          <h2 className="
            font-serif font-light
            text-[clamp(36px,6vw,72px)]
            text-[#F5F0E8]
            leading-[1.1]
            mb-6
          ">
            Your Dream Home
            <br />
            <em className="text-[#C9A84C] not-italic">
              Awaits You
            </em>
          </h2>

          <p className="
            text-[#A09070]
            text-sm md:text-base
            leading-relaxed
            max-w-xl mx-auto
            mb-12
          ">
            Let our experts guide you to the perfect property in Sharjah.
            Schedule a consultation and experience the Monopoly Prime difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-xs tracking-wider"
            >
              Book a Free Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline text-xs tracking-wider"
            >
              Call +971 6 XXX XXXX
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
