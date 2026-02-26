"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const sections = [
  {
    title: "The Spirit of the Pitch",
    quote: "Cricket is not just a game, it's a heartbeat.",
    description: "Experience the intensity of the GSB Premier League 2026. Where talent meets tradition.",
    imgPath: "/4.jpeg", 
    accent: "bg-blue-600",
  },
  {
    title: "Cultural Heritage",
    quote: "Our traditions are the roots of our community.",
    description: "Celebrating the vibrant art, music, and deep-seated values of the GSB community.",
    imgPath: "/5.jpeg", 
    accent: "bg-orange-600",
  },
  {
    title: "Honoring Excellence",
    quote: "Success is best when shared with community.",
    description: "A special felicitation for our high achievers who continue to make us proud.",
    imgPath: "/6.jpeg",
    accent: "bg-yellow-500",
  }
];

export default function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Custom spring for smoother scrolling on high-refresh-rate screens
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate shift: -100% * (number of items - 1)
  // We use -66.6% because there are 3 items (0%, -33%, -66%)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#fdfdfd]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-4 md:gap-[5vw] px-4 md:px-[5vw]"
        >
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="relative h-[85vh] md:h-[80vh] w-[85vw] md:w-[90vw] flex-shrink-0 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 bg-white rounded-[32px] md:rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden p-6 md:p-20"
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full lg:w-1/2 h-[40%] lg:h-full rounded-[24px] overflow-hidden shadow-xl"
              >
                <Image
                  src={section.imgPath}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className={`h-1 w-8 md:w-10 rounded-full ${section.accent}`} />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400">
                    {section.title}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-5xl font-black text-zinc-900 leading-[1.1] mb-4 md:mb-6 tracking-tight">
                  {section.quote}
                </h2>
                
                <p className="text-zinc-500 text-xs md:text-base max-w-md leading-relaxed mb-6 md:mb-10">
                  {section.description}
                </p>
                
                <div className="flex items-center gap-4 md:gap-6">
                  <button className={`px-6 md:px-8 py-3 md:py-3.5 ${section.accent} text-white font-bold text-[10px] md:text-[11px] rounded-full shadow-lg transition-all hover:brightness-110 active:scale-95 uppercase tracking-widest`}>
                    View Details
                  </button>
                  <span className="text-zinc-300 font-mono text-xs md:text-sm">
                    / 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Decorative Watermark - Hidden on very small screens to avoid clutter */}
              <div className="absolute -bottom-4 -right-4 md:top-10 md:right-10 opacity-[0.03] pointer-events-none select-none hidden sm:block">
                <span className="text-7xl md:text-9xl font-black italic uppercase">GSB</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}