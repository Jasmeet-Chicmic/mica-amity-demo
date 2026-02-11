import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import amityLogo from '../assets/amity-logo.webp';

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const theme = useTheme();

  return (
    <header
      className={`${
        theme.isLight ? 'bg-navy-900' : 'bg-navy-900/95'
      } backdrop-blur-xl border-b ${
        theme.isLight ? 'border-yellow-500' : theme.border
      } sticky top-0 z-50 animate-fade-in shadow-lg ${
        theme.isLight ? 'shadow-yellow-500/30' : 'shadow-black/20'
      } pt-4`}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <div className="relative">
              <img
                src={amityLogo}
                alt="Amity University Dubai"
                className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className={`absolute inset-0 ${theme.isLight ? 'bg-blue-500/0 group-hover:bg-blue-500/10' : 'bg-gold-500/0 group-hover:bg-gold-500/10'} rounded-lg blur-xl transition-all duration-500 -z-10`}></div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className={`relative group transition-all duration-500 ${searchFocused ? 'scale-[1.02]' : ''}`}>
              <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${theme.isLight ? 'text-gray-400 group-focus-within:text-blue-600' : 'text-white/30 group-focus-within:text-gold-400'} transition-all duration-500 group-focus-within:scale-125 group-focus-within:rotate-12`} />
              <input
                type="text"
                placeholder="Search courses, lectures, resources..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2.5 ${theme.input} rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-opacity-100 transition-all duration-500 hover:shadow-lg ${theme.isLight ? 'hover:shadow-blue-500/5' : 'hover:shadow-gold-500/5'}`}
              />
              {searchFocused && (
                <div className={`absolute inset-0 rounded-xl ${theme.isLight ? 'bg-blue-500/5' : 'bg-gold-500/5'} pointer-events-none animate-pulse`}></div>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick links */}
            <div className="hidden md:flex items-center gap-2">
              {/* ENQUIRE button */}
              <button
                className={`ripple px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95
                ${
                  theme.isLight
                    ? 'text-white border border-white/40 hover:border-white hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]'
                    : theme.btnSecondary + ' hover:bg-gold-500/10 hover:shadow-lg hover:shadow-gold-500/10'
                }`}
              >
                ENQUIRE
              </button>

              {/* APPLY button */}
              <button
                className={`ripple px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95
                ${
                  theme.isLight
                    ? 'bg-[#F9C602] text-[#0D2A4B] shadow-[0_0_22px_rgba(249,198,2,0.55)] hover:bg-[#ffd633]'
                    : theme.btnPrimary +
                      ' shadow-lg shadow-gold-500/30 hover:shadow-gold-500/40 ' +
                      theme.glow
                }`}
              >
                APPLY
              </button>
            </div>

            <div className={`w-px h-8 ${theme.isLight ? 'bg-gray-300' : 'bg-white/10'} mx-1`}></div>

            <button className={`relative p-2 ${theme.isLight ? 'hover:bg-gray-100' : 'hover:bg-white/5'} rounded-lg transition-all duration-300 group hover:scale-110 active:scale-95 hover:rotate-6`}>
              <Bell className={`w-5 h-5 ${theme.isLight ? 'text-gray-500 group-hover:text-gray-700' : 'text-white/50 group-hover:text-white/90'} transition-all duration-300 group-hover:rotate-12`} />
              <span className={`absolute top-1.5 right-1.5 w-2 h-2 ${theme.isLight ? 'bg-blue-500' : 'bg-gold-400'} rounded-full ring-2 ${theme.isLight ? 'ring-white' : 'ring-navy-900'} ${theme.glow} animate-pulse`}></span>
            </button>

            <div className="flex items-center gap-2.5 pl-2">
              <div className={`text-right hidden sm:block animate-fade-in delay-200`}>
                <div
                  className={`text-sm font-semibold ${
                    theme.isLight ? 'text-white' : theme.text
                  } leading-tight`}
                >
                  Student
                </div>
                <div
                  className={`text-[10px] leading-tight font-medium ${
                    theme.isLight ? 'text-[#F9C602]' : theme.accent
                  }`}
                >
                  MBA Program
                </div>
              </div>
              <button className={`w-9 h-9 ${theme.isLight ? 'bg-gray-100 hover:bg-gray-200 border-gray-300' : 'bg-navy-700 hover:bg-navy-600 border-white/10'} border rounded-full flex items-center justify-center ${theme.isLight ? 'text-gray-700 hover:text-gray-900' : 'text-white/70 hover:text-white'} transition-all duration-300 group hover:scale-110 ${theme.isLight ? 'hover:border-blue-500/40' : 'hover:border-gold-500/40'} active:scale-95 ${theme.isLight ? 'hover:shadow-lg hover:shadow-blue-500/20' : 'hover:shadow-lg hover:shadow-gold-500/20'}`}>
                <User className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* Nav tabs */}
        <div className="flex items-center gap-1 -mb-px overflow-x-auto scrollbar-none mt-4">
          <span
            className={`text-sm font-semibold border-b-2 pb-3 px-3 cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105 relative group ${
              theme.isLight
                ? 'text-white border-[#F9C602] hover:text-[#F9C602]'
                : `${theme.accent} border-gold-400 hover:text-gold-300`
            }`}
          >
            Module 3 of 8
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                theme.isLight ? 'bg-[#F9C602]/70' : 'bg-gold-400/50'
              }`}
            ></span>
          </span>
          {['Course Overview', 'Resources', 'Assignments', 'Community'].map((tab, idx) => (
            <span
              key={tab}
              className={`text-sm pb-3 px-3 border-b-2 border-transparent cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-px relative group ${
                theme.isLight
                  ? 'text-white/70 hover:text-white hover:border-white/40'
                  : 'text-white/30 hover:text-white/70 hover:border-white/30'
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {tab}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  theme.isLight ? 'bg-white/40' : 'bg-gold-400/30'
                }`}
              ></span>
            </span>
          ))}
          <span
            className={`text-sm pb-3 px-3 border-b-2 border-transparent cursor-pointer transition-all duration-300 whitespace-nowrap flex items-center gap-1 hover:-translate-y-px group ${
              theme.isLight
                ? 'text-white/70 hover:text-white hover:border-white/40'
                : 'text-white/30 hover:text-white/70 hover:border-white/30'
            }`}
          >
            More <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
          </span>
        </div>
      </div>
    </header>
  );
}
