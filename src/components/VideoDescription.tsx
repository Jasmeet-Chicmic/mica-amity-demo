import { Clock, BarChart3, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

interface VideoDescriptionProps {
  badge: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  lessons: number;
  enrolled: string;
}

export default function VideoDescription({
  badge,
  title,
  description,
  duration,
  level,
  lessons,
  enrolled,
}: VideoDescriptionProps) {
  return (
    <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-gold-500/20 transition-all duration-500 animate-fade-in-up delay-200 hover-lift hover-glow glass overflow-hidden relative">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 p-6">
        {/* Badge and Title Section */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-xl text-xs font-bold tracking-wider mb-4 hover:bg-gold-500/15 hover:border-gold-500/30 transition-all duration-300 hover:scale-105 cursor-default shadow-lg shadow-gold-500/10">
            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse glow-gold"></span>
            {badge}
          </div>

          <h1 className="text-3xl font-bold text-white mb-3 leading-tight hover:text-gold-400 transition-colors duration-300 cursor-default gradient-text">
            {title}
          </h1>

          <p className="text-white/50 text-[15px] leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Metadata Grid - Enhanced Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {[
            { 
              icon: Clock, 
              label: 'Duration', 
              value: duration,
              color: 'from-blue-500/20 to-blue-600/20',
              iconColor: 'text-blue-400',
              borderColor: 'border-blue-500/20 hover:border-blue-500/40'
            },
            { 
              icon: BarChart3, 
              label: 'Level', 
              value: level,
              color: 'from-purple-500/20 to-purple-600/20',
              iconColor: 'text-purple-400',
              borderColor: 'border-purple-500/20 hover:border-purple-500/40'
            },
            { 
              icon: BookOpen, 
              label: 'Lessons', 
              value: String(lessons),
              color: 'from-emerald-500/20 to-emerald-600/20',
              iconColor: 'text-emerald-400',
              borderColor: 'border-emerald-500/20 hover:border-emerald-500/40'
            },
            { 
              icon: Users, 
              label: 'Enrolled', 
              value: enrolled,
              color: 'from-gold-500/20 to-gold-600/20',
              iconColor: 'text-gold-400',
              borderColor: 'border-gold-500/20 hover:border-gold-500/40'
            },
          ].map(({ icon: Icon, label, value, color, iconColor, borderColor }, idx) => (
            <div
              key={label}
              className={`group relative p-4 bg-navy-800/40 backdrop-blur-sm rounded-xl border ${borderColor} transition-all duration-300 animate-fade-in-up cursor-default hover-lift hover:shadow-lg hover:shadow-gold-500/10 overflow-hidden`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Icon container */}
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 bg-white/5 group-hover:bg-white/10 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-5 h-5 ${iconColor} transition-all duration-300`} />
                </div>
                <div className="w-1.5 h-1.5 bg-gold-400/0 group-hover:bg-gold-400 rounded-full transition-all duration-300 group-hover:animate-pulse"></div>
              </div>
              
              {/* Label and Value */}
              <div>
                <div className="text-[10px] text-white/30 font-medium leading-tight uppercase tracking-wider mb-1 group-hover:text-white/50 transition-colors">
                  {label}
                </div>
                <div className="text-lg font-bold text-white/90 leading-tight group-hover:text-gold-400 transition-colors">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Bar */}
        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <Award className="w-4 h-4 text-gold-400/60" />
            <span>Certified Course</span>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <TrendingUp className="w-4 h-4 text-gold-400/60" />
            <span>Trending Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
