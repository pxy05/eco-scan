import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

const settingsOptions = [
  { icon: 'person-outline', label: 'Account Information', route: '/settings/account-info' },
  { icon: 'shield-outline', label: 'Privacy', route: '/settings/privacy' },
  { icon: 'cash-outline', label: 'Budget', route: '/settings/budget' },
  { icon: 'eye-outline', label: 'Accessibility', route: '/settings/accessibility' },
  { icon: 'notifications-outline', label: 'Notifications', route: '/settings/notifications' },
  { icon: 'information-circle-outline', label: 'About & Support', route: '/settings/about-support' },
];

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Ionicons name="settings" size={24} color={colors.primary} />
            <Text style={styles.title}>Settings</Text>
          </View>
          <Text style={styles.subtitle}>Manage your account & preferences</Text>
        </View>

        {/* Settings List */}
        <View style={styles.settingsList}>
          {settingsOptions.map((option, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.settingsItem,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => router.push(option.route as any)}
            >
              <View style={styles.settingsItemLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons name={option.icon as any} size={20} color={colors.primary} />
                </View>
                <Text style={styles.settingsItemText}>{option.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.gray[400]} />
            </Pressable>
          ))}
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>Eco-Scan v2.0</Text>
          <Text style={styles.appTagline}>Scan a shelf. Save a planet.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.xl,
    paddingBottom: spacing['6xl'],
  },
  header: {
    paddingTop: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  settingsList: {
    gap: spacing.md,
    marginBottom: spacing['5xl'],
  },
  settingsItem: {
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
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsItemText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.medium,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: spacing['5xl'],
  },
  appVersion: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[400],
    marginBottom: spacing.xs,
  },
  appTagline: {
    fontSize: typography.fontSize.xs,
    color: colors.gray[400],
  },
});

