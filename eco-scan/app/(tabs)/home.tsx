import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { currentUser, weeklyImpact, impactHighlights, ecoFacts } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';
import EarthAvatarCard from '@/components/EarthAvatarCard';
import ImpactCard from '@/components/ImpactCard';
import ImpactHighlightsCarousel from '@/components/ImpactHighlightsCarousel';
import EcoFactCard from '@/components/EcoFactCard';

export default function HomeScreen() {
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
            <Ionicons name="leaf" size={24} color={colors.primary} />
            <Text style={styles.headerTitle}>Eco-Scan</Text>
          </View>
          <Text style={styles.headerSubtitle}>Scan a shelf. Save a planet.</Text>
        </View>

        {/* Earth Avatar with Points */}
        <EarthAvatarCard 
          ecoPoints={currentUser.ecoPoints} 
          mood="happy" 
          message="Welcome back! You're making a difference!"
        />

        {/* Impact Highlights Carousel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impact Highlights</Text>
          <ImpactHighlightsCarousel highlights={impactHighlights} />
        </View>

        {/* Weekly Impact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Weekly Impact</Text>
          <View style={styles.impactGrid}>
            {weeklyImpact.map((metric, index) => (
              <ImpactCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                color={metric.color}
              />
            ))}
          </View>
        </View>

        {/* Eco Facts & Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eco Facts & Tips</Text>
          <View style={styles.factsContainer}>
            {ecoFacts.map((fact) => (
              <EcoFactCard
                key={fact.id}
                title={fact.title}
                description={fact.description}
                image={fact.image}
              />
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
    backgroundColor: colors.backgroundLight,
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
  headerTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  section: {
    marginTop: spacing['2xl'],
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  impactGrid: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  factsContainer: {
    gap: spacing.lg,
  },
});

