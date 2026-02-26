"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Keep the scroll logic exactly as is for the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smoothing for that premium feel
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30 
  });

  // Parallax transforms for the text and the logo container
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#fafafa] overflow-hidden flex flex-col justify-center">
      
      {/* 1. Grid Background - Preserved exactly for visual resolution */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 2. Main Content Area */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Typography */}
          <motion.div style={{ y: textY }} className="w-full lg:max-w-4xl flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                Registration Live • 2026 Season
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,12vw,6.5rem)] font-black text-zinc-900 leading-[0.9] tracking-tight mb-8 md:mb-12"
            >
              GSB PREMIER <br />
              <span className="inline-block hover:text-blue-600 transition-colors duration-500">LEAGUE.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 items-center"
            >
              <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-zinc-900 text-white rounded-full text-sm md:text-base font-bold overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-xl shadow-zinc-200">
                <span className="relative z-10">Secure Your Slot</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: logo.png Image Container - Structure preserved exactly */}
          <motion.div 
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[580px]"
          >
            {/* The decorative tilted background box */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-[40px] md:rounded-[60px] rotate-3 -z-10" />
            
            <Image 
              src="/logo.png" 
              alt="GSB Premier League Logo" 
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>

        </div>
      </div>

      {/* 3. Subtle Footer Hint (Optional replacement for the cards) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300">Scroll to Explore</span>
           <div className="w-px h-12 bg-gradient-to-b from-zinc-200 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
}