'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeTerms: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Signup successful! (This is a frontend-only demo)');
    }
  };

  return (
    <div className="min-h-screen bg-black bg-gradient-to-b from-black via-black/95 to-blue-950/20 text-white font-[var(--font-poppins)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 px-8 bg-black/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center z-50">
        <Link 
          href="/" 
          className="flex items-center group transition-all duration-300 hover:opacity-80"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            Z
          </div>
          <span className="ml-3 font-semibold text-xl tracking-tight">Zeneca</span>
        </Link>

        <Link 
          href="/" 
          className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all duration-300 hover:border-white/20 flex items-center gap-2"
        >
          <span>←</span> Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-[480px]">
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-lg text-gray-400 font-light">
            Join Zeneca and revolutionize your sizing recommendations
          </p>
        </div>

        <div className="bg-white/[0.02] p-8 sm:p-10 rounded-2xl border border-white/[0.05] backdrop-blur-xl shadow-2xl shadow-black/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-lg text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-lg text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 focus:border-blue-500/50 rounded-lg text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Create a strong password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-2">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500/20 focus:ring-offset-0 bg-white/5"
                />
                <span className="ml-3 text-sm text-gray-400">
                  I agree to the{' '}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="text-red-400 text-sm mt-2">{errors.agreeTerms}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] shadow-xl shadow-blue-500/20"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 pt-6 text-center border-t border-white/5">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                href="/login" 
                className="text-blue-400 hover:text-blue-300 font-medium hover:underline underline-offset-4"
              >
                Sign in →
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


