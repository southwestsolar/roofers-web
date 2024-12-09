import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional roofing solutions for every need
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {/* Shingle Repair */}
            <div>
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Shingle Repair</h2>
              <p className="text-gray-600 mb-6">Expert shingle replacement and repair services to protect your home from water damage and maintain its curb appeal. Our professional team ensures your roof stays in top condition.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Shingle replacement and repair
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Water damage prevention
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Aesthetic maintenance
                </li>
              </ul>
            </div>

            {/* Flat Roof */}
            <div>
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Flat Roof Solutions</h2>
              <p className="text-gray-600 mb-6">Specialized flat roof installation and maintenance services using high-quality materials and proven techniques. We ensure proper drainage and long-lasting protection.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional installation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Regular maintenance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Drainage solutions
                </li>
              </ul>
            </div>

            {/* Tile Repair */}
            <div>
              <div className="w-16 h-16 bg-[#f0494a] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Tile Repair</h2>
              <p className="text-gray-600 mb-6">Professional tile roof repair and maintenance to preserve the beauty and functionality of your ceramic or concrete tile roof. Our experts handle repairs with precision.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tile replacement
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Leak prevention
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#f0494a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Structural integrity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTA />

      <Footer />
    </div>
  );
}