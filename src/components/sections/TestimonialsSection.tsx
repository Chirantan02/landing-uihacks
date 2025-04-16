'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Types
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  logo: string;
  quote: string;
  image: string;
  rating: number;
}

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "E-commerce Director",
      company: "FashionHub",
      logo: "/logos/fashionhub.svg",
      quote: "Implementing Zeneca' Virtual Try-On technology was a game-changer for our online store. We've seen a 42% increase in conversion rates and a dramatic decrease in returns. The integration was seamless and our customers love the experience.",
      image: "/testimonials/person1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StyleTrend",
      logo: "/logos/styletrend.svg",
      quote: "As a premium fashion retailer, accurate product visualization is crucial for our brand. Zeneca has exceeded our expectations with their AI-powered solution. Our customers can now shop with confidence, resulting in higher satisfaction and repeat purchases.",
      image: "/testimonials/person2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      company: "Urban Outfit Co.",
      logo: "/logos/urbanoutfit.svg",
      quote: "The ROI we've seen with Zeneca has been incredible. Within the first month, our sales increased by 35% while returns dropped by half. The analytics dashboard also gives us valuable insights into customer preferences.",
      image: "/testimonials/person3.jpg",
      rating: 4
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)]" />
        
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px]"
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
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
          >
            Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Discover how businesses are transforming their online shopping experience 
            with our AI-powered Virtual Try-On technology.
          </motion.p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image column */}
              <div className="relative aspect-square lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 lg:hidden" />
                <div className="relative h-full">
                  <Image
                    src={testimonials[activeIndex].image || "/testimonials/placeholder.jpg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                
                {/* Company badge - mobile only */}
                <div className="absolute top-4 left-4 z-20 lg:hidden">
                  <div className="p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                    <Image
                      src={testimonials[activeIndex].logo || "/logos/placeholder.svg"}
                      alt={testimonials[activeIndex].company}
                      width={100}
                      height={40}
                      className="h-8 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              
              {/* Content column */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-between">
                {/* Company logo - desktop only */}
                <div className="hidden lg:block mb-8">
                  <Image
                    src={testimonials[activeIndex].logo || "/logos/placeholder.svg"}
                    alt={testimonials[activeIndex].company}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-3 -left-3 w-8 h-8 text-purple-500/20" />
                  <motion.blockquote
                    key={testimonials[activeIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl text-white/90 leading-relaxed italic mb-6 pt-6"
                  >
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </motion.blockquote>
                  
                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonials[activeIndex].rating} />
                  </div>
                  
                  {/* Author */}
                  <motion.div
                    key={`author-${testimonials[activeIndex].id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-white/70">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </motion.div>
                </div>
                
                {/* Navigation controls */}
                <div className="flex justify-between items-center mt-8">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === activeIndex ? 'bg-purple-500' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logos section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-white/50 text-sm mb-8">Trusted by innovative brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="h-8 w-24 bg-white/5 rounded-md flex items-center justify-center">
                <div className="w-16 h-4 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 