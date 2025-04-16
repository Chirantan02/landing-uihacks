'use client';

import React from 'react';
import { Navbar } from './navbar';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-background pointer-events-none dark:from-blue-500/20 dark:via-purple-500/20" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-30" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[calc(100vh-4rem)]"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}