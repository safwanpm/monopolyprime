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
import Link from "next/link";

const ContactSignature = () => {
  return (
    <section className="relative bg-[#020202] min-h-[100dvh] text-white py-20 px-6 lg:px-24 flex flex-col justify-center overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* --- BIG STATEMENT --- */}
        <div className="mb-20">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[2px] bg-primary mb-8"
          />

          <h1 className="text-3xl md:text-[80px] lg:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-6">
            Start the <br />
            <span className="text-primary">Conversation.</span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-2xl max-w-2xl font-medium">
            Whether you are looking to buy, sell, or rent in Sharjah and Dubai,
            our specialists are ready to assist.
          </p>
        </div>

        {/* --- CONTACT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          {/* WhatsApp */}
          <Link
            href="https://wa.me/971588017015"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black mb-16 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-transform duration-300 group-hover:scale-105">
              <MessageCircle size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">WhatsApp</h3>

            <p className="text-neutral-500 text-sm mb-8 italic">
              Instant response from our team.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              Chat Now <ArrowUpRight size={16} />
            </div>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+971588017015"
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-16 transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-105">
              <Phone size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">Call Us</h3>

            <p className="text-neutral-500 text-sm mb-8 italic">
              Speak directly with a strategist.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              +971 588 017 015 <ArrowUpRight size={16} />
            </div>
          </Link>

          {/* Email */}
          <Link
            href="mailto:info@monopolyprime.ae"
            className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-16 transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-105">
              <Mail size={28} />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-2">Email</h3>

            <p className="text-neutral-500 text-sm mb-8 italic">
              Send us your detailed inquiry.
            </p>

            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              info@monopolyprime.ae <ArrowUpRight size={16} />
            </div>
          </Link>

        </div>

        {/* --- FOOTER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">

          <Link
            href="https://www.google.com/maps/search/?api=1&query=Executive+Tower+Aljada+Sharjah+UAE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <MapPin
              className="text-primary mt-1 transition-transform duration-300 group-hover:scale-110"
              size={20}
            />
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm">
                Our Headquarters
              </h4>
              <p className="text-neutral-500 text-sm">
                Al Shaqaaq Building - 402 - Al Taawun St - Al Mamzar <br />
                Sharjah - United Arab Emirates
              </p>
            </div>
          </Link>

          <div className="flex gap-8">
            <a
              href="#"
              className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Instagram size={20} />
            </a>

            <Link
              href="https://www.linkedin.com/company/monopoly-prime-properties/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Linkedin size={20} />
            </Link>
          </div>

        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSignature;