'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Partner logo component
const PartnerLogo: React.FC<{ name: string; index: number }> = ({ name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group"
    >
      {/* Replace with actual logos when available */}
      <div className="h-8 w-32 flex items-center justify-center">
        <span className="text-white/50 group-hover:text-white/80 transition-colors font-medium">{name}</span>
      </div>
    </motion.div>
  );
};

export const PartnersSection = () => {
  // Sample partners data
  const partners = [
    "FashionHub",
    "StyleTrend",
    "Urban Outfit Co.",
    "LuxeWear",
    "UrbanEdge",
    "EcoThreads",
    "ModernFit",
    "TrendSetters"
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
          >
            Trusted Partners
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4 text-white"
          >
            Powering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Fashion E-Commerce</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            Join the leading brands that trust Zeneca to transform their online shopping experience
          </motion.p>
        </div>
        
        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} name={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};