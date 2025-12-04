// app/_components/Honors.tsx
"use client";
import { achievements } from "../_data/portfolioData";
import { Trophy, Award } from "lucide-react";
import Image from "next/image";

export default function Honors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {achievements.map((ach, index) => (
        <div key={index} className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
          
          {/* BACKGROUND IMAGE LAYER */}
          {ach.image ? (
            <div className="absolute inset-0 z-0">
               <Image 
                 src={ach.image} 
                 alt={ach.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
               />
               {/* Gradient Overlay to make text readable */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          ) : (
            // Fallback gradient if no image
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
          )}
          
          {/* CONTENT LAYER */}
          <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start">
            
            <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform">
              {index === 0 ? <Trophy size={24} /> : <Award size={24} />}
            </div>

            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {ach.title}
                </h3>
                <p className="text-yellow-400 font-mono text-xs tracking-wider uppercase mb-3">{ach.event}</p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {ach.desc}
                </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}