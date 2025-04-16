'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../ui/button';

// Types
interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  logo: string;
  title: string;
  description: string;
  results: {
    metric: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
}

// Result metric component
const ResultMetric: React.FC<{ metric: string; value: string; icon?: React.ReactNode }> = ({ 
  metric, 
  value, 
  icon 
}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
      {icon && <div className="mb-2 text-purple-400">{icon}</div>}
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/70 text-center">{metric}</div>
    </div>
  );
};

// Case study card component
const CaseStudyCard: React.FC<{ study: CaseStudy; isActive: boolean; onClick: () => void }> = ({ 
  study, 
  isActive, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${isActive 
        ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30' 
        : 'bg-white/5 border border-white/10 hover:bg-white/[0.075]'}`}
      onClick={onClick}
    >
      {/* Company logo */}
      <div className="h-8 w-32 mb-4 bg-white/10 rounded flex items-center justify-center">
        <span className="text-white font-semibold">{study.company}</span>
      </div>
      
      <div className="mb-2 text-sm text-purple-400">{study.industry}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
      <p className="text-white/70 text-sm mb-4 line-clamp-2">{study.description}</p>
      
      <div className="flex items-center text-sm text-purple-400 font-medium">
        <span>View case study</span>
        <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
      </div>
    </motion.div>
  );
};

export const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  
  // Sample case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "LuxeWear",
      industry: "Fashion Retail",
      logo: "/logos/luxewear.svg",
      title: "40% Conversion Rate Increase for Premium Fashion Brand",
      description: "LuxeWear implemented Zeneca' Virtual Try-On technology across their online store, allowing customers to visualize how clothing would look on their body type before purchasing.",
      results: [
        { metric: "Conversion Rate", value: "+40%" },
        { metric: "Return Rate", value: "-50%" },
        { metric: "Avg. Order Value", value: "+25%" },
        { metric: "Customer Satisfaction", value: "+60%" }
      ],
      testimonial: {
        quote: "Zeneca has transformed our e-commerce experience. Our customers now shop with confidence, knowing exactly how items will look on them.",
        author: "Jessica Chen",
        role: "Digital Director, LuxeWear"
      },
      image: "/images/case-study-1.jpg"
    },
    {
      id: 2,
      company: "UrbanEdge",
      industry: "Streetwear",
      logo: "/logos/urbanedge.svg",
      title: "Reduced Returns by 55% for Streetwear Brand",
      description: "UrbanEdge was struggling with high return rates due to sizing issues. After implementing Zeneca' technology, they saw a dramatic reduction in returns and increased customer loyalty.",
      results: [
        { metric: "Return Rate", value: "-55%" },
        { metric: "Customer Retention", value: "+35%" },
        { metric: "Time on Site", value: "+120%" },
        { metric: "Social Shares", value: "+80%" }
      ],
      testimonial: {
        quote: "The impact on our business has been immediate and significant. Our customers love the try-on experience, and our team loves the reduced return processing.",
        author: "Marcus Johnson",
        role: "CEO, UrbanEdge"
      },
      image: "/images/case-study-2.jpg"
    },
    {
      id: 3,
      company: "EcoThreads",
      industry: "Sustainable Fashion",
      logo: "/logos/ecothreads.svg",
      title: "Sustainable Brand Reduces Carbon Footprint with Virtual Try-On",
      description: "EcoThreads used Zeneca to align with their sustainability mission, reducing returns and associated shipping emissions while improving the customer experience.",
      results: [
        { metric: "Carbon Footprint", value: "-30%" },
        { metric: "Return Shipping", value: "-45%" },
        { metric: "Conversion Rate", value: "+38%" },
        { metric: "Brand Loyalty", value: "+40%" }
      ],
      testimonial: {
        quote: "As a sustainable brand, reducing returns is not just good for business—it's essential for our mission. Zeneca has helped us achieve both our environmental and business goals.",
        author: "Sophia Rivera",
        role: "Sustainability Director, EcoThreads"
      },
      image: "/images/case-study-3.jpg"
    }
  ];

  return (
    <section id="case-studies" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
        
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
          >
            Success Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Real Businesses</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            See how leading brands have transformed their e-commerce experience and achieved remarkable results with Zeneca AI-powered Virtual Try-On technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Case study cards */}
          <div className="space-y-4">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.id}
                study={study}
                isActive={activeStudy === index}
                onClick={() => setActiveStudy(index)}
              />
            ))}
          </div>
          
          {/* Right column - Active case study details */}
          <div className="lg:col-span-2">
            <motion.div
              key={caseStudies[activeStudy].id} // Force re-render on change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Left side - Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="h-10 w-32 mb-4 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-white font-semibold">{caseStudies[activeStudy].company}</span>
                    </div>
                    <div className="text-sm text-purple-400 mb-2">{caseStudies[activeStudy].industry}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{caseStudies[activeStudy].title}</h3>
                    <p className="text-white/70 mb-6">{caseStudies[activeStudy].description}</p>
                  </div>
                  
                  {/* Results grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {caseStudies[activeStudy].results.map((result, index) => (
                      <ResultMetric 
                        key={index}
                        metric={result.metric}
                        value={result.value}
                        icon={result.icon}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  {caseStudies[activeStudy].testimonial && (
                    <div className="relative mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                      <Quote className="absolute -top-3 -left-3 w-6 h-6 text-purple-400" />
                      <p className="text-white/90 italic mb-4">&quot;{caseStudies[activeStudy].testimonial?.quote ?? ''}&quot;</p>
                      <div className="flex items-center">
                        <div>
                          <div className="text-white font-medium">{caseStudies[activeStudy].testimonial?.author ?? ''}</div>
                          <div className="text-white/70 text-sm">{caseStudies[activeStudy].testimonial?.role ?? ''}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <Button 
                      className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Image */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 mix-blend-overlay" />
                  <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                    <div className="text-white/50">Case Study Image</div>
                    {/* Uncomment when images are available */}
                    {/* <Image 
                      src={caseStudies[activeStudy].image}
                      alt={caseStudies[activeStudy].title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="rounded-full border-white/10 text-white hover:bg-white/5 px-8"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};