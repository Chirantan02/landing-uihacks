"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  PlugZap,
  Repeat,
  Cpu,
  Zap,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

// Step card component
interface StepCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay: number;
  imageSrc: string;
}

const StepCard = ({
  number,
  title,
  description,
  features,
  icon,
  delay,
  imageSrc
}: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

      <div className="relative flex flex-col md:flex-row gap-8 bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden">
        {/* Left content */}
        <div className="flex-1 min-w-0">
          {/* Step number and icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl">
              {number}
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              {icon}
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 font-sans">{title}</h3>
          <p className="text-white/70 mb-6 font-sans leading-relaxed">{description}</p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-blue-500/10 p-1 mt-0.5">
                  <ArrowRight className="h-3 w-3 text-blue-400" />
                </div>
                <span className="text-white/80 font-sans">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div className="flex-1 min-w-0 relative h-[200px] md:h-auto rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export const HowItWorksSection = () => {
  const steps: StepCardProps[] = [
    {
      number: "1",
      title: "Integrate Zeneca",
      description: "Seamlessly connect Zeneca size recommendation to your Shopify in minutes using our simple plugin.",
      features: [
        "No-code integration",
        "Works with all Shopify themes",
        "5-minute setup process"
      ],
      icon: <PlugZap className="h-6 w-6 text-blue-400" />,
      delay: 1,
      imageSrc: "/1.jpg"
    },
    {
      number: "2",
      title: "Configure Settings",
      description: "Customize the size recommendation widget to match your brand and set your preferences.",
      features: [
        "Brand customization",
        "Multiple display options",
        "Advanced settings"
      ],
      icon: <Repeat className="h-6 w-6 text-blue-400" />,
      delay: 2,
      imageSrc: "/2.jpg"
    },
    {
      number: "3",
      title: "AI Generates Size Recommendations",
      description: "Our advanced AI gets to work, analyzing your products and customer data to generate accurate, personalized size recommendations.",
      features: [
        "Proprietary AI algorithms",
        "Advanced measurement analysis",
        "Personalized recommendations"
      ],
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
      delay: 3,
      imageSrc: "/3.jpg"
    },
    {
      number: "4",
      title: "See the Results",
      description: "Activate Zeneca Size Recommendations on your product pages and watch your conversions climb, returns drop, and customer satisfaction soar.",
      features: [
        "Higher conversion rates",
        "Reduction in returns",
        "Improved customer satisfaction"
      ],
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      delay: 4,
      imageSrc: "/4.jpg"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
          >
            Simple Integration
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-tight font-sans"
          >
            How Zeneca Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-white/70 mb-8 font-sans leading-relaxed"
          >
            Getting started with Zeneca is quick and seamless. Our integration process is designed
            to have you up and running in minutes, not days. No complex setup required.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
            <Link href="/signup">
              <Button
                className="rounded-xl bg-black hover:bg-black/80 text-white px-8 py-6 h-14 flex items-center gap-2 font-sans"
                size="lg"
              >
                Try Size Recommendations
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-white/50 font-sans">
            Ready in minutes. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
