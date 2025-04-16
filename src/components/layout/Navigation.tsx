import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-end space-x-1 md:space-x-2">
          {navItems.map(({ label, href }) => (
            <motion.button
              key={href}
              onClick={() => scrollToSection(href)}
              className={`relative px-4 py-2 text-sm md:text-base transition-colors duration-300 ${
                activeSection === href.substring(1)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              <AnimatePresence>
                {activeSection === href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}; 