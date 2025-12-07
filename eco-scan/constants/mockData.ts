// Mock data for Eco-Scan app
// Static data used throughout the app for demonstration

export interface User {
  id: string;
  username: string;
  email: string;
  localAreaCode: string;
  ecoPoints: number;
  level: number;
  avatar: string;
}

export interface Challenge {
  id: number;
  title: string;
  progress: number;
  total: number;
  reward: number;
  completed: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  isYou?: boolean;
}

export interface HotItem {
  id: string;
  name: string;
  rating: 'Good' | 'Okay' | 'Bad' | 'Great';
  color: string;
  score: number;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  rating: 'Good' | 'Okay' | 'Bad';
  score: number;
  color: string;
  bgColor: string;
  borderColor: string;
  position: { top: string; left?: string; right?: string; width: string; height: string };
}

export interface ImpactMetric {
  label: string;
  value: string;
  icon: string;
  color: 'green' | 'amber';
}

export interface EcoFact {
  id: string;
  title: string;
  description: string;
  image?: string;
}

// Current user data
export const currentUser: User = {
  id: 'user-1',
  username: '@EcoWarrior23',
  email: 'eco.warrior@email.com',
  localAreaCode: 'SW1A 1AA',
  ecoPoints: 2450,
  level: 3,
  avatar: '🌍',
};

// Weekly challenges
export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Scan 3 recyclable snacks',
    progress: 2,
    total: 3,
    reward: 50,
    completed: false,
  },
  {
    id: 2,
    title: 'Choose 5 low-carbon products',
    progress: 3,
    total: 5,
    reward: 75,
    completed: false,
  },
  {
    id: 3,
    title: 'Share your eco-journey',
    progress: 0,
    total: 1,
    reward: 100,
    completed: false,
  },
];

// Leaderboard data
export const leaderboard: LeaderboardUser[] = [
  { rank: 1, name: 'EcoWarrior23', points: 5240, avatar: '🌟', isYou: true },
  { rank: 2, name: 'GreenQueen', points: 4830, avatar: '🌱' },
  { rank: 3, name: 'PlantBased', points: 4120, avatar: '🌿' },
  { rank: 4, name: 'EcoFriend', points: 2100, avatar: '♻️' },
  { rank: 5, name: 'SustainableSam', points: 1890, avatar: '🌳' },
];

// Hot items (trending products)
export const hotItems: HotItem[] = [
  {
    id: 'hot-1',
    name: 'Organic Cereal',
    rating: 'Good',
    color: '#3BB273',
    score: 86,
  },
  {
    id: 'hot-2',
    name: 'Plant Milk',
    rating: 'Great',
    color: '#3BB273',
    score: 92,
  },
  {
    id: 'hot-3',
    name: 'Eco Snacks',
    rating: 'Okay',
    color: '#FFC85C',
    score: 63,
  },
  {
    id: 'hot-4',
    name: 'Green Tea',
    rating: 'Good',
    color: '#3BB273',
    score: 78,
  },
];

// Scan screen products (for AR overlay)
export const scanProducts: Product[] = [
  {
    id: 'honey-cheerios',
    name: 'Cheerios',
    subtitle: 'Honey Nut',
    rating: 'Good',
    score: 86,
    color: '#2d8a5a',
    bgColor: '#3BB27373', // rgba(59, 178, 115, 0.45) as hex with alpha
    borderColor: '#3BB273B3', // rgba(59, 178, 115, 0.7) as hex with alpha
    position: { top: '55%', left: '34%', width: '90px', height: '130px' },
  },
  {
    id: 'multi-cheerios',
    name: 'Cheerios',
    subtitle: 'Multigrain',
    rating: 'Okay',
    score: 63,
    color: '#f5b800',
    bgColor: '#FFC85C73', // rgba(255, 200, 92, 0.45) as hex with alpha
    borderColor: '#FFC85CB3', // rgba(255, 200, 92, 0.7) as hex with alpha
    position: { top: '33%', left: '-1%', width: '95px', height: '140px' },
  },
  {
    id: 'original-cheerios',
    name: 'Cheerios',
    subtitle: 'Original',
    rating: 'Bad',
    score: 41,
    color: '#e85555',
    bgColor: '#FF6B6B73', // rgba(255, 107, 107, 0.45) as hex with alpha
    borderColor: '#FF6B6BB3', // rgba(255, 107, 107, 0.7) as hex with alpha
    position: { top: '33%', left: '45%', width: '95px', height: '140px' },
  },
];

// Weekly impact metrics
export const weeklyImpact: ImpactMetric[] = [
  {
    label: 'CO₂ Saved',
    value: '12kg',
    icon: '🌿',
    color: 'green',
  },
  {
    label: 'Items Scanned',
    value: '47',
    icon: '⭐',
    color: 'amber',
  },
  {
    label: 'Points Earned',
    value: '250',
    icon: '📈',
    color: 'green',
  },
];

// Impact highlights for carousel
export const impactHighlights = [
  {
    id: 1,
    title: "You saved 12 fish this week! 🐟💙",
    subtext: "Cleaner oceans from choosing greener products.",
    icon: '🐟',
    gradient: ['#E0F2FE', '#BAE6FD'],
    earthMessage: "Great job!",
  },
  {
    id: 2,
    title: "Your impact = 0.8 trees planted 🌳",
    subtext: "CO₂ reductions from your scans add up.",
    icon: '🌳',
    gradient: ['#D1FAE5', '#A7F3D0'],
    earthMessage: "Amazing!",
  },
  {
    id: 3,
    title: "You avoided 4.2 miles of car emissions 🚗💨",
    subtext: "Lower carbon footprint this week.",
    icon: '🚗',
    gradient: ['#FEF3C7', '#FDE68A'],
    earthMessage: "Well done!",
  },
];

// Eco facts and tips
export const ecoFacts: EcoFact[] = [
  {
    id: 'fact-1',
    title: 'Ocean Absorption',
    description: 'Pears absorb more CO₂ than oceans in their lifetimes, contributing significantly to carbon reduction.',
    image: require('../assets/images/apple-with-white-background.png'),
  },
  {
    id: 'fact-2',
    title: 'Reduce Packaging Waste',
    description: 'Choose products with minimal packaging to reduce environmental impact by up to 40%.',
    image: require('../assets/images/hand-with-plant.png'),
  },
  {
    id: 'fact-3',
    title: 'Recycling Benefits',
    description: 'Recycling one aluminum can saves enough energy to power a laptop for 3 hours.',
    image: require('../assets/images/bins.png'),
  },
];

// Settings preferences (defaults)
export const defaultSettings = {
  privacy: {
    cameraAccess: true,
    locationAccess: false,
    friendsVisibility: true,
    leaderboardVisibility: true,
  },
  budget: {
    monthlyBudget: 500,
    ecoScoreGoal: 75,
    categoryLimits: {
      food: 200,
      personalCare: 50,
      household: 100,
    },
  },
  accessibility: {
    highContrast: false,
    largeOverlays: false,
    voiceGuidance: false,
    reduceMotion: false,
    hapticFeedback: true,
  },
  notifications: {
    allNotifications: true,
    weeklyImpact: true,
    scanReminder: true,
    productAlerts: true,
    leaderboardNotifs: false,
    friendActivity: true,
  },
};

// Earth messages based on mood
export const earthMessages = {
  happy: [
    "Welcome back! You're making a difference!",
    "Great choice! Keep up the eco-friendly shopping!",
    "Amazing work! Your impact is growing!",
  ],
  neutral: [
    "Not bad! But there might be better options available.",
    "You're on the right track!",
    "Every small choice matters!",
  ],
  sad: [
    "That one isn't great… Consider a greener alternative next time.",
    "Ouch! High carbon footprint detected.",
    "Let's try for a better choice next time!",
  ],
};

// FAQ data for tutorials
export const faqs = [
  {
    id: 'faq-1',
    question: 'How do I scan products?',
    answer: 'Point your camera at products on a shelf to see their sustainability ratings.',
    icon: '🔍',
  },
  {
    id: 'faq-2',
    question: 'How do I add friends?',
    answer: 'Go to Social page and tap "Add Friends" to connect with eco-friends.',
    icon: '👥',
  },
  {
    id: 'faq-3',
    question: 'How do I change my Local Area Code?',
    answer: 'Go to Settings > Account Information to update your LAC.',
    icon: '⚙️',
  },
  {
    id: 'faq-4',
    question: 'How do I earn more points?',
    answer: 'Scan products, complete challenges, and make sustainable choices!',
    icon: '📈',
  },
];

