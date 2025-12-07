import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { defaultSettings } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function PrivacyScreen() {
  const router = useRouter();
  const [cameraAccess, setCameraAccess] = useState(defaultSettings.privacy.cameraAccess);
  const [locationAccess, setLocationAccess] = useState(defaultSettings.privacy.locationAccess);
  const [friendsVisibility, setFriendsVisibility] = useState(defaultSettings.privacy.friendsVisibility);
  const [leaderboardVisibility, setLeaderboardVisibility] = useState(defaultSettings.privacy.leaderboardVisibility);

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
          <Text style={styles.title}>Privacy</Text>
          <Text style={styles.subtitle}>Control your data and permissions</Text>
        </View>

        {/* Permissions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Permissions</Text>
          <View style={styles.permissionsList}>
            <View style={styles.permissionItem}>
              <View style={styles.permissionInfo}>
                <Text style={styles.permissionLabel}>Camera Access</Text>
                <Text style={styles.permissionDescription}>For scanning products</Text>
              </View>
              <Switch
                value={cameraAccess}
                onValueChange={setCameraAccess}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.permissionItem}>
              <View style={styles.permissionInfo}>
                <Text style={styles.permissionLabel}>Location Access</Text>
                <Text style={styles.permissionDescription}>For local recommendations</Text>
              </View>
              <Switch
                value={locationAccess}
                onValueChange={setLocationAccess}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.permissionItem}>
              <View style={styles.permissionInfo}>
                <Text style={styles.permissionLabel}>Friends Visibility</Text>
                <Text style={styles.permissionDescription}>Let friends see your profile</Text>
              </View>
              <Switch
                value={friendsVisibility}
                onValueChange={setFriendsVisibility}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={[styles.permissionItem, styles.permissionItemLast]}>
              <View style={styles.permissionInfo}>
                <Text style={styles.permissionLabel}>Appear on Leaderboard</Text>
                <Text style={styles.permissionDescription}>
                  Allow your Eco Score and username to be visible to friends and the community.
                </Text>
              </View>
              <Switch
                value={leaderboardVisibility}
                onValueChange={setLeaderboardVisibility}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>
          </View>
        </View>

        {/* Data Usage */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Data Usage</Text>
          <Text style={styles.dataUsageText}>
            We collect scan data to improve sustainability ratings and provide personalized recommendations. Your data is never sold to third parties.
          </Text>
          <View style={styles.dataActions}>
            <Pressable style={styles.dataButton}>
              <Ionicons name="download-outline" size={20} color={colors.primary} />
              <Text style={styles.dataButtonTextPrimary}>Download My Data</Text>
            </Pressable>
            <Pressable style={[styles.dataButton, styles.dataButtonSecondary]}>
              <Ionicons name="trash-outline" size={20} color={colors.bad} />
              <Text style={styles.dataButtonTextSecondary}>Delete My Data</Text>
            </Pressable>
          </View>
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
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    marginBottom: spacing['2xl'],
    ...shadows.md,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  permissionsList: {
    gap: 0,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  permissionItemLast: {
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
    paddingTop: spacing.lg,
    marginTop: spacing.md,
  },
  permissionInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  permissionLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  permissionDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  dataUsageText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.sm,
    marginBottom: spacing.lg,
  },
  dataActions: {
    gap: spacing.md,
  },
  dataButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    minHeight: 48,
  },
  dataButtonSecondary: {
    borderColor: colors.bad,
  },
  dataButtonTextPrimary: {
    fontSize: typography.fontSize.base,
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
  dataButtonTextSecondary: {
    fontSize: typography.fontSize.base,
    color: colors.bad,
    fontWeight: typography.fontWeight.medium,
  },
});

