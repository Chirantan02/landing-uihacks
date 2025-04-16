'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

export default function GlowingEffectDemo() {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Higher Conversion Rates",
      description: "Increase conversions by 40% when customers receive accurate size recommendations before purchase.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Lower Return Rates",
      description: "Reduce returns by up to 50% with AI-powered size recommendations that ensure perfect fit every time.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Shopify Integration",
      description: "Seamlessly integrate with your Shopify store with our easy-to-use app. No coding required.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Enhanced Customer Experience",
      description: "Delight your customers with personalized size recommendations for a confident shopping experience.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Gain insights into customer preferences and behavior with comprehensive analytics.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Fast Implementation",
      description: "Get up and running in minutes with our simple setup process and dedicated support.",
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative group bg-black/80 border border-white/10 rounded-2xl p-6 overflow-hidden"
        >
          <div className={`mb-5 p-3 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 text-white shadow-lg`}>
            {feature.icon}
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
          <p className="text-white/70">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
