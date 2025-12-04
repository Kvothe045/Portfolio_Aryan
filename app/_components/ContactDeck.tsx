// app/_components/ContactDeck.tsx
import { profile } from "../_data/portfolioData";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function ContactDeck() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Establish Connection</h2>
          <p className="text-gray-400 mb-8">
            Open for full-stack opportunities and collaborative innovation. 
          </p>
          
          <div className="space-y-4">
             <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
               <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20">
                 <Mail size={20} />
               </div>
               <span className="text-lg">{profile.email}</span>
             </a>

             <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
               <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20">
                 <Phone size={20} />
               </div>
               <span className="text-lg">{profile.phone}</span>
             </div>

             <a href={profile.socials.linkedin} target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
               <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-500/20">
                 <Linkedin size={20} />
               </div>
               <span className="text-lg">LinkedIn Profile</span>
             </a>
          </div>
        </div>

        <div className="flex-1 w-full">
           <a href={`mailto:${profile.email}`} className="block w-full group">
             <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
               <div className="bg-black/80 rounded-xl p-8 flex flex-col items-center justify-center gap-4 h-full group-hover:bg-black/60 transition-colors">
                  <Send size={48} className="text-white mb-2" />
                  <span className="text-2xl font-bold text-white">Send Transmission</span>
                  <span className="text-xs text-cyan-200 font-mono tracking-widest uppercase">Response time: &lt; 24 hrs</span>
               </div>
             </div>
           </a>
        </div>

      </div>
    </div>
  );
}