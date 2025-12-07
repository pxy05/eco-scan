import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { defaultSettings } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function NotificationsScreen() {
  const router = useRouter();
  const [weeklyImpact, setWeeklyImpact] = useState(defaultSettings.notifications.weeklyImpact);
  const [scanReminder, setScanReminder] = useState(defaultSettings.notifications.scanReminder);
  const [productAlerts, setProductAlerts] = useState(defaultSettings.notifications.productAlerts);
  const [leaderboardNotifs, setLeaderboardNotifs] = useState(defaultSettings.notifications.leaderboardNotifs);
  const [friendActivity, setFriendActivity] = useState(defaultSettings.notifications.friendActivity);
  const [allNotifications, setAllNotifications] = useState(defaultSettings.notifications.allNotifications);

  const handleToggleAll = (checked: boolean) => {
    setAllNotifications(checked);
    setWeeklyImpact(checked);
    setScanReminder(checked);
    setProductAlerts(checked);
    setLeaderboardNotifs(checked);
    setFriendActivity(checked);
  };

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
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Manage your notification preferences</Text>
        </View>

        {/* Master Toggle */}
        <View style={styles.card}>
          <View style={styles.masterToggle}>
            <View style={styles.masterToggleInfo}>
              <Text style={styles.masterToggleTitle}>All Notifications</Text>
              <Text style={styles.masterToggleDescription}>Turn all notifications on/off</Text>
            </View>
            <Switch
              value={allNotifications}
              onValueChange={handleToggleAll}
              trackColor={{ false: colors.gray[200], true: colors.primary }}
              thumbColor="#ffffff"
            />
          </View>
        </View>

        {/* Notification Options */}
        <View style={styles.card}>
          <View style={styles.notificationsList}>
            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationLabel}>Weekly Impact Summary</Text>
                <Text style={styles.notificationDescription}>Your eco-stats each week</Text>
              </View>
              <Switch
                value={weeklyImpact}
                onValueChange={setWeeklyImpact}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationLabel}>Reminder to Scan</Text>
                <Text style={styles.notificationDescription}>Before shopping reminders</Text>
              </View>
              <Switch
                value={scanReminder}
                onValueChange={setScanReminder}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationLabel}>Eco-Friendly Product Alerts</Text>
                <Text style={styles.notificationDescription}>New sustainable options</Text>
              </View>
              <Switch
                value={productAlerts}
                onValueChange={setProductAlerts}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationLabel}>Leaderboard Notifications</Text>
                <Text style={styles.notificationDescription}>Rank changes & achievements</Text>
              </View>
              <Switch
                value={leaderboardNotifs}
                onValueChange={setLeaderboardNotifs}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={[styles.notificationItem, styles.notificationItemLast]}>
              <View style={styles.notificationInfo}>
                <Text style={styles.notificationLabel}>Friend Activity</Text>
                <Text style={styles.notificationDescription}>When friends scan products</Text>
              </View>
              <Switch
                value={friendActivity}
                onValueChange={setFriendActivity}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>
          </View>
        </View>

        {/* Save Button */}
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </Pressable>
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
  masterToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  masterToggleInfo: {
    flex: 1,
  },
  masterToggleTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  masterToggleDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  notificationsList: {
    gap: 0,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  notificationItemLast: {
    borderBottomWidth: 0,
  },
  notificationInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  notificationLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  notificationDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  saveButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: 16,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: '#ffffff',
  },
});

