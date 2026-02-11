import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import amityLogo from '../assets/amity-logo.webp';

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="bg-navy-900/95 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 animate-fade-in shadow-lg shadow-black/20 pt-4">
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
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 rounded-lg blur-xl transition-all duration-500 -z-10"></div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className={`relative group transition-all duration-500 ${searchFocused ? 'scale-[1.02]' : ''}`}>
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold-400 transition-all duration-500 group-focus-within:scale-125 group-focus-within:rotate-12" />
              <input
                type="text"
                placeholder="Search courses, lectures, resources..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/60 focus:bg-white/10 transition-all duration-500 placeholder:text-white/25 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-gold-500/5"
              />
              {searchFocused && (
                <div className="absolute inset-0 rounded-xl bg-gold-500/5 pointer-events-none animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick links */}
            <div className="hidden md:flex items-center gap-2">
              <button className="ripple px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-gold-400 border border-white/10 hover:border-gold-500/40 rounded-lg transition-all duration-300 hover:bg-gold-500/10 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/10 active:scale-95">
                ENQUIRE
              </button>
              <button className="ripple px-3 py-1.5 text-xs font-semibold text-navy-900 bg-gold-400 hover:bg-gold-300 rounded-lg transition-all duration-300 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 glow-gold">
                APPLY
              </button>
            </div>

            <div className="w-px h-8 bg-white/10 mx-1"></div>

            <button className="relative p-2 hover:bg-white/5 rounded-lg transition-all duration-300 group hover:scale-110 active:scale-95 hover:rotate-6">
              <Bell className="w-5 h-5 text-white/50 group-hover:text-white/90 transition-all duration-300 group-hover:rotate-12" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold-400 rounded-full ring-2 ring-navy-900 glow-gold animate-pulse"></span>
            </button>

            <div className="flex items-center gap-2.5 pl-2">
              <div className="text-right hidden sm:block animate-fade-in delay-200">
                <div className="text-sm font-semibold text-white/90 leading-tight">Student</div>
                <div className="text-[10px] text-gold-400 leading-tight font-medium">MBA Program</div>
              </div>
              <button className="w-9 h-9 bg-navy-700 hover:bg-navy-600 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 group hover:scale-110 hover:border-gold-500/40 active:scale-95 hover:shadow-lg hover:shadow-gold-500/20">
                <User className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* Nav tabs */}
        <div className="flex items-center gap-1 -mb-px overflow-x-auto scrollbar-none mt-4">
          <span className="text-sm text-gold-400 font-semibold border-b-2 border-gold-400 pb-3 px-3 cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-gold-300 hover:scale-105 relative group">
            Module 3 of 8
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
          {['Course Overview', 'Resources', 'Assignments', 'Community'].map((tab, idx) => (
            <span
              key={tab}
              className="text-sm text-white/30 hover:text-white/70 pb-3 px-3 border-b-2 border-transparent hover:border-white/30 cursor-pointer transition-all duration-300 whitespace-nowrap hover:-translate-y-px relative group"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {tab}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          ))}
          <span className="text-sm text-white/30 hover:text-white/70 pb-3 px-3 border-b-2 border-transparent hover:border-white/30 cursor-pointer transition-all duration-300 whitespace-nowrap flex items-center gap-1 hover:-translate-y-px group">
            More <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
          </span>
        </div>
      </div>
    </header>
  );
}
