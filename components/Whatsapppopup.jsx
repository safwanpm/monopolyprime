"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X, Send, User, Mail, MessageSquare, GripVertical } from "lucide-react";

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dragControls = useDragControls(); // Essential for iOS-style drag handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Check session storage to avoid annoying users
    const isDismissed = sessionStorage.getItem("whatsapp_form_dismissed");
    
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("whatsapp_form_dismissed", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in available units.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}`;
    const whatsappUrl = `https://wa.me/971588017015?text=${message}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  // SPRING PHYSICS - Essential for iOS "fluid" feel
  const springConfig = {
    type: "spring",
    damping: 30,    // High damping prevents overshoot
    stiffness: 280, // Controls speed of movement
    mass: 0.8,      // Light mass for quick responsiveness
    restDelta: 0.01 // Prevents infinite small oscillations
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex md:items-end md:justify-end pointer-events-none overscroll-none">
          
          {/* BACKGROUND OVERLAY (Mobile only - required for iOS modal "feel") */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Fade-in speed optimized for Safari
            transition={{ duration: 0.4 }} 
            className="absolute inset-0 bg-black/60 md:hidden pointer-events-auto"
            onClick={handleClose}
          />

          {/* THE MODAL CONTAINER */}
          <motion.div
            layoutId="whatsapp-modal"
            
            // MOBILE: Drag to dismiss (iOS logic)
            drag="y"
            dragControls={dragControls}
            dragListener={false} // Only drag on the specific 'handle' area
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.8 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 400) {
                handleClose(); // Dismiss if dragged down far or fast enough
              }
            }}

            // ANIMATION STATES using Spring Physics
            initial={{ opacity: 0, y: "100%", scale: 1 }} // Mobile start (slides up)
            animate={{ opacity: 1, y: 0, scale: 1 }}     // Active state
            exit={{ opacity: 0, y: "100%", scale: 0.95 }} // Mobile exit

            // Define variants to change behavior for Desktop/Mobile if needed later
            variants={{
                desktop: { opacity: 0, y: 50, scale: 0.9 },
                mobile: { opacity: 0, y: "100%", scale: 1 }
            }}

            // Transition set globally to use the spring config
            transition={springConfig}

            // STYLING: iOS/macOS Glassmorphism Aesthetic
            // transform-gpu: Essential for forcing hardware acceleration in Safari
            className="relative w-full h-[92vh] md:h-auto md:max-w-md bg-[#121212]/95 border-t md:border border-white/10 rounded-t-[2.5rem] md:rounded-[2.5rem] p-8 md:m-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden touch-none selection:bg-primary/20 transform-gpu"
            style={{
                /* Ensures backdrop-blur doesn't fail intermittently on old iOS/Safari */
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                backdropFilter: "blur(40px) saturate(180%)",
            }}
          >
            
            {/* DESIGN ELEMENT: iOS Dismiss Handle (Mobile only) */}
            <div 
              className="absolute top-0 left-0 right-0 flex justify-center p-3 md:hidden cursor-grab active:cursor-grabbing z-[110]"
              onPointerDown={(e) => dragControls.start(e)} // Connect drag to this area
            >
              <div className="w-16 h-1.5 bg-white/20 rounded-full" />
            </div>

            {/* Design Element: Corner Glow (Subtle matching aesthetic) */}
            <div className="absolute -top-12 -left-12 h-32 w-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

            {/* Header Area */}
            <div className="relative z-10 flex justify-between items-start mb-8 mt-4 md:mt-0">
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight leading-none uppercase">
                  Find Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">Masterpiece</span>
                </h3>
              </div>
              
              {/* iOS-size close button (minimum 44x44px touch area) */}
              <button 
                onClick={handleClose}
                className="absolute top-0 right-0 p-3 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 text-white/50 hover:text-white transition-all z-[110]"
              >
                <X size={20} />
              </button>
            </div>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                  <input
                    required
                    type="text"
                    placeholder="E.g. Michael Chen"
                    // iOS Optimize: prevent auto-zoom in mobile Safari with text-base (16px)
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-base selection:bg-primary/20"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                  <input
                    required
                    type="email"
                    placeholder="michael@luxury.com"
                    // iOS Optimize: prevent auto-zoom in mobile Safari with text-base (16px)
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-base selection:bg-primary/20"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 text-sm font-bold border-r border-white/10 pr-2">
                    +971
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="58 000 0000"
                    // iOS Optimize: prevent auto-zoom in mobile Safari with text-base (16px)
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-20 pr-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-base selection:bg-primary/20"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-4 space-y-3">
                {/* INTERACTIVE BUTTON OPTIMIZATION: whileTap */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }} // Instant feedback on touch
                  className="w-full bg-primary hover:bg-white text-black font-black uppercase tracking-widest text-[11px] py-4.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 shadow-xl shadow-primary/20"
                >
                  Send to WhatsApp
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <p className="text-[9px] text-center text-neutral-500 uppercase tracking-wide px-4 leading-relaxed selection:bg-primary/20">
                  Submit this form, and a verified Monopoly Prime agent will connect with you on WhatsApp within minutes.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppPopup;