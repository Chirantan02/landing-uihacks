'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import Link from 'next/link';

// Types
type PlanFeature = {
  name: string;
  included: boolean;
  tooltip?: string;
};

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  gradient?: string;
};

// Feature item component
const FeatureItem: React.FC<{ feature: PlanFeature }> = ({ feature }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex items-start py-2 relative">
      <div className="flex-shrink-0 mr-3 mt-1">
        {feature.included ? (
          <Check className="h-5 w-5 text-blue-400" />
        ) : (
          <X className="h-5 w-5 text-white/30" />
        )}
      </div>
      <div className="text-white/80">
        {feature.name}
        {feature.tooltip && (
          <button
            className="inline-flex ml-1.5 text-white/50 hover:text-white/80 transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tooltip */}
      {feature.tooltip && showTooltip && (
        <div className="absolute left-full ml-2 top-0 w-48 p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-sm text-white/80 z-10">
          {feature.tooltip}
          <div className="absolute -left-1.5 top-3 w-3 h-3 rotate-45 bg-white/10 border-l border-b border-white/10" />
        </div>
      )}
    </div>
  );
};

// Pricing plan card component
const PlanCard: React.FC<{ plan: PricingPlan; isAnnual: boolean }> = ({ plan, isAnnual }) => {
  const baseGradient = plan.gradient || "from-purple-600 to-indigo-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500' : 'border border-white/10'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black opacity-90" />

      {/* Popular badge */}
      {plan.popular && (
        <div className={`absolute top-0 right-0 bg-gradient-to-r ${baseGradient} text-white text-xs font-semibold py-1.5 px-4 rounded-bl-lg`}>
          Most Popular
        </div>
      )}

      <div className="relative p-6 md:p-8">
        <h3 className="text-xl font-medium tracking-wide text-white mb-2">{plan.name}</h3>
        <p className="text-white/70 mb-6 h-12">{plan.description}</p>

        <div className="mb-6">
          <div className="text-3xl md:text-4xl font-medium tracking-wide text-white">{plan.price}</div>
          <div className="text-white/60 text-sm">{plan.priceDetail}</div>
        </div>

        <Link href="/signup" className="w-full">
          <Button
            className={`w-full rounded-lg mb-8 ${plan.popular
              ? `bg-gradient-to-r ${baseGradient} hover:opacity-90 text-white`
              : 'bg-white/10 hover:bg-white/20 text-white'}`}
          >
            {plan.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <div className="space-y-1">
          {plan.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const PricingPlansSection = () => {
  const isAnnual = true;

  // Pricing plans data
  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      price: '$49',
      priceDetail: 'per month',
      features: [
        { name: 'Up to 1,000 size recommendations per month', included: true },
        { name: 'Basic analytics dashboard', included: true },
        { name: 'Email support', included: true },
        { name: 'API access', included: true },
        { name: 'Shopify integration', included: true },
        { name: 'No setup fee', included: true },
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Everything you need to scale your business',
      price: '$99',
      priceDetail: 'per month',
      features: [
        { name: 'Up to 10,000 size recommendations per month', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'API access with higher rate limits', included: true },
        { name: 'All e-commerce integrations', included: true },
        { name: 'Custom branding options', included: true },
        { name: 'A/B testing capabilities', included: true },
      ],
      popular: true,
      cta: 'Get Started',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Advanced features for large-scale businesses',
      price: '$249',
      priceDetail: 'per month',
      features: [
        { name: 'Unlimited size recommendations', included: true },
        { name: 'Enterprise-grade analytics', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Custom API integration', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Priority 24/7 support', included: true },
        { name: 'Custom feature development', included: true },
      ],
      cta: 'Join Pilot Program',
      gradient: 'from-blue-600 to-cyan-600',
      popular: true
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"
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
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
          >
            Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium tracking-wide mb-4 text-white"
          >
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 mb-8"
          >
            Choose the plan that's right for your business
          </motion.p>


        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-4">
            We offer tailored solutions for businesses with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <Link href="/signup">
            <Button
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-8"
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};