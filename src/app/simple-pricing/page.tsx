'use client';

import React from 'react';
import Link from 'next/link';
import styles from './pricing.module.css';

export default function SimplePricingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      backgroundColor: '#000',
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 50%)',
      color: 'white',
      fontFamily: 'var(--font-poppins), var(--font-inter), sans-serif'
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.25rem 2.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50
      }}>
        <Link href="/simple" className={styles.logo} style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '22px',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>Z</div>
          <span style={{
            marginLeft: '0.75rem',
            fontWeight: '600',
            fontSize: '1.35rem',
            background: 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0.7))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Zeneca</span>
        </Link>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link href="#how-it-works" className={styles.navLink}>
            How It Works
          </Link>
          <Link href="#technology" className={styles.navLink}>
            Technology
          </Link>
          <Link href="/simple-pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/signup" className={styles.ctaButton} style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            Sign Up
          </Link>
          <Link href="/simple" className={styles.ctaButton}>
            Back to Home
          </Link>
        </div>
      </header>

      <main style={{ marginTop: '7rem', padding: '2rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '500',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '64rem',
            margin: '0 auto 1.5rem'
          }}>
            Simple, Transparent Pricing
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '48rem',
            margin: '0 auto 3rem'
          }}>
            Choose the plan that's right for your business
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Starter Plan */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              width: '100%',
              maxWidth: '350px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Starter</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Perfect for small businesses</p>
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>$99</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', marginLeft: '0.5rem' }}>/month</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Up to 1,000 size recommendations/month</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Basic analytics dashboard</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Email support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Shopify integration</span>
                </li>
              </ul>

              <Link href="/signup" style={{ textDecoration: 'none', width: '100%' }}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Get Started
                </button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              padding: '2rem',
              width: '100%',
              maxWidth: '350px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '-30px',
                backgroundColor: '#3B82F6',
                color: 'white',
                padding: '0.25rem 2rem',
                transform: 'rotate(45deg)',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                POPULAR
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Pro</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>For growing businesses</p>
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>$249</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', marginLeft: '0.5rem' }}>/month</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Up to 5,000 size recommendations/month</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Advanced analytics and reporting</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Priority email & chat support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Shopify & WooCommerce integration</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Custom branding options</span>
                </li>
              </ul>

              <Link href="/signup" style={{ textDecoration: 'none', width: '100%' }}>
                <button style={{
                  backgroundColor: '#3B82F6',
                  backgroundImage: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)'
                }}>
                  Get Started
                </button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              width: '100%',
              maxWidth: '350px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Enterprise</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>For large retailers</p>
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Custom</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Unlimited size recommendations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Enterprise-grade analytics</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>24/7 dedicated support</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Custom API integration</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>White-label solution</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>

              <Link href="/signup" style={{ textDecoration: 'none', width: '100%' }}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>

          <div style={{
            marginTop: '4rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            maxWidth: '800px',
            margin: '4rem auto 0'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Need a custom solution?</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
              We offer tailored solutions for businesses with specific requirements. Contact our sales team to discuss your needs.
            </p>
            <Link href="/signup" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 'medium',
                cursor: 'pointer'
              }}>
                Schedule a Call
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}




