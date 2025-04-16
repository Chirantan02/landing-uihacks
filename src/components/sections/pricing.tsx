import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="py-24 bg-background/50 backdrop-blur-xl border-y border-border">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that&apos;s right for your business
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center p-1 bg-card/40 backdrop-blur-xl border border-border rounded-full">
            <button className="relative px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              Monthly
            </button>
            <button className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card/40 backdrop-blur-xl transition-all duration-200 ${
                plan.popular
                  ? 'ring-2 ring-blue-500 scale-105 lg:scale-110'
                  : 'ring-1 ring-border hover:ring-2 hover:ring-blue-500'
              } rounded-2xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="inline-block px-4 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-base font-medium text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 text-blue-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                        : 'border-border hover:bg-muted/50'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground">
            Have questions? Check out our{' '}
            <a href="/faq" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
              FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started',
    price: '49',
    popular: false,
    features: [
      'Up to 1,000 try-ons per month',
      'Basic analytics dashboard',
      'Email support',
      'API access',
      'Shopify integration',
    ],
  },
  {
    name: 'Professional',
    description: 'Everything you need to scale your business',
    price: '99',
    popular: true,
    features: [
      'Up to 10,000 try-ons per month',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      'API access with higher rate limits',
      'All e-commerce integrations',
      'Custom branding options',
      'A/B testing capabilities',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: '299',
    popular: false,
    features: [
      'Unlimited try-ons',
      'Enterprise analytics suite',
      '24/7 priority support',
      'Dedicated account manager',
      'Custom API solutions',
      'Advanced security features',
      'SLA guarantees',
      'Custom AI model training',
    ],
  },
];