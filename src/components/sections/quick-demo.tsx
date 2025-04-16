import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function QuickDemo() {
  const [activeDemo, setActiveDemo] = useState('clothing');

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience our AI-powered virtual try-on technology live
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {demoTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveDemo(type.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeDemo === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <motion.div 
            key={activeDemo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
              {/* Replace with actual demo content */}
              Interactive Demo Preview
            </div>
          </motion.div>

          {/* Demo Controls */}
          <div className="space-y-8">
            <motion.div
              key={`${activeDemo}-controls`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {demoTypes.find(t => t.id === activeDemo)?.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {demoTypes.find(t => t.id === activeDemo)?.description}
              </p>
              
              {/* Demo Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {demoStats.map((stat, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Try Full Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const demoTypes = [
  {
    id: 'clothing',
    name: 'Clothing',
    title: 'Virtual Clothing Try-On',
    description: 'See how our AI technology enables real-time virtual try-on for any clothing item, with accurate size recommendations and realistic visualization.',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    title: 'Accessories Visualization',
    description: 'Experience precise virtual try-on for accessories, from jewelry to eyewear, with accurate size and fit visualization.',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    title: 'Footwear Fitting',
    description: 'Try on shoes virtually with our advanced foot measurement technology and get perfect size recommendations.',
  },
];

const demoStats = [
  {
    value: '99%',
    label: 'Size Accuracy',
  },
  {
    value: '<0.5s',
    label: 'Processing Time',
  },
  {
    value: '40%',
    label: 'Return Rate Reduction',
  },
  {
    value: '2.5x',
    label: 'Conversion Rate Increase',
  },
]; 