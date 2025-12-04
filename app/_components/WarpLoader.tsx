"use client";
import { useEffect, useState } from "react";

export default function WarpLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before unmounting
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1; // Random jump increments
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono">
      {/* Warp Tunnel Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white shadow-[0_0_100px_50px_white] rounded-full animate-ping"></div>
      </div>

      <div className="z-10 text-center space-y-4">
        <div className="text-cyan-500 text-xs tracking-[0.3em] uppercase animate-pulse">
           Initializing System
        </div>
        
        <div className="text-4xl md:text-6xl font-black text-white tracking-tighter">
           {progress}%
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
          <div 
            className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="h-4 text-gray-500 text-xs">
          {progress < 30 && "Loading Modules..."}
          {progress >= 30 && progress < 70 && "Establishing Uplink..."}
          {progress >= 70 && progress < 100 && "Compiling Assets..."}
          {progress === 100 && "READY"}
        </div>
      </div>
    </div>
  );
}