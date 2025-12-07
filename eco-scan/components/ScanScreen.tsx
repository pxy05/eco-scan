// LEGACY WEB COMPONENT - NOT USED IN REACT NATIVE
// This is the original web React version. The React Native version is in app/(tabs)/scan.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X } from 'lucide-react';
import imgEarthCute from "figma:asset/afde586264834bcd046545c0d95a8cf848cc7628.png";
import imgEarthOkay from "figma:asset/1e1834c9877633fb626b2a16bf5528fdb2987e7d.png";
import imgEarthBad from "figma:asset/1ea02e27f6b43428c017efb0cfeaed32f7c36609.png";
import imgBanner3 from "figma:asset/606d5b783d2b7d8ffc5798d04d3698077704ec14.png";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  rating: 'Good' | 'Okay' | 'Bad';
  score: number;
  color: string;
  bgColor: string;
  borderColor: string;
  position: { top: string; left?: string; right?: string; width: string; height: string };
};

type Screen = 'welcome' | 'login' | 'register' | 'lac' | 'home' | 'social' | 'scan' | 'gallery' | 'settings' | 'tutorials' | 'account-info' | 'privacy' | 'budget' | 'accessibility' | 'notifications' | 'about-support';

export function ScanScreen({ setCurrentScreen }: { setCurrentScreen: (screen: Screen) => void }) {
  const [scanningState, setScanningState] = useState<'pre-scan' | 'overlays-visible'>('pre-scan');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [productA, setProductA] = useState<Product | null>(null);
  const [productB, setProductB] = useState<Product | null>(null);
  const [showPointsPopup, setShowPointsPopup] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [showProductACard, setShowProductACard] = useState(false);
  const [showProductBCard, setShowProductBCard] = useState(false);
  const [lastSelectedProduct, setLastSelectedProduct] = useState<Product | null>(null);

  // Start scanning after mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setScanningState('overlays-visible');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOverlayClick = (product: Product) => {
    setSelectedProduct(product);
    setShowBottomSheet(true);
  };

  const getPointsForRating = (rating: 'Good' | 'Okay' | 'Bad'): number => {
    if (rating === 'Good') return Math.floor(Math.random() * 11) + 10; // 10-20
    if (rating === 'Okay') return Math.floor(Math.random() * 4) + 2; // 2-5
    return Math.floor(Math.random() * 6) - 5; // -5 to 0
  };

  const getEarthMessage = (rating: 'Good' | 'Okay' | 'Bad', points: number): string => {
    if (rating === 'Good') return `Great choice! +${points} points!`;
    if (rating === 'Okay') return `Not bad! +${points} points.`;
    return `That one isn't great… ${points} points`;
  };

  const handleSelectProduct = () => {
    if (!selectedProduct) return;

    const points = getPointsForRating(selectedProduct.rating);
    const message = getEarthMessage(selectedProduct.rating, points);

    // Update last selected product to trigger mascot reaction change
    setLastSelectedProduct(selectedProduct);

    if (!productA) {
      setProductA(selectedProduct);
      setEarnedPoints(points);
      setShowPointsPopup(true);
      setTimeout(() => setShowPointsPopup(false), 2500);
      setShowProductACard(true);
      // Auto-hide card after 1 second
      setTimeout(() => setShowProductACard(false), 1000);
    } else if (!productB && selectedProduct.id !== productA.id) {
      setProductB(selectedProduct);
      setEarnedPoints(points);
      setShowPointsPopup(true);
      setTimeout(() => setShowPointsPopup(false), 2500);
      setShowProductBCard(true);
      // Auto-hide card after 1 second
      setTimeout(() => setShowProductBCard(false), 1000);
    }
    
    setShowBottomSheet(false);
    setSelectedProduct(null);
  };

  const getComparisonMessage = () => {
    if (!productA || !productB) return '';
    const diff = productA.score - productB.score;
    if (diff > 0) {
      return `${productA.subtitle} is ${Math.abs(diff)}pts better than ${productB.subtitle}.`;
    } else if (diff < 0) {
      return `${productB.subtitle} is ${Math.abs(diff)}pts better than ${productA.subtitle}.`;
    }
    return 'Both products are equally sustainable!';
  };

  const getEarthReactionForProduct = () => {
    if (!lastSelectedProduct) return '';
    if (lastSelectedProduct.rating === 'Good') return 'Great choice!';
    if (lastSelectedProduct.rating === 'Okay') return 'Not bad!';
    return 'Ouch!';
  };

  const getEarthImageForProduct = () => {
    if (!lastSelectedProduct) return imgEarthCute;
    if (lastSelectedProduct.rating === 'Good') return imgEarthCute;
    if (lastSelectedProduct.rating === 'Okay') return imgEarthOkay;
    return imgEarthBad;
  };

  const PRODUCTS: Product[] = [
    {
      id: 'honey-cheerios',
      name: 'Cheerios',
      subtitle: 'Honey Nut',
      rating: 'Good',
      score: 86,
      color: '#2d8a5a',
      bgColor: 'from-[#3BB273]/45 to-[#3BB273]/50',
      borderColor: 'border-[#3BB273]/70',
      // GOOD: Moved DOWN slightly (10-15% of overlay height) - centered on yellow Cheerios
      position: { top: '55%', left: '34%', width: '90px', height: '130px' }
    },
    {
      id: 'multi-cheerios',
      name: 'Cheerios',
      subtitle: 'Multigrain',
      rating: 'Okay',
      score: 63,
      color: '#f5b800',
      bgColor: 'from-[#FFC85C]/45 to-[#FFC85C]/50',
      borderColor: 'border-[#FFC85C]/70',
      // OKAY: Moved LEFT slightly (10-15% of overlay width) - aligned to green Cheerios
      position: { top: '33%', left: '-1%', width: '95px', height: '140px' }
    },
    {
      id: 'original-cheerios',
      name: 'Cheerios',
      subtitle: 'Original',
      rating: 'Bad',
      score: 41,
      color: '#e85555',
      bgColor: 'from-[#FF6B6B]/45 to-[#FF6B6B]/50',
      borderColor: 'border-[#FF6B6B]/70',
      // BAD: Position unchanged - correctly centered on red Cheerios
      position: { top: '33%', left: '45%', width: '95px', height: '140px' }
    }
  ];

  return (
    <div className="w-full h-full relative bg-black">
      {/* Camera View */}
      <img 
        src={imgBanner3} 
        alt="Shelf View" 
        className="w-full h-full object-cover"
      />
      
      {/* PRE-SCAN STATE: Before overlays appear */}
      {scanningState === 'pre-scan' && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Scanning frame */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border-3 border-white/60 rounded-[24px] flex items-center justify-center"
          >
            <p className="text-white bg-black/70 px-6 py-3 rounded-full text-sm font-medium">
              Scanning... hold steady
            </p>
          </motion.div>

          {/* Earth avatar - neutral */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-[120px] left-[20px]"
          >
            <img 
              src={imgEarthCute} 
              alt="Earth Character" 
              className="w-[70px] h-[70px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      )}

      {/* OVERLAYS VISIBLE STATE: After scanning completes */}
      {scanningState === 'overlays-visible' && (
        <>
          {/* AR Overlays - Adjusted positions, always visible */}
          <div className="absolute inset-0 pointer-events-none">
            {PRODUCTS.map((product) => (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleOverlayClick(product)}
                className="absolute pointer-events-auto"
                style={{
                  top: product.position.top,
                  left: product.position.left,
                  right: product.position.right,
                  width: product.position.width,
                  height: product.position.height
                }}
              >
                {/* Overlay background - 45-50% opacity, always visible */}
                <div className={`absolute inset-0 bg-gradient-to-b ${product.bgColor} rounded-[12px] border-2 ${product.borderColor} backdrop-blur-[1px]`} />
                
                {/* Score - centered in overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-white text-[10px] font-bold drop-shadow-lg">{product.score}/100</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Clean UI - Only essential elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Instruction Text - Only if no products selected */}
            {!productA && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-[15%] left-1/2 -translate-x-1/2"
              >
                <p className="text-white text-center bg-black/70 px-6 py-3 rounded-full text-sm font-medium">
                  Tap on products to compare
                </p>
              </motion.div>
            )}

            {/* Info Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setCurrentScreen('tutorials')}
              className="absolute top-[60px] right-[20px] w-[44px] h-[44px] bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center justify-center pointer-events-auto"
            >
              <Info className="w-5 h-5 text-[#1C1C1E]" />
              <span className="absolute -bottom-5 text-[10px] text-gray-400 whitespace-nowrap">View Tutorials</span>
            </motion.button>

            {/* Earth Avatar - Single clean message */}
            {productA && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute bottom-[120px] left-[20px] pointer-events-none"
              >
                <div className="relative">
                  <img 
                    src={getEarthImageForProduct()} 
                    alt="Earth Character" 
                    className="w-[70px] h-[70px] object-contain drop-shadow-2xl"
                  />
                  
                  {/* Single short message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-[12px] px-3 py-1.5 shadow-lg whitespace-nowrap text-xs font-medium"
                  >
                    {getEarthReactionForProduct()}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Points Popup - Near Earth */}
            <AnimatePresence>
              {showPointsPopup && (
                <motion.div
                  initial={{ scale: 0, x: -10 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className={`absolute bottom-[160px] left-[60px] ${earnedPoints >= 0 ? 'bg-[#3BB273]' : 'bg-[#FF6B6B]'} text-white rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap text-xs font-bold pointer-events-none`}
                >
                  {earnedPoints >= 0 ? '+' : ''}{earnedPoints} Eco Points!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Comparison Message - ONLY when both products selected */}
            {productA && productB && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-[20%] left-1/2 -translate-x-1/2 max-w-[320px] px-4"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-[20px] px-5 py-3 shadow-xl">
                  <p className="text-[#3BB273] font-medium text-center text-sm">{getComparisonMessage()}</p>
                </div>
              </motion.div>
            )}

            {/* Product A Card */}
            <AnimatePresence>
              {showProductACard && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute bottom-[40px] left-[20px] pointer-events-auto"
                >
                  <div 
                    className="bg-white rounded-[16px] shadow-lg p-3 pr-2 flex items-center gap-2 min-w-[140px]"
                    style={{ borderLeft: `4px solid ${productA?.color}` }}
                  >
                    <div className="flex-1">
                      <p className="text-[#1C1C1E] text-xs font-medium">{productA?.subtitle}</p>
                      <p className="text-[10px] text-gray-600">{productA?.score}/100</p>
                    </div>
                    <button
                      onClick={() => {
                        setProductA(null);
                        setShowProductACard(false);
                      }}
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                    >
                      <X className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product B Card */}
            <AnimatePresence>
              {showProductBCard && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute bottom-[40px] right-[20px] pointer-events-auto"
                >
                  <div 
                    className="bg-white rounded-[16px] shadow-lg p-3 pr-2 flex items-center gap-2 min-w-[140px]"
                    style={{ borderLeft: `4px solid ${productB?.color}` }}
                  >
                    <div className="flex-1">
                      <p className="text-[#1C1C1E] text-xs font-medium">{productB?.subtitle}</p>
                      <p className="text-[10px] text-gray-600">{productB?.score}/100</p>
                    </div>
                    <button
                      onClick={() => {
                        setProductB(null);
                        setShowProductBCard(false);
                      }}
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                    >
                      <X className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}

      {/* Product Detail Bottom Sheet */}
      <AnimatePresence>
        {showBottomSheet && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 z-50 flex items-end"
            onClick={() => setShowBottomSheet(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white rounded-t-[32px] p-6"
            >
              {/* Handle Bar */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>

              {/* Product Info */}
              <div className="mb-6">
                <h2 className="text-[#1C1C1E] mb-1">{selectedProduct.name} – {selectedProduct.subtitle}</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="px-4 py-2 rounded-full text-white font-medium"
                    style={{ backgroundColor: selectedProduct.color }}
                  >
                    {selectedProduct.rating}
                  </div>
                  <span className="text-gray-600 font-bold">{selectedProduct.score}/100</span>
                </div>

                {/* Short sustainability summary */}
                <div className="bg-gray-50 rounded-[16px] p-4 mb-4">
                  <h3 className="text-[#1C1C1E] text-sm mb-2">Sustainability Summary</h3>
                  <p className="text-xs text-gray-600">
                    {selectedProduct.rating === 'Good' && 'This product has low environmental impact, is made from sustainable ingredients, and uses eco-friendly packaging.'}
                    {selectedProduct.rating === 'Okay' && 'This product has moderate environmental impact. Some sustainable practices are used, but there\'s room for improvement.'}
                    {selectedProduct.rating === 'Bad' && 'This product has high environmental impact with limited sustainable practices and non-eco-friendly packaging.'}
                  </p>
                </div>

                {/* Key Environmental Factors */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <p className="text-xs text-gray-600 mb-1">Carbon Footprint</p>
                    <p className="text-sm font-medium">{selectedProduct.rating === 'Good' ? 'Low' : selectedProduct.rating === 'Okay' ? 'Medium' : 'High'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <p className="text-xs text-gray-600 mb-1">Recyclability</p>
                    <p className="text-sm font-medium">{selectedProduct.rating === 'Good' ? '95%' : selectedProduct.rating === 'Okay' ? '70%' : '40%'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <p className="text-xs text-gray-600 mb-1">Water Usage</p>
                    <p className="text-sm font-medium">{selectedProduct.rating === 'Good' ? 'Low' : selectedProduct.rating === 'Okay' ? 'Medium' : 'High'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-[12px] p-3">
                    <p className="text-xs text-gray-600 mb-1">Fair Trade</p>
                    <p className="text-sm font-medium">{selectedProduct.rating === 'Good' ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>

              {/* Choose Button */}
              <div className="flex gap-3">
                <button
                  onClick={handleSelectProduct}
                  className="flex-1 bg-[#3BB273] text-white py-4 rounded-[16px] min-h-[56px] font-medium"
                >
                  Choose Product
                </button>
                <button
                  onClick={() => setShowBottomSheet(false)}
                  className="flex-1 bg-gray-200 text-[#1C1C1E] py-4 rounded-[16px] min-h-[56px] font-medium"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}