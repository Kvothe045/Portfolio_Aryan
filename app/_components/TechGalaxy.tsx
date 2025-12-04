// app/_components/TechGalaxy.tsx
"use client";
import { skillCategories } from "../_data/portfolioData";

export default function TechGalaxy() {
  return (
    <div className="w-full">
      
      {/* SECTION 1: Technologies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
           // Core Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skillCategories.technologies.map((tech) => (
            <div key={tech} className="group relative">
               <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400/50 hover:bg-black transition-all duration-300 cursor-default">
                  <span className="text-gray-300 group-hover:text-cyan-300 text-lg">{tech}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Tools (Smaller grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
         <div>
            <h3 className="text-xl font-bold text-center mb-6 text-yellow-400">// Tools & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-3">
               {skillCategories.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-yellow-500/5 border border-yellow-500/20 text-yellow-200/80 rounded-lg hover:bg-yellow-500/10 transition-colors">
                     {tool}
                  </span>
               ))}
            </div>
         </div>

         <div>
            <h3 className="text-xl font-bold text-center mb-6 text-purple-400">// CS Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3">
               {skillCategories.concepts.map((concept) => (
                  <span key={concept} className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 text-purple-200/80 rounded-lg hover:bg-purple-500/10 transition-colors">
                     {concept}
                  </span>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
}