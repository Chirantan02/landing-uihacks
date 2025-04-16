import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_931_36)">
            <path
              d="M800 0H0V800H800V0Z"
              fill="url(#paint0_radial_931_36)"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_931_36"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_931_36">
              <rect width="800" height="800" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to transform your e-commerce experience?
          </h2>
          <p className="mt-6 text-xl leading-8 text-blue-100">
            Join thousands of businesses that use Zeneca to increase sales and reduce returns.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-white/90 dark:hover:bg-white"
              >
                Sign Up
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-100">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}