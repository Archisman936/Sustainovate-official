// components/Header.js
'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when profile is opened and vice versa
  useEffect(() => {
    if (isProfileOpen) setIsMenuOpen(false);
  }, [isProfileOpen]);

  useEffect(() => {
    if (isMenuOpen) setIsProfileOpen(false);
  }, [isMenuOpen]);

  return (
    <header id="site-header" role="banner" className="bg-teal-400 h-16 sm:h-20 text-base sm:text-xl mb-8 sm:mb-12 lg:mb-24 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-5 lg:px-5 items-center h-16 sm:h-20 flex relative gap-2">
        {/* Logo */}
        <div className="items-center flex z-50">
          <Link href="/" title="Sustainovate" rel="home" className="text-sky-800 focus:text-white hover:text-white">
            <img 
              src="Logo.png" 
              alt="Sustainovate Logo" 
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-16" 
            />
          </Link>
        </div>

        {/* Desktop Navigation - Always visible on large screens */}
        <nav 
          aria-label="Primary" 
          className="hidden lg:flex flex-1 mx-4 justify-center"
        >
          <ul id="menu-main" className="flex gap-3 xl:gap-5 pl-0 m-0 justify-center">
            <li className="inline">
              <Link 
                href="/" 
                className="text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap"
              >
                Home
              </Link>
            </li>
            <li className="inline">
              <Link 
                href="/events" 
                className="text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap"
              >
                Events
              </Link>
            </li>
            <li className="inline">
              <Link 
                href="/leaderboard" 
                className="text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap"
              >
                Leaderboard
              </Link>
            </li>
            <li className="inline">
              <Link 
                href="/#contact" 
                className="text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap"
              >
                Contact
              </Link>
            </li>
            <li className="inline">
              <Link 
                href="/" 
                className="text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center justify-center text-black cursor-pointer z-50 ml-auto mr-2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors" 
          aria-label="Menu"
        >
          <span className="text-xl sm:text-2xl font-bold leading-none">{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav 
            aria-label="Primary" 
            className="lg:hidden fixed z-[1000] bg-teal-400 w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] top-16 sm:top-20 left-0 px-4 sm:px-8 overflow-y-auto"
          >
            <ul id="menu-main-mobile" className="my-4 sm:my-5 pl-0">
              <li className="block border-b border-teal-500">
                <Link 
                  href="/" 
                  className="text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="block border-b border-teal-500">
                <Link 
                  href="/events" 
                  className="text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li className="block border-b border-teal-500">
                <Link 
                  href="/leaderboard" 
                  className="text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leaderboard
                </Link>
              </li>
              <li className="block border-b border-teal-500">
                <Link 
                  href="/#contact" 
                  className="text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="block">
                <Link 
                  href="/login" 
                  className="text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        )}
        
        {/* Profile Dropdown */}
        <div className="relative z-50 flex-shrink-0" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="cursor-pointer text-black bg-white/80 backdrop-blur-sm lg:bg-teal-400 w-10 h-10 sm:w-12 sm:h-12 lg:w-40 xl:w-48 lg:h-auto font-sans font-semibold text-xs sm:text-sm lg:text-base px-1 sm:px-2 lg:px-4 py-1 sm:py-2 lg:py-2.5 border-none rounded-lg lg:rounded-none flex items-center justify-center gap-1 lg:gap-2 hover:bg-white lg:hover:bg-teal-500 active:bg-gray-100 lg:active:bg-teal-600 transition-colors shadow-md lg:shadow-none" 
            aria-label="Profile Menu Toggle"
          >
            <img 
              src="https://ui-avatars.com/api/?name=User&background=ffffff&color=000000&size=32" 
              alt="User avatar" 
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
            />
            <span className="hidden lg:inline whitespace-nowrap">Profile</span>
            <svg 
              className={`hidden lg:block w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 flex-shrink-0 ${isProfileOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 top-12 sm:top-14 lg:top-20 w-56 sm:w-60 lg:w-64 bg-white rounded-lg shadow-xl overflow-hidden z-[2000]">
              <ul className="py-2">
                <li>
                  <Link 
                    href="/events" 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-sans font-normal text-sm sm:text-base">Upcoming Events</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/leaderboard" 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="font-sans font-normal text-sm sm:text-base">Leaderboard</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-sans font-normal text-sm sm:text-base">Settings</span>
                  </Link>
                </li>
                <li className="border-t border-gray-200 mt-2 pt-2">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="font-sans font-normal text-sm sm:text-base">Sign Up</span>
                  </Link>
                </li>
                <li>
                  <button 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors w-full text-left"
                    onClick={() => {
                      setIsProfileOpen(false);
                      console.log('Logging out...');
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-sans font-normal text-sm sm:text-base">Log Out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}