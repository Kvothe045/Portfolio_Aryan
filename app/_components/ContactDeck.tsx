"use client";
import { profile } from "../_data/portfolioData";
import { Mail, Linkedin, Phone, Terminal, Cpu, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactDeck() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // The Space x Programmer Quotes
  const quotes = [
    "Ground Control to Major Dev... Commencing countdown, engines on.",
    "Localhost, we have a problem.",
    "One small commit for man, one giant merge for main branch.",
    "I'm sorry Dave, I can't debug that.",
    "Transmission Status: Awaiting Input..."
  ];

  // Typewriter Logic
  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    const typeSpeed = isDeleting ? 30 : 50; // Speed of typing
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentQuote.substring(0, text.length + 1));
        if (text.length === currentQuote.length) setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else {
        setText(currentQuote.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, quoteIndex, quotes]);

  return (
    <div className="w-full max-w-4xl mx-auto relative group font-sans">
      
      {/* 1. Background Glow & Grid */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* 2. The Main Console */}
      <div className="relative bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header Bar (Status Indicators) */}
        <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase border-l border-white/10 pl-3 ml-1">
                    Secure Channel // Encrypted
                </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-500">
                <Wifi size={14} className="animate-pulse"/>
                <span>SIGNAL: STRONG</span>
            </div>
        </div>

        {/* Middle: The CRT Terminal Screen */}
        <div className="p-8 md:p-12 bg-black relative overflow-hidden">
            {/* Scanline Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
            
            <div className="relative z-20 flex flex-col items-center text-center space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                    <Terminal size={28} />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                    Establish <span className="text-cyan-400">Connection</span>
                </h2>

                {/* The Typing Text Area */}
                <div className="h-12 flex items-center justify-center">
                    <p className="font-mono text-sm md:text-base text-green-400/80">
                        <span className="mr-2 text-gray-600">$</span>
                        {text}
                        <span className="w-2 h-4 bg-green-400 inline-block ml-1 animate-blink"></span>
                    </p>
                </div>
            </div>
        </div>

        {/* Bottom: The Action Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 bg-white/[0.02]">
            
            {/* EMAIL MODULE */}
            <a href={`mailto:${profile.email}`} className="group/btn relative p-8 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                <Mail className="text-gray-400 group-hover/btn:text-cyan-400 transition-colors" size={28} />
                <div className="text-center">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Send Packet</div>
                    <div className="text-white font-bold group-hover/btn:text-cyan-300 transition-colors">Email Me</div>
                </div>
            </a>

            {/* LINKEDIN MODULE */}
            <a href={profile.socials.linkedin} target="_blank" className="group/btn relative p-8 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                <Linkedin className="text-gray-400 group-hover/btn:text-blue-400 transition-colors" size={28} />
                <div className="text-center">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Uplink</div>
                    <div className="text-white font-bold group-hover/btn:text-blue-300 transition-colors">LinkedIn</div>
                </div>
            </a>

            {/* PHONE MODULE */}
            <div className="group/btn relative p-8 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                <Phone className="text-gray-400 group-hover/btn:text-purple-400 transition-colors" size={28} />
                <div className="text-center">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Voice Line</div>
                    <div className="text-white font-bold group-hover/btn:text-purple-300 transition-colors">{profile.phone}</div>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}