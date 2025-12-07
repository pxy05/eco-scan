import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

interface EcoFactCardProps {
  title: string;
  description: string;
  image?: any; // Image source from require()
}

export default function EcoFactCard({ title, description, image }: EcoFactCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={image} style={styles.image} contentFit="cover" />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>📸</Text>
          </View>
        )}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
          style={styles.imageOverlay}
        />
        <Text style={styles.titleOverlay}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.md,
  },
  imageContainer: {
    height: 140,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imagePlaceholder: {
    height: '100%',
    backgroundColor: colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 48,
    textAlign: 'center',
    opacity: 0.3,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: spacing.md,
    left: spacing.lg,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    padding: spacing.lg,
  },
  description: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.sm,
  },
});

