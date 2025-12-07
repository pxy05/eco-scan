import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, typography } from '@/constants/theme';

interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  isYou?: boolean;
}

interface LeaderboardItemProps {
  user: LeaderboardUser;
}

export default function LeaderboardItem({ user }: LeaderboardItemProps) {
  const isTopThree = user.rank <= 3;

  return (
    <View style={[
      styles.container,
      user.isYou && styles.youContainer,
    ]}>
      <View style={styles.leftSection}>
        {isTopThree ? (
          <LinearGradient
            colors={['#FFC85C', '#ff9800']}
            style={styles.rankBadge}
          >
            <Text style={styles.rankTextTop}>#{user.rank}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.rankBadge}>
            <Text style={styles.rankText}>#{user.rank}</Text>
          </View>
        )}
        <Text style={styles.avatar}>{user.avatar}</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Text style={styles.points}>{user.points.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    marginBottom: spacing.sm,
  },
  youContainer: {
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankTextTop: {
    fontSize: typography.fontSize.xs,
    color: '#ffffff',
    fontWeight: typography.fontWeight.bold,
  },
  rankText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[600],
    fontWeight: typography.fontWeight.medium,
  },
  avatar: {
    fontSize: 24,
  },
  name: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    flex: 1,
  },
  points: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
});

