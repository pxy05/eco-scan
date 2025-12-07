import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { assets } from '@/utils/assetMapping';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface EarthAvatarCardProps {
  ecoPoints: number;
  mood: 'happy' | 'neutral' | 'sad';
  message: string;
}

export default function EarthAvatarCard({ ecoPoints, mood, message }: EarthAvatarCardProps) {
  const percentage = (ecoPoints % 1000) / 1000 * 100;
  const level = Math.floor(ecoPoints / 1000) + 1;
  const pointsToNext = 1000 - (ecoPoints % 1000);

  // Animated style for Earth character
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withRepeat(withSequence(withTiming(1.05, { duration: 1500 }), withTiming(1, { duration: 1500 })), -1, false) },
      ],
    };
  });

  // Get Earth image based on mood
  const getEarthImage = () => {
    switch (mood) {
      case 'happy':
        return assets.earthCute;
      case 'neutral':
        return assets.earthOkay;
      case 'sad':
        return assets.earthBad;
      default:
        return assets.earthCute;
    }
  };

  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {/* Earth Avatar with Progress Ring */}
        <View style={styles.avatarContainer}>
          <Svg width={110} height={110} style={styles.svg}>
            <Circle
              cx="55"
              cy="55"
              r={radius}
              fill="none"
              stroke={colors.gray[200]}
              strokeWidth="6"
            />
            <Circle
              cx="55"
              cy="55"
              r={radius}
              fill="none"
              stroke={colors.primary}
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 55 55)"
            />
          </Svg>
          <Animated.View style={[styles.earthImageContainer, animatedStyle]}>
            <Image 
              source={getEarthImage()}
              style={styles.earthImage}
              resizeMode="contain"
            />
          </Animated.View>
        </View>

        {/* Info */}
        <View style={styles.infoContainer}>
          <View style={styles.levelRow}>
            <Ionicons name="trophy" size={20} color={colors.primary} />
            <Text style={styles.levelText}>Level {level}</Text>
          </View>
          <Text style={styles.pointsText}>{ecoPoints.toLocaleString()} Eco Points</Text>
          <Text style={styles.nextLevelText}>{pointsToNext} points to Level {level + 1}</Text>
        </View>
      </View>

      {/* Earth Message */}
      <LinearGradient
        colors={[colors.primaryLight, colors.primaryLight]}
        style={styles.messageContainer}
      >
        <View style={styles.messageBorder}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    ...shadows.md,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  earthImageContainer: {
    position: 'absolute',
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earthImage: {
    width: 85,
    height: 85,
  },
  infoContainer: {
    flex: 1,
    minWidth: 0,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  levelText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  pointsText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  nextLevelText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  messageContainer: {
    marginTop: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: `${colors.primary}33`,
    padding: spacing.lg,
  },
  messageBorder: {
    // Additional border styling if needed
  },
  messageText: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.sm,
    color: colors.textPrimary,
  },
});

