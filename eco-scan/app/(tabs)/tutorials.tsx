import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { assets } from '@/utils/assetMapping';
import { faqs } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function TutorialsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

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
            <Ionicons name="book" size={24} color={colors.primary} />
            <Text style={styles.title}>Tutorials</Text>
          </View>
          <Text style={styles.subtitle}>Learn how to use Eco-Scan</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.gray[400]} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search tutorials…"
            placeholderTextColor={colors.gray[400]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Video Tutorial Card */}
        <View style={styles.videoCard}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDark]}
            style={styles.videoGradient}
          >
            <View style={styles.videoOverlay}>
              <Image 
                source={assets.banner}
                style={styles.videoBackground}
                contentFit="cover"
              />
            </View>
            <View style={styles.videoContent}>
              <View style={styles.playButtonContainer}>
                <Ionicons name="play" size={32} color="#ffffff" />
              </View>
              <Text style={styles.videoTitle}>Watch Tutorial</Text>
              <Text style={styles.videoSubtitle}>Learn how to use Eco-Scan in 2 minutes</Text>
            </View>
          </LinearGradient>
        </View>

        {/* FAQ Cards */}
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Frequently Asked</Text>
          <View style={styles.faqContainer}>
            {faqs.map((faq) => (
              <View key={faq.id} style={styles.faqCard}>
                <View style={styles.faqHeader}>
                  <View style={styles.faqIconContainer}>
                    <Text style={styles.faqIcon}>{faq.icon}</Text>
                  </View>
                  <View style={styles.faqContent}>
                    <Text style={styles.faqQuestion}>{faq.question}</Text>
                    <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing['2xl'],
    minHeight: 48,
  },
  searchIcon: {
    marginRight: spacing.md,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    paddingVertical: spacing.md,
  },
  videoCard: {
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginBottom: spacing['2xl'],
    height: 200,
  },
  videoGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
  },
  videoBackground: {
    width: '100%',
    height: '100%',
  },
  videoContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  playButtonContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    backdropFilter: 'blur(10px)',
  },
  videoTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: '#ffffff',
    marginBottom: spacing.xs,
  },
  videoSubtitle: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  faqSection: {
    marginTop: spacing['2xl'],
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  faqContainer: {
    gap: spacing.md,
  },
  faqCard: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  faqHeader: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  faqIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqIcon: {
    fontSize: 20,
  },
  faqContent: {
    flex: 1,
  },
  faqQuestion: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  faqAnswer: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.sm,
  },
});

