'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, RefreshCcw, Users, ShoppingBag, BarChart3, Zap } from "lucide-react";
import { cn } from '@/lib/utils';

interface GlowingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const GlowingCard = ({ icon, title, description, className }: GlowingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "relative p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden group",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      {/* Content */}
      <div className="relative z-10">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 inline-flex mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default function GlowingEffectDemo() {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      title: "Higher Conversion Rates",
      description: "Increase conversions by 40% when customers receive accurate size recommendations before purchase."
    },
    {
      icon: <RefreshCcw className="h-6 w-6 text-purple-400" />,
      title: "Lower Return Rates",
      description: "Reduce returns by up to 50% with AI-powered size recommendations that ensure perfect fit every time."
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-cyan-400" />,
      title: "Shopify Integration",
      description: "Seamlessly integrate with your Shopify store with our easy-to-use app. No coding required."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Enhanced Customer Experience",
      description: "Delight your customers with personalized size recommendations for a confident shopping experience."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      title: "Detailed Analytics",
      description: "Gain insights into customer preferences and behavior with comprehensive analytics."
    },
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "Fast Implementation",
      description: "Get up and running in minutes with our simple setup process and dedicated support."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <GlowingCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
