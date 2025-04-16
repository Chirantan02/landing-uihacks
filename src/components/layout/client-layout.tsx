'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Function to handle reveal animations
    const handleRevealAnimations = () => {
      const reveals = document.querySelectorAll('.reveal');
      if (!reveals.length) return;

      // Immediately make all elements visible on first load
      reveals.forEach(reveal => {
        reveal.classList.add('active');
      });

      // Also handle scroll-based reveals for dynamic content
      const revealOnScroll = () => {
        reveals.forEach(reveal => {
          const windowHeight = window.innerHeight;
          const revealTop = reveal.getBoundingClientRect().top;
          const revealPoint = 150;

          if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
          }
        });
      };

      window.addEventListener('scroll', revealOnScroll);
      return () => window.removeEventListener('scroll', revealOnScroll);
    };

    // Set a small timeout to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      handleRevealAnimations();
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <MainLayout>
        {children}
        <Toaster />
      </MainLayout>
    </ThemeProvider>
  );
}