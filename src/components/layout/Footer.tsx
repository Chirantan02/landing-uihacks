'use client';

import React from 'react';
import Link from 'next/link';

import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-purple-900/10 to-transparent opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-   cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                Z
              </div>
              <span className="text-xl font-medium tracking-wide text-white">Zeneca</span>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing e-commerce with AI-powered size recommendation technology that boosts sales and reduces returns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium tracking-wide mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#features" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Features
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Technology
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Pricing
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Sign Up
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#contact" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Help Center
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  Contact Us
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-purple-400 transition-colors flex items-center group">
                  FAQ
                  <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium tracking-wide mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                <span className="text-white/70">hello@zeneca.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <span className="text-white/70">123 Innovation Drive<br />San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Zeneca. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
