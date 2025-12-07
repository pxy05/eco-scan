import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { defaultSettings } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function BudgetScreen() {
  const router = useRouter();
  const [monthlyBudget, setMonthlyBudget] = useState(defaultSettings.budget.monthlyBudget.toString());
  const [ecoScoreGoal, setEcoScoreGoal] = useState(defaultSettings.budget.ecoScoreGoal);

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
          <Text style={styles.title}>Budget</Text>
          <Text style={styles.subtitle}>Set your sustainability budget goals</Text>
        </View>

        {/* Monthly Budget */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monthly Sustainability Budget</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="cash-outline" size={20} color={colors.gray[400]} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={monthlyBudget}
              onChangeText={setMonthlyBudget}
              keyboardType="numeric"
              placeholder="500"
            />
          </View>
          <Text style={styles.inputDescription}>
            Track eco-friendly purchases within your budget
          </Text>
        </View>

        {/* Category Limits */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Category Limits</Text>
          <View style={styles.categoryList}>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryLabel}>Food & Groceries</Text>
              <Text style={styles.categoryValue}>$200</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryLabel}>Personal Care</Text>
              <Text style={styles.categoryValue}>$50</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryLabel}>Household Items</Text>
              <Text style={styles.categoryValue}>$100</Text>
            </View>
          </View>
        </View>

        {/* Eco Score Goal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Eco Score Goal</Text>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderHeader}>
              <Text style={styles.sliderLabel}>Target Score</Text>
              <Text style={styles.sliderValue}>{ecoScoreGoal}/100</Text>
            </View>
            <View style={styles.sliderWrapper}>
              <View style={styles.sliderTrack}>
                <View style={[styles.sliderFill, { width: `${ecoScoreGoal}%` }]} />
              </View>
              <View style={styles.sliderControls}>
                <Pressable
                  style={styles.sliderButton}
                  onPress={() => {
                    if (ecoScoreGoal > 0) setEcoScoreGoal(ecoScoreGoal - 5);
                  }}
                >
                  <Ionicons name="remove-circle-outline" size={24} color={colors.primary} />
                </Pressable>
                <Pressable
                  style={styles.sliderButton}
                  onPress={() => {
                    if (ecoScoreGoal < 100) setEcoScoreGoal(ecoScoreGoal + 5);
                  }}
                >
                  <Ionicons name="add-circle-outline" size={24} color={colors.primary} />
                </Pressable>
              </View>
            </View>
            <Text style={styles.inputDescription}>
              Set your average sustainability score goal
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </Pressable>
          <Pressable style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Budget</Text>
          </Pressable>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    minHeight: 48,
  },
  inputIcon: {
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    paddingVertical: spacing.md,
  },
  inputDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
  },
  categoryList: {
    gap: spacing.md,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    backgroundColor: colors.gray[50],
    borderRadius: 12,
  },
  categoryLabel: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
  },
  categoryValue: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  sliderContainer: {
    marginBottom: spacing.md,
  },
  sliderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  sliderLabel: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  sliderValue: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },
  sliderWrapper: {
    marginBottom: spacing.sm,
  },
  sliderTrack: {
    width: '100%',
    height: 8,
    backgroundColor: colors.gray[200],
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  sliderFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  sliderControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing['2xl'],
  },
  sliderButton: {
    padding: spacing.sm,
  },
  actionsContainer: {
    gap: spacing.md,
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
  resetButton: {
    width: '100%',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[300],
    paddingVertical: spacing.lg,
    borderRadius: 16,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.gray[600],
  },
});

