'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

const header = () => (
  <header className="bg-white border-b-2 border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
      <div className="font-black text-xl sm:text-2xl text-green-700">EcoTrack</div>
      <nav className="flex gap-3 sm:gap-6 text-sm sm:text-base">
        <Link href="/" className="text-gray-700 hover:text-green-700 font-semibold">Home</Link>
        <Link href="/events" className="text-green-700 font-semibold">Events</Link>
        <Link href="/leaderboard" className="text-gray-700 hover:text-green-700 font-semibold">Leaderboard</Link>
      </nav>
    </div>
  </header>
);

const EventsPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const events = [
    {
      id: 1,
      title: "Campus Sustainability Workshop",
      date: "2025-11-25",
      duration: "3 hours",
      fee: "Free",
      status: "upcoming",
      tags: ["Workshop", "Education"],
      category: "Education",
      participants: 45,
      description: "Learn practical sustainability techniques for campus life"
    },
    {
      id: 2,
      title: "Green Tech Innovation Fair",
      date: "2025-12-02",
      duration: "1 day",
      fee: "$10",
      status: "upcoming",
      tags: ["Innovation", "Technology"],
      category: "Technology",
      participants: 120,
      description: "Showcase of sustainable technology solutions"
    },
    {
      id: 3,
      title: "Zero Waste Challenge",
      date: "2025-11-20",
      duration: "Ongoing",
      fee: "Free",
      status: "present",
      tags: ["Challenge", "Community"],
      category: "Challenge",
      participants: 89,
      description: "Join our month-long zero waste initiative"
    }
  ];

  const filteredEvents = events.filter(event => {
    const statusMatch = statusFilter === 'all' || event.status === statusFilter;
    const categoryMatch = categoryFilter === 'all' || event.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="min-h-full text-base relative bg-stone-50 font-sans overflow-x-hidden select-none">
      <div className="z-[1] w-screen h-full absolute overflow-x-hidden pointer-events-none">
        <div className="max-md:left-[-450px] absolute -left-80 top-[500px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-triangle.svg" alt="" className="w-96 h-96" />
        </div>
        <div className="absolute max-md:-left-64 top-[-200px] -left-48">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" className="w-[500px] h-[500px]" />
        </div>
        <div className="absolute max-md:right-[-800px] right-[-900px] top-[300px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg" alt="" className="w-[500px] h-[500px]" />
        </div>
        <div className="absolute max-md:right-[-500px] -right-80 -top-40">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" className="w-[450px] h-[450px]" />
        </div>
        <div className="absolute -left-80 top-[1400px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg" alt="" className="w-[450px] h-[450px]" />
        </div>
        <div className="max-md:right-0 absolute right-0 top-[1200px]">
          <img src="https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-blob.svg" alt="" className="w-[550px] h-[550px]" />
        </div>
      </div>

      <aside aria-label="Skip to main content">
        <Link 
          className="text-black w-px h-px no-underline absolute left-[-10000px] overflow-hidden focus:z-[100] focus:bg-white focus:w-auto focus:h-auto focus:underline focus:p-2.5 focus:border-none focus:left-0 focus:top-0 hover:z-[100] hover:bg-white hover:w-auto hover:h-auto hover:underline hover:p-2.5 hover:border-none hover:left-0 hover:top-0" 
          href="#main"
        >
          Skip to Main Content
        </Link>
      </aside>

      <div className="z-10 relative">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-5 pb-12 sm:pb-16">
          <main id="main" tabIndex={-1}>
            <div className="mb-6 sm:mb-8 pt-8 sm:pt-12">
              <h1 className="my-6 sm:my-8 text-4xl sm:text-5xl md:text-5xl font-black leading-tight text-black">
                Events
              </h1>
              <p className="my-4 sm:my-5 max-w-3xl font-sans text-base sm:text-lg leading-normal text-gray-700">
                Discover and participate in our sustainability events
              </p>
            </div>

            <div className="flex gap-4 sm:gap-6 max-lg:flex-col mb-12 sm:mb-16">
              <div className="max-lg:w-full w-72 shrink-0">
                <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 shadow-sm">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black">Status</h2>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setStatusFilter('all')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          statusFilter === 'all'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setStatusFilter('upcoming')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          statusFilter === 'upcoming'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Upcoming
                      </button>
                      <button
                        onClick={() => setStatusFilter('present')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          statusFilter === 'present'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => setStatusFilter('past')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          statusFilter === 'past'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Past
                      </button>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black">Categories</h2>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setCategoryFilter('all')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          categoryFilter === 'all'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setCategoryFilter('Education')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          categoryFilter === 'Education'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Education
                      </button>
                      <button
                        onClick={() => setCategoryFilter('Technology')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          categoryFilter === 'Technology'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Technology
                      </button>
                      <button
                        onClick={() => setCategoryFilter('Challenge')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          categoryFilter === 'Challenge'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Challenge
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {isLoading ? (
                  <div className="bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center">
                    <div className="inline-block w-10 h-10 sm:w-12 sm:h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin mb-3 sm:mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-600">Loading events...</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {filteredEvents.length > 0 ? (
                      filteredEvents.map((event) => (
                        <div key={event.id} className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-green-700 transition-all hover:shadow-md">
                          <div className="flex justify-between items-start mb-3 sm:mb-4 max-sm:flex-col max-sm:gap-3">
                            <div className="flex-1 max-sm:w-full">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                                <span className={`px-2.5 sm:px-3 py-1 rounded-full font-semibold text-xs ${
                                  event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                  event.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                </span>
                                <span className="text-xs text-gray-500">{event.category}</span>
                              </div>
                              <h3 className="font-bold text-lg sm:text-xl mb-2 text-black">{event.title}</h3>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{event.description}</p>
                            </div>
                            <Link 
                              href={`/events/${event.id}`}
                              className="text-white whitespace-nowrap bg-green-700 font-semibold text-xs sm:text-sm no-underline inline-block px-4 sm:px-5 py-2 rounded-lg hover:bg-green-800 focus:bg-green-800 transition-colors flex-shrink-0 max-sm:w-full max-sm:text-center"
                            >
                              View Details →
                            </Link>
                          </div>
                          
                          <div className="flex gap-3 sm:gap-4 mb-2 sm:mb-3 flex-wrap text-xs sm:text-sm text-gray-600">
                            <div className="flex items-center gap-1 sm:gap-1.5">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{event.fee}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-gray-200">
                            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                              {event.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm border-2 border-black bg-white text-black">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="whitespace-nowrap">{event.participants} joined</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center">
                        <p className="text-sm sm:text-base text-gray-500">No events found matching your filters</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;