"use client";



import React, { useState } from "react";



import { motion, AnimatePresence } from "framer-motion";



import {



  Search,



  MapPin,



  Layers,



  Maximize,



  X,



  BedDouble,



  Bath,



  Scaling,



  ArrowRight,



  ExternalLink



} from "lucide-react";



import Image from "next/image";



import Navbar from "@/components/Navbar";



import ContactSignature from "@/components/Contact";



import TitanMonolithFooter from "@/components/Footer";



import MonopolyAbsoluteGlass from "@/components/Popup";







const COLLECTIONS = [



  {



    id: 1,



    name: "The Palm Heights",



    price: "12M",



    img: "/images/property1.webp",



    tags: ["Sea View", "Private Pool"],



    beds: 4, baths: 5, size: "3,850"



  },



  {



    id: 2,



    name: "Desert Rose Estate",



    price: "45M",



    img: "/images/property2.webp",



    tags: ["Golf Course", "Smart Home"],



    beds: 6, baths: 7, size: "12,400"



  },



  {



    id: 3,



    name: "Obsidian Towers",



    price: "8.5M",



    img: "/images/property3.webp",



    tags: ["Downtown", "Furnished"],



    beds: 3, baths: 3, size: "2,100"



  },



  // Row 2 Example Data



  {



    id: 4,



    name: "Azure Marina",



    price: "5.2M",



    img: "/images/property1.webp",



    tags: ["Marina View"],



    beds: 2, baths: 2, size: "1,450"



  },



  {



    id: 5,



    name: "The Grand Manor",



    price: "62M",



    img: "/images/property2.webp",



    tags: ["Exclusive"],



    beds: 7, baths: 8, size: "18,000"



  },



  {



    id: 6,



    name: "Sky Garden Apt",



    price: "3.8M",



    img: "/images/property3.webp",



    tags: ["Family Friendly"],



    beds: 3, baths: 3, size: "1,900"



  },



];







const AllCollectionsPage = () => {



  const [activeFilter, setActiveFilter] = useState("All");



  const [selectedImg, setSelectedImg] = useState(null);







  // Helper function to chunk properties into groups of 3 to fit the 4-column row (3 properties + 1 portal card)



  const chunkedProperties = [];



  for (let i = 0; i < COLLECTIONS.length; i += 3) {



    chunkedProperties.push(COLLECTIONS.slice(i, i + 3));



  }







  return (



    <>



      <Navbar />







      <AnimatePresence>



        {selectedImg && (



          <motion.div



            initial={{ opacity: 0 }}



            animate={{ opacity: 1 }}



            exit={{ opacity: 0 }}



            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"



            onClick={() => setSelectedImg(null)}



          >



            <motion.button className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><X size={24} /></motion.button>



            <motion.div layoutId={selectedImg} className="relative w-full h-full max-w-6xl max-h-[80vh]">



              <Image src={selectedImg} alt="Fullscreen" fill className="object-contain" />



            </motion.div>



          </motion.div>



        )}



      </AnimatePresence>







      <main className="min-h-screen  bg-[#050505] text-white">



        {/* --- HEADER --- */}



        <section className="pt-40 border-b border-white/5  mx-auto max-w-7xl px-6 lg:px-0">



          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12 md:mb-16 lg:mb-24 px-4 md:px-0"
          >
            {/* ULTRA: Using vw (viewport width) to ensure it never exceeds the screen width */}
            <span className="absolute -top-6 md:-top-10 -left-2 md:-left-4 text-[22vw] lg:text-[200px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
              ULTRA
            </span>

            <h1 className="relative z-10 flex flex-col leading-[0.9] md:leading-[0.8]">
              {/* First Row: Swapping to flex-wrap for smaller screens */}
              <span className="flex flex-wrap items-center gap-x-3 md:gap-4 text-3xl md:text-6xl lg:text-[90px] font-light tracking-tight text-white/90">
                THE
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-primary overflow-hidden whitespace-nowrap font-medium"
                >
                  DEFINITIVE
                </motion.span>
              </span>

              {/* Second Row: Fluid font size for mobile */}
              <span className="text-[12vw] md:text-7xl lg:text-[100px] font-black tracking-tighter text-white flex items-baseline">
                COLLECTION
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary ml-1"
                >
                  .
                </motion.span>
              </span>

              {/* Brand Tagline: Scaled width of the line for mobile */}
              <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-6">
                <div className="h-[1px] w-12 md:w-20 bg-primary/50" />
                <span className="text-primary/80 font-bold tracking-[0.3em] md:tracking-[0.6em] uppercase text-[8px] md:text-[12px]">
                  Monopoly Prime Properties
                </span>
              </div>
            </h1>
          </motion.div>


        </section>







        {/* --- 4-COLUMN GRID WITH PORTAL CARD EVERY ROW --- */}



        <section className="py-12 mx-auto max-w-7xl px-6 lg:px-0">



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">



            {chunkedProperties.map((group, groupIdx) => (



              <React.Fragment key={groupIdx}>



                {/* 3 Property Cards */}



                {group.map((item, idx) => (



                  <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group cursor-pointer">



                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 border border-white/10 shadow-2xl">



                      <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-all duration-1000" />



                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />







                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">



                        <div className="flex flex-col gap-1.5">{item.tags.map(tag => (<span key={tag} className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-bold text-primary uppercase">{tag}</span>))}</div>



                        <button onClick={(e) => { e.stopPropagation(); setSelectedImg(item.img); }} className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black scale-0 group-hover:scale-100 transition-all"><Maximize size={14} /></button>



                      </div>







                      <div className="absolute bottom-1/4 left-4 right-4 py-3 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl flex justify-around items-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">



                        <div className="text-center"><BedDouble size={14} className="text-primary mx-auto mb-1" /><p className="text-[8px] font-bold uppercase">{item.beds} Bds</p></div>



                        <div className="text-center"><Bath size={14} className="text-primary mx-auto mb-1" /><p className="text-[8px] font-bold uppercase">{item.baths} Bth</p></div>



                        <div className="text-center"><Scaling size={12} className="text-primary mx-auto mb-1" /><p className="text-[8px] font-bold uppercase">{item.size} ft²</p></div>



                      </div>







                      <div className="absolute bottom-6 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all">



                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><Layers size={14} /></div>



                        <button className="px-4 py-2 bg-primary text-black text-[9px] font-black uppercase rounded-full hover:bg-white transition-colors">View Details</button>



                      </div>



                    </div>







                    <div className="px-1">



                      <h3 className="text-xl font-bold tracking-tighter group-hover:text-primary transition-colors truncate">{item.name}</h3>



                      <div className="flex justify-between items-center mt-1">



                        <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5"><MapPin size={10} className="text-primary" /> Dubai</p>



                        <p className="text-primary font-bold text-sm">AED {item.price}</p>



                      </div>



                    </div>



                  </motion.div>



                ))}







                {/* Portal Card (Always 4th Column on Desktop and last item on mobile row) */}



                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/5] rounded-[2rem]  overflow-hidden flex flex-col p-8 group">



                  <div className="absolute inset-0 " />



                  <div className="relative z-10 flex flex-col h-full">



                    <div className="mb-6">



                      <span className="text-primary font-bold tracking-[0.3em] uppercase text-[9px] block mb-2">Market Presence</span>



                      <h3 className="text-2xl font-bold tracking-tighter leading-tight">EXPLORE ON <br /><span className="text-white/40">PORTALS</span></h3>



                    </div>



                    <div className="flex flex-col gap-4 mt-auto">



                      <a href="#" className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-primary hover:text-black transition-all duration-500 group/link">



                        <div className="flex flex-col"><span className="text-[10px] font-black uppercase tracking-widest opacity-50">View All on</span><span className="text-lg font-bold">Bayut</span></div>



                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-black/20"><ExternalLink size={16} /></div>



                      </a>



                      <a href="#" className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-[#ff0000] hover:text-white transition-all duration-500 group/link">



                        <div className="flex flex-col"><span className="text-[10px] font-black uppercase tracking-widest opacity-50">View All on</span><span className="text-lg font-bold">Dubizzle</span></div>



                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-white/20"><ExternalLink size={16} /></div>



                      </a>



                    </div>



                  </div>



                </motion.div>



              </React.Fragment>



            ))}



          </div>



        </section>







        <section className="py-40 bg-[#080808] border-t border-white/5 text-center px-6">



          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">OFF-MARKET <span className="text-primary">OPPORTUNITIES</span></h2>



          <button className="px-12 py-5 bg-primary text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-white transition-all">Contact Private Advisor</button>



        </section>



      </main>







      <ContactSignature />



      <TitanMonolithFooter />



      <MonopolyAbsoluteGlass />



    </>



  );



};







export default AllCollectionsPage;