// app/_components/Timeline.tsx
"use client";
import { careerHistory } from "../_data/portfolioData";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";

export default function Timeline() {
  
  // LOGIC: Sort entries by Date (Newest first)
  // We parse the string "May 2025" or "2023" into actual numbers for comparison
  const sortedHistory = [...careerHistory].sort((a, b) => {
    const getYear = (dateStr: string) => {
      if (dateStr.includes("Present")) return 9999;
      // Extract the first 4-digit year found
      const match = dateStr.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.date) - getYear(a.date);
  });

  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px-4">
      
      {/* THE CENTRAL LASER BEAM */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-purple-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

      <div className="flex flex-col gap-12">
        {sortedHistory.map((item, index) => {
          const isEducation = item.category === "education";
          
          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                // Alternate sides based on index (Evens Left, Odds Right)
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* CONTENT CARD */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                
                <div className={`
                  relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 group
                  border shadow-lg
                  ${isEducation 
                    ? "bg-purple-900/10 border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/20" 
                    : "bg-cyan-900/10 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/20"
                  }
                `}>
                  
                  {/* Category Badge */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                     <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${
                        isEducation 
                        ? "border-purple-500/50 text-purple-300 bg-purple-500/10" 
                        : "border-cyan-500/50 text-cyan-300 bg-cyan-500/10"
                     }`}>
                        {isEducation ? <GraduationCap size={14}/> : <Briefcase size={14}/>}
                        {item.category.toUpperCase()}
                     </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className={`text-lg font-medium mb-4 ${isEducation ? "text-purple-200" : "text-cyan-200"}`}>
                    {item.org}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className={`flex items-center gap-2 text-xs font-mono text-gray-500 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    {item.date}
                  </div>

                  {item.link && (
                    <a href={item.link} target="_blank" className={`mt-4 inline-flex items-center gap-1 text-sm hover:underline ${isEducation ? "text-purple-400" : "text-cyan-400"}`}>
                      View Certificate <ChevronRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* CENTER CONNECTION NODE */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[9px] flex items-center justify-center w-5 h-5">
                <div className={`w-3 h-3 rounded-full ${
                    isEducation 
                    ? "bg-purple-500 shadow-[0_0_15px_#a855f7]" 
                    : "bg-cyan-500 shadow-[0_0_15px_#06b6d4]"
                }`}></div>
                <div className={`absolute w-5 h-5 rounded-full border opacity-40 animate-ping ${isEducation ? "border-purple-400" : "border-cyan-400"}`}></div>
              </div>

              {/* EMPTY SPACE FOR OTHER SIDE */}
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}