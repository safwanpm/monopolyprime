"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WebsiteLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="simple-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.8, 0, 0.1, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex items-center justify-center will-change-transform"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="w-40 h-40 will-change-transform"
            >
              <Image
                src="/images/log_white.png"
                alt="Brand Logo"
                width={160}
                height={160}
                priority
                className="w-full h-full object-contain brightness-110"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsiteLoader;