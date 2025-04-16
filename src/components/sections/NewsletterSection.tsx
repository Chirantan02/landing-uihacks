'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NewsletterSectionDemo } from '../ui/newsletter-section-demo';

export const NewsletterSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)] opacity-20" />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
          >
            Stay Updated
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium font-editorial mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wider"
          >
            Join Our Newsletter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-white/70 mb-8"
          >
            Get the latest updates on our AI-powered size recommendation technology and exclusive early access to new features.
          </motion.p>
        </div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <NewsletterSectionDemo />
        </motion.div>
      </div>
    </section>
  );
};
