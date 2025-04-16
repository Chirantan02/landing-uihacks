'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Confetti() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
} 