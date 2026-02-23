"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WebsiteLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Timer to hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="simple-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.8, 0, 0.1, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-40 h-40"
            >
              <img 
                src="./images/log_white.png" 
                alt="Brand Logo" 
                className="w-full h-full object-contain brightness-110"
              />
            </motion.div>

            {/* Simple Progress Line */}
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsiteLoader;