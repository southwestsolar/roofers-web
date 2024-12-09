import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Get in touch with our team for your roofing needs</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0494a]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0494a]" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0494a]" />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0494a]" />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0494a]"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#f0494a] hover:bg-[#d63e3f] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}