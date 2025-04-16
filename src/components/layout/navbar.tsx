'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
// Theme toggle removed as we're using dark mode only

interface NavigationItem {
  name: string;
  href: string;
  dropdownItems?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Technology', href: '#technology' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-lg border-b border-white/10 py-2">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/Zeneca-icon.svg" alt="Zeneca" className="h-10 w-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdownItems && item.dropdownItems.length > 0 ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-normal tracking-wide transition-colors px-4 py-2 rounded-full hover:bg-white/5 ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdownItems && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg"
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm rounded-full mx-2 ${
                                isActive(dropdownItem.href)
                                  ? 'text-white bg-white/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/pricing">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 rounded-full shadow-lg shadow-blue-500/20 font-normal tracking-wide">
                View Pricing
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white transition-all duration-300 rounded-full font-normal tracking-wide">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <React.Fragment key={item.name}>
                    {item.dropdownItems && item.dropdownItems.length > 0 ? (
                      <>
                        <div className="px-4 py-2 text-sm font-medium text-gray-300">
                          {item.name}
                        </div>
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block pl-8 pr-4 py-2 text-sm rounded-full mx-2 ${
                              isActive(dropdownItem.href)
                                ? 'text-white bg-white/10'
                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm rounded-full ${
                          isActive(item.href)
                            ? 'text-white bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
                <div className="px-4 py-4 space-y-4">
                  <Link href="/pricing" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 rounded-full shadow-lg shadow-blue-500/20">
                      View Pricing
                    </Button>
                  </Link>
                  <Link href="/signup" className="block">
                    <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white transition-all duration-300 rounded-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
