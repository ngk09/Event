"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { title: "Tournament", items: ["Schedule", "Teams", "Standings", "Rules"] },
    { title: "Community", items: ["Culture", "Felicitation", "Membership", "History"] },
    { title: "Support", items: ["Register", "Sponsorship", "FAQs", "Contact"] },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/1.png" alt="GPL Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-black tracking-tighter text-zinc-900 uppercase">GPL 2026</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              The GSB Premier League is more than just sports; it's a decadal celebration of our heritage, unity, and excellence. Join us as we write the next chapter.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-full bg-zinc-50 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 flex items-center group transition-all">
                      <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
            <MapPin size={14} className="text-blue-600" />
            <span>Mangaluru, Karnataka</span>
          </div>
          
          <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
            © {currentYear} GSB Premier League • Crafted for Excellence
          </p>

          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Subtle Background Signature */}
      <div className="mt-10 flex justify-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[12vw] font-black uppercase leading-none italic">GSB PREMIER LEAGUE</h1>
      </div>
    </footer>
  );
}