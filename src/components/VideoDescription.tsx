import { Clock, BarChart3, BookOpen, Users, Award, TrendingUp, GraduationCap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

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
  const theme = useTheme();

  return (
    <div
      className={`${
        theme.isLight ? 'bg-[#0C1628]' : theme.bgCard
      } backdrop-blur-sm rounded-2xl border ${theme.border} transition-all duration-500 animate-fade-in-up delay-200 hover-lift hover-glow glass overflow-hidden relative`}
    >
      {/* Subtle gradient overlay */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 ${
          theme.isLight ? 'bg-[#F9C602]/20' : 'bg-gold-500/5'
        } rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`}
      ></div>
      
      <div className="relative z-10 p-6">
        {/* Badge and Title Section */}
        <div className="mb-5">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wider mb-4 cursor-default shadow-lg transition-all duration-300 hover:scale-105
            ${
              theme.isLight
                ? 'bg-[#F9C602] text-[#0D2A4B] shadow-[0_0_18px_rgba(249,198,2,0.45)]'
                : `${theme.accentBg} border border-gold-500/20 ${theme.accent} hover:bg-gold-500/15 hover:border-gold-500/30 shadow-gold-500/10`
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                theme.isLight ? 'bg-[#0D2A4B]' : 'bg-gold-400 ' + theme.glow
              }`}
            ></span>
            {badge}
          </div>

          <h1
            className={`text-3xl font-bold mb-3 leading-tight transition-colors duration-300 cursor-default gradient-text ${
              theme.isLight ? 'text-white' : theme.text
            }`}
          >
            {title}
          </h1>

          <p
            className={`text-[15px] leading-relaxed max-w-3xl ${
              theme.isLight ? 'text-black/80' : theme.textMuted
            }`}
          >
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
              color: theme.isLight ? 'from-blue-500/20 to-blue-600/20' : 'from-blue-500/20 to-blue-600/20',
              iconColor: theme.isLight ? 'text-blue-600' : 'text-blue-400',
              borderColor: theme.isLight ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-blue-500/20 hover:border-blue-500/40'
            },
            { 
              icon: BarChart3, 
              label: 'Level', 
              value: level,
              color: theme.isLight ? 'from-purple-500/20 to-purple-600/20' : 'from-purple-500/20 to-purple-600/20',
              iconColor: theme.isLight ? 'text-purple-600' : 'text-purple-400',
              borderColor: theme.isLight ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-500/20 hover:border-purple-500/40'
            },
            { 
              icon: BookOpen, 
              label: 'Lessons', 
              value: String(lessons),
              color: theme.isLight ? 'from-emerald-500/20 to-emerald-600/20' : 'from-emerald-500/20 to-emerald-600/20',
              iconColor: theme.isLight ? 'text-emerald-600' : 'text-emerald-400',
              borderColor: theme.isLight ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-emerald-500/20 hover:border-emerald-500/40'
            },
            { 
              icon: Users, 
              label: 'Enrolled', 
              value: enrolled,
              color: theme.isLight ? 'from-yellow-500/20 to-yellow-600/20' : 'from-gold-500/20 to-gold-600/20',
              iconColor: theme.isLight ? 'text-yellow-600' : 'text-gold-400',
              borderColor: theme.isLight ? 'border-yellow-500/20 hover:border-yellow-500/40' : 'border-gold-500/20 hover:border-gold-500/40'
            },
          ].map(({ icon: Icon, label, value, color, iconColor, borderColor }, idx) => (
            <div
              key={label}
              className={`group relative p-4 ${theme.isLight ? 'bg-gray-50' : 'bg-navy-800/40'} backdrop-blur-sm rounded-xl border ${borderColor} transition-all duration-300 animate-fade-in-up cursor-default hover-lift ${theme.isLight ? 'hover:shadow-lg hover:shadow-blue-500/10' : 'hover:shadow-lg hover:shadow-gold-500/10'} overflow-hidden`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Icon container */}
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 ${theme.isLight ? 'bg-gray-100 group-hover:bg-gray-200' : 'bg-white/5 group-hover:bg-white/10'} rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-5 h-5 ${iconColor} transition-all duration-300`} />
                </div>
                <div className={`w-1.5 h-1.5 ${theme.isLight ? 'bg-blue-500/0 group-hover:bg-blue-500' : 'bg-gold-400/0 group-hover:bg-gold-400'} rounded-full transition-all duration-300 group-hover:animate-pulse`}></div>
              </div>
              
              {/* Label and Value */}
              <div>
                <div className={`text-[10px] ${theme.textMuted} font-medium leading-tight uppercase tracking-wider mb-1 ${theme.isLight ? 'group-hover:text-gray-600' : 'group-hover:text-white/50'} transition-colors`}>
                  {label}
                </div>
                <div className={`text-lg font-bold ${theme.textSecondary} leading-tight ${theme.isLight ? 'group-hover:text-blue-600' : 'group-hover:text-gold-400'} transition-colors`}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructor Section */}
        <div className={`mt-6 pt-6 border-t ${theme.border}`}>
          <div className={`flex items-start gap-4 p-5 ${theme.isLight ? 'bg-white' : 'bg-navy-800/30'} backdrop-blur-sm rounded-xl border ${theme.border} transition-all duration-300 hover:border-gold-500/30 hover-lift group`}>
            {/* Icon */}
            <div className={`p-3 ${theme.isLight ? 'bg-[#F9C602]/10' : 'bg-gold-500/10'} rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0`}>
              <GraduationCap className={`w-6 h-6 ${theme.isLight ? 'text-[#F9C602]' : 'text-gold-400'} transition-all duration-300`} />
            </div>
            
            {/* Instructor Details */}
            <div className="flex-1 min-w-0">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${theme.isLight ? 'text-[#0D2A4B]/60' : theme.textMuted}`}>
                Instructor
              </div>
              <h3 className={`text-lg font-bold mb-1 ${theme.isLight ? 'text-[#0D2A4B]' : theme.text} transition-colors`}>
                Dr. Adel Ahmed
              </h3>
              <p className={`text-sm ${theme.isLight ? 'text-[#0D2A4B]/80' : theme.textSecondary} mb-2 leading-relaxed`}>
                Professor of Accounting & Ethical Finance
              </p>
              <p className={`text-xs ${theme.isLight ? 'text-[#0D2A4B]/60' : theme.textMuted} leading-relaxed`}>
                Member, Research Center of Excellence for Sustainability
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className={`mt-6 pt-5 border-t ${theme.border} flex items-center justify-between flex-wrap gap-3`}>
          <div className={`flex items-center gap-2 ${theme.textMuted} text-sm`}>
            <Award className={`w-4 h-4 ${theme.accent}`} />
            <span>Certified Course</span>
          </div>
          <div className={`flex items-center gap-2 ${theme.textMuted} text-sm`}>
            <TrendingUp className={`w-4 h-4 ${theme.accent}`} />
            <span>Trending Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
