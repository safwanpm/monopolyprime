'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Properties", "About", "Services", "Testimonials", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          transition-all duration-500
          ${scrolled
            ? "bg-[#0D0D1A]/95 backdrop-blur-xl border-b border-[#C9A84C]/10 py-3"
            : "bg-transparent py-6"}
        `}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 lg:px-12">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#C9A84C] to-[#9A7A2E] flex items-center justify-center [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
              <span className="font-serif font-bold text-sm text-[#1A1A2E]">
                M
              </span>
            </div>

            <div className="leading-tight">
              <div className="text-[20px] font-serif font-bold tracking-wider text-[#F5F0E8]">
                MONOPOLY
              </div>
              <div className="text-[9px] tracking-[0.4em] font-semibold text-[#C9A84C] -mt-1">
                PRIME
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: "#C9A84C" }}
                className="text-[13px] tracking-[0.15em] font-medium uppercase text-[#A09070]"
              >
                {link}
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 text-[11px] uppercase tracking-wider bg-[#C9A84C] text-[#1A1A2E] rounded-full font-semibold"
            >
              Book Viewing
            </motion.button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F5F0E8]"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[1px] bg-current" />
              <span className="block w-6 h-[1px] bg-current" />
              <span className="block w-6 h-[1px] bg-current" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 bg-[#0D0D1A] z-40 pt-24 pb-10 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-[#A09070]"
                >
                  {link}
                </a>
              ))}

              <button className="mt-4 px-6 py-2 text-xs uppercase tracking-wider bg-[#C9A84C] text-[#1A1A2E] rounded-full font-semibold">
                Book Viewing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grain Overlay */}
      <div className="grain pointer-events-none fixed inset-0 z-10" />
    </>
  );
};

export default Navbar;
