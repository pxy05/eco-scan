// LEGACY WEB APP - NOT USED IN REACT NATIVE
// This file is the original web React app. The React Native version uses Expo Router
// with file-based routing in the app/ directory.

import React, { useState } from 'react';
import { Home, Users, Camera, Image as ImageIcon, Settings, Award, Star, Leaf, TrendingUp, ChevronRight, X, CheckCircle, Circle, Info, Search, Play, HelpCircle, ArrowLeft, Mail, Lock, User, Fish, TreePine, Car, Bell, Shield, DollarSign, Eye, FileText, Trash2, Download, Volume2, Vibrate, Globe, MessageCircle, Edit, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScanScreen } from './components/ScanScreen';
import { AccountInfoScreen, PrivacyScreen, BudgetScreen, AccessibilityScreen, NotificationsScreen, AboutSupportScreen } from './components/SettingsSubpages';
import imgEarthCute from "figma:asset/afde586264834bcd046545c0d95a8cf848cc7628.png";
import imgBanner3 from "figma:asset/606d5b783d2b7d8ffc5798d04d3698077704ec14.png";
import imgBanner from "figma:asset/89a68d4d2e443dc9d128552198c6b4bb9fbaa707.png";
import imgBanner1 from "figma:asset/baf74e84966d0bf95bcc545f957ceb14388bfe31.png";
import imgAppleLogo from "figma:asset/c63fba18206dca14439023ec44669018016f4c06.png";
import imgGoogleLogo from "figma:asset/ba3866200fe28581a00f9748cde3c8d6caff1223.png";

type Screen = 'welcome' | 'login' | 'register' | 'lac' | 'home' | 'social' | 'scan' | 'tutorials' | 'settings' | 'account-info' | 'privacy' | 'budget' | 'accessibility' | 'notifications' | 'about-support';
type EarthMood = 'happy' | 'neutral' | 'sad';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [ecoPoints, setEcoPoints] = useState(2450);
  const [earthMood, setEarthMood] = useState<EarthMood>('happy');
  const [earthMessage, setEarthMessage] = useState("Welcome back! You're making a difference!");

  const showBottomNav = ['home', 'social', 'scan', 'tutorials', 'settings'].includes(currentScreen);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* iPhone Frame */}
      <div className="relative w-[430px] h-[932px] bg-black rounded-[60px] shadow-2xl p-[14px]">
        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-white rounded-[46px] overflow-hidden">
          {/* Status Bar */}
          <StatusBar />

          {/* Screen Content */}
          <div className="relative w-full h-full pt-[44px] pb-[84px]">
            <AnimatePresence mode="wait">
              {currentScreen === 'welcome' && (
                <WelcomeScreen key="welcome" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'login' && (
                <LoginScreen key="login" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'register' && (
                <RegisterScreen key="register" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'lac' && (
                <LACScreen key="lac" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'home' && (
                <HomeScreen 
                  key="home" 
                  ecoPoints={ecoPoints} 
                  earthMessage={earthMessage}
                  earthMood={earthMood}
                />
              )}
              {currentScreen === 'social' && (
                <SocialScreen key="social" />
              )}
              {currentScreen === 'scan' && (
                <ScanScreen key="scan" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'tutorials' && (
                <TutorialsScreen key="tutorials" />
              )}
              {currentScreen === 'settings' && (
                <SettingsScreen key="settings" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'account-info' && (
                <AccountInfoScreen key="account-info" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'privacy' && (
                <PrivacyScreen key="privacy" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'budget' && (
                <BudgetScreen key="budget" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'accessibility' && (
                <AccessibilityScreen key="accessibility" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'notifications' && (
                <NotificationsScreen key="notifications" setCurrentScreen={setCurrentScreen} />
              )}
              {currentScreen === 'about-support' && (
                <AboutSupportScreen key="about-support" setCurrentScreen={setCurrentScreen} />
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          {showBottomNav && (
            <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
          )}

          {/* Home Indicator */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full" />

          {/* Product Detail Modal */}
          <AnimatePresence>
            {showProductDetail && selectedProduct && (
              <ProductDetailModal 
                product={selectedProduct}
                onClose={() => setShowProductDetail(false)}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Notch */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px] z-50" />
      </div>
    </div>
  );
}

// Status Bar Component
function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-[40px] pt-[12px] z-40 bg-white">
      <span className="tracking-tight">9:41</span>
      <div className="flex items-center gap-1">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H12.5C13.3284 0 14 0.671573 14 1.5V10.5C14 11.3284 13.3284 12 12.5 12H1.5C0.671573 12 0 11.3284 0 10.5V1.5Z" fill="black" opacity="0.35"/>
          <path d="M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V10.5C13 10.7761 12.7761 11 12.5 11H1.5C1.22386 11 1 10.7761 1 10.5V1.5Z" fill="black" opacity="0.3"/>
          <rect x="15" y="4" width="2" height="4" rx="1" fill="black" opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// Bottom Navigation Component
function BottomNav({ currentScreen, setCurrentScreen }: { currentScreen: Screen; setCurrentScreen: (screen: Screen) => void }) {
  const navItems = [
    { id: 'home' as Screen, icon: Home, label: 'Home' },
    { id: 'social' as Screen, icon: Users, label: 'Social' },
    { id: 'scan' as Screen, icon: Camera, label: 'Scan', isCenter: true },
    { id: 'tutorials' as Screen, icon: BookOpen, label: 'Tutorials' },
    { id: 'settings' as Screen, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="absolute bottom-[20px] left-0 right-0 h-[70px] bg-white border-t border-gray-200 flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;

        if (item.isCenter) {
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className="flex flex-col items-center justify-center -mt-6"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#3BB273] to-[#2d8a5a] flex items-center justify-center shadow-lg">
                <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
            </button>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className="flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px]"
          >
            <Icon 
              className={`w-6 h-6 ${isActive ? 'text-[#3BB273]' : 'text-gray-400'}`} 
              strokeWidth={2}
            />
            {isActive && (
              <motion.div 
                layoutId="activeIndicator"
                className="w-1 h-1 rounded-full bg-[#3BB273]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

// Welcome Screen Component
function WelcomeScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full flex flex-col items-center justify-center bg-white px-8"
    >
      {/* Logo and Tagline */}
      <div className="text-center mb-8">
        <h1 className="text-[#1C1C1E] mb-2 text-5xl font-bold">Eco-Scan</h1>
        <p className="text-gray-600 mb-1 text-lg">Scan a shelf.</p>
        <p className="text-[#3BB273] text-xl font-semibold">Save a planet.</p>
      </div>

      {/* Cute Earth Character */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 3, -3, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mb-12"
      >
        <img 
          src={imgEarthCute} 
          alt="Earth Character" 
          className="w-[200px] h-[200px] object-contain"
        />
      </motion.div>

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <button
          onClick={() => setCurrentScreen('login')}
          className="w-full bg-[#3BB273] text-white py-4 rounded-[12px] min-h-[56px]"
        >
          Login
        </button>
        <button
          onClick={() => setCurrentScreen('register')}
          className="w-full bg-white border-2 border-[#3BB273] text-[#3BB273] py-4 rounded-[12px] min-h-[56px]"
        >
          Create Account
        </button>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-400 text-center mt-6">
        By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
      </p>
    </motion.div>
  );
}

// Login Screen Component
function LoginScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('welcome')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#1C1C1E] mb-2">Welcome back!</h1>
        <p className="text-gray-600">Login to continue your eco-journey</p>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
        </div>
        
        <button
          onClick={() => setCurrentScreen('home')}
          className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] mt-6 min-h-[56px]"
        >
          Login
        </button>
        
        <button
          className="w-full text-[#3BB273] text-sm mt-4"
          onClick={() => setCurrentScreen('lac')}
        >
          Forgot Password?
        </button>
      </div>

      {/* Social Login */}
      <div className="space-y-3">
        <button className="w-full bg-white border-2 border-gray-200 py-4 rounded-[16px] flex items-center justify-center gap-3 min-h-[56px]">
          <img src={imgAppleLogo} alt="Apple" className="w-5 h-5" />
          <span className="text-[#1C1C1E]">Continue with Apple</span>
        </button>
        <button className="w-full bg-white border-2 border-gray-200 py-4 rounded-[16px] flex items-center justify-center gap-3 min-h-[56px]">
          <img src={imgGoogleLogo} alt="Google" className="w-5 h-5" />
          <span className="text-[#1C1C1E]">Continue with Google</span>
        </button>
      </div>

      {/* Register Link */}
      <p className="text-center mt-6 text-gray-600">
        Don&apos;t have an account?{' '}
        <button onClick={() => setCurrentScreen('register')} className="text-[#3BB273]">
          Create Account
        </button>
      </p>

      <div className="h-8" />
    </motion.div>
  );
}

// Register Screen Component
function RegisterScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('welcome')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#1C1C1E] mb-2">Create Account</h1>
        <p className="text-gray-600">Join the eco-friendly community</p>
      </div>

      {/* Register Form */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>
        </div>
        
        <button
          onClick={() => setCurrentScreen('lac')}
          className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] mt-6 min-h-[56px]"
        >
          Continue
        </button>
      </div>

      {/* Social Register */}
      <div className="space-y-3">
        <button className="w-full bg-white border-2 border-gray-200 py-4 rounded-[16px] flex items-center justify-center gap-3 min-h-[56px]">
          <img src={imgAppleLogo} alt="Apple" className="w-5 h-5" />
          <span className="text-[#1C1C1E]">Sign up with Apple</span>
        </button>
        <button className="w-full bg-white border-2 border-gray-200 py-4 rounded-[16px] flex items-center justify-center gap-3 min-h-[56px]">
          <img src={imgGoogleLogo} alt="Google" className="w-5 h-5" />
          <span className="text-[#1C1C1E]">Sign up with Google</span>
        </button>
      </div>

      {/* Login Link */}
      <p className="text-center mt-6 text-gray-600">
        Already have an account?{' '}
        <button onClick={() => setCurrentScreen('login')} className="text-[#3BB273]">
          Login
        </button>
      </p>

      <div className="h-8" />
    </motion.div>
  );
}

// LAC Screen Component (Local Area Code)
function LACScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('register')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#1C1C1E] mb-2">Almost there!</h1>
        <p className="text-gray-600">Set up your profile</p>
      </div>

      {/* LAC Form */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-[#1C1C1E] mb-2">Local Area Code *</label>
            <input
              type="text"
              placeholder="e.g., SW1A 1AA"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
            <button className="text-[#3BB273] text-sm mt-2">
              Don&apos;t know your Local Area Code? Click here
            </button>
          </div>
          
          <div>
            <label className="block text-[#1C1C1E] mb-2">Username *</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-[#1C1C1E]">Appear on leaderboard?</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={showLeaderboard}
                onChange={(e) => setShowLeaderboard(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>
        </div>
        
        <button
          onClick={() => setCurrentScreen('home')}
          className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] mt-6 min-h-[56px]"
        >
          Complete Setup
        </button>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Home Screen Component
function HomeScreen({ ecoPoints, earthMessage, earthMood }: { ecoPoints: number; earthMessage: string; earthMood: EarthMood }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-5 pb-6"
    >
      {/* Header */}
      <div className="pt-4 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Leaf className="w-6 h-6 text-[#3BB273]" />
          <h1 className="text-[#1C1C1E]">Eco-Scan</h1>
        </div>
        <p className="text-gray-600">Scan a shelf. Save a planet.</p>
      </div>

      {/* Earth Avatar with Points */}
      <EarthAvatarCard ecoPoints={ecoPoints} mood={earthMood} message={earthMessage} />

      {/* Impact Highlights Carousel */}
      <div className="mt-6">
        <h2 className="text-[#1C1C1E] mb-4">Impact Highlights</h2>
        <ImpactHighlightsCarousel />
      </div>

      {/* Weekly Impact Section */}
      <div className="mt-6">
        <h2 className="text-[#1C1C1E] mb-4">Your Weekly Impact</h2>
        <div className="grid grid-cols-3 gap-3">
          <ImpactCard icon={Leaf} value="12kg" label="CO₂ Saved" color="green" />
          <ImpactCard icon={Star} value="47" label="Items Scanned" color="amber" />
          <ImpactCard icon={TrendingUp} value="250" label="Points Earned" color="green" />
        </div>
      </div>

      {/* Eco Facts & Tips */}
      <div className="mt-6">
        <h2 className="text-[#1C1C1E] mb-4">Eco Facts & Tips</h2>
        <div className="space-y-4">
          <EcoFactCard
            title="Ocean Absorption"
            description="Pears absorb more CO₂ than oceans in their lifetimes, contributing significantly to carbon reduction."
            image="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=200&fit=crop"
          />
          <EcoFactCard
            title="Reduce Packaging Waste"
            description="Choose products with minimal packaging to reduce environmental impact by up to 40%."
            image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop"
          />
          <EcoFactCard
            title="Recycling Benefits"
            description="Recycling one aluminum can saves enough energy to power a laptop for 3 hours."
            image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop"
          />
        </div>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Earth Avatar Card Component
function EarthAvatarCard({ ecoPoints, mood, message }: { ecoPoints: number; mood: EarthMood; message: string }) {
  const percentage = (ecoPoints % 1000) / 1000 * 100;
  const level = Math.floor(ecoPoints / 1000) + 1;

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-md">
      <div className="flex items-center gap-4">
        {/* Earth Avatar with Progress Ring */}
        <div className="relative flex-shrink-0">
          <svg className="w-[110px] h-[110px] -rotate-90">
            <circle
              cx="55"
              cy="55"
              r="48"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
            />
            <motion.circle
              cx="55"
              cy="55"
              r="48"
              fill="none"
              stroke="#3BB273"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 48}
              strokeDashoffset={2 * Math.PI * 48 * (1 - percentage / 100)}
              initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - percentage / 100) }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img 
              src={imgEarthCute} 
              alt="Earth" 
              className="w-[85px] h-[85px] object-contain"
            />
          </motion.div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-[#3BB273]" />
            <span className="text-[#1C1C1E]">Level {level}</span>
          </div>
          <p className="text-[#3BB273] mb-2">{ecoPoints.toLocaleString()} Eco Points</p>
          <p className="text-gray-600 text-sm">{1000 - (ecoPoints % 1000)} points to Level {level + 1}</p>
        </div>
      </div>

      {/* Earth Message */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 bg-gradient-to-r from-[#f0fdf4] to-[#f0fdf4] rounded-[16px] p-4 border-2 border-[#3BB273]/20"
      >
        <p className="text-[#1C1C1E] text-sm leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

// Impact Card Component
function ImpactCard({ icon: Icon, value, label, color }: { icon: any; value: string; label: string; color: 'green' | 'amber' }) {
  const bgColor = color === 'green' ? 'bg-[#f0fdf4]' : 'bg-[#fffbeb]';
  const iconColor = color === 'green' ? 'text-[#3BB273]' : 'text-[#E6A000]';

  return (
    <div className={`${bgColor} rounded-[16px] p-4 flex flex-col items-center text-center`}>
      <Icon className={`w-6 h-6 ${iconColor} mb-2`} />
      <p className="text-[#1C1C1E] mb-1">{value}</p>
      <p className="text-gray-600 text-xs">{label}</p>
    </div>
  );
}

// Eco Fact Card Component  
function EcoFactCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-md">
      <div className="h-[140px] relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-white">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Social Screen Component
function SocialScreen() {
  const challenges = [
    { id: 1, title: 'Scan 3 recyclable snacks', progress: 2, total: 3, reward: 50 },
    { id: 2, title: 'Choose 5 low-carbon products', progress: 3, total: 5, reward: 75 },
    { id: 3, title: 'Share your eco-journey', progress: 0, total: 1, reward: 100 },
  ];

  const leaderboard = [
    { rank: 1, name: 'EcoWarrior23', points: 5240, avatar: '🌟' },
    { rank: 2, name: 'GreenQueen', points: 4830, avatar: '🌱' },
    { rank: 3, name: 'PlantBased', points: 4120, avatar: '🌿' },
    { rank: 4, name: 'You', points: 2450, avatar: '🌍', isYou: true },
    { rank: 5, name: 'EcoFriend', points: 2100, avatar: '♻️' },
  ];

  const hotItems = [
    { name: 'Organic Cereal', rating: 'Good', color: '#3BB273', image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=200&h=200&fit=crop' },
    { name: 'Plant Milk', rating: 'Great', color: '#3BB273', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop' },
    { name: 'Eco Snacks', rating: 'Okay', color: '#FFC85C', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop' },
    { name: 'Green Tea', rating: 'Good', color: '#3BB273', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-white px-5 pb-6"
    >
      {/* Header */}
      <div className="pt-4 pb-6">
        <h1 className="text-[#1C1C1E]">Social</h1>
        <p className="text-gray-600">Connect and compete with eco-friends</p>
      </div>

      {/* Weekly Challenges */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#1C1C1E]">Weekly Challenges</h2>
          <Award className="w-5 h-5 text-[#E6A000]" />
        </div>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🏆</span>
          <h2 className="text-[#1C1C1E]">Leaderboard</h2>
          <span className="text-2xl">🏆</span>
        </div>
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-[20px] p-4 space-y-2">
          {leaderboard.map((user) => (
            <LeaderboardItem key={user.rank} user={user} />
          ))}
        </div>
      </div>

      {/* Friends Management */}
      <div className="mb-6">
        <h2 className="text-[#1C1C1E] mb-4">Friends</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white border-2 border-[#3BB273] rounded-[16px] p-4 flex items-center justify-center gap-2 min-h-[60px]">
            <Users className="w-5 h-5 text-[#3BB273]" />
            <span className="text-[#3BB273]">Add Friends</span>
          </button>
          <button className="bg-white border-2 border-gray-300 rounded-[16px] p-4 flex items-center justify-center gap-2 min-h-[60px]">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Manage</span>
          </button>
        </div>
      </div>

      {/* Hot Items */}
      <div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🔥</span>
          <h2 className="text-[#1C1C1E]">Hot Items</h2>
          <span className="text-2xl">🔥</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {hotItems.map((item, idx) => (
            <HotItemCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Challenge Card Component
function ChallengeCard({ challenge }: { challenge: any }) {
  const progress = (challenge.progress / challenge.total) * 100;
  const isComplete = challenge.progress >= challenge.total;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-[16px] p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="text-[#1C1C1E] mb-1">{challenge.title}</p>
          <p className="text-sm text-gray-600">{challenge.progress}/{challenge.total} completed</p>
        </div>
        <div className="bg-[#fffbeb] px-3 py-1 rounded-full">
          <span className="text-[#E6A000] text-sm">+{challenge.reward} pts</span>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#3BB273] to-[#2d8a5a] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {isComplete && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-2 mt-2 text-[#3BB273]"
        >
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm">Complete! Claim reward</span>
        </motion.div>
      )}
    </div>
  );
}

// Leaderboard Item Component
function LeaderboardItem({ user }: { user: any }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-[12px] ${user.isYou ? 'bg-[#f0fdf4] border-2 border-[#3BB273]' : 'bg-white'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user.rank <= 3 ? 'bg-gradient-to-br from-[#FFC85C] to-[#ff9800]' : 'bg-gray-200'}`}>
          <span className={user.rank <= 3 ? 'text-white text-xs' : 'text-gray-600 text-xs'}>#{user.rank}</span>
        </div>
        <div className="text-2xl">{user.avatar}</div>
        <span className="text-[#1C1C1E]">{user.name}</span>
      </div>
      <span className="text-[#3BB273]">{user.points.toLocaleString()}</span>
    </div>
  );
}

// Hot Item Card Component
function HotItemCard({ item }: { item: any }) {
  return (
    <div className="flex-shrink-0 w-[140px] bg-white rounded-[16px] overflow-hidden shadow-md">
      <div className="relative h-[140px]">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs`} style={{ backgroundColor: item.color }}>
          {item.rating}
        </div>
      </div>
      <div className="p-3">
        <p className="text-[#1C1C1E] text-sm">{item.name}</p>
      </div>
    </div>
  );
}



// Settings Screen Component
function SettingsScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const settingsOptions = [
    { icon: User, label: 'Account Information', hasChevron: true, screen: 'account-info' as Screen },
    { icon: Shield, label: 'Privacy', hasChevron: true, screen: 'privacy' as Screen },
    { icon: DollarSign, label: 'Budget', hasChevron: true, screen: 'budget' as Screen },
    { icon: Eye, label: 'Accessibility', hasChevron: true, screen: 'accessibility' as Screen },
    { icon: Bell, label: 'Notifications', hasChevron: true, screen: 'notifications' as Screen },
    { icon: Info, label: 'About & Support', hasChevron: true, screen: 'about-support' as Screen },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-white px-5 pb-6"
    >
      {/* Header */}
      <div className="pt-4 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Settings className="w-6 h-6 text-[#3BB273]" />
          <h1 className="text-[#1C1C1E]">Settings</h1>
        </div>
        <p className="text-gray-600">Manage your account & preferences</p>
      </div>

      {/* Settings List */}
      <div className="space-y-3">
        {settingsOptions.map((option, idx) => {
          const Icon = option.icon;
          return (
            <button
              key={idx}
              onClick={() => setCurrentScreen(option.screen)}
              className="w-full bg-white border-2 border-gray-200 rounded-[16px] p-4 flex items-center justify-between min-h-[60px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f0fdf4] rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#3BB273]" />
                </div>
                <span className="text-[#1C1C1E]">{option.label}</span>
              </div>
              {option.hasChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
            </button>
          );
        })}
      </div>

      {/* App Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">Eco-Scan v2.0</p>
        <p className="text-gray-400 text-xs mt-1">Scan a shelf. Save a planet.</p>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Tutorials Screen Component
function TutorialsScreen() {
  const faqs = [
    { icon: Search, question: 'How do I scan products?', answer: 'Point your camera at products on a shelf to see their sustainability ratings.' },
    { icon: Users, question: 'How do I add friends?', answer: 'Go to Social page and tap "Add Friends" to connect with eco-friends.' },
    { icon: Settings, question: 'How do I change my Local Area Code?', answer: 'Go to Settings > Account Information to update your LAC.' },
    { icon: TrendingUp, question: 'How do I earn more points?', answer: 'Scan products, complete challenges, and make sustainable choices!' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-white px-5 pb-6"
    >
      {/* Header */}
      <div className="pt-4 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-6 h-6 text-[#3BB273]" />
          <h1 className="text-[#1C1C1E]">Tutorials</h1>
        </div>
        <p className="text-gray-600">Learn how to use Eco-Scan</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tutorials…"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
          />
        </div>
      </div>

      {/* Video Tutorial Card */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-[#3BB273] to-[#2d8a5a] rounded-[20px] p-6 text-white relative overflow-hidden h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <img src={imgBanner} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
            <h3 className="mb-2">Watch Tutorial</h3>
            <p className="text-sm opacity-90">Learn how to use Eco-Scan in 2 minutes</p>
          </div>
        </div>
      </div>

      {/* FAQ Cards */}
      <div>
        <h2 className="text-[#1C1C1E] mb-4">Frequently Asked</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            return (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-[16px] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#f0fdf4] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#3BB273]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1C1C1E] mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Product Detail Modal Component
function ProductDetailModal({ product, onClose }: { product: any; onClose: () => void }) {
  const metrics = [
    { label: 'Carbon Footprint', value: product.rating === 'Good' || product.rating === 'Great' ? 'Low' : 'High', score: product.score, color: product.color },
    { label: 'Recyclability', value: product.rating === 'Good' || product.rating === 'Great' ? '95%' : '45%', score: product.rating === 'Good' || product.rating === 'Great' ? 95 : 45, color: product.color },
    { label: 'Water Usage', value: product.rating === 'Good' || product.rating === 'Great' ? 'Low' : 'High', score: product.rating === 'Good' || product.rating === 'Great' ? 82 : 38, color: product.color },
    { label: 'Fair Trade', value: product.rating === 'Good' || product.rating === 'Great' ? 'Yes' : 'No', score: product.rating === 'Good' || product.rating === 'Great' ? 100 : 20, color: product.color },
  ];

  const earthComment = product.rating === 'Good' || product.rating === 'Great'
    ? "Excellent choice! This product has great sustainability metrics. Keep it up! 🌟"
    : product.rating === 'Okay'
    ? "Not bad! But there might be better options available. 🤔"
    : "Ouch! High carbon footprint. Consider choosing a greener alternative next time. 😢";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/50 z-50 flex items-end"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full bg-white rounded-t-[32px] max-h-[85%] overflow-y-auto"
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-white z-10">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-[#1C1C1E] mb-2">{product.name}</h2>
              <div className="flex items-center gap-3">
                <div 
                  className="px-4 py-2 rounded-full text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {product.rating}
                </div>
                <span className="text-gray-600 font-medium">{product.score}/100</span>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Earth Comment */}
          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e6f7ed] rounded-[20px] p-4 mb-6 flex items-start gap-3 border-2 border-[#3BB273]/20">
            <img 
              src={imgEarthCute} 
              alt="Earth" 
              className="w-14 h-14 object-contain flex-shrink-0"
            />
            <div className="flex-1 pt-1">
              <p className="text-[#1C1C1E] leading-relaxed">
                {earthComment}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <h3 className="text-[#1C1C1E]">Sustainability Metrics</h3>
            {metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#1C1C1E]">{metric.label}</span>
                  <span className="text-gray-600 font-medium">{metric.value}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.score}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: metric.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px]">
              Save to Gallery
            </button>
            <button className="bg-white border-2 border-[#3BB273] text-[#3BB273] py-4 rounded-[16px] min-h-[56px]">
              Compare
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Impact Highlights Carousel Component
function ImpactHighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    {
      id: 1,
      icon: Fish,
      title: "You saved 12 fish this week! 🐟💙",
      subtext: "Cleaner oceans from choosing greener products.",
      gradient: "from-[#E0F2FE] to-[#BAE6FD]",
      iconColor: "text-[#0EA5E9]",
      earthMessage: "Great job!"
    },
    {
      id: 2,
      icon: TreePine,
      title: "Your impact = 0.8 trees planted 🌳",
      subtext: "CO₂ reductions from your scans add up.",
      gradient: "from-[#D1FAE5] to-[#A7F3D0]",
      iconColor: "text-[#10B981]",
      earthMessage: "Amazing!"
    },
    {
      id: 3,
      icon: Car,
      title: "You avoided 4.2 miles of car emissions 🚗💨",
      subtext: "Lower carbon footprint this week.",
      gradient: "from-[#FEF3C7] to-[#FDE68A]",
      iconColor: "text-[#F59E0B]",
      earthMessage: "Well done!"
    }
  ];

  return (
    <div className="relative">
      {/* Scrollable container */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory">
        {highlights.map((highlight, idx) => {
          const Icon = highlight.icon;
          return (
            <div
              key={highlight.id}
              className={`flex-shrink-0 w-[320px] bg-gradient-to-br ${highlight.gradient} rounded-[24px] p-5 shadow-lg snap-center`}
            >
              {/* Icon and Earth Reaction */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md`}>
                  <Icon className={`w-6 h-6 ${highlight.iconColor}`} strokeWidth={2} />
                </div>
                
                {/* Earth Avatar with Speech Bubble */}
                <div className="relative">
                  <div className="absolute -top-8 -right-2 bg-white rounded-[12px] px-5 py-3 shadow-md whitespace-nowrap">
                    <p className="text-xs text-[#1C1C1E]">{highlight.earthMessage}</p>
                    <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white translate-y-full" />
                  </div>
                  <motion.img
                    src={imgEarthCute}
                    alt="Earth"
                    className="w-12 h-12 object-contain"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1C1C1E] mb-2 leading-tight">{highlight.title}</h3>
              
              {/* Subtext */}
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {highlights.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-[#3BB273] w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}