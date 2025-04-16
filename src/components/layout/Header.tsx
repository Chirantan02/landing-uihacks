"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Technology', href: '#technology' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.2 }
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.3 }
      }
    }
  };

  const navItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <>
      <motion.header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s',
          backgroundColor,
          backdropFilter: backdropBlur
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-12 h-12">
                  <img src="/logo-z.svg" alt="Zeneca Logo" className="w-full h-full" />
                </div>
                <span className="text-xl font-bold font-heading text-white">
                  Zeneca
                </span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-full hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:block"
              >
                <Link href="/auth">
                  <Button
                    variant="outline"
                    className="border-blue-500/20 text-white hover:bg-blue-500/10 transition-all duration-300 rounded-full"
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 rounded-full">
                  Get Started
                </Button>
              </motion.div>

              <motion.button
                className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white md:hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    variants={{
                      closed: { d: "M4 6h16M4 12h16M4 18h16" },
                      open: { d: "M6 18L18 6M6 6l12 12" }
                    }}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
        )}
      </motion.header>

      <motion.div
        className="fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-xl z-40 border-b border-gray-800/50 md:hidden overflow-hidden"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={navItemVariants}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium block py-2 px-4 rounded-full hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navItems.length}
              variants={navItemVariants}
              className="pt-4"
            >
              <Button
                variant="outline"
                className="w-full border-blue-500/20 text-white hover:bg-blue-500/10 transition-all duration-300 rounded-full"
              >
                Sign In
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </>
  );
};