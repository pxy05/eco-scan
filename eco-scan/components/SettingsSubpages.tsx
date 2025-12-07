// LEGACY WEB COMPONENT - NOT USED IN REACT NATIVE
// This is the original web React version. The React Native versions are in app/settings/*.tsx

import React, { useState } from 'react';
import { ArrowLeft, Edit, Trash2, Download, DollarSign, Shield, HelpCircle, MessageCircle, FileText, Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import imgEarthCute from "figma:asset/afde586264834bcd046545c0d95a8cf848cc7628.png";

type Screen = 'welcome' | 'login' | 'register' | 'lac' | 'home' | 'social' | 'scan' | 'gallery' | 'settings' | 'tutorial' | 'account-info' | 'privacy' | 'budget' | 'accessibility' | 'notifications' | 'about-support';

// Account Information Screen Component
export function AccountInfoScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">Account Information</h1>
        <p className="text-gray-600">Manage your profile details</p>
      </div>

      {/* User Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-[#3BB273] to-[#2d8a5a] rounded-full flex items-center justify-center shadow-lg">
          <img src={imgEarthCute} alt="Avatar" className="w-20 h-20 object-contain" />
        </div>
      </div>

      {/* Account Details */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
              <span className="text-[#1C1C1E]">eco.warrior@email.com</span>
              <button className="text-[#3BB273] text-sm">Change</button>
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Username</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
              <span className="text-[#1C1C1E]">@EcoWarrior23</span>
              <button className="text-[#3BB273] text-sm flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Local Area Code</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
              <span className="text-[#1C1C1E]">SW1A 1AA</span>
              <button className="text-[#3BB273] text-sm">Change</button>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-white border-2 border-[#3BB273] text-[#3BB273] py-3 rounded-[12px] min-h-[48px]">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px]">
          Save Changes
        </button>
        <button className="w-full bg-white border-2 border-[#FF6B6B] text-[#FF6B6B] py-4 rounded-[16px] min-h-[56px] flex items-center justify-center gap-2">
          <Trash2 className="w-5 h-5" />
          Delete Account
        </button>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Privacy Screen Component
export function PrivacyScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [cameraAccess, setCameraAccess] = useState(true);
  const [locationAccess, setLocationAccess] = useState(false);
  const [friendsVisibility, setFriendsVisibility] = useState(true);
  const [leaderboardVisibility, setLeaderboardVisibility] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">Privacy</h1>
        <p className="text-gray-600">Control your data and permissions</p>
      </div>

      {/* Permissions */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <h3 className="text-[#1C1C1E] mb-4">Permissions</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Camera Access</p>
              <p className="text-sm text-gray-600">For scanning products</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={cameraAccess}
                onChange={(e) => setCameraAccess(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Location Access</p>
              <p className="text-sm text-gray-600">For local recommendations</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={locationAccess}
                onChange={(e) => setLocationAccess(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-[#1C1C1E]">Friends Visibility</p>
              <p className="text-sm text-gray-600">Let friends see your profile</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={friendsVisibility}
                onChange={(e) => setFriendsVisibility(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-t border-gray-100 pt-4">
            <div>
              <p className="text-[#1C1C1E]">Appear on Leaderboard</p>
              <p className="text-sm text-gray-600">Allow your Eco Score and username to be visible to friends and the community.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={leaderboardVisibility}
                onChange={(e) => setLeaderboardVisibility(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Data Usage */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <h3 className="text-[#1C1C1E] mb-3">Data Usage</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          We collect scan data to improve sustainability ratings and provide personalized recommendations. Your data is never sold to third parties.
        </p>
        <div className="space-y-3">
          <button className="w-full bg-white border-2 border-[#3BB273] text-[#3BB273] py-3 rounded-[12px] min-h-[48px] flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download My Data
          </button>
          <button className="w-full bg-white border-2 border-[#FF6B6B] text-[#FF6B6B] py-3 rounded-[12px] min-h-[48px] flex items-center justify-center gap-2">
            <Trash2 className="w-5 h-5" />
            Delete My Data
          </button>
        </div>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Budget Screen Component
export function BudgetScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [monthlyBudget, setMonthlyBudget] = useState('500');
  const [ecoScoreGoal, setEcoScoreGoal] = useState(75);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">Budget</h1>
        <p className="text-gray-600">Set your sustainability budget goals</p>
      </div>

      {/* Monthly Budget */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <h3 className="text-[#1C1C1E] mb-4">Monthly Sustainability Budget</h3>
        <div className="relative mb-2">
          <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="number"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-[16px] focus:outline-none focus:border-[#3BB273]"
          />
        </div>
        <p className="text-sm text-gray-600">Track eco-friendly purchases within your budget</p>
      </div>

      {/* Category Limits */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <h3 className="text-[#1C1C1E] mb-4">Category Limits</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <span className="text-[#1C1C1E]">Food & Groceries</span>
            <span className="text-gray-600">$200</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <span className="text-[#1C1C1E]">Personal Care</span>
            <span className="text-gray-600">$50</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <span className="text-[#1C1C1E]">Household Items</span>
            <span className="text-gray-600">$100</span>
          </div>
        </div>
      </div>

      {/* Eco Score Goal */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <h3 className="text-[#1C1C1E] mb-4">Eco Score Goal</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Target Score</span>
            <span className="text-[#3BB273]">{ecoScoreGoal}/100</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={ecoScoreGoal}
            onChange={(e) => setEcoScoreGoal(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#3BB273]"
          />
        </div>
        <p className="text-sm text-gray-600">Set your average sustainability score goal</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px]">
          Save Changes
        </button>
        <button className="w-full bg-white border-2 border-gray-300 text-gray-600 py-4 rounded-[16px] min-h-[56px]">
          Reset Budget
        </button>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}

// Accessibility Screen Component
export function AccessibilityScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeOverlays, setLargeOverlays] = useState(false);
  const [voiceGuidance, setVoiceGuidance] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hapticFeedback, setHapticFeedback] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">Accessibility</h1>
        <p className="text-gray-600">Customize your app experience</p>
      </div>

      {/* Accessibility Options */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">High Contrast AR Labels</p>
              <p className="text-sm text-gray-600">Easier to read overlays</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Large AR Overlay Boxes</p>
              <p className="text-sm text-gray-600">Bigger scan results</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={largeOverlays}
                onChange={(e) => setLargeOverlays(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Voice Guidance</p>
              <p className="text-sm text-gray-600">Audio recycling instructions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={voiceGuidance}
                onChange={(e) => setVoiceGuidance(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Reduce Motion</p>
              <p className="text-sm text-gray-600">Minimize animations</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={reduceMotion}
                onChange={(e) => setReduceMotion(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-[#1C1C1E]">Haptic Feedback</p>
              <p className="text-sm text-gray-600">Vibration on actions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={hapticFeedback}
                onChange={(e) => setHapticFeedback(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px]">
        Save Changes
      </button>

      <div className="h-8" />
    </motion.div>
  );
}

// Notifications Screen Component
export function NotificationsScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [weeklyImpact, setWeeklyImpact] = useState(true);
  const [scanReminder, setScanReminder] = useState(true);
  const [productAlerts, setProductAlerts] = useState(true);
  const [leaderboardNotifs, setLeaderboardNotifs] = useState(false);
  const [friendActivity, setFriendActivity] = useState(true);
  const [allNotifications, setAllNotifications] = useState(true);

  const handleToggleAll = (checked: boolean) => {
    setAllNotifications(checked);
    setWeeklyImpact(checked);
    setScanReminder(checked);
    setProductAlerts(checked);
    setLeaderboardNotifs(checked);
    setFriendActivity(checked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">Notifications</h1>
        <p className="text-gray-600">Manage your notification preferences</p>
      </div>

      {/* Master Toggle */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[#1C1C1E] mb-1">All Notifications</h3>
            <p className="text-sm text-gray-600">Turn all notifications on/off</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={allNotifications}
              onChange={(e) => handleToggleAll(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
          </label>
        </div>
      </div>

      {/* Notification Options */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Weekly Impact Summary</p>
              <p className="text-sm text-gray-600">Your eco-stats each week</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={weeklyImpact}
                onChange={(e) => setWeeklyImpact(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Reminder to Scan</p>
              <p className="text-sm text-gray-600">Before shopping reminders</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={scanReminder}
                onChange={(e) => setScanReminder(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Eco-Friendly Product Alerts</p>
              <p className="text-sm text-gray-600">New sustainable options</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={productAlerts}
                onChange={(e) => setProductAlerts(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-[#1C1C1E]">Leaderboard Notifications</p>
              <p className="text-sm text-gray-600">Rank changes & achievements</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={leaderboardNotifs}
                onChange={(e) => setLeaderboardNotifs(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-[#1C1C1E]">Friend Activity</p>
              <p className="text-sm text-gray-600">When friends scan products</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={friendActivity}
                onChange={(e) => setFriendActivity(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3BB273]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3BB273]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px]">
        Save Changes
      </button>

      <div className="h-8" />
    </motion.div>
  );
}

// About & Support Screen Component
export function AboutSupportScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const supportOptions = [
    { icon: HelpCircle, label: 'Help / FAQ', hasChevron: true },
    { icon: MessageCircle, label: 'Contact Support', hasChevron: true },
    { icon: FileText, label: 'Terms of Service', hasChevron: true },
    { icon: Shield, label: 'Privacy Policy', hasChevron: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full overflow-y-auto bg-gradient-to-b from-[#f0fdf4] to-white px-6 py-6"
    >
      {/* Back Button */}
      <button 
        onClick={() => setCurrentScreen('settings')}
        className="mb-6 flex items-center gap-2 text-[#3BB273]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#1C1C1E] mb-2">About & Support</h1>
        <p className="text-gray-600">Get help and learn more</p>
      </div>

      {/* App Info */}
      <div className="bg-white rounded-[24px] p-6 shadow-md mb-6 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-[#3BB273] to-[#2d8a5a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Leaf className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-[#1C1C1E] mb-1">Eco-Scan</h2>
        <p className="text-gray-600 mb-2">Version 2.0</p>
        <p className="text-sm text-gray-500">Scan a shelf. Save a planet.</p>
      </div>

      {/* Support Options */}
      <div className="space-y-3 mb-6">
        {supportOptions.map((option, idx) => {
          const Icon = option.icon;
          return (
            <button
              key={idx}
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

      {/* Credits */}
      <div className="bg-white rounded-[24px] p-6 shadow-md text-center">
        <p className="text-sm text-gray-600 mb-2">Made with 💚 for the planet</p>
        <p className="text-xs text-gray-400">© 2025 Eco-Scan. All rights reserved.</p>
      </div>

      <div className="h-8" />
    </motion.div>
  );
}