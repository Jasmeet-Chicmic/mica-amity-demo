import { Play, Clock } from 'lucide-react';

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
  return (
    <div className="bg-navy-900/80 backdrop-blur-sm rounded-2xl p-5 border border-white/5 animate-fade-in-up delay-300 hover:border-gold-500/20 transition-all duration-500 glass">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        Course Content
        <span className="text-xs text-gold-400/50 font-normal">({videos.length} lessons)</span>
      </h2>

      <div className="space-y-2">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            onClick={() => onVideoSelect(video.id)}
            className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 animate-fade-in-up hover-lift ripple ${
              video.isActive
                ? 'border-gold-500/50 bg-gold-500/10 shadow-lg shadow-gold-500/20 scale-[1.02]'
                : 'border-white/5 hover:border-white/15 hover:bg-white/[0.03]'
            }`}
            style={{ animationDelay: `${0.4 + idx * 0.05}s` }}
          >
            <div className="flex gap-3 p-2.5">
              <div className="relative shrink-0 w-32 h-20 bg-navy-800 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 transform group-hover:scale-125 transition-transform duration-300 glow-gold">
                    <Play className="w-4 h-4 text-navy-900 ml-0.5" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-navy-950/90 backdrop-blur-sm rounded text-white/70 text-[10px] font-medium flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Clock className="w-2.5 h-2.5" />
                  {video.duration}
                </div>

                {/* Active indicator */}
                {video.isActive && (
                  <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-gold-500/90 backdrop-blur-sm rounded text-navy-900 text-[9px] font-bold flex items-center gap-1 animate-pulse">
                    <div className="w-1 h-1 bg-navy-900 rounded-full"></div>
                    LIVE
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0 py-0.5">
                <h3
                  className={`font-semibold text-sm mb-1.5 line-clamp-2 leading-snug transition-all duration-300 ${
                    video.isActive ? 'text-gold-400' : 'text-white/60 group-hover:text-white/90'
                  }`}
                >
                  {video.title}
                </h3>
                <p className="text-xs text-white/20 group-hover:text-white/40 transition-colors">{video.views} views</p>
                {video.isActive && (
                  <div className="mt-1.5 flex items-center gap-1.5 animate-fade-in">
                    <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse glow-gold"></div>
                    <span className="text-[11px] font-semibold text-gold-400">Now Playing</span>
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
