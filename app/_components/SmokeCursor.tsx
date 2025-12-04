"use client";
import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Configuration
  const particleColor = "0, 255, 255"; // Cyan (R, G, B)
  const particleCount = 2; // Particles per frame (keep low for "small amount")
  const particleLife = 60; // How long they last
  const particleSize = 8; // Base size

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    
    // Set canvas size to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle Class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Random drift velocity
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.life = particleLife;
        this.maxLife = particleLife;
        this.size = Math.random() * particleSize + 4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.size *= 0.95; // Shrink slightly over time
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = (this.life / this.maxLife) * 0.4; // Max opacity 0.4 (dim)
        
        context.beginPath();
        // Soft gradient for "smoke" look
        const gradient = context.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, `rgba(${particleColor}, ${opacity})`);
        gradient.addColorStop(1, `rgba(${particleColor}, 0)`);
        
        context.fillStyle = gradient;
        context.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Mouse Move Handler
    const handleMouseMove = (e: MouseEvent) => {
      // Spawn particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        // Remove dead particles
        if (p.life <= 0 || p.size <= 0.5) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }} // Makes the smoke blend nicely with dark background
    />
  );
}