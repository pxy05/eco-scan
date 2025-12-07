import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { challenges, leaderboard, hotItems } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';
import ChallengeCard from '@/components/ChallengeCard';
import LeaderboardItem from '@/components/LeaderboardItem';
import HotItemCard from '@/components/HotItemCard';

export default function SocialScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Social</Text>
          <Text style={styles.subtitle}>Connect and compete with eco-friends</Text>
        </View>

        {/* Weekly Challenges */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Challenges</Text>
            <Ionicons name="trophy" size={20} color="#E6A000" />
          </View>
          <View style={styles.challengesContainer}>
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </View>
        </View>

        {/* Leaderboard */}
        <View style={styles.section}>
          <View style={styles.leaderboardHeader}>
            <Text style={styles.leaderboardEmoji}>🏆</Text>
            <Text style={styles.sectionTitle}>Leaderboard</Text>
            <Text style={styles.leaderboardEmoji}>🏆</Text>
          </View>
          <View style={styles.leaderboardContainer}>
            {leaderboard.map((user) => (
              <LeaderboardItem key={user.rank} user={user} />
            ))}
          </View>
        </View>

        {/* Friends Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <View style={styles.friendsGrid}>
            <Pressable style={({ pressed }) => [
              styles.friendButton,
              styles.friendButtonPrimary,
              pressed && styles.buttonPressed,
            ]}>
              <Ionicons name="people" size={20} color={colors.primary} />
              <Text style={styles.friendButtonTextPrimary}>Add Friends</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.friendButton,
              styles.friendButtonSecondary,
              pressed && styles.buttonPressed,
            ]}>
              <Ionicons name="settings-outline" size={20} color={colors.gray[600]} />
              <Text style={styles.friendButtonTextSecondary}>Manage</Text>
            </Pressable>
          </View>
        </View>

        {/* Hot Items */}
        <View style={styles.section}>
          <View style={styles.hotItemsHeader}>
            <Text style={styles.hotItemsEmoji}>🔥</Text>
            <Text style={styles.sectionTitle}>Hot Items</Text>
            <Text style={styles.hotItemsEmoji}>🔥</Text>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hotItemsScroll}
          >
            {hotItems.map((item) => (
              <HotItemCard key={item.id} item={item} />
            ))}
          </ScrollView>
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
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  section: {
    marginBottom: spacing['2xl'],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  challengesContainer: {
    gap: spacing.md,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  leaderboardEmoji: {
    fontSize: 24,
  },
  leaderboardContainer: {
    backgroundColor: colors.gray[50],
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  friendsGrid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  friendButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    minHeight: 60,
  },
  friendButtonPrimary: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  friendButtonSecondary: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[300],
  },
  buttonPressed: {
    opacity: 0.7,
  },
  friendButtonTextPrimary: {
    fontSize: typography.fontSize.base,
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
  friendButtonTextSecondary: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
    fontWeight: typography.fontWeight.medium,
  },
  hotItemsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  hotItemsEmoji: {
    fontSize: 24,
  },
  hotItemsScroll: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
});

