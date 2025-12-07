import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { assets } from '@/utils/assetMapping';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 80; // Account for padding

interface Highlight {
  id: number;
  title: string;
  subtext: string;
  icon: string;
  gradient: string[];
  earthMessage: string;
}

interface ImpactHighlightsCarouselProps {
  highlights: Highlight[];
}

export default function ImpactHighlightsCarousel({ highlights }: ImpactHighlightsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withRepeat(withSequence(withTiming(1.1, { duration: 1500 }), withTiming(1, { duration: 1500 })), -1, false) },
      ],
    };
  });

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / CARD_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
        snapToInterval={CARD_WIDTH + spacing.md}
        decelerationRate="fast"
      >
        {highlights.map((highlight) => (
          <LinearGradient
            key={highlight.id}
            colors={highlight.gradient}
            style={[styles.card, { width: CARD_WIDTH }]}
          >
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{highlight.icon}</Text>
              </View>
              
              <Animated.View style={animatedStyle}>
                <View style={styles.earthContainer}>
                  <View style={styles.speechBubble}>
                    <Text style={styles.speechText}>{highlight.earthMessage}</Text>
                    <View style={styles.speechBubbleTail} />
                  </View>
                  <View style={styles.earthImageWrapper}>
                    <Image 
                      source={assets.earthCute}
                      style={styles.earthImage}
                      contentFit="contain"
                    />
                  </View>
                </View>
              </Animated.View>
            </View>

            <Text style={styles.title}>{highlight.title}</Text>
            <Text style={styles.subtext}>{highlight.subtext}</Text>
          </LinearGradient>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {highlights.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  card: {
    borderRadius: borderRadius['2xl'],
    padding: spacing.xl,
    marginRight: spacing.md,
    ...shadows.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
  },
  icon: {
    fontSize: 24,
  },
  earthContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minHeight: 70,
    width: 60,
  },
  speechBubble: {
    position: 'absolute',
    top: 0,
    right: 56, // Position to the left of the Earth
    backgroundColor: '#ffffff',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    ...shadows.md,
    zIndex: 2,
    maxWidth: 120,
    minWidth: 70,
    marginBottom: spacing.xs,
  },
  speechText: {
    fontSize: typography.fontSize.xs,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
    textAlign: 'center',
    lineHeight: typography.lineHeight.tight * typography.fontSize.xs,
  },
  speechBubbleTail: {
    position: 'absolute',
    bottom: -6,
    right: -6,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
    transform: [{ rotate: '-45deg' }],
  },
  earthImageWrapper: {
    width: 48,
    height: 48,
    zIndex: 1,
  },
  earthImage: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    lineHeight: typography.lineHeight.tight * typography.fontSize.base,
  },
  subtext: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.sm,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray[300],
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
});

