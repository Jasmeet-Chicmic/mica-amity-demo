import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface VideoPlayerProps {
  thumbnail: string;
  videoUrl: string;
}

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VideoPlayer({ thumbnail, videoUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  const skip = useCallback((seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration, v.currentTime + seconds));
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else container.requestFullscreen();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => { setIsPlaying(true); setShowOverlay(false); };
    const onPause = () => { setIsPlaying(false); setShowOverlay(true); };
    const onTimeUpdate = () => {
      setCurrentTime(v.currentTime);
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    };
    const onLoadedMetadata = () => setDuration(v.duration);
    const onEnded = () => { setIsPlaying(false); setShowOverlay(true); };

    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('loadedmetadata', onLoadedMetadata);
    v.addEventListener('ended', onEnded);

    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('loadedmetadata', onLoadedMetadata);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-navy-900 animate-scale-in hover:border-gold-500/20 transition-all duration-500 hover:shadow-gold-500/10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-video bg-navy-900 group">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          poster={thumbnail}
          preload="metadata"
          playsInline
          src={videoUrl}
        />

        {/* Center play button */}
        {showOverlay && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 animate-fade-in backdrop-blur-[2px]"
            onClick={togglePlay}
          >
            <button className="w-20 h-20 bg-gold-500 hover:bg-gold-400 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/50 transform hover:scale-110 transition-all duration-300 glow-gold active:scale-95 ripple group/play">
              <Play className="w-9 h-9 text-navy-900 ml-1 transition-transform duration-300 group-hover/play:scale-110" fill="currentColor" />
            </button>
          </div>
        )}

        {/* Click to pause overlay */}
        {!showOverlay && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={togglePlay}
            style={{ bottom: '56px' }}
          />
        )}

        {/* Bottom controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy-950/95 via-navy-950/50 to-transparent transition-opacity duration-300 ${isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          {/* Progress bar */}
          <div className="px-4 pt-8">
            <div
              ref={progressRef}
              onClick={handleSeek}
              className="relative w-full h-1 bg-white/10 rounded-full cursor-pointer group/progress hover:h-1.5 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 h-full bg-gold-400 rounded-full shadow-sm shadow-gold-400/50 transition-all duration-100"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gold-300 rounded-full shadow-md shadow-gold-400/60 opacity-0 group-hover/progress:opacity-100 transition-opacity duration-300 group-hover/progress:scale-125"></div>
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-125 active:scale-95 ripple">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button onClick={() => skip(-10)} className="text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-125 active:scale-95 ripple">
                <SkipBack className="w-4 h-4" />
              </button>
              <button onClick={() => skip(10)} className="text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-125 active:scale-95 ripple">
                <SkipForward className="w-4 h-4" />
              </button>
              <button onClick={toggleMute} className="text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-125 active:scale-95 ripple">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-white/40 text-xs font-medium tabular-nums ml-1">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <button onClick={toggleFullscreen} className="text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-125 active:scale-95 ripple">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
