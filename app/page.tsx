// app/page.tsx
"use client"; // Must be client component for the loader state

import { useState } from "react";
import StarBackground from "./_components/StarBackground";
import Timeline from "./_components/Timeline";
import MacWindow from "./_components/MacWindow";
import SocialCard from "./_components/SocialCard";
import TechGalaxy from "./_components/TechGalaxy";
import Honors from "./_components/Honors";
import ContactDeck from "./_components/ContactDeck";
import SpacePlayer from "./_components/SpacePlayer";
import Typewriter from "./_components/Typewriter";
import WarpLoader from "./_components/WarpLoader"; // Import Loader
import CometCursor from "./_components/CometCursor"; // Import Cursor
import { profile, projects, catchphrases } from "./_data/portfolioData";
import { ChevronDown, Rocket } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* SHOW LOADER IF LOADING IS TRUE */}
      {loading ? (
        <WarpLoader onComplete={() => setLoading(false)} />
      ) : (
        // SHOW CONTENT WHEN LOADED
        <main className="min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden relative animate-fade-in-up">
          
          <CometCursor />
          <SpacePlayer />
          <StarBackground />
          
          {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-4 gap-12 pt-20">
        
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        {/* LEFT: Text Content */}
        <div className="text-center md:text-left space-y-6 z-10 max-w-2xl">
           <div className="h-6 mb-4 flex justify-center md:justify-start">
              <Typewriter texts={catchphrases} />
           </div>
           
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
             ARYAN<br/>SRIVASTAV
           </h1>
           
           <p className="text-blue-200/60 text-lg md:text-xl font-light leading-relaxed">
             Architecting high-performance microservices and AI-driven solutions.
             <br/>
             <span className="text-cyan-400 font-medium">Codeforces Specialist</span> & Full Stack Engineer.
           </p>

           <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-8">
             <a href={profile.resumeLink} target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 justify-center">
                Access Resume
             </a>
             <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all hover:border-cyan-400/50 flex items-center gap-2 justify-center">
                <Rocket size={18} /> Initialize Contact
             </a>
           </div>
        </div>

        {/* RIGHT: Profile Image */}
        {/* This container has a floating animation and a glowing border */}
        <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
            {/* The Border Ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-[2rem] blur opacity-50"></div>
            
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
               {/* Use standard img tag if not using Next.js Image optimization, or use Next Image */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/images/profile.png" 
                 alt="Aryan Srivastav" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
               />
               
               {/* Overlay Gradient at bottom */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-gray-500 left-1/2 -translate-x-1/2">
           <ChevronDown size={30} />
        </div>
      </section>
    
          {/* STATS HUD */}
          <section className="py-12 px-4 max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <SocialCard platform="LinkedIn" handle="Aryan Srivastav" link={profile.socials.linkedin} stats="Connect" color="blue" />
               <SocialCard platform="GitHub" handle="kvothe045" link={profile.socials.github} stats="View Code" color="gray" />
               <SocialCard platform="LeetCode" handle="aryansrivastav106" link={profile.socials.leetcode} stats="500+ Solved" color="yellow" />
               <SocialCard platform="Codeforces" handle="Aryan_Sriv45" link={profile.socials.codeforces} stats="1400+ Rating" color="red" />
            </div>
          </section>
    
          {/* PROJECTS */}
          <section className="py-24 px-4 max-w-7xl mx-auto relative">
            <div className="mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Logs</span></h2>
                <p className="text-gray-400 max-w-lg">Selected deployments demonstrating full-stack capabilities and AI integration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <MacWindow 
                  key={project.id}
                  url={project.live}
                  repoUrl={project.github}
                  title={project.title}
                  tech={project.tech}
                />
              ))}
            </div>
          </section>
    
          {/* TECH GALAXY */}
          <section className="py-24 relative border-t border-white/5 bg-transparent">
            <div className="max-w-6xl mx-auto px-4">
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4">Tech <span className="text-purple-400">Arsenal</span></h2>
                 <p className="text-gray-400">Weapons of mass construction.</p>
               </div>
               <TechGalaxy />
            </div>
          </section>
    
          {/* TIMELINE */}
          <section className="py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Chronicles</span></h2>
            </div>
            <Timeline />
          </section>
    
          {/* HONORS (UPDATED) */}
          <section className="py-24 px-4 max-w-6xl mx-auto relative">
             <h2 className="text-3xl font-bold mb-12 border-l-4 border-yellow-500 pl-6">Distinctions & Awards</h2>
             <Honors />
          </section>
    
          {/* CONTACT */}
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