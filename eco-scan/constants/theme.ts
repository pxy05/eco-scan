// Theme constants extracted from Figma design
// Colors, spacing, typography for Eco-Scan app

export const colors = {
  // Primary brand colors
  primary: '#3BB273',
  primaryDark: '#2d8a5a',
  primaryLight: '#f0fdf4',
  
  // Status colors
  good: '#3BB273',
  okay: '#FFC85C',
  bad: '#FF6B6B',
  
  // Neutral colors
  background: '#ffffff',
  backgroundLight: '#f0fdf4',
  foreground: '#1C1C1E',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Text colors
  textPrimary: '#1C1C1E',
  textSecondary: '#717182',
  textTertiary: '#828282',
  
  // Border colors
  border: 'rgba(0, 0, 0, 0.1)',
  borderLight: '#e0e0e0',
  
  // Status bar
  statusBar: '#ffffff',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 60,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
};

export const typography = {
  // Font families (using system fonts for React Native)
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },
  
  // Font sizes
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 40,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.1,
    normal: 1.4,
    relaxed: 1.5,
    loose: 1.75,
  },
  
  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

// Screen dimensions (iPhone standard)
export const screen = {
  width: 430,
  height: 932,
};

