import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function LACSetupScreen() {
  const router = useRouter();
  const [localAreaCode, setLocalAreaCode] = useState('');
  const [username, setUsername] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const handleComplete = () => {
    // Mock setup complete - navigate to home
    router.replace('/(tabs)/home');
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
          <Text style={styles.title}>Almost there!</Text>
          <Text style={styles.subtitle}>Set up your profile</Text>
        </View>

        {/* LAC Form */}
        <View style={styles.formCard}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Local Area Code *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., SW1A 1AA"
              placeholderTextColor={colors.gray[400]}
              value={localAreaCode}
              onChangeText={setLocalAreaCode}
            />
            <Pressable style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Don't know your Local Area Code? Click here
              </Text>
            </Pressable>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Username *</Text>
            <TextInput
              style={styles.input}
              placeholder="Choose a username"
              placeholderTextColor={colors.gray[400]}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.toggleContainer}>
            <View style={styles.toggleLabelContainer}>
              <Text style={styles.toggleLabel}>Appear on leaderboard?</Text>
            </View>
            <Switch
              value={showLeaderboard}
              onValueChange={setShowLeaderboard}
              trackColor={{ false: colors.gray[200], true: colors.primary }}
              thumbColor="#ffffff"
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleComplete}
          >
            <Text style={styles.primaryButtonText}>Complete Setup</Text>
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
    marginBottom: spacing['5xl'],
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
  formCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    ...shadows.md,
  },
  fieldContainer: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
    minHeight: 48,
  },
  helpLink: {
    marginTop: spacing.sm,
  },
  helpLinkText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    marginBottom: spacing.lg,
  },
  toggleLabelContainer: {
    flex: 1,
  },
  toggleLabel: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  primaryButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: '#ffffff',
  },
});

