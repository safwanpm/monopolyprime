"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactSignature = () => {
  return (
    <section className="relative bg-[#020202] min-h-screen text-white py-20 px-6 lg:px-24 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* --- BIG STATEMENT --- */}
        <div className="mb-20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-primary mb-8"
          />

          <h1 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-6">
            Let's Start <br />
            <span className="text-primary">Your Legacy.</span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-2xl max-w-2xl font-medium">
            Whether you are looking to buy, sell, or rent in Sharjah and Dubai,
            our specialists are ready to assist.
          </p>
        </div>

        {/* --- CONTACT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/yournumber"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/50 transition-all backdrop-blur-xl will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black mb-16 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              <MessageCircle size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">WhatsApp</h3>
            <p className="text-neutral-500 text-sm mb-8 italic">
              Instant response from our team.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              Chat Now <ArrowUpRight size={16} />
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+9716XXXXXXX"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/50 transition-all backdrop-blur-xl will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-16 group-hover:bg-primary group-hover:text-black transition-all">
              <Phone size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">Call Us</h3>
            <p className="text-neutral-500 text-sm mb-8 italic">
              Speak directly with a strategist.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              +971 6 5XX XXXX <ArrowUpRight size={16} />
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@yourcompany.com"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/50 transition-all backdrop-blur-xl will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-16 group-hover:bg-primary group-hover:text-black transition-all">
              <Mail size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">Email</h3>
            <p className="text-neutral-500 text-sm mb-8 italic">
              Send us your detailed inquiry.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              info@titan.ae <ArrowUpRight size={16} />
            </div>
          </motion.a>
        </div>

        {/* --- FOOTER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" size={20} />
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm">
                Our Headquarters
              </h4>
              <p className="text-neutral-500 text-sm">
                Executive Tower, Aljada, Sharjah, UAE
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSignature;