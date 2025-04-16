'use client';

import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { PricingPlansSection } from '@/components/sections/PricingPlansSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';

export default function SimplePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'var(--font-poppins), var(--font-inter), sans-serif'
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50
      }}>
        <Link href="/simple" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#3B82F6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>Z</div>
          <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>Zeneca</span>
        </Link>

        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="#how-it-works" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
            How It Works
          </Link>
          <Link href="#technology" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
            Technology
          </Link>
          <Link href="/simple-pricing" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
            Pricing
          </Link>
          <Link href="#contact" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
            Contact
          </Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/signup" style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 'medium',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            Sign Up
          </Link>
          <Link href="/simple-pricing" style={{
            backgroundColor: '#3B82F6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 'medium'
          }}>
            View Pricing
          </Link>
        </div>
      </header>

      <main>
        <div style={{ paddingTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              marginBottom: '1rem'
            }}>
              <span style={{ marginRight: '0.5rem' }}>🛍️</span>
              <span style={{ color: '#60A5FA', fontSize: '0.875rem', fontWeight: 'medium' }}>Size Recommendation Ready</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '500',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              maxWidth: '64rem',
              margin: '0 auto 1.5rem'
            }}>
              <span>AI-Powered Size Recommendation</span>{' '}
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                For Fashion Retailers
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              Zeneca AI technology provides accurate size recommendations for customers based on their measurements. No complex fitting rooms required — just powerful AI that reduces returns and boosts conversions instantly.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <Link href="/signup" style={{ textDecoration: 'none' }}>
                <button style={{
                  backgroundColor: '#3B82F6',
                  backgroundImage: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)'
                }}>
                  Get Size Recommendations
                </button>
              </Link>

              <Link href="/pricing" style={{ textDecoration: 'none' }}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  View Pricing
                </button>
              </Link>
            </div>

            <div style={{
              maxWidth: '64rem',
              margin: '0 auto',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <video
                style={{ width: '100%', display: 'block' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/dx5hxdqnj/video/upload/v1744785590/original-998763848e1c0116e65d92772889cf0f_acshpg.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div id="features">
          <FeaturesSection />
        </div>

        <div id="stats">
          <StatsSection />
        </div>

        <div id="technology">
          <TechnologySection />
        </div>

        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        <div id="pricing">
          <PricingPlansSection />
        </div>

        <div id="faq">
          <FAQSection />
        </div>

        <div>
          <CtaSection />
        </div>

        <div>
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}


