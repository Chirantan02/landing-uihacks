import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: string;
  gradient: string;
}

const features = [
  {
    title: 'Reduced Return Rates',
    description: 'Cut return rates by 20-30% with accurate virtual try-ons that help customers make confident purchasing decisions.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M12 3v18M3 12h18M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="url(#paint0_linear)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818CF8"/>
            <stop offset="1" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    stats: '30% Lower Returns',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Enhanced Customer Satisfaction',
    description: 'Provide an immersive shopping experience that lets customers see exactly how clothes will look on them.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M12 15a3 3 0 100-6 3 3 0 000 6z M19 12a7 7 0 11-14 0 7 7 0 0114 0z" 
          stroke="url(#paint1_linear)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="paint1_linear" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EC4899"/>
            <stop offset="1" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    stats: '95% Satisfaction Rate',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce fashion waste and carbon footprint by minimizing returns and improving purchase accuracy.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M12 6v12M8 10l4-4 4 4M20 12a8 8 0 11-16 0 8 8 0 0116 0z" 
          stroke="url(#paint2_linear)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="paint2_linear" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981"/>
            <stop offset="1" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    stats: '40% Less Waste',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    title: 'AI-Powered Technology',
    description: 'Leverage cutting-edge artificial intelligence to create realistic virtual try-on experiences from a single image.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M9 3H5a2 2 0 00-2 2v4m18 0V5a2 2 0 00-2-2h-4m0 18h4a2 2 0 002-2v-4M3 15v4a2 2 0 002 2h4" 
          stroke="url(#paint3_linear)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="paint3_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1"/>
            <stop offset="1" stopColor="#2563EB"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    stats: '99.9% Accuracy',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

export const Features = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section id="features" className="py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,119,198,0.3),transparent_50%)]" />
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_100%)]"
        />
      </div>

      {/* Enhanced Animated Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-8 blur-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 tracking-tight">
              Why Choose VTOM?
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Our Virtual Try-On Management technology is revolutionizing how customers shop for fashion online.
          </p>
        </motion.div>

        {/* Mobile Carousel for small screens */}
        <div className="block md:hidden overflow-x-auto pb-8 -mx-4">
          <div className="flex gap-6 px-4 snap-x snap-mandatory">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="snap-center min-w-[300px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative h-full"
  >
    <div className="relative p-8 bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 hover:bg-gray-900/60 transition-all duration-500 rounded-2xl h-full overflow-hidden">
      {/* Enhanced Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(120,119,198,0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Enhanced Icon Container with Animation */}
      <motion.div 
        className="relative mb-8 p-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl" />
        <div className="relative">
          {feature.icon}
        </div>
      </motion.div>

      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Stats Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {feature.stats}
        </span>
      </div>

      {/* Enhanced Hover Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </motion.div>
); 