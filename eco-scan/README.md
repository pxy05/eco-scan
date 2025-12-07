# Eco-Scan React Native App

A React Native mobile app built with Expo SDK 54 that helps users scan products and make sustainable choices.

## Features

- **Product Scanning**: Use your camera to scan products and see sustainability ratings
- **Eco Points System**: Earn points for making sustainable choices
- **Social Features**: Compete with friends on the leaderboard and complete challenges
- **Impact Tracking**: See your weekly environmental impact
- **Settings**: Customize privacy, budget, accessibility, and notification preferences

## Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm
- Expo Go app installed on your iOS device (for testing)
- iOS Simulator (for Mac) or Android Emulator (optional)

## Installation

1. Install dependencies using Expo's installer (recommended):
```bash
npx expo install --fix
```
This ensures all packages are compatible with Expo SDK 54.

Alternatively, if you prefer manual installation:
```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

2. Start the development server:
```bash
npx expo start
```

4. Run on your device:
   - **iOS**: 
     - Press `i` in the terminal to open in iOS Simulator, OR
     - Scan the QR code with your iPhone Camera app (opens in Expo Go)
   - **Android**: 
     - Press `a` in the terminal to open in Android Emulator, OR
     - Scan the QR code with the Expo Go app

## Project Structure

```
eco-scan/
├── app/                          # Expo Router file-based routing
│   ├── _layout.tsx              # Root layout
│   ├── index.tsx                # Welcome/Onboarding screen
│   ├── (auth)/                  # Auth flow group
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── lac-setup.tsx
│   ├── (tabs)/                  # Tab navigation group
│   │   ├── _layout.tsx          # Tab navigator
│   │   ├── home.tsx
│   │   ├── social.tsx
│   │   ├── scan.tsx
│   │   ├── tutorials.tsx
│   │   └── settings.tsx
│   └── settings/                 # Settings subpages
│       ├── account-info.tsx
│       ├── privacy.tsx
│       ├── budget.tsx
│       ├── accessibility.tsx
│       ├── notifications.tsx
│       └── about-support.tsx
├── components/                   # Reusable React Native components
│   ├── EarthAvatarCard.tsx
│   ├── ImpactCard.tsx
│   ├── ImpactHighlightsCarousel.tsx
│   ├── EcoFactCard.tsx
│   ├── ChallengeCard.tsx
│   ├── LeaderboardItem.tsx
│   └── HotItemCard.tsx
├── assets/                       # Images and static assets
│   └── images/                  # All 22 image assets
├── constants/                   # Constants and theme
│   ├── theme.ts                 # Colors, spacing, typography
│   └── mockData.ts              # Static mock data
├── utils/                       # Utilities
│   └── assetMapping.ts          # Asset mapping
├── imports/                     # Legacy Figma export (reference only)
│   └── Frame6.tsx               # Original Figma export
└── public/                      # Legacy web assets (not used in RN)
```

## Key Technologies

- **Expo SDK 54**: React Native framework
- **Expo Router**: File-based routing
- **TypeScript**: Type safety
- **React Native Reanimated**: Animations
- **Expo Linear Gradient**: Gradient backgrounds
- **React Native SVG**: SVG rendering for progress indicators
- **Expo Image**: Optimized image loading

## Development

### Running on iOS Simulator
```bash
npm run ios
# or
npx expo start --ios
```

### Running on Android Emulator
```bash
npm run android
# or
npx expo start --android
```

### Running on Web (limited support)
```bash
npm run web
# or
npx expo start --web
```

## Notes

- The app uses Expo Go for development - no custom dev build required
- All images are stored locally in `assets/images/`
- The design system is defined in `constants/theme.ts`
- Icons use `@expo/vector-icons` (Ionicons)
- The app is a pure mock with no backend or real data persistence
- Camera functionality is mocked with static images (no actual camera access needed)

## Legacy Files

The following files are kept for reference but are not used in the React Native app:
- `App.tsx` - Original web React app
- `imports/Frame6.tsx` - Original Figma Make export
- `styles/globals.css` - Web CSS (not used in RN)
- `components/ui/` - Web UI components (shadcn/ui, not used in RN)
- `components/ScanScreen.tsx` - Web version (converted to `app/(tabs)/scan.tsx`)
- `components/SettingsSubpages.tsx` - Web version (converted to `app/settings/*.tsx`)

## License

Private project - All rights reserved
