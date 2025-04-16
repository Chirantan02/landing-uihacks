import React from 'react';

const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#121212',
      overflow: 'hidden',
      padding: '0 max(2rem, 5%)'
    }}>
      {/* Left side content */}
      <div style={{ 
        flex: '0 0 45%',
        zIndex: 2,
        color: '#fff',
        paddingRight: '2rem'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          margin: '0 0 1rem 0',
          lineHeight: '1.1',
          color: '#FFFFFF',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
          maxWidth: '800px'
        }}>
          Transform Your Business with
          <span style={{ display: 'block', marginTop: '0.5rem', background: 'linear-gradient(90deg, #00E5FF, #BB86FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Powered Analytics</span>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
          marginBottom: '2rem',
          color: 'rgba(255,255,255,0.8)',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Gain real-time insights and make data-driven decisions with our comprehensive analytics platform designed for modern businesses.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <button style={{ 
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            background: '#00E5FF',
            border: 'none',
            borderRadius: '30px',
            color: '#121212',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 15px rgba(0, 229, 255, 0.3)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 229, 255, 0.4)',
              background: '#00FFFF'
            }
          }}>
            Get Started
          </button>
          <button style={{ 
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            background: 'transparent',
            border: '2px solid #BB86FC',
            borderRadius: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              background: 'rgba(187, 134, 252, 0.2)',
              borderColor: '#9B59B6'
            }
          }}>
            Learn More
          </button>
        </div>
      </div>

      {/* Right side container for video */}
      <div style={{ 
        position: 'relative',
        flex: '0 0 55%',
        height: '100%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Video container with enhanced glow effect */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}>
          <div style={{
            position: 'absolute',
            inset: '-1px',
            background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.3), rgba(187, 134, 252, 0.3))',
            filter: 'blur(20px)',
            borderRadius: '20px'
          }} />
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'cover',
              borderRadius: '20px',
              boxShadow: '0 0 30px rgba(0,0,0,0.5)'
            }}
          >
            <source src="/hero-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;