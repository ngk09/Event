"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ConveyorsMessage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-zinc-950 flex items-center py-16 md:py-24 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
          
          {/* Text Content: Balanced for all screens */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-8 bg-blue-500" />
              <span className="text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
                Convener&apos;s Message
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">
                A Decade of Unity, <br />
                <span className="text-blue-500 font-serif italic font-light">A Future of Legacy.</span>
              </h2>
              
              <div className="relative mb-10">
                <span className="absolute -top-6 -left-4 md:-left-10 text-7xl md:text-9xl text-zinc-900 font-serif opacity-50 select-none">&ldquo;</span>
                <p className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed italic relative z-10 pl-2">
                  Returning to our own land at Shanbhouge Kudru for this 10th anniversary is a moment of immense pride. We seek the divine blessings of Goddess Bappanadu Durgaparameshwari as we unite our community through the spirit of sports and heritage.
                </p>
              </div>

              {/* Signature Section */}
              <div className="flex flex-col gap-1">
                <div className="inline-block relative w-fit">
                  <p className="text-xl md:text-2xl font-black text-white tracking-tight relative z-10">
                    Naresh Shenoy
                  </p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-1 left-0 h-2 bg-blue-600/20 -z-0"
                  />
                </div>
                <p className="text-blue-500 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                  Chief Convener, GPL 2026
                </p>
              </div>
            </motion.div>
          </div>

          {/* Video Player: Optimized to show the FULL frame on ALL devices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[50%] order-1 lg:order-2"
          >
            <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl bg-black border border-white/5 ring-1 ring-white/10">
              {/* 1. 'object-contain' ensures the full video fits inside without cropping.
                  2. We use a container that adapts its height to the video aspect ratio.
              */}
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[70vh] object-contain block mx-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/1.mp4" type="video/mp4" />
              </video>

              {/* Subtle Cinematic HUD */}
              <div className="absolute top-3 right-3 md:top-5 md:right-5 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
                <span className="text-[9px] md:text-[11px] text-white font-black uppercase tracking-widest">Live: GPL Cinematic</span>
              </div>
              
              <div className="absolute bottom-4 left-4 pointer-events-none opacity-40">
                <p className="text-[10px] text-white font-medium uppercase tracking-tighter">1080p Quality • Original Frame</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}