"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CometCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 z-[999] pointer-events-none mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-md rounded-full"></div>
      </motion.div>
      <div className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[1000] pointer-events-none" 
         style={{ transform: "translate(-50%, -50%)" }} // Logic to center handled via CSS if needed, or JS above
      />
    </>
  );
}