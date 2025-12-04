// app/_components/MacWindow.tsx
"use client";
import { ExternalLink, Github } from "lucide-react";

interface MacWindowProps {
  url: string | null;
  repoUrl: string;
  title: string;
  tech: string[];
}

export default function MacWindow({ url, repoUrl, title, tech }: MacWindowProps) {
  return (
    <div className="w-full h-[350px] bg-[#1e1e2e] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group flex flex-col">
      {/* Browser Header */}
      <div className="bg-[#2a2a35] p-3 flex items-center justify-between border-b border-white/5 z-20 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono truncate max-w-[200px]">
          {url ? url.replace('https://', '') : 'local/development'}
        </div>
        <div className="w-8"></div>
      </div>

      {/* Content Area - Fixed Height, Scrollable if needed */}
      <div className="relative flex-grow bg-black overflow-hidden">
        {url ? (
          <iframe 
            src={url} 
            className="w-full h-[200%] md:h-full opacity-60 group-hover:opacity-30 transition-opacity duration-300 border-none"
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="w-full h-full p-6 font-mono text-sm text-green-400 bg-black flex flex-col justify-center items-center opacity-60 group-hover:opacity-30 transition-opacity">
             <div className="text-gray-500 mb-2">// System Status: Active</div>
             <div className="text-center">
               <span className="text-purple-400">class</span> <span className="text-yellow-400">{title.split(' ')[0]}</span> <span className="text-white">extends</span> <span className="text-yellow-400">Microservice</span> {"{"}
               <br/>
               &nbsp;&nbsp;status: <span className="text-blue-400">"ACID_COMPLIANT"</span>;
               <br/>
               &nbsp;&nbsp;throughput: <span className="text-blue-400">"500_TPS"</span>;
               <br/>
               {"}"}
             </div>
          </div>
        )}

        {/* Overlay - Slides up/fades in WITHOUT changing parent dimensions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 translate-y-4 group-hover:translate-y-0">
           <h3 className="text-2xl font-bold text-white mb-4 text-center px-4">{title}</h3>
           
           <div className="flex flex-wrap justify-center gap-2 mb-6 px-4">
            {tech.map(t => <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">{t}</span>)}
           </div>

           <div className="flex gap-4">
             <a href={repoUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition text-sm">
               <Github size={16}/> Source
             </a>
             {url && (
               <a href={url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 rounded-full hover:bg-cyan-600/40 transition text-sm">
                 Live Demo <ExternalLink size={16}/>
               </a>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}