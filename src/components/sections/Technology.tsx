'use client';

import React, { useCallback, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

interface Step {
  title: string;
  description: string;
  image: string;
  details: string[];
}

const steps: Step[] = [
  {
    title: 'Upload a Single Photo',
    description: 'Users simply upload one photo of themselves to create their virtual model.',
    image: '/images/upload-step.jpg',
    details: [
      'Supports any standard photo format',
      'AI-powered pose detection',
      'Instant feedback on photo quality',
      'Privacy-first processing'
    ]
  },
  {
    title: 'AI Processing',
    description: 'Our advanced AI analyzes body measurements and creates a precise digital avatar.',
    image: '/images/ai-processing.jpg',
    details: [
      '99.9% measurement accuracy',
      'Real-time body analysis',
      'Advanced 3D modeling',
      'Secure cloud processing'
    ]
  },
  {
    title: 'Virtual Try-On',
    description: 'Instantly see how any piece of clothing looks and fits on your digital avatar.',
    image: '/images/virtual-tryon.jpg',
    details: [
      'Real-time cloth simulation',
      'Accurate fit prediction',
      'Multiple angle views',
      'Size recommendations'
    ]
  }
];

export const Technology = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Memoized image loading handler
  const handleImageLoad = useCallback((image: HTMLImageElement) => {
    requestAnimationFrame(() => {
      image.classList.remove('opacity-0');
    });
  }, []);

  // Enhanced step card variants for smoother animations
  const stepCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  // Details panel variants
  const detailsPanelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-20" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-2" />
            <span className="text-purple-400 text-sm font-medium">Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 tracking-tight">
            How VTOM Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Our AI-powered technology transforms the online shopping experience with just a single photo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stepCardVariants}
              className="relative"
            >
              <motion.div 
                className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-800/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                whileHover={{
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
                  borderColor: "rgba(168, 85, 247, 0.4)",
                }}
                onClick={() => setSelectedStep(selectedStep === index ? null : index)}
              >
                {/* Step Number */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 md:w-20 h-16 md:h-20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl" />
                  <div className="absolute inset-0 bg-black/50 rounded-2xl backdrop-blur-sm" />
                  <div className="relative h-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Image Container */}
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 md:mb-8 transition-transform duration-500 group">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Skeleton className="absolute inset-0 bg-gray-800/50" />
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105"
                      onLoadingComplete={handleImageLoad}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {selectedStep === index && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={detailsPanelVariants}
                        className="mt-6 space-y-3"
                      >
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="text-gray-300">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand/Collapse Button */}
                  <motion.button
                    className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{selectedStep === index ? 'Show Less' : 'Learn More'}</span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: selectedStep === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 