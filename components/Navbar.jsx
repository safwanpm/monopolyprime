"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const lastScroll = useRef(0);

  /* ================================
     SCROLL LOGIC (iOS Safe Version)
  ================================= */
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof latest !== "number") return;

    if (latest > lastScroll.current && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setScrolled(latest > 50);
    lastScroll.current = latest;
  });

  /* ================================
     BODY SCROLL LOCK (Safe Cleanup)
  ================================= */
  useEffect(() => {
    const original = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  const links = [
    "Properties",
    "About",
    "Services",
    "Contact",
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none will-change-transform"
      >
        <nav
          className={`
            w-full max-w-7xl flex items-center justify-between rounded-full 
            px-4 py-2 md:px-8 md:py-3 transition-all duration-500 pointer-events-auto
            border border-white/10 shadow-2xl
            ${
              scrolled
                ? "bg-black/60 backdrop-blur-2xl border-white/20"
                : "bg-white/5 backdrop-blur-md"
            }
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <Link href="/">
              <img
                src="/images/log_white.png"
                className="h-16 w-40 object-contain"
                alt="MonopolyPrime Properties Logo"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 rounded-full bg-primary hover:bg-primary text-black text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            ><Link  href="tel:+971588017015">
              Book Viewing
              </Link>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-[60] p-3 text-white"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block"
              />
            </div>
          </button>
        </nav>
      </motion.div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] lg:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:text-primary transition-colors"
            >
              ✕
            </button>

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-8"
            >
              {links.map((link) => (
                <motion.a
                  key={link}
                  variants={itemVariants}
                  href={`/${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl  tracking-widest text-white hover:text-primary transition-colors"
                >
                  {link}
                </motion.a>
              ))}

              <motion.button
                variants={itemVariants}
                className="mt-8 px-12 py-4 rounded-full bg-primary text-black font-black uppercase tracking-tighter text-sm"
              ><Link     href="tel:+971588017015">
                Inquire Now
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;