"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="fixed inset-0 z-50 h-screen w-full overflow-hidden pointer-events-none">
      {/* Left Panel - Clean White */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ delay: 2, duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
        className="absolute left-0 top-0 h-full w-1/2 bg-white border-r border-zinc-100 shadow-2xl pointer-events-auto"
      />

      {/* Right Panel - Clean White */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ delay: 2, duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
        className="absolute right-0 top-0 h-full w-1/2 bg-white border-l border-zinc-100 shadow-2xl pointer-events-auto"
      />

      {/* Central Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, display: "none" }}
          transition={{ 
            scale: { duration: 0.8 }, 
            opacity: { duration: 0.8 },
            display: { delay: 3 } 
          }}
        >
          <Image 
            src="/1.png" 
            alt="GSB Premier League Logo" 
            width={350} 
            height={350} 
            priority
            className="drop-shadow-xl" // Added shadow to make logo pop on white
          />
        </motion.div>
      </div>
    </div>
  );
}