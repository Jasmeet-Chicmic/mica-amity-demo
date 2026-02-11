# Theme Configuration Guide

## How to Switch Themes

To change the theme, simply edit the `currentTheme` variable in:

**File:** `src/config/theme.ts`

**Line 6:**
```typescript
export const currentTheme: Theme = 'dark'; // Change to 'light' for white theme
```

### Available Themes:

1. **Dark Theme** (Current - Navy & Gold)
   - Dark navy backgrounds
   - Gold accents
   - Modern, premium feel

2. **Light Theme** (White, Blue & Yellow)
   - White backgrounds
   - Blue and yellow accents
   - Clean, professional look (matches Amity website)

### Example:

```typescript
// For Dark Theme
export const currentTheme: Theme = 'dark';

// For Light Theme
export const currentTheme: Theme = 'light';
```

After changing the theme, the application will automatically update all components to use the new color scheme.

## Theme Colors

### Dark Theme:
- Background: Navy (#060e1a, #0a1628, #0f1f3a)
- Accent: Gold (#e5a100, #f5b800, #fbbf24)
- Text: White with various opacities

### Light Theme:
- Background: White (#ffffff, #f8f9fa, #f1f3f5)
- Accent: Blue (#007bff, #0056b3, #4da6ff)
- Highlight: Yellow (#ffc107, #ffb300, #ffd54f)
- Text: Dark gray/black with various opacities

## Components Updated

All components automatically adapt to the selected theme:
- Header
- VideoPlayer
- VideoDescription
- VideoList
- ChatWidget
- LoadingScreen
