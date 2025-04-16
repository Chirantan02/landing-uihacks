"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Zap, Image as ImageIcon, BarChart3 } from 'lucide-react';
// import Image from 'next/image'; // Not used

interface TechStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TechStep = ({ icon, title, description, delay }: TechStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium tracking-wide text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export const TechnologySection = () => {
  return (
    <section id="technology" className="relative py-24 bg-black overflow-hidden">
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

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full filter blur-[100px]"
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
            Advanced Technology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium font-editorial mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wider"
          >
            Our AI-Powered Size Recommendation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-white/70 mb-8"
          >
            Zeneca combines advanced computer vision and machine learning to create
            the most accurate size recommendations for fashion e-commerce without requiring complex measurements.
          </motion.p>
        </div>

        {/* Main technology showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Technology visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 z-0"></div>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-black/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Cpu className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 w-64 z-10"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">AI Processing</h4>
                    <p className="text-xs text-white/70">Our neural networks analyze thousands of data points to determine perfect sizing</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 w-64 z-10"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Instant Results</h4>
                    <p className="text-xs text-white/70">Generate accurate size recommendations in seconds</p>
                  </div>
                </div>
              </motion.div>

              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500/20 filter blur-xl"></div>
            </div>
          </motion.div>

          {/* Right side - Technology steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <TechStep
              icon={<ImageIcon className="h-6 w-6 text-blue-400" />}
              title="Measurement Analysis"
              description="Our AI analyzes customer measurements and body shape to understand their unique proportions without requiring complex measurement tools."
              delay={0.1}
            />

            <TechStep
              icon={<Cpu className="h-6 w-6 text-blue-400" />}
              title="AI Processing"
              description="Proprietary neural networks process both garment data and customer measurements to create accurate size recommendations."
              delay={0.2}
            />

            <TechStep
              icon={<Zap className="h-6 w-6 text-blue-400" />}
              title="Real-Time Recommendations"
              description="Customers can instantly receive personalized size recommendations for any item in your catalog."
              delay={0.3}
            />

            <TechStep
              icon={<BarChart3 className="h-6 w-6 text-blue-400" />}
              title="Analytics & Insights"
              description="Track customer engagement, conversion rates, and product performance to optimize your inventory and marketing."
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium transition-colors"
              >
                Try Size Recommendation Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>

          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-medium tracking-wide font-heading text-white mb-4">No Complex Measurements Required</h3>
                <p className="text-white/70 mb-6">
                  Unlike other size recommendation solutions that require complex customer measurements, Zeneca works with simple inputs like height and weight. Our AI technology analyzes this data and provides accurate size recommendations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">No complex measurements</div>
                  <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">Works with basic customer data</div>
                  <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">Fast implementation</div>
                </div>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80">
                <div className="absolute inset-0 rounded-xl overflow-hidden bg-black/60">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Simple & Effective</h4>
                      <p className="text-white/70 max-w-xs mx-auto">No complex measurements required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};