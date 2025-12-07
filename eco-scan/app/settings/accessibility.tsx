import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { defaultSettings } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function AccessibilityScreen() {
  const router = useRouter();
  const [highContrast, setHighContrast] = useState(defaultSettings.accessibility.highContrast);
  const [largeOverlays, setLargeOverlays] = useState(defaultSettings.accessibility.largeOverlays);
  const [voiceGuidance, setVoiceGuidance] = useState(defaultSettings.accessibility.voiceGuidance);
  const [reduceMotion, setReduceMotion] = useState(defaultSettings.accessibility.reduceMotion);
  const [hapticFeedback, setHapticFeedback] = useState(defaultSettings.accessibility.hapticFeedback);

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
          <Text style={styles.title}>Accessibility</Text>
          <Text style={styles.subtitle}>Customize your app experience</Text>
        </View>

        {/* Accessibility Options */}
        <View style={styles.card}>
          <View style={styles.optionsList}>
            <View style={styles.optionItem}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>High Contrast AR Labels</Text>
                <Text style={styles.optionDescription}>Easier to read overlays</Text>
              </View>
              <Switch
                value={highContrast}
                onValueChange={setHighContrast}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.optionItem}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>Large AR Overlay Boxes</Text>
                <Text style={styles.optionDescription}>Bigger scan results</Text>
              </View>
              <Switch
                value={largeOverlays}
                onValueChange={setLargeOverlays}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.optionItem}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>Voice Guidance</Text>
                <Text style={styles.optionDescription}>Audio recycling instructions</Text>
              </View>
              <Switch
                value={voiceGuidance}
                onValueChange={setVoiceGuidance}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={styles.optionItem}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>Reduce Motion</Text>
                <Text style={styles.optionDescription}>Minimize animations</Text>
              </View>
              <Switch
                value={reduceMotion}
                onValueChange={setReduceMotion}
                trackColor={{ false: colors.gray[200], true: colors.primary }}
                thumbColor="#ffffff"
              />
            </View>

            <View style={[styles.optionItem, styles.optionItemLast]}>
              <View style={styles.optionInfo}>
                <Text style={styles.optionLabel}>Haptic Feedback</Text>
                <Text style={styles.optionDescription}>Vibration on actions</Text>
              </View>
              <Switch
                value={hapticFeedback}
                onValueChange={setHapticFeedback}
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
  optionsList: {
    gap: 0,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  optionItemLast: {
    borderBottomWidth: 0,
  },
  optionInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  optionLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  optionDescription: {
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

