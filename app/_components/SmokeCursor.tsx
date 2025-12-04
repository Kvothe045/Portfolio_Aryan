"use client";
import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Configuration: Stardust Style
  const particleColor = "0, 255, 255"; // Cyan
  const particleCount = 2; // Number of stars per movement event
  const particleLife = 40; // Disappear faster (cleaner)
  const particleSize = 2; // Tiny stars, not big smoke

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Random spread velocity (explosion effect)
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = particleLife;
        this.maxLife = particleLife;
        this.size = Math.random() * particleSize + 1; // Size between 1px and 3px
        this.alpha = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.alpha = this.life / this.maxLife;
        this.size *= 0.95; // Shrink
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.alpha;
        context.fillStyle = `rgb(${particleColor})`;
        
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        
        // Add a tiny glow around the star
        context.shadowBlur = 5;
        context.shadowColor = `rgb(${particleColor})`;
        
        context.globalAlpha = 1; // Reset alpha
        context.shadowBlur = 0; // Reset shadow
      }
    }

    // --- MOUSE HANDLER ---
    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    // --- TOUCH HANDLER (Mobile Fix) ---
    const handleTouchMove = (e: TouchEvent) => {
      // e.touches[0] gets the first finger on screen
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(touch.clientX, touch.clientY));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true }); // passive: true allows scrolling while dragging

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0 || p.size <= 0.1) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // UX FIX: z-0 places it above background (z-[-50]) but BEHIND content (z-10)
      // pointer-events-none ensures you can still click/scroll through it
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}