import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 80; // Increased particle count

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  blur: number;
}

export const ParticlesContainer = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate random color with purple/indigo hue
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 60) + 240; // Purple to indigo range
    const saturation = Math.floor(Math.random() * 30) + 70; // High saturation
    const lightness = Math.floor(Math.random() * 20) + 70; // Bright
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
  };

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1, // Slightly larger particles
        color: getRandomColor(),
        duration: Math.random() * 25 + 15, // Longer animation duration
        delay: Math.random() * 5,
        blur: Math.random() * 2 // Random blur effect
      }));
    };

    setParticles(generateParticles());

    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            filter: `blur(${particle.blur}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          animate={{
            x: [0, Math.random() * 150 - 75],
            y: [0, Math.random() * 150 - 75],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.5, opacity: 0.9 }}
        />
      ))}

      {/* Interactive glow effect that follows mouse */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
        style={{
          width: 200,
          height: 200,
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          filter: 'blur(50px)',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};