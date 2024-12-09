import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import CTA from '@/components/CTA/CTA';

export default function About() {
  return (
    <div className="min-h-screen">
        <Header />
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-800 hover:text-[#f0494a] transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Southern California's trusted roofing experts since 1995
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="max-w-3xl">
            <p className="text-gray-600 mb-4">
              For over 25 years, we've been providing top-quality roofing services to homeowners and businesses across Southern California. Our commitment to excellence and customer satisfaction has made us one of the most trusted names in the industry.
            </p>
            <p className="text-gray-600">
              What started as a small family business has grown into a full-service roofing company, but our core values remain the same: quality workmanship, honest pricing, and exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </div>
  );
}