import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
   
      <div className="bg-[#f0494a] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team is ready to help
            with all your roofing needs.
          </p>
          <Link href="/contact" className="inline-block">
            <button className="bg-white text-[#f0494a] hover:bg-gray-100 text-lg font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
              Schedule Your Free Inspection
            </button>
          </Link>
        </div>
        </div>
  );
}