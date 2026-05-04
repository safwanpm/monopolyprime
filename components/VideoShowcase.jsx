"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Share, Crown } from "lucide-react";
// Import Next.js Image if you are using Next, otherwise use standard <img>
import Image from "next/image";

const VideoShowcase = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Define your asset paths here for easier management
    const thumbnailImagePath = "/images/videothumbnail.webp"; // REQUIRED: Your static image
    const previewVideoPath = "/video.mp4"; // OPTIONAL: The slow-mo preview
    const fullVideoEmbedUrl = "./video.mp4"; // The full video shown in modal

    return (
        <section className="bg-[#050505] py-4 px-4 md:px-4 selection:bg-primary/30">
            <div className="max-w-7xl mx-auto">

                {/* HEADER: Apple-style Minimalist */}
                {/* HEADER: Matching the Curated Masterpieces Design */}
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        {/* Animated Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-1 bg-primary mb-6"
                        />

                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                            Cinematic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">
                                Experiences
                            </span>
                        </h2>
                    </div>

                    {/* Optional: Right-side description to balance the layout like your other sections */}
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-[280px] text-[11px] text-neutral-500 font-medium leading-relaxed uppercase tracking-wider"
                    >
                        Experience the world's most prestigious properties through ultra-high-definition digital cinematography.
                    </motion.p>
                </header>

                {/* MAIN VIDEO CONTAINER */}
                <motion.div
                    layoutId="video-card"
                    onClick={() => setIsOpen(true)}
                    // 1. ADD BACKGROUND IMAGE HERE AS A FALLBACK
                    className="relative aspect-video w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-neutral-900 cursor-pointer group active:scale-[0.98] transition-transform duration-300 shadow-2xl"
                    style={{
                        backgroundImage: `url(${thumbnailImagePath})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        /* Smooth hardware acceleration for iOS */
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translate3d(0,0,0)"
                    }}
                >
                    {/* Background Video Preview  */}

                    {/* <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                          
                            poster={thumbnailImagePath}
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                        >
                            <source src={previewVideoPath} type="video/mp4" />
                            
                            <img src={thumbnailImagePath} alt="Video Thumbnail Fallback" className="w-full h-full object-cover" />
                        </video>
                       
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                    </div> */}

                    {/* FLOATING GLASS UI (macOS Style) */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10">
                        <div className="flex justify-end">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                                <Share size={18} />
                            </div>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                            {/* FLOATING CONTENT: Matching PropertyCard Style */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-black">
                              
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                                        Penthouse Collection
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-5xl font-bold text-primary uppercase tracking-tighter leading-none">
                                    Sky Garden <br />
                                   
                                </h3>
                            </div>

                            {/* IOS-STYLE CENTERED PLAY (Simplified for Touch) */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex-shrink-0 h-16 w-16 md:h-24 md:w-24 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl transition-all"
                            >
                                {/* Fixed the potential 'window is not defined' error on SSR */}
                                <Play fill="black" className="ml-1 w-6 h-6 md:w-8 md:h-8" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* FULLSCREEN MODAL: iOS Spring Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-0 md:p-12"
                    >
                        {/* Close handle for iOS "feel" */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full md:hidden" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full h-full md:h-auto md:max-w-6xl md:aspect-video md:rounded-3xl overflow-hidden shadow-2xl bg-black">
                            {/* Close Button for Mobile */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-10 right-6 text-white bg-black/50 backdrop-blur-md p-2 rounded-full md:hidden z-[120]"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src={fullVideoEmbedUrl}
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                title="Grand Tour Video"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoShowcase;   