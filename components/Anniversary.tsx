"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AnniversarySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the parallax for a premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax offsets: One slides up, one slides down
  const yGoddess = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const yIsland = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white py-20 md:py-32 overflow-hidden"
    >
      {/* 1. Large Decorative Background Text */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <h2 className="text-[25vw] font-black text-zinc-100 leading-none uppercase translate-y-20">
          A Decade
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Storytelling Typography */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="h-1 w-12 rounded-full bg-orange-500" />
              <span className="text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
                10th Anniversary • Homecoming
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,7vw,5rem)] font-black text-zinc-900 leading-[0.95] tracking-tighter mb-10"
            >
              SEEKING <br />
              <span className="text-orange-600">DIVINE GRACE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Returning to <span className="text-zinc-900 font-bold">Shanbhouge Kudru</span>, we celebrate a decade of unity under the blessing of <span className="text-zinc-900 font-bold italic">Goddess Bappanadu Durgaparameshwari</span>. This is more than a tournament; it is our heritage.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <button className="px-10 py-4 bg-orange-600 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-xl shadow-orange-200 hover:scale-105 active:scale-95 transition-all">
                The Legend Story
              </button>
            </motion.div>
          </div>

          {/* Right Side: Asymmetrical Parallax Gallery */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative">
            
            {/* Goddess Card */}
            <motion.div
              style={{ y: yGoddess }}
              className="relative group h-[400px] md:h-[550px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/goddess.jpg"
                alt="Goddess Durgaparameshwari"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">Divine Grace</p>
                <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">Shree Bappanadu <br/> Durgaparameshwari</h3>
              </div>
            </motion.div>

            {/* Island Card */}
            <motion.div
              style={{ y: yIsland }}
              className="relative group h-[400px] md:h-[550px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl sm:translate-y-20"
            >
              <Image
                src="/island.jpg"
                alt="Shanbhouge Kudru Island"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2">The Sanctuary</p>
                <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">Shanbhouge <br/> Kudru Island</h3>
              </div>
            </motion.div>

            {/* Subtle "10" Badge Overlap */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex h-24 w-24 bg-white rounded-full items-center justify-center shadow-2xl z-20 border-8 border-white/20 backdrop-blur-sm">
              <span className="text-3xl font-black text-zinc-900">10</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}