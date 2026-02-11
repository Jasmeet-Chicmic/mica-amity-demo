import { Play, Clock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  isActive?: boolean;
}

interface VideoListProps {
  videos: Video[];
  onVideoSelect: (id: number) => void;
}

export default function VideoList({ videos, onVideoSelect }: VideoListProps) {
  const theme = useTheme();

  return (
    <div
      className={`${
        theme.isLight ? 'bg-white' : 'bg-navy-900/80'
      } backdrop-blur-sm rounded-2xl p-5 border ${
        theme.border
      } animate-fade-in-up delay-300 hover-lift transition-all duration-500 glass`}
    >
      <h2 className={`text-lg font-bold ${theme.text} mb-4 flex items-center gap-2`}>
        Course Content
        <span
          className={`text-xs font-normal ${
            theme.isLight ? 'text-[#F9C602]' : 'text-gold-400/50'
          }`}
        >
          ({videos.length} lessons)
        </span>
      </h2>

      <div className="space-y-2">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            onClick={() => onVideoSelect(video.id)}
            className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 animate-fade-in-up hover-lift ripple ${
              video.isActive
                ? theme.isLight
                  ? 'border-[#F9C602] bg-[#FFF8D6] shadow-lg shadow-[#F9C602]/30 scale-[1.01]'
                  : 'border-gold-500/50 bg-gold-500/10 shadow-lg shadow-gold-500/20 scale-[1.02]'
                : theme.isLight
                  ? 'border-[#0D2A4B1F] hover:border-[#0D2A4B4D] hover:bg-white'
                  : 'border-white/5 hover:border-white/15 hover:bg-white/3'
            }`}
            style={{ animationDelay: `${0.4 + idx * 0.05}s` }}
          >
            <div className="flex gap-3 p-2.5">
              <div
                className={`relative shrink-0 w-32 h-20 rounded-lg overflow-hidden ${
                  theme.isLight ? 'bg-[#0D2A4B]/5' : 'bg-navy-800'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />

                <div
                  className={`absolute inset-0 ${
                    theme.isLight ? 'bg-[#0D2A4B]/30' : 'bg-navy-950/40'
                  } flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-300 ${
                      theme.isLight
                        ? 'bg-[#F9C602] shadow-[#F9C602]/40 glow-blue'
                        : 'bg-gold-500 shadow-gold-500/30 glow-gold'
                    }`}
                  >
                    <Play
                      className={`w-4 h-4 ml-0.5 ${
                        theme.isLight ? 'text-[#0D2A4B]' : 'text-navy-900'
                      }`}
                      fill="currentColor"
                    />
                  </div>
                </div>

                <div
                  className={`absolute bottom-1.5 right-1.5 px-1.5 py-0.5 ${
                    theme.isLight ? 'bg-white/90 text-[#0D2A4B]' : 'bg-navy-950/90 text-white/70'
                  } backdrop-blur-sm rounded text-[10px] font-medium flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <Clock className="w-2.5 h-2.5" />
                  {video.duration}
                </div>

                {/* Active indicator */}
                {video.isActive && (
                  <div
                    className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 backdrop-blur-sm rounded text-[9px] font-bold flex items-center gap-1 animate-pulse ${
                      theme.isLight
                        ? 'bg-[#F9C602] text-[#0D2A4B]'
                        : 'bg-gold-500/90 text-navy-900'
                    }`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${
                        theme.isLight ? 'bg-[#0D2A4B]' : 'bg-navy-900'
                      }`}
                    ></div>
                    LIVE
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0 py-0.5">
                <h3
                  className={`font-semibold text-sm mb-1.5 line-clamp-2 leading-snug transition-all duration-300 ${
                    video.isActive
                      ? theme.isLight
                        ? 'text-[#0D2A4B]'
                        : 'text-gold-400'
                      : theme.isLight
                        ? 'text-[#0D2A4B]/70 group-hover:text-[#0D2A4B]'
                        : 'text-white/60 group-hover:text-white/90'
                  }`}
                >
                  {video.title}
                </h3>
                <p
                  className={`text-xs transition-colors ${
                    theme.isLight
                      ? 'text-[#0D2A4B]/40 group-hover:text-[#0D2A4B]/70'
                      : 'text-white/20 group-hover:text-white/40'
                  }`}
                >
                  {video.views} views
                </p>
                {video.isActive && (
                  <div className="mt-1.5 flex items-center gap-1.5 animate-fade-in">
                    <div
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        theme.isLight ? 'bg-[#F9C602] glow-blue' : 'bg-gold-400 glow-gold'
                      }`}
                    ></div>
                    <span
                      className={`text-[11px] font-semibold ${
                        theme.isLight ? 'text-[#0D2A4B]' : 'text-gold-400'
                      }`}
                    >
                      Now Playing
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
