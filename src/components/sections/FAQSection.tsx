'use client';
import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is the Zeneca pilot program?',
    answer: 'The Zeneca pilot program is an early access opportunity for fashion retailers to implement our AI-powered size recommendation technology at a special introductory price of $19/month plus 3% commission on sales driven by our size recommendations.'
  },
  {
    question: 'How long will the pilot program pricing be available?',
    answer: 'The pilot program pricing is available for a limited time to early adopters. Once we move to full launch, pricing will increase. By joining now, you lock in the special pilot pricing.'
  },
  {
    question: 'What platforms does Zeneca integrate with?',
    answer: 'Currently, Zeneca integrates seamlessly with Shopify stores. We plan to expand to other e-commerce platforms in the future.'
  },
  {
    question: 'How does the size recommendation technology work?',
    answer: 'Our AI-powered technology analyzes your product catalog and customer measurements to provide accurate size recommendations without requiring complex measurement tools. Customers receive personalized size suggestions based on their body measurements.'
  },
  {
    question: 'What kind of support do you offer during the pilot?',
    answer: 'Pilot program members receive direct access to our founder and development team via email and chat support to ensure a smooth implementation and address any questions.'
  },
  {
    question: 'How secure is my data?',
    answer: 'We use enterprise-grade encryption and follow strict security protocols to ensure your data and your customers\'data is always protected.'
  },
  {
    question: 'How is the 3% commission calculated?',
    answer: 'The 3% commission applies only to sales that are directly attributed to customers using the size recommendation feature. We track this through our analytics dashboard.'
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-medium text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 font-editorial tracking-wider"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <motion.h3
                className="text-xl md:text-2xl font-medium tracking-wide text-white mb-2"
                whileHover={{ color: '#00E5FF' }}
              >
                {faq.question}
              </motion.h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};