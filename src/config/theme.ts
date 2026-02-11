// Theme Configuration
// Change 'currentTheme' to 'dark' or 'light' to switch themes

export type Theme = 'dark' | 'light';

// ── CHANGE THIS TO SWITCH THEMES ──
// Change 'dark' to 'light' for white theme
export const currentTheme = 'light' as Theme;

// Dark Theme (Current - Navy & Gold)
const darkTheme = {
  name: 'dark' as const,
  colors: {
    // Backgrounds
    bgPrimary: '#060e1a',      // navy-950
    bgSecondary: '#0a1628',   // navy-900
    bgTertiary: '#0f1f3a',    // navy-800
    bgCard: 'rgba(10, 22, 40, 0.8)', // navy-900/80
    bgCardHover: 'rgba(10, 22, 40, 0.95)',
    
    // Borders
    border: 'rgba(255, 255, 255, 0.05)',
    borderHover: 'rgba(229, 161, 0, 0.2)',
    borderActive: 'rgba(229, 161, 0, 0.3)',
    
    // Text
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    textTertiary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.4)',
    textDisabled: 'rgba(255, 255, 255, 0.25)',
    
    // Accents (Gold)
    accent: '#e5a100',        // gold-500
    accentHover: '#f5b800',  // gold-400
    accentLight: '#fbbf24',  // gold-300
    accentBg: 'rgba(229, 161, 0, 0.1)',
    accentBgHover: 'rgba(229, 161, 0, 0.15)',
    
    // Header
    headerBg: 'rgba(10, 22, 40, 0.95)',
    headerBorder: 'rgba(255, 255, 255, 0.05)',
    
    // Inputs
    inputBg: 'rgba(255, 255, 255, 0.05)',
    inputBgHover: 'rgba(255, 255, 255, 0.08)',
    inputBorder: 'rgba(255, 255, 255, 0.1)',
    inputBorderFocus: 'rgba(229, 161, 0, 0.5)',
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.3)',
    cardHover: '0 12px 32px rgba(0, 0, 0, 0.4)',
    accent: '0 0 24px rgba(229, 161, 0, 0.4)',
  },
};

// Light Theme (White, Blue & Yellow - Amity Website Style)
const lightTheme = {
  name: 'light' as const,
  colors: {
    // Backgrounds
    bgPrimary: '#ffffff',           // white
    bgSecondary: '#f5f7fa',         // subtle light background
    bgTertiary: '#edf1f7',
    bgCard: '#ffffff',
    bgCardHover: '#ffffff',
    
    // Borders
    border: 'rgba(13, 42, 75, 0.12)',          // navy 0D2A4B
    borderHover: 'rgba(13, 42, 75, 0.3)',
    borderActive: 'rgba(249, 198, 2, 0.45)',   // yellow F9C602
    
    // Text
    textPrimary: '#0D2A4B',         // primary navy
    textSecondary: 'rgba(13, 42, 75, 0.9)',
    textTertiary: 'rgba(13, 42, 75, 0.7)',
    textMuted: 'rgba(13, 42, 75, 0.55)',
    textDisabled: 'rgba(13, 42, 75, 0.3)',
    
    // Primary Accent (Navy)
    accent: '#0D2A4B',              // blue-navy
    accentHover: '#15365e',
    accentLight: '#4c6e95',
    accentBg: 'rgba(13, 42, 75, 0.06)',
    accentBgHover: 'rgba(13, 42, 75, 0.12)',
    
    // Yellow accent (for highlights)
    yellow: '#F9C602',              // yellow
    yellowHover: '#e3b402',
    yellowLight: '#ffe066',
    yellowBg: 'rgba(249, 198, 2, 0.12)',
    
    // Header
    headerBg: '#0D2A4B',
    headerBorder: 'rgba(249, 198, 2, 0.8)',
    
    // Inputs
    inputBg: 'rgba(13, 42, 75, 0.02)',
    inputBgHover: 'rgba(13, 42, 75, 0.05)',
    inputBorder: 'rgba(13, 42, 75, 0.16)',
    inputBorderFocus: 'rgba(13, 42, 75, 0.55)',
  },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 24px rgba(0, 0, 0, 0.12)',
    accent: '0 0 20px rgba(0, 123, 255, 0.3)',
  },
};

// Export active theme
export const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

// Helper function to get theme-aware classes
export const getThemeClasses = () => {
  if (currentTheme === 'light') {
    return {
      bg: 'bg-white',
      bgSecondary: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      border: 'border-gray-200',
      accent: 'text-blue-600',
      accentBg: 'bg-blue-50',
    };
  }
  return {
    bg: 'bg-navy-950',
    bgSecondary: 'bg-navy-900',
    text: 'text-white',
    textSecondary: 'text-white/70',
    border: 'border-white/5',
    accent: 'text-gold-400',
    accentBg: 'bg-gold-500/10',
  };
};
