'use client'

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const PROPERTIES = [
  {
    id: 1,
    title: "Al Majaz Waterfront",
    type: "3BR Apartment",
    price: "AED 85,000 / yr",
    area: "2,100 sqft",
    badge: "Featured",
    features: ["Waterfront View", "Smart Home", "Private Pool"],
    tag: "Luxury",
  },
  {
    id: 2,
    title: "Muwaileh Complex",
    type: "4BR Villa",
    price: "AED 120,000 / yr",
    area: "3,800 sqft",
    badge: "New Listing",
    features: ["Garden", "Maid's Room", "Double Garage"],
    tag: "Villa",
  },
  {
    id: 3,
    title: "Al Nahda Towers",
    type: "1BR Apartment",
    price: "AED 42,000 / yr",
    area: "950 sqft",
    badge: "Hot Deal",
    features: ["City View", "Gym Access", "Covered Parking"],
    tag: "Apartment",
  },
  {
    id: 4,
    title: "Aljada Community",
    type: "2BR Townhouse",
    price: "AED 75,000 / yr",
    area: "1,650 sqft",
    badge: "Premium",
    features: ["Community Pool", "Kids Area", "Retail Nearby"],
    tag: "Townhouse",
  },
];

const CARD_GRADIENTS = [
  "from-[#2A1F3D] to-[#1A1A2E]",
  "from-[#1F2D3D] to-[#1A1A2E]",
  "from-[#1F3D2A] to-[#1A1A2E]",
  "from-[#3D2A1F] to-[#1A1A2E]",
];

const PropertyCard = ({ property, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        card-glass group cursor-pointer overflow-hidden
        border transition-all duration-500
        ${
          hovered
            ? "border-[#C9A84C]/40 shadow-[0_40px_80px_rgba(0,0,0,0.45),0_0_40px_rgba(201,168,76,0.12)] -translate-y-2"
            : "border-[#C9A84C]/10"
        }
      `}
    >
      {/* Visual */}
      <div className={`relative h-60 bg-gradient-to-br ${gradient}`}>

        <div className="absolute top-4 left-4 badge-primary">
          {property.badge}
        </div>

        <div className="absolute top-4 right-4 badge-outline">
          {property.tag}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <BuildingIcon />
        </div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.35 }}
          className="
            absolute bottom-0 left-0 right-0
            bg-gradient-to-t from-[#0D0D1A]/95 to-transparent
            px-5 pt-10 pb-4
            font-serif text-xl font-bold text-[#C9A84C]
          "
        >
          {property.price}
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="property-meta">
          {property.type} · {property.area}
        </div>

        <h3 className="property-title">
          {property.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {property.features.map((feature) => (
            <span key={feature} className="feature-pill">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="price-text">
            {property.price}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-card"
          >
            View →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Properties = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="properties"
      className="px-6 md:px-16 lg:px-[8vw] py-28"
    >
      <div ref={ref} className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="section-label"
        >
          ✦ Curated Listings
        </motion.div>

        <div className="gold-line my-6" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="section-heading"
        >
          Featured <span className="text-[#C9A84C]">Properties</span>
          <br />
          in Sharjah
        </motion.h2>
      </div>

      <div className="property-grid">
        {PROPERTIES.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-14"
      >
        <button className="btn-outline">
          View All 500+ Properties
        </button>
      </motion.div>
    </section>
  );
};

const BuildingIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120">
    <rect x="40" y="20" width="40" height="100" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="20" y="50" width="30" height="70" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="70" y="40" width="30" height="80" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
  </svg>
);

export default Properties;
