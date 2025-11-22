'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rankFilter, setRankFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const leaderboardData = [
    {
      rank: 1,
      name: "Aarav Shah",
      username: "@aarav",
      points: 4120,
      badge: "Gold",
      avatar: "A",
      nextRank: 300,
      isCurrentUser: false,
      level: "Champion",
      achievements: 12
    },
    {
      rank: 2,
      name: "Mia Chen",
      username: "@miac",
      points: 3985,
      badge: "Silver",
      avatar: "M",
      nextRank: 635,
      isCurrentUser: false,
      level: "Expert",
      achievements: 10
    },
    {
      rank: 3,
      name: "Liam Patel",
      username: "@liamp",
      points: 3720,
      badge: "Bronze",
      avatar: "L",
      nextRank: 400,
      isCurrentUser: true,
      level: "Expert",
      achievements: 9
    },
    {
      rank: 4,
      name: "Zara Khan",
      username: "@zarak",
      points: 3350,
      badge: null,
      avatar: "Z",
      nextRank: 1270,
      isCurrentUser: false,
      level: "Advanced",
      achievements: 7
    },
    {
      rank: 5,
      name: "Noah Singh",
      username: "@noah",
      points: 3210,
      badge: null,
      avatar: "N",
      nextRank: 1410,
      isCurrentUser: false,
      level: "Advanced",
      achievements: 6
    },
    {
      rank: 6,
      name: "Olivia Das",
      username: "@olivia",
      points: 2975,
      badge: null,
      avatar: "O",
      nextRank: 1645,
      isCurrentUser: false,
      level: "Intermediate",
      achievements: 5
    }
  ];

  const filteredData = leaderboardData.filter(user => {
    const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase());
    
    const rankMatch = rankFilter === 'all' || 
      (rankFilter === 'top3' && user.rank <= 3) ||
      (rankFilter === 'top10' && user.rank <= 10);
    
    return searchMatch && rankMatch;
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
                Leaderboard
              </h1>
              <p className="my-4 sm:my-5 max-w-3xl font-sans text-base sm:text-lg leading-normal text-gray-700">
                Track top performers in our sustainability community
              </p>
            </div>

            <div className="flex gap-4 sm:gap-6 max-lg:flex-col mb-12 sm:mb-16">
              <div className="max-lg:w-full w-72 shrink-0">
                <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 shadow-sm">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black">Search</h2>
                    <input
                      type="text"
                      placeholder="Name or username"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 text-sm rounded-lg border-2 border-gray-300 bg-white text-black focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black">Rank Range</h2>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setRankFilter('all')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          rankFilter === 'all'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        All Ranks
                      </button>
                      <button
                        onClick={() => setRankFilter('top3')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          rankFilter === 'top3'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Top 3
                      </button>
                      <button
                        onClick={() => setRankFilter('top10')}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${
                          rankFilter === 'top10'
                            ? 'bg-green-700 text-white border-green-700'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'
                        }`}
                      >
                        Top 10
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {isLoading ? (
                  <div className="bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center">
                    <div className="inline-block w-10 h-10 sm:w-12 sm:h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin mb-3 sm:mb-4"></div>
                    <p className="text-sm sm:text-base text-gray-600">Loading leaderboard...</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {filteredData.length > 0 ? (
                      filteredData.map((user) => (
                        <div
                          key={user.rank}
                          className={`bg-white p-4 sm:p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                            user.isCurrentUser
                              ? 'border-green-700 bg-green-50'
                              : user.rank <= 3
                              ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white'
                              : 'border-gray-200 hover:border-green-700'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4 max-sm:flex-col max-sm:gap-3">
                            <div className="flex items-start gap-3 sm:gap-4 flex-1 max-sm:w-full">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl font-black flex-shrink-0 ${
                                user.rank === 1
                                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                                  : user.rank === 2
                                  ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white'
                                  : user.rank === 3
                                  ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                  : 'bg-gray-200 text-gray-700'
                              }`}>
                                #{user.rank}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <h3 className="font-bold text-lg sm:text-xl text-black truncate max-w-[200px] sm:max-w-none">{user.name}</h3>
                                  {user.isCurrentUser && (
                                    <span className="bg-green-700 text-white font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs flex-shrink-0">
                                      YOU
                                    </span>
                                  )}
                                  {user.badge && (
                                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white flex-shrink-0 ${
                                      user.rank === 1 ? 'bg-yellow-600' : user.rank === 2 ? 'bg-gray-500' : 'bg-orange-600'
                                    }`}>
                                      {user.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{user.username}</p>
                                
                                <div className="flex gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm text-gray-600">
                                  <div className="flex items-center gap-1 sm:gap-1.5">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <span>{user.level}</span>
                                  </div>
                                  <div className="flex items-center gap-1 sm:gap-1.5">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <span className="whitespace-nowrap">{user.achievements} achievements</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-right flex-shrink-0 max-sm:w-full max-sm:text-left max-sm:flex max-sm:items-center max-sm:justify-between max-sm:border-t max-sm:border-gray-200 max-sm:pt-3 max-sm:mt-3">
                              <div>
                                <div className="font-black text-2xl sm:text-3xl text-green-700 mb-0.5 sm:mb-1">{user.points}</div>
                                <div className="text-xs text-gray-500 mb-2">points</div>
                              </div>
                              {user.nextRank && (
                                <div className="text-xs text-gray-600 bg-gray-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block whitespace-nowrap">
                                  {user.nextRank} pts to next
                                </div>
                              )}
                            </div>
                          </div>

                          {user.isCurrentUser && user.nextRank && (
                            <div className="pt-4 border-t border-gray-200">
                              <div className="flex justify-between text-xs text-gray-600 mb-2">
                                <span>Progress to Rank {user.rank - 1}</span>
                                <span>{Math.round((1 - user.nextRank / 1000) * 100)}%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-green-700 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.round((1 - user.nextRank / 1000) * 100)}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center">
                        <p className="text-sm sm:text-base text-gray-500">No users found matching your search</p>
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

export default LeaderboardPage;