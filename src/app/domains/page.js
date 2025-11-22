'use client';

import Link from 'next/link';

export default function DomainsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
      <svg className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 -translate-x-16 sm:-translate-x-24 md:-translate-x-32 -translate-y-16 sm:-translate-y-24 md:-translate-y-32" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" fill="#FF6B35" opacity="0.8"/>
      </svg>
      
      <svg className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] translate-x-32 sm:translate-x-48 md:translate-x-64 -translate-y-16 sm:-translate-y-24 md:-translate-y-32" viewBox="0 0 600 600" fill="none">
        <path d="M300 0 L600 300 L300 600 L0 300 Z" fill="#FFC107" opacity="0.7" transform="rotate(15 300 300)"/>
      </svg>
      
      <svg className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 translate-y-8 sm:translate-y-10 md:translate-y-12" viewBox="0 0 200 200" fill="none">
        <rect x="0" y="0" width="200" height="200" rx="40" fill="#FF5757" opacity="0.6" transform="rotate(-15 100 100)"/>
      </svg>
      
      <svg className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-16 sm:left-24 md:left-32 w-40 h-20 sm:w-52 sm:h-26 md:w-64 md:h-32" viewBox="0 0 300 150" fill="none">
        <ellipse cx="150" cy="75" rx="150" ry="75" fill="#26D0CE" opacity="0.5"/>
      </svg>
      
      <svg className="absolute top-1/2 right-0 w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 translate-x-16 sm:translate-x-20 md:translate-x-24" viewBox="0 0 200 300" fill="none">
        <path d="M0 150 Q50 0, 100 150 T200 150 L200 300 L0 300 Z" fill="#FF6B35" opacity="0.6"/>
      </svg>
      
      <svg className="absolute bottom-0 left-1/4 w-28 h-40 sm:w-32 sm:h-48 md:w-40 md:h-56 translate-y-4 sm:translate-y-6 md:translate-y-8" viewBox="0 0 150 250" fill="none">
        <path d="M0 0 L75 0 L150 125 L75 250 L0 250 Z" fill="#A8D08D" opacity="0.7"/>
      </svg>

      <div className="pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center bg-white text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold text-sm sm:text-base md:text-lg transition-all px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-700 mb-4 sm:mb-5 md:mb-6 px-4">
            Our Flourishing Domains
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore the diverse ways we're making a positive impact on our planet and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Mental Health & Emotional Well-being
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Nurture your mind while caring for the planet. Find peace in sustainable living.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Waste Management
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Transform waste into wonder. Learn creative ways to reduce, reuse, and recycle.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Carbon & Energy Efficiency
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Power a brighter tomorrow. Discover smart ways to reduce your carbon footprint.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Nature and Biodiversity
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Protect life on Earth. Preserve ecosystems and species for future generations.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Ecology & Resource Management
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Balance and harmony with nature. Manage resources mindfully for future generations.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Green Tech & Digital Sustainability
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Harness innovation for the planet. Build a sustainable digital future with eco-friendly technology.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Media, Design, Social & Outreach
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Amplify the green message. Creative storytelling and community engagement for environmental change.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
              <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                Research & Innovation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Pioneer solutions for tomorrow. Groundbreaking research driving sustainable innovation and discovery.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors text-sm sm:text-base"
              >
                Explore
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}