import './globals.css';
import { Metadata } from 'next';
import { Inter, Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'Zeneca Size Recommendation',
    template: '%s | Zeneca Size Recommendation',
  },
  description: 'AI-powered size recommendation technology for fashion retailers to reduce returns and boost conversions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

