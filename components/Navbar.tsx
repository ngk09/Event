"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 ${
        scrolled ? "mt-4" : "mt-0"
      }`}
    >
      <div className={`mx-auto max-w-7xl transition-all duration-500 rounded-[24px] px-6 py-3 flex items-center justify-between ${
        scrolled 
          ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" 
          : "bg-transparent"
      }`}>
        
        {/* Left: Logo & 10th Anniversary Badge */}
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <Image src="/1.png" alt="Logo" fill className="object-contain" />
          </div>
          <div className="h-6 w-[1px] bg-zinc-200 hidden md:block" />
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Established</span>
            <span className="text-sm font-bold text-zinc-900">10 Years of GPL</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {["Events", "Schedule", "About", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: Anniversary Special & Action */}
        <div className="flex items-center gap-4">
          {/* 10th Year Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-500/20 rounded-full">
            <span className="text-lg">🏆</span>
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-tighter">
              10th Celebration
            </span>
          </div>

          <button className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
            Register Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}