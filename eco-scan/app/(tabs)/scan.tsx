import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import Animated, { 
  useAnimatedStyle, 
  withTiming, 
  withSequence,
  withRepeat,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { assets } from '@/utils/assetMapping';
import { scanProducts } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Product {
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

export default function ScanScreen() {
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
  useEffect(() => {
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
    if (rating === 'Good') return Math.floor(Math.random() * 11) + 10;
    if (rating === 'Okay') return Math.floor(Math.random() * 4) + 2;
    return Math.floor(Math.random() * 6) - 5;
  };

  const handleSelectProduct = () => {
    if (!selectedProduct) return;

    const points = getPointsForRating(selectedProduct.rating);
    setLastSelectedProduct(selectedProduct);

    if (!productA) {
      setProductA(selectedProduct);
      setEarnedPoints(points);
      setShowPointsPopup(true);
      setTimeout(() => setShowPointsPopup(false), 2500);
      setShowProductACard(true);
      setTimeout(() => setShowProductACard(false), 1000);
    } else if (!productB && selectedProduct.id !== productA.id) {
      setProductB(selectedProduct);
      setEarnedPoints(points);
      setShowPointsPopup(true);
      setTimeout(() => setShowPointsPopup(false), 2500);
      setShowProductBCard(true);
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
    if (!lastSelectedProduct) return assets.earthCute;
    if (lastSelectedProduct.rating === 'Good') return assets.earthCute;
    if (lastSelectedProduct.rating === 'Okay') return assets.earthOkay;
    return assets.earthBad;
  };

  // Convert percentage position to pixels
  const getPositionStyle = (position: Product['position']) => {
    const topPercent = parseFloat(position.top.replace('%', ''));
    const top = (topPercent / 100) * SCREEN_HEIGHT;
    
    let left: number | undefined;
    let right: number | undefined;
    
    if (position.left) {
      const leftPercent = parseFloat(position.left.replace('%', ''));
      left = (leftPercent / 100) * SCREEN_WIDTH;
    }
    if (position.right) {
      const rightPercent = parseFloat(position.right.replace('%', ''));
      right = (rightPercent / 100) * SCREEN_WIDTH;
    }
    
    const width = parseFloat(position.width.replace('px', ''));
    const height = parseFloat(position.height.replace('px', ''));

    return {
      position: 'absolute' as const,
      top,
      left,
      right,
      width,
      height,
    };
  };

  return (
    <View style={styles.container}>
      {/* Camera View (Mock) */}
      <Image 
        source={assets.banner3}
        style={styles.cameraView}
        contentFit="cover"
      />

      {/* PRE-SCAN STATE */}
      {scanningState === 'pre-scan' && (
        <View style={styles.preScanOverlay}>
          <Animated.View 
            entering={FadeIn}
            style={styles.scanningFrame}
          >
            <View style={styles.scanningFrameInner}>
              <Text style={styles.scanningText}>Scanning... hold steady</Text>
            </View>
          </Animated.View>

          <Animated.View 
            entering={FadeIn}
            style={styles.earthPreScan}
          >
            <Image 
              source={assets.earthCute}
              style={styles.earthImage}
              contentFit="contain"
            />
          </Animated.View>
        </View>
      )}

      {/* OVERLAYS VISIBLE STATE */}
      {scanningState === 'overlays-visible' && (
        <>
          {/* AR Overlays */}
          <View style={styles.overlaysContainer}>
            {scanProducts.map((product) => (
              <Animated.View
                key={product.id}
                entering={FadeIn.delay(300)}
                style={[getPositionStyle(product.position)]}
              >
                <Pressable
                  onPress={() => handleOverlayClick(product)}
                  style={[
                    styles.overlay,
                    {
                      backgroundColor: product.bgColor,
                      borderColor: product.borderColor,
                      opacity: 0.45,
                    },
                  ]}
                >
                  <Text style={styles.overlayScore}>{product.score}/100</Text>
                </Pressable>
              </Animated.View>
            ))}
          </View>

          {/* Instruction Text */}
          {!productA && (
            <Animated.View 
              entering={FadeIn}
              style={styles.instructionContainer}
            >
              <View style={styles.instructionBubble}>
                <Text style={styles.instructionText}>Tap on products to compare</Text>
              </View>
            </Animated.View>
          )}

          {/* Info Button */}
          <Animated.View 
            entering={FadeIn}
            style={styles.infoButtonContainer}
          >
            <View style={styles.infoButtonWrapper}>
              <Pressable style={styles.infoButton}>
                <Ionicons name="information-circle" size={20} color={colors.textPrimary} />
              </Pressable>
              <Text style={styles.infoButtonText}>View Tutorials</Text>
            </View>
          </Animated.View>

          {/* Earth Avatar */}
          {productA && (
            <Animated.View 
              entering={FadeIn}
              style={styles.earthContainer}
            >
              <View style={styles.earthMessageBubble}>
                <Text style={styles.earthMessageText}>{getEarthReactionForProduct()}</Text>
              </View>
              <Image 
                source={getEarthImageForProduct()}
                style={styles.earthImage}
                contentFit="contain"
              />
            </Animated.View>
          )}

          {/* Points Popup */}
          {showPointsPopup && (
            <Animated.View 
              entering={FadeIn}
              exiting={FadeOut}
              style={[
                styles.pointsPopup,
                { backgroundColor: earnedPoints >= 0 ? colors.primary : colors.bad },
              ]}
            >
              <Text style={styles.pointsText}>
                {earnedPoints >= 0 ? '+' : ''}{earnedPoints} Eco Points!
              </Text>
            </Animated.View>
          )}

          {/* Comparison Message */}
          {productA && productB && (
            <Animated.View 
              entering={SlideInDown}
              style={styles.comparisonContainer}
            >
              <View style={styles.comparisonBubble}>
                <Text style={styles.comparisonText}>{getComparisonMessage()}</Text>
              </View>
            </Animated.View>
          )}

          {/* Product Cards */}
          {showProductACard && productA && (
            <Animated.View 
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.productCardA}
            >
              <View style={[styles.productCard, { borderLeftColor: productA.color }]}>
                <View style={styles.productCardContent}>
                  <Text style={styles.productCardName}>{productA.subtitle}</Text>
                  <Text style={styles.productCardScore}>{productA.score}/100</Text>
                </View>
                <Pressable
                  onPress={() => {
                    setProductA(null);
                    setShowProductACard(false);
                  }}
                  style={styles.closeButton}
                >
                  <Ionicons name="close" size={14} color={colors.gray[600]} />
                </Pressable>
              </View>
            </Animated.View>
          )}

          {showProductBCard && productB && (
            <Animated.View 
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.productCardB}
            >
              <View style={[styles.productCard, { borderLeftColor: productB.color }]}>
                <View style={styles.productCardContent}>
                  <Text style={styles.productCardName}>{productB.subtitle}</Text>
                  <Text style={styles.productCardScore}>{productB.score}/100</Text>
                </View>
                <Pressable
                  onPress={() => {
                    setProductB(null);
                    setShowProductBCard(false);
                  }}
                  style={styles.closeButton}
                >
                  <Ionicons name="close" size={14} color={colors.gray[600]} />
                </Pressable>
              </View>
            </Animated.View>
          )}
        </>
      )}

      {/* Product Detail Bottom Sheet */}
      <Modal
        visible={showBottomSheet}
        transparent
        animationType="none"
        onRequestClose={() => setShowBottomSheet(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setShowBottomSheet(false)}
        >
          <Animated.View 
            entering={SlideInDown}
            exiting={SlideOutDown}
            style={styles.bottomSheet}
          >
            <Pressable onPress={(e) => e.stopPropagation()}>
              <View style={styles.handleBar} />
              
              {selectedProduct && (
                <>
                  <View style={styles.bottomSheetContent}>
                    <Text style={styles.productName}>
                      {selectedProduct.name} – {selectedProduct.subtitle}
                    </Text>
                    <View style={styles.productRatingRow}>
                      <View style={[styles.ratingBadge, { backgroundColor: selectedProduct.color }]}>
                        <Text style={styles.ratingText}>{selectedProduct.rating}</Text>
                      </View>
                      <Text style={styles.productScore}>{selectedProduct.score}/100</Text>
                    </View>

                    <View style={styles.summaryCard}>
                      <Text style={styles.summaryTitle}>Sustainability Summary</Text>
                      <Text style={styles.summaryText}>
                        {selectedProduct.rating === 'Good' && 'This product has low environmental impact, is made from sustainable ingredients, and uses eco-friendly packaging.'}
                        {selectedProduct.rating === 'Okay' && 'This product has moderate environmental impact. Some sustainable practices are used, but there\'s room for improvement.'}
                        {selectedProduct.rating === 'Bad' && 'This product has high environmental impact with limited sustainable practices and non-eco-friendly packaging.'}
                      </Text>
                    </View>

                    <View style={styles.metricsGrid}>
                      <View style={styles.metricCard}>
                        <Text style={styles.metricLabel}>Carbon Footprint</Text>
                        <Text style={styles.metricValue}>
                          {selectedProduct.rating === 'Good' ? 'Low' : selectedProduct.rating === 'Okay' ? 'Medium' : 'High'}
                        </Text>
                      </View>
                      <View style={styles.metricCard}>
                        <Text style={styles.metricLabel}>Recyclability</Text>
                        <Text style={styles.metricValue}>
                          {selectedProduct.rating === 'Good' ? '95%' : selectedProduct.rating === 'Okay' ? '70%' : '40%'}
                        </Text>
                      </View>
                      <View style={styles.metricCard}>
                        <Text style={styles.metricLabel}>Water Usage</Text>
                        <Text style={styles.metricValue}>
                          {selectedProduct.rating === 'Good' ? 'Low' : selectedProduct.rating === 'Okay' ? 'Medium' : 'High'}
                        </Text>
                      </View>
                      <View style={styles.metricCard}>
                        <Text style={styles.metricLabel}>Fair Trade</Text>
                        <Text style={styles.metricValue}>
                          {selectedProduct.rating === 'Good' ? 'Yes' : 'No'}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.bottomSheetActions}>
                    <Pressable
                      style={[styles.actionButton, styles.primaryActionButton]}
                      onPress={handleSelectProduct}
                    >
                      <Text style={styles.primaryActionText}>Choose Product</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.actionButton, styles.secondaryActionButton]}
                      onPress={() => setShowBottomSheet(false)}
                    >
                      <Text style={styles.secondaryActionText}>Close Detail</Text>
                    </Pressable>
                  </View>
                </>
              )}
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  cameraView: {
    width: '100%',
    height: '100%',
  },
  preScanOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanningFrame: {
    width: 280,
    height: 280,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanningFrameInner: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
  },
  scanningText: {
    color: '#ffffff',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
  },
  earthPreScan: {
    position: 'absolute',
    bottom: 120,
    left: 20,
  },
  earthImage: {
    width: 70,
    height: 70,
  },
  overlaysContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.45,
  },
  overlayScore: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  instructionContainer: {
    position: 'absolute',
    top: '15%',
    alignSelf: 'center',
  },
  instructionBubble: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
  },
  instructionText: {
    color: '#ffffff',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
  },
  infoButtonContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  infoButtonWrapper: {
    alignItems: 'center',
  },
  infoButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.lg,
  },
  infoButtonText: {
    marginTop: spacing.xs,
    fontSize: 10,
    color: colors.gray[400],
    textAlign: 'center',
  },
  earthContainer: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    alignItems: 'center',
  },
  earthMessageBubble: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
    ...shadows.lg,
  },
  earthMessageText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  pointsPopup: {
    position: 'absolute',
    bottom: 160,
    left: 60,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    ...shadows.lg,
  },
  pointsText: {
    color: '#ffffff',
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
  },
  comparisonContainer: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
    maxWidth: 320,
    paddingHorizontal: spacing.lg,
  },
  comparisonBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: spacing.md,
    ...shadows.xl,
  },
  comparisonText: {
    color: colors.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    textAlign: 'center',
  },
  productCardA: {
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  productCardB: {
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  productCard: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    minWidth: 140,
    borderLeftWidth: 4,
    ...shadows.lg,
  },
  productCardContent: {
    flex: 1,
  },
  productCardName: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  productCardScore: {
    fontSize: 10,
    color: colors.gray[600],
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: spacing['2xl'],
    maxHeight: '85%',
  },
  handleBar: {
    width: 48,
    height: 4,
    backgroundColor: colors.gray[300],
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: spacing.lg,
  },
  bottomSheetContent: {
    marginBottom: spacing['2xl'],
  },
  productName: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  productRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  ratingBadge: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
  },
  productScore: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.gray[600],
  },
  summaryCard: {
    backgroundColor: colors.gray[50],
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  summaryTitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  summaryText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[600],
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.xs,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.gray[50],
    borderRadius: 12,
    padding: spacing.md,
  },
  metricLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[600],
    marginBottom: spacing.xs,
  },
  metricValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  bottomSheetActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
    paddingVertical: spacing.lg,
    borderRadius: 16,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryActionButton: {
    backgroundColor: colors.primary,
  },
  secondaryActionButton: {
    backgroundColor: colors.gray[200],
  },
  primaryActionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: '#ffffff',
  },
  secondaryActionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
});

