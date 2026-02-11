import { currentTheme } from '../config/theme';

export const useTheme = () => {
  const isLight = currentTheme === 'light';
  
  return {
    isLight,
    isDark: !isLight,
    // Background classes
    bg: isLight ? 'bg-[#F5F7FA]' : 'bg-navy-950',
    bgSecondary: isLight ? 'bg-white' : 'bg-navy-900',
    bgCard: isLight ? 'bg-white' : 'bg-navy-900/80',
    // Text classes
    text: isLight ? 'text-[#0D2A4B]' : 'text-white',
    textSecondary: isLight ? 'text-[#0D2A4B]/80' : 'text-white/70',
    textMuted: isLight ? 'text-[#0D2A4B]/55' : 'text-white/40',
    // Border classes
    border: isLight ? 'border-[#0D2A4B1F]' : 'border-white/5',
    borderHover: isLight ? 'border-[#0D2A4B4D]' : 'border-gold-500/20',
    // Accent classes
    accent: isLight ? 'text-[#0D2A4B]' : 'text-gold-400',
    accentBg: isLight ? 'bg-[#0D2A4B0F]' : 'bg-gold-500/10',
    accentHover: isLight ? 'hover:text-[#0D2A4B]' : 'hover:text-gold-300',
    // Button classes
    btnPrimary: isLight 
      ? 'bg-[#F9C602] hover:bg-[#ffda3b] text-[#0D2A4B]' 
      : 'bg-gold-400 hover:bg-gold-300 text-navy-900',
    btnSecondary: isLight
      ? 'border-[#0D2A4B33] hover:border-[#0D2A4B80] text-[#0D2A4B] hover:text-[#0D2A4B]'
      : 'border-white/10 hover:border-gold-500/40 text-white/70 hover:text-gold-400',
    // Input classes
    input: isLight
      ? 'bg-[#F5F7FA] border-[#0D2A4B1F] text-[#0D2A4B] placeholder:text-[#0D2A4B80] focus:border-[#0D2A4B] focus:ring-[#0D2A4B]/40'
      : 'bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-gold-500 focus:ring-gold-500/50',
    // Glow classes
    glow: isLight ? 'glow-blue' : 'glow-gold',
    shimmer: isLight ? 'blue-shimmer' : 'gold-shimmer',
  };
};
