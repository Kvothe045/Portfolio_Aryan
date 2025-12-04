"use client";
import { skillCategories } from "../_data/portfolioData";

export default function TechGalaxy() {
  return (
    <div className="w-full space-y-12">
      
      {/* 1. CORE TECH (The Mainframe) */}
      <div className="relative p-8 rounded-3xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm overflow-hidden group">
        
        {/* FIX: Reduced opacity from 0.4 to 0.15 to prevent blinding glare */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h3 className="text-3xl font-display font-bold text-cyan-400 mb-8 flex items-center justify-center gap-3 tracking-widest">
             <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
             CORE PROTOCOLS
             <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          </h3>
          
          {/* FIX: Added justify-center to center the chips */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillCategories.technologies.map((tech) => (
              <div key={tech} className="relative group/chip">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover/chip:opacity-75 transition duration-300"></div>
                 <div className="relative px-8 py-4 bg-black border border-cyan-500/30 rounded-lg flex items-center gap-3 group-hover/chip:bg-cyan-950/30 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_cyan]"></div>
                    <span className="font-mono text-cyan-100 text-base tracking-wide">{tech}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* 2. TOOLS */}
         <div className="relative p-8 rounded-2xl border border-yellow-500/20 bg-yellow-950/5 hover:bg-yellow-950/10 transition-colors backdrop-blur-sm group flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-4 -mt-4 blur-2xl"></div>
            
            <h3 className="text-xl font-display font-bold text-yellow-400 mb-6 border-b border-yellow-500/20 pb-4 px-8 tracking-wider">
               OPERATIONAL TOOLS
            </h3>
            
            {/* FIX: Center aligned */}
            <div className="flex flex-wrap justify-center gap-3">
               {skillCategories.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-yellow-500/5 border border-yellow-500/20 text-yellow-200/80 font-mono text-xs uppercase rounded hover:bg-yellow-500/20 hover:text-white hover:border-yellow-400 transition-all cursor-crosshair">
                     {tool}
                  </span>
               ))}
            </div>
         </div>

         {/* 3. CONCEPTS */}
         <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-purple-950/5 hover:bg-purple-950/10 transition-colors backdrop-blur-sm group flex flex-col items-center text-center">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-tr-full -ml-4 -mb-4 blur-2xl"></div>
            
            <h3 className="text-xl font-display font-bold text-purple-400 mb-6 border-b border-purple-500/20 pb-4 px-8 tracking-wider">
               NEURAL CONCEPTS
            </h3>
            
            {/* FIX: Center aligned */}
            <div className="flex flex-wrap justify-center gap-3">
               {skillCategories.concepts.map((concept) => (
                  <span key={concept} className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 text-purple-200/80 font-mono text-xs uppercase rounded hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all cursor-crosshair">
                     {concept}
                  </span>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
}