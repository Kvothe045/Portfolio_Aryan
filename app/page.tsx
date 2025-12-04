// app/page.tsx
"use client";

import { useState } from "react";
import StarBackground from "./_components/StarBackground";
import Timeline from "./_components/Timeline";
// import MacWindow from "./_components/MacWindow"; // REMOVE THIS
import Project3D from "./_components/Project3D"; // USE THIS
import SocialCard from "./_components/SocialCard";
import TechGalaxy from "./_components/TechGalaxy";
import Honors from "./_components/Honors";
import ContactDeck from "./_components/ContactDeck";
import SpacePlayer from "./_components/SpacePlayer";
import Typewriter from "./_components/Typewriter";
import WarpLoader from "./_components/WarpLoader";
import SmokeCursor from "./_components/SmokeCursor"; 
import Atmosphere from "./_components/Atmosphere";
import GlitchText from "./_components/GlitchText";
import Navbar from "./_components/Navbar"; // IMPORT NAVBAR
import { profile, projects, catchphrases } from "./_data/portfolioData";
import { ChevronDown, Rocket } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <WarpLoader onComplete={() => setLoading(false)} />
      ) : (
        <main className="min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden relative animate-fade-in-up font-sans">
          
          <Navbar /> {/* ADD NAVBAR */}
          <SmokeCursor />
          <Atmosphere />
          <SpacePlayer />
          <StarBackground />
          
          {/* HERO SECTION (ID: hero) */}
          <section id="hero" className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-4 gap-8 md:gap-16 pt-20">
            {/* ... (Keep Hero Section code same as before) ... */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            
            <div className="text-center md:text-left space-y-6 z-10 max-w-2xl">
               <div className="h-6 mb-4 flex justify-center md:justify-start">
                  <Typewriter texts={catchphrases} />
               </div>
               
               <div className="mb-2">
                 <GlitchText text="ARYAN" />
                 <GlitchText text="SRIVASTAV" />
               </div>
               
               <p className="text-blue-200/60 text-lg md:text-xl font-light leading-relaxed font-display tracking-wide">
                 Architecting high-performance microservices and AI-driven solutions.
                 <br/>
                 <span className="text-cyan-400 font-medium font-mono">Codeforces Specialist</span> & Full Stack Engineer.
               </p>
    
               <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-8">
                 <a href={profile.resumeLink} target="_blank" className="px-8 py-4 bg-white text-black font-bold font-display tracking-widest uppercase rounded hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 justify-center">
                    Access Resume
                 </a>
                 <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium font-display tracking-widest uppercase rounded hover:bg-white/5 transition-all hover:border-cyan-400/50 flex items-center gap-2 justify-center">
                    <Rocket size={18} /> Initialize Contact
                 </a>
               </div>
            </div>
    
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mt-8 md:mt-0">
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-transparent animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-purple-500/30 border-b-purple-400 border-l-transparent animate-reverse-spin"></div>
                <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-2xl"></div>
                <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.3)] group">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src="/images/profile.png" alt="Aryan Srivastav" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 filter contrast-125" />
                   <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>
                </div>
            </div>
    
            <div className="absolute bottom-10 animate-bounce text-gray-500 left-1/2 -translate-x-1/2">
               <ChevronDown size={30} />
            </div>
          </section>

          {/* STATS HUD (ID: stats) */}
          <section id="stats" className="py-12 px-4 max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <SocialCard platform="LinkedIn" handle="Aryan Srivastav" link={profile.socials.linkedin} stats="Connect" color="blue" />
               <SocialCard platform="GitHub" handle="kvothe045" link={profile.socials.github} stats="View Code" color="gray" />
               <SocialCard platform="LeetCode" handle="aryansrivastav106" link={profile.socials.leetcode} stats="500+ Solved" color="yellow" />
               <SocialCard platform="Codeforces" handle="Aryan_Sriv45" link={profile.socials.codeforces} stats="1400+ Rating" color="red" />
            </div>
          </section>

          {/* PROJECTS (ID: projects) - WRAPPED IN 3D */}
          <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative">
            <div className="mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 font-display">Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Logs</span></h2>
                <p className="text-gray-400 max-w-lg font-mono text-sm">Selected deployments demonstrating full-stack capabilities and AI integration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <Project3D key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* TECH GALAXY (ID: skills) */}
          <section id="skills" className="py-24 relative border-t border-white/5 bg-transparent">
            <div className="max-w-6xl mx-auto px-4">
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4 font-display">Tech <span className="text-purple-400">Arsenal</span></h2>
                 <p className="text-gray-400 font-mono text-sm">Weapons of mass construction.</p>
               </div>
               <TechGalaxy />
            </div>
          </section>

          {/* TIMELINE (ID: timeline) */}
          <section id="timeline" className="py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-display">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Chronicles</span></h2>
            </div>
            <Timeline />
          </section>

          {/* HONORS (ID: awards) */}
          <section id="awards" className="py-24 px-4 max-w-6xl mx-auto relative">
             <h2 className="text-3xl font-bold mb-12 border-l-4 border-yellow-500 pl-6 font-display">Distinctions & Awards</h2>
             <Honors />
          </section>

          {/* CONTACT (ID: contact) */}
          <section id="contact" className="py-24 px-4 relative">
            <ContactDeck />
          </section>

          <footer className="py-8 text-center text-gray-600 text-xs font-mono relative bg-black/80 backdrop-blur-xl border-t border-white/5">
            <p>SYSTEM STATUS: ONLINE // DESIGNED BY ARYAN SRIVASTAV</p>
          </footer>
        </main>
      )}
    </>
  );
}