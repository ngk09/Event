"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ConveyorsMessage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center py-20 overflow-hidden">
      {/* Background Accent - Strategic Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Editorial Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-10 bg-blue-500" />
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em]">
                Convener&apos;s Message
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                A Decade of Unity, <br />
                <span className="text-blue-500 font-serif italic">A Future of Legacy.</span>
              </h2>
              
              <div className="relative">
                <span className="absolute -top-6 -left-8 text-8xl text-zinc-800 font-serif opacity-40 select-none">&ldquo;</span>
                
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed italic relative z-10">
                  Returning to our own land at Shanbhouge Kudru for this 10th anniversary is a moment of immense pride. We seek the divine blessings of Goddess Bappanadu Durgaparameshwari as we unite our community through the spirit of sports and heritage.
                </p>
              </div>

              {/* Founder/Convener Signature Section */}
              <div className="mt-12 group">
                <div className="inline-block relative">
                  <p className="text-2xl md:text-3xl font-black text-white tracking-tight relative z-10">
                    Naresh Shenoy
                  </p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={`absolute bottom-1 left-0 h-3 bg-blue-600/30 -z-0`}
                  />
                </div>
                <p className="text-blue-500 font-bold text-[11px] uppercase tracking-[0.3em] mt-3">
                  Chief Convener, GPL 2026
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-Performance Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-video lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-zinc-900 group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/4.jpeg" // IMPORTANT: Prevents the blank screen on Vercel while video loads
              >
                <source src="/1.mp4" type="video/mp4" />
              </video>

              {/* Professional HUD / Overlay UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">GPL Cinematic</span>
              </div>

              <div className="absolute bottom-8 left-8">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">10th Anniversary Film</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}