import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import Animated, { useAnimatedStyle, withRepeat, withTiming, withSequence } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from '@/utils/assetMapping';
import { colors, spacing, borderRadius, typography } from '@/constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  // Animated style for Earth character
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withRepeat(withSequence(withTiming(1.05, { duration: 1500 }), withTiming(1, { duration: 1500 })), -1, false) },
        { rotate: withRepeat(withSequence(withTiming('3deg', { duration: 1000 }), withTiming('-3deg', { duration: 1000 }), withTiming('0deg', { duration: 1000 })), -1, false) },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Tagline */}
        <View style={styles.header}>
          <Text style={styles.title}>Eco-Scan</Text>
          <Text style={styles.subtitle}>Scan a shelf.</Text>
          <Text style={styles.tagline}>Save a planet.</Text>
        </View>

        {/* Cute Earth Character */}
        <Animated.View style={[styles.earthContainer, animatedStyle]}>
          <Image 
            source={assets.earthCute}
            style={styles.earthImage}
            contentFit="contain"
          />
        </Animated.View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push('/(auth)/register')}
          >
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </Pressable>
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing['2xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing['5xl'],
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.gray[600],
    marginBottom: spacing.xs,
  },
  tagline: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  earthContainer: {
    marginBottom: spacing['6xl'],
  },
  earthImage: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    width: '100%',
    gap: spacing.md,
    marginBottom: spacing['2xl'],
  },
  primaryButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  primaryButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: '#ffffff',
  },
  secondaryButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
  },
  terms: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[400],
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: colors.gray[400],
  },
});

