// app/_components/SpacePlayer.tsx
"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function SpacePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // FIX: Ensure volume is set and play promise is handled
        audioRef.current.volume = 0.4; // 40% volume (not too loud)
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* FIX: Changed path to /music.mp3 */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={togglePlay}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full border border-white/20 backdrop-blur-md transition-all duration-500
          ${isPlaying ? "bg-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-spin-slow" : "bg-black/80 hover:bg-white/10"}
        `}
      >
        {isPlaying ? (
           <Pause size={24} className="text-cyan-400" />
        ) : (
           <Play size={24} className="text-white ml-1" />
        )}
      </button>
      
      {isPlaying && (
        <div className="absolute bottom-16 right-4 flex gap-1 h-8 items-end pointer-events-none">
          <div className="w-1 bg-cyan-400 animate-[bounce_1s_infinite]"></div>
          <div className="w-1 bg-purple-400 animate-[bounce_1.2s_infinite]"></div>
          <div className="w-1 bg-cyan-400 animate-[bounce_0.8s_infinite]"></div>
        </div>
      )}
    </div>
  );
}