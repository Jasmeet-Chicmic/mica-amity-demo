import amityLogo from '../assets/amity-logo.webp';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-navy-950 flex items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,161,0,0.1),transparent_70%)] animate-pulse"></div>
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo with scale animation */}
        <div className="relative">
          <img
            src={amityLogo}
            alt="Amity University Dubai"
            className="h-20 w-auto object-contain animate-scale-in"
            style={{ animationDuration: '0.8s' }}
          />
          {/* Glow ring */}
          <div className="absolute inset-0 -z-10 bg-gold-500/20 rounded-full blur-3xl animate-pulse" style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2 animate-fade-in delay-300">
          <p className="text-gold-400 font-semibold text-sm tracking-wider uppercase">Loading</p>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gold-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.6s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-white/5 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-linear-to-r from-gold-500 via-gold-400 to-gold-500 rounded-full animate-shimmer" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
}
