'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
// ParticlesContainer removed as it's not used
import Link from 'next/link';

// Animated highlight component
const AnimatedHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </span>
  );
};

// Integration badge component
const IntegrationBadge = ({ name, available }: { name: string; available: boolean }) => (
  <div className="flex items-center space-x-2 rounded-full py-1 px-3 bg-white/5 border border-white/10">
    <div className={`w-2 h-2 rounded-full ${available ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
    <span className="text-sm font-medium text-white/80">{name}</span>
  </div>
);

// Benefit pill component
const BenefitPill = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-2 text-sm text-white/80 bg-white/5 backdrop-blur-sm rounded-full py-1.5 px-3 border border-white/10">
    <CheckCircle className="w-4 h-4 text-blue-400" />
    <span>{text}</span>
  </div>
);

// Video overlay component
const VideoOverlay = ({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => (
  <div
    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100 bg-black/50'}`}
    onClick={onClick}
  >
    {!isPlaying && (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center cursor-pointer shadow-lg shadow-blue-500/20"
      >
        <Play className="w-8 h-8 text-white ml-1" />
      </motion.div>
    )}
  </div>
);

export const HeroSection = () => {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setIsVisible] = useState(false);

  // Set visibility after a short delay for dramatic entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 40) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Auto-play video on component mount
  useEffect(() => {
    const videoElement = document.getElementById('heroVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error('Error auto-playing video:', error));
    }
  }, []);

  // Handle video play/pause (keeping this for fallback)
  const handleVideoPlay = () => {
    const videoElement = document.getElementById('heroVideo') as HTMLVideoElement;
    if (videoElement) {
      if (!isPlaying) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-24 pb-16 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-20" />

        {/* Single subtle gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full filter blur-[120px]"
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Shopify badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <img src="/shopify-icon.svg" alt="Shopify" className="w-5 h-5 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Size Recommendation Ready</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] mb-6 max-w-4xl mx-auto font-editorial tracking-wider"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            AI-Powered Size Recommendation
          </span>{' '}
          <AnimatedHighlight>
            For Fashion Retailers
          </AnimatedHighlight>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xl text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto"
        >
          Zeneca AI technology provides accurate size recommendations for customers based on their measurements.
          No complex fitting rooms required — just powerful AI that reduces returns and boosts conversions instantly.
        </motion.p>



        {/* CTA buttons with clearer paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link href="/signup">
            <Button
              size="lg"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 shadow-lg shadow-blue-500/20"
            >
              Get Size Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 px-8 h-14"
            >
              View Pricing
            </Button>
          </Link>
        </motion.div>

        {/* Hero Video - Simplified with cleaner UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <video
              id="heroVideo"
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
              poster="/video-poster.jpg"
            >
              <source src="https://res.cloudinary.com/dx5hxdqnj/video/upload/v1744785590/original-998763848e1c0116e65d92772889cf0f_acshpg.mp4" type="video/mp4" />
            </video>
            <VideoOverlay isPlaying={isPlaying} onClick={handleVideoPlay} />

            {/* Simple overlay gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* "How it works" badge */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="text-white/90 text-sm font-medium">See how it works</span>
            </div>
          </div>
        </motion.div>

        {/* Coming soon integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/50 text-sm">More integrations coming soon</span>
          </div>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 min-w-[140px]">
            <span className="text-3xl font-bold text-blue-400 mb-1">40%</span>
            <span className="text-sm text-white/70">Higher Conversion</span>
          </div>
          <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 min-w-[140px]">
            <span className="text-3xl font-bold text-blue-400 mb-1">50%</span>
            <span className="text-sm text-white/70">Fewer Returns</span>
          </div>
          <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 min-w-[140px]">
            <span className="text-3xl font-bold text-blue-400 mb-1">5 min</span>
            <span className="text-sm text-white/70">Setup Time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};