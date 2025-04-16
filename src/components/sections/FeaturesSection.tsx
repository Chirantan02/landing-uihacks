'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  RefreshCcw,
  Users,
  ShoppingBag,
  BarChart3,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import GlowingEffectDemo from '../ui/glowing-effect-demo';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 rounded-2xl bg-black opacity-80 group-hover:opacity-70 transition-all duration-300" />

      {/* Gradient border */}
      <div className={`absolute inset-0 rounded-2xl p-[1px] ${gradient}`}>
        <div className="absolute inset-0 rounded-2xl bg-black opacity-90 group-hover:opacity-80 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full overflow-hidden rounded-2xl">
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
            className={`mb-5 p-3 inline-flex rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 text-white shadow-lg`}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">{title}</h3>

          <p className="text-white/70 group-hover:text-white/90 transition-colors">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-1 text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Floating gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          className={`absolute -bottom-20 -right-20 w-48 h-48 rounded-full opacity-20 group-hover:opacity-50 blur-[80px] transition-opacity duration-300 ${gradient}`}
        />
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Higher Conversion Rates",
      description: "Increase conversions by 40% when customers receive accurate size recommendations before purchase.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Lower Return Rates",
      description: "Reduce returns by up to 50% with AI-powered size recommendations that ensure perfect fit every time.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shopify Integration",
      description: "Seamlessly integrate with your Shopify store with our easy-to-use app. No coding required.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enhanced Customer Experience",
      description: "Delight your customers with personalized size recommendations for a confident shopping experience.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Gain insights into customer preferences and behavior with comprehensive analytics.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Implementation",
      description: "Get up and running in minutes with our simple setup process and dedicated support.",
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-black overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-10" />

        {/* Single subtle gradient */}
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full filter blur-[150px]" />
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
            Key Benefits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-editorial tracking-tight"
          >
            Transform Your Fashion Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-xl text-white/70"
          >
            Zeneca' AI-powered Size Recommendation technology delivers measurable results for fashion retailers,
            with seamless Shopify integration and no technical expertise required.
          </motion.p>
        </div>

        {/* Features grid - Using GlowingEffectDemo */}
        <div className="mb-12">
          <GlowingEffectDemo />
        </div>



        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
              <div className="absolute inset-0 rounded-2xl bg-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to transform your store?</h3>
                  <p className="text-white/70 max-w-xl">Be among the first to use Zeneca' innovative technology to boost sales and reduce returns.</p>
                </div>

                <div className="flex-shrink-0">
                  <Link href="/signup">
                    <Button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 shadow-lg shadow-blue-500/20">
                      Get Size Recommendations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};