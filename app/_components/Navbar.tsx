"use client";
import { Home, Code, Cpu, Trophy, Send, Activity, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Base" },
    { id: "stats", icon: <Activity size={20} />, label: "Stats" },
    { id: "projects", icon: <Code size={20} />, label: "Logs" },
    { id: "skills", icon: <Cpu size={20} />, label: "Arsenal" },
    { id: "timeline", icon: <Clock size={20} />, label: "Timeline" },
    { id: "awards", icon: <Trophy size={20} />, label: "Honors" },
    { id: "contact", icon: <Send size={20} />, label: "Comms" },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for the larger header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 ${scrolled ? "pt-4" : "pt-8"}`}>
      <div className={`
        relative flex items-center gap-1 md:gap-4 px-4 md:px-8 py-4 
        rounded-2xl border border-white/10 
        backdrop-blur-xl bg-black/80 
        shadow-[0_0_30px_rgba(6,182,212,0.15)]
        transition-all duration-500 ease-out
        ${scrolled ? "scale-95 border-cyan-500/40 bg-black/90" : "scale-100 border-white/10"}
      `}>
        
        {/* Animated Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-200 flex flex-col items-center gap-1"
          >
            {/* Icon */}
            <div className="text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-200">
              {item.icon}
            </div>
            
            {/* Label (Only visible on larger screens) */}
            <span className="hidden md:block font-display text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
              {item.label}
            </span>
            
            {/* Active Glow Dot */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></div>
          </button>
        ))}
      </div>
    </div>
  );
}