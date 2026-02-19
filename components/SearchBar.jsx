'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SearchBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fields = [
    { label: "Location", placeholder: "Sharjah, UAE", type: "text" },
    { label: "Property Type", placeholder: "Apartment, Villa...", type: "text" },
    { label: "Budget (AED/yr)", placeholder: "Any budget", type: "text" },
    { label: "Bedrooms", placeholder: "1–5+", type: "text" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 px-6 md:px-16 lg:px-[8vw] -mt-10"
    >
      <div className="card-glass flex flex-wrap gap-6 md:gap-8 items-end px-6 md:px-10 py-6 md:py-7">
        
        {fields.map((field) => (
          <div key={field.label} className="flex-1 min-w-[180px]">
            <label className="block text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase mb-2">
              {field.label}
            </label>

            <input
              type={field.type}
              placeholder={field.placeholder}
              className="
                w-full bg-transparent
                border-0 border-b border-[#C9A84C]/30
                focus:border-[#C9A84C]
                text-sm text-[#F5F0E8]
                placeholder:text-[#A09070]/70
                pb-2 outline-none
                transition-colors
              "
            />
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary whitespace-nowrap"
        >
          Search →
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SearchBar;
