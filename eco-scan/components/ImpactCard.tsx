import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '@/constants/theme';

interface ImpactCardProps {
  icon: string;
  value: string;
  label: string;
  color: 'green' | 'amber';
}

export default function ImpactCard({ icon, value, label, color }: ImpactCardProps) {
  const bgColor = color === 'green' ? colors.primaryLight : '#fffbeb';
  const iconColor = color === 'green' ? colors.primary : '#E6A000';

  return (
    <View style={[styles.card, { backgroundColor: bgColor, flex: 1 }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: spacing.sm,
  },
  value: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[600],
    textAlign: 'center',
  },
});

