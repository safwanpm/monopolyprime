'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Fatima Al Rashidi",
    role: "Tenant, Al Majaz",
    text: "Monopoly Prime transformed our property search from stressful to seamless. Their team's professionalism and attention to detail is unmatched in Sharjah.",
  },
  {
    name: "James Harrison",
    role: "Expatriate, Muwaileh",
    text: "As a first-time renter in the UAE, I was nervous. The team guided me through every step with patience and expertise. Truly exceptional service.",
  },
  {
    name: "Priya Nair",
    role: "Corporate Client",
    text: "We needed 12 units for our staff relocation. Monopoly Prime delivered beyond expectations — on time and within budget. Outstanding performance.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="px-6 md:px-16 lg:px-[8vw] py-24 md:py-32 bg-[#1A1A2E]/40 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="section-label inline-block">
          ✦ Client Stories
        </div>

        <div className="gold-line mx-auto my-4" />

        <h2 className="
          font-serif
          text-[clamp(36px,5vw,60px)]
          font-light
          text-[#F5F0E8]
        ">
          What Our <em className="text-[#C9A84C] not-italic">Clients</em> Say
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto relative">
        
        {/* Decorative Quote */}
        <div className="
          absolute -top-16 -left-10
          font-serif text-[160px]
          text-[#C9A84C]/5
          select-none pointer-events-none
        ">
          "
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="
              font-serif italic
              text-[clamp(20px,2.5vw,28px)]
              font-light
              text-[#F5F0E8]
              leading-relaxed
              text-center
              mb-10
            ">
              "{testimonials[active].text}"
            </p>

            <div className="text-center">
              <div className="
                text-sm tracking-[0.2em]
                uppercase
                text-[#C9A84C]
                font-semibold
              ">
                {testimonials[active].name}
              </div>

              <div className="
                text-xs tracking-wider
                text-[#A09070]
                mt-2
              ">
                {testimonials[active].role}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${i === active
                  ? "w-8 bg-[#C9A84C]"
                  : "w-2 bg-[#C9A84C]/30 hover:bg-[#C9A84C]/60"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
