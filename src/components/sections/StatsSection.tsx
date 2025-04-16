"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, BarChart, TrendingUp, RefreshCcw, ShoppingBag } from 'lucide-react'

// Counter component that animates from 0 to target value
interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 2,
  className = 'text-4xl md:text-5xl font-bold text-white'
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const value = Math.floor(from + progress * (to - from));

      if (nodeRef.current) {
        nodeRef.current.textContent = `${prefix}${value}${suffix}`;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [from, to, duration, prefix, suffix, isInView]);

  return <span ref={nodeRef} className={className}>{prefix}{from}{suffix}</span>;
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  title: string;
  description: string;
  suffix?: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, title, description, suffix = '%', delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
            {icon}
          </div>
          <div className="text-right">
            <Counter to={value} suffix={suffix} className="text-4xl md:text-5xl font-medium tracking-wide text-white" />
          </div>
        </div>
        <h3 className="text-xl font-medium tracking-wide text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: 40,
      title: "Higher Conversion",
      description: "Boost your sales immediately with accurate size recommendations",
      delay: 0.1
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      value: 50,
      title: "Fewer Returns",
      description: "Reduce returns with accurate size recommendation technology",
      delay: 0.2
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      value: 25,
      title: "Larger Order Value",
      description: "Increase average order value with personalized size confidence",
      delay: 0.3
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      value: 5,
      title: "Minute Setup",
      suffix: " min",
      description: "Quick and easy integration with your existing store",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)] opacity-20" />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
          >
            The Numbers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
          >
            Results That Speak For Themselves
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Our AI-powered Size Recommendation technology delivers measurable results that directly
            impact your bottom line. See the difference immediately.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              value={stat.value}
              title={stat.title}
              description={stat.description}
              suffix={stat.suffix || '%'}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors"
          >
            <span>See how we calculate these numbers</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}