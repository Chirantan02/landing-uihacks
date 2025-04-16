'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl glass-card border border-white/10 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-8 md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-medium tracking-wide mb-4 text-white"
                >
                  Ready to Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    E-Commerce Experience?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/70 mb-8"
                >
                  Start your journey with Zeneca today and see why leading fashion brands
                  trust our AI-powered Size Recommendation technology to boost sales and reduce returns.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 font-normal tracking-wide"
                    >
                      Get Size Recommendations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-white/10 bg-white text-black hover:bg-white/90 px-8 h-14 font-normal tracking-wide"
                    >
                      View Pricing
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Contact methods */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-sm text-white/50">Or reach out directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <a href="mailto:contact@Zeneca.com">contact@Zeneca.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-blue-400" />
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Form */}
              <div className="p-8 md:p-12 bg-white/[0.03] border-t lg:border-t-0 lg:border-l border-white/10">
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Enter your company name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-12"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-white/50 text-center">
                    By submitting this form, you agree to our
                    <a href="#" className="text-blue-400 hover:text-blue-300 mx-1">
                      Terms of Service
                    </a>
                    and
                    <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">
                      Privacy Policy
                    </a>
                  </p>
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center space-y-4"
          >
            <p className="text-white/50">Be among the first to try Zeneca' innovative technology</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-6 w-24 bg-white/5 rounded-md"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};