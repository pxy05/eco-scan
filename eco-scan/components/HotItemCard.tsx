import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

interface HotItem {
  id: string;
  name: string;
  rating: 'Good' | 'Okay' | 'Bad' | 'Great';
  color: string;
  score: number;
}

interface HotItemCardProps {
  item: HotItem;
}

export default function HotItemCard({ item }: HotItemCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageEmoji}>📦</Text>
        </View>
        <View style={[styles.ratingBadge, { backgroundColor: item.color }]}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginRight: spacing.md,
    ...shadows.md,
  },
  imageContainer: {
    height: 140,
    position: 'relative',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmoji: {
    fontSize: 48,
    opacity: 0.5,
  },
  ratingBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  ratingText: {
    fontSize: typography.fontSize.xs,
    color: '#ffffff',
    fontWeight: typography.fontWeight.semibold,
  },
  content: {
    padding: spacing.md,
  },
  name: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
});

