import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '@/constants/theme';

interface Challenge {
  id: number;
  title: string;
  progress: number;
  total: number;
  reward: number;
  completed: boolean;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const progress = (challenge.progress / challenge.total) * 100;
  const isComplete = challenge.progress >= challenge.total;

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress}%`, { duration: 500 }),
    };
  });

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.title}>{challenge.title}</Text>
          <Text style={styles.progressText}>
            {challenge.progress}/{challenge.total} completed
          </Text>
        </View>
        <View style={styles.rewardBadge}>
          <Text style={styles.rewardText}>+{challenge.reward} pts</Text>
        </View>
      </View>
      
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, progressStyle]} />
      </View>

      {isComplete && (
        <View style={styles.completeContainer}>
          <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
          <Text style={styles.completeText}>Complete! Claim reward</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  progressText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  rewardBadge: {
    backgroundColor: '#fffbeb',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  rewardText: {
    fontSize: typography.fontSize.sm,
    color: '#E6A000',
    fontWeight: typography.fontWeight.medium,
  },
  progressBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: colors.gray[200],
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  completeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  completeText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
});

