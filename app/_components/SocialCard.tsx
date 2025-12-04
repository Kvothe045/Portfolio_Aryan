"use client";
import { ArrowUpRight, Linkedin, Github, Terminal, Code, Cpu } from "lucide-react";

interface SocialCardProps {
  platform: "LinkedIn" | "GitHub" | "LeetCode" | "Codeforces";
  handle: string;
  link: string;
  stats: string;
  color: string;
}

export default function SocialCard({ platform, handle, link, stats }: SocialCardProps) {
  
  // Configuration for "Low Power" (Initial) vs "Overdrive" (Hover)
  const themeConfig = {
    LinkedIn: {
      icon: <Linkedin size={22} />,
      // Initial: Deep Blue Glass
      style: "border-blue-500/30 bg-blue-900/10 hover:border-blue-400 hover:bg-blue-600/20",
      text: "text-blue-200 group-hover:text-blue-100",
      statsBadge: "bg-blue-500/10 text-blue-300 border-blue-500/20 group-hover:bg-blue-400/20 group-hover:text-white",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
      gradient: "from-blue-500/10 to-transparent"
    },
    GitHub: {
      icon: <Github size={22} />,
      // Initial: Deep Gray/White Glass
      style: "border-white/20 bg-white/5 hover:border-white/80 hover:bg-white/10",
      text: "text-gray-300 group-hover:text-white",
      statsBadge: "bg-white/10 text-gray-300 border-white/20 group-hover:bg-white/20 group-hover:text-white",
      glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
      gradient: "from-white/5 to-transparent"
    },
    LeetCode: {
      icon: <Code size={22} />,
      // Initial: Deep Yellow/Orange Glass
      style: "border-yellow-600/30 bg-yellow-900/10 hover:border-yellow-400 hover:bg-yellow-600/20",
      text: "text-yellow-200 group-hover:text-yellow-100",
      statsBadge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20 group-hover:bg-yellow-400/20 group-hover:text-white",
      glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]",
      gradient: "from-yellow-500/10 to-transparent"
    },
    Codeforces: {
      icon: <Terminal size={22} />,
      // Initial: Deep Red Glass
      style: "border-red-600/30 bg-red-900/10 hover:border-red-500 hover:bg-red-600/20",
      text: "text-red-200 group-hover:text-red-100",
      statsBadge: "bg-red-500/10 text-red-300 border-red-500/20 group-hover:bg-red-500/20 group-hover:text-white",
      glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]",
      gradient: "from-red-500/10 to-transparent"
    }
  };

  const theme = themeConfig[platform];

  return (
    <a href={link} target="_blank" className="block w-full group relative">
      <div className={`
        relative overflow-hidden rounded-xl backdrop-blur-md 
        border transition-all duration-300 ease-out
        hover:-translate-y-1 h-full
        ${theme.style} ${theme.glow}
      `}>
        
        {/* Subtle Gradient Backdrop (Visible initially) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-100`}></div>
        
        {/* Scanline Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_3px] pointer-events-none"></div>

        <div className="relative z-10 p-5 flex flex-col gap-4">
          
          <div className="flex justify-between items-start">
             {/* Icon Box */}
             <div className={`p-2 rounded-lg border border-white/5 bg-black/20 ${theme.text} transition-colors`}>
               {theme.icon}
             </div>
             
             <ArrowUpRight className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ${theme.text}`} />
          </div>

          <div>
            <h3 className={`font-bold text-lg mb-1 tracking-tight ${theme.text}`}>
               {platform}
            </h3>
            
            <div className="flex justify-between items-center">
               <span className="text-xs text-white/40 font-mono">@{handle}</span>
               
               {/* Stats Pill */}
               <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded border ${theme.statsBadge} transition-all`}>
                  {stats}
               </span>
            </div>
          </div>

        </div>
      </div>
    </a>
  );
}