import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

const supportOptions = [
  { icon: 'help-circle-outline', label: 'Help / FAQ' },
  { icon: 'chatbubble-outline', label: 'Contact Support' },
  { icon: 'document-text-outline', label: 'Terms of Service' },
  { icon: 'shield-outline', label: 'Privacy Policy' },
];

export default function AboutSupportScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <Pressable 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color={colors.primary} />
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>About & Support</Text>
          <Text style={styles.subtitle}>Get help and learn more</Text>
        </View>

        {/* App Info */}
        <View style={styles.appInfoCard}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDark]}
            style={styles.appIconContainer}
          >
            <Ionicons name="leaf" size={40} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.appName}>Eco-Scan</Text>
          <Text style={styles.appVersion}>Version 2.0</Text>
          <Text style={styles.appTagline}>Scan a shelf. Save a planet.</Text>
        </View>

        {/* Support Options */}
        <View style={styles.supportContainer}>
          {supportOptions.map((option, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.supportItem,
                pressed && styles.buttonPressed,
              ]}
            >
              <View style={styles.supportItemLeft}>
                <View style={styles.supportIconContainer}>
                  <Ionicons name={option.icon as any} size={20} color={colors.primary} />
                </View>
                <Text style={styles.supportItemText}>{option.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.gray[400]} />
            </Pressable>
          ))}
        </View>

        {/* Credits */}
        <View style={styles.creditsCard}>
          <Text style={styles.creditsText}>Made with 💚 for the planet</Text>
          <Text style={styles.copyrightText}>© 2025 Eco-Scan. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing['2xl'],
    paddingBottom: spacing['6xl'],
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing['2xl'],
    gap: spacing.sm,
  },
  backButtonText: {
    fontSize: typography.fontSize.base,
    color: colors.primary,
  },
  header: {
    marginBottom: spacing['2xl'],
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  appInfoCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    alignItems: 'center',
    marginBottom: spacing['2xl'],
    ...shadows.md,
  },
  appIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    ...shadows.lg,
  },
  appName: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  appVersion: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
    marginBottom: spacing.sm,
  },
  appTagline: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[500],
  },
  supportContainer: {
    gap: spacing.md,
    marginBottom: spacing['2xl'],
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    minHeight: 60,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  supportItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  supportIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportItemText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  creditsCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    alignItems: 'center',
    ...shadows.md,
  },
  creditsText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    marginBottom: spacing.sm,
  },
  copyrightText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[400],
  },
});

