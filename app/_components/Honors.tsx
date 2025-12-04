"use client";
import { useRef, useState } from "react";
import { achievements } from "../_data/portfolioData";
import { Trophy, Award } from "lucide-react";
import Image from "next/image";

export default function Honors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {achievements.map((ach, index) => (
        <SpotlightCard key={index} ach={ach} index={index} />
      ))}
    </div>
  );
}

function SpotlightCard({ ach, index }: { ach: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative h-72 rounded-xl border border-white/10 bg-black/50 overflow-hidden group"
    >
      {/* SPOTLIGHT EFFECT */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
      
      {/* BACKGROUND IMAGE */}
      {ach.image ? (
        <div className="absolute inset-0 z-0">
           <Image 
             src={ach.image} 
             alt={ach.title} 
             fill 
             className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start">
        <div className="absolute top-6 right-6 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
          {index === 0 ? <Trophy size={24} /> : <Award size={24} />}
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {ach.title}
        </h3>
        <p className="text-yellow-400 font-mono text-xs tracking-wider uppercase mb-3 border-l-2 border-yellow-500 pl-2">{ach.event}</p>
        <p className="text-gray-300 text-sm leading-relaxed max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {ach.desc}
        </p>
      </div>
    </div>
  );
}