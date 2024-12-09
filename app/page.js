import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import CTA from '@/components/CTA/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
        <img 
          src="/hero-image.jpg" 
          alt="Roofing Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Professional Roofing Services <br />in Southern California
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Expert roofing solutions for your home. We specialize in shingle repair, flat roofs, 
            and tile repair with a team of dedicated professionals.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="bg-[#f0494a] hover:bg-[#d63e3f] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
              Get Your Free Quote Today
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Roofing Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Shingle Repair */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Shingle Repair</h3>
              <p className="text-gray-600">Expert shingle replacement and repair services to protect your home from water damage and maintain its curb appeal.</p>
            </div>

            {/* Flat Roof */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Flat Roof Solutions</h3>
              <p className="text-gray-600">Specialized flat roof installation and maintenance services using high-quality materials and proven techniques.</p>
            </div>

            {/* Tile Repair */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tile Repair</h3>
              <p className="text-gray-600">Professional tile roof repair and maintenance to preserve the beauty and functionality of your ceramic or concrete tile roof.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f0494a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f0494a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Response</h3>
              <p className="text-gray-600">Quick response times and efficient service</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f0494a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Work</h3>
              <p className="text-gray-600">Superior craftsmanship and materials</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f0494a] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fair Pricing</h3>
              <p className="text-gray-600">Competitive rates and transparent pricing</p>
            </div>
          </div>
        </div>
      </div>

      <CTA />

      <Footer />
    </div>
  );
}