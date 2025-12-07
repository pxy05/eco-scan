import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { assets } from '@/utils/assetMapping';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login - navigate to home
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
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtitle}>Login to continue your eco-journey</Text>
        </View>

        {/* Login Form */}
        <View style={styles.formCard}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={colors.gray[400]} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.gray[400]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.gray[400]} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.gray[400]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>

          <Pressable
            style={styles.forgotPassword}
            onPress={() => router.push('/(auth)/lac-setup')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>

        {/* Social Login */}
        <View style={styles.socialContainer}>
          <Pressable style={({ pressed }) => [
            styles.socialButton,
            pressed && styles.buttonPressed,
          ]}>
            <Image source={assets.appleLogo} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </Pressable>

          <Pressable style={({ pressed }) => [
            styles.socialButton,
            pressed && styles.buttonPressed,
          ]}>
            <Image source={assets.googleLogo} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </Pressable>
        </View>

        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text 
              style={styles.registerLink}
              onPress={() => router.push('/(auth)/register')}
            >
              Create Account
            </Text>
          </Text>
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
    marginBottom: spacing['2xl'],
    ...shadows.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
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
  forgotPassword: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
  socialContainer: {
    gap: spacing.md,
    marginBottom: spacing['2xl'],
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    minHeight: 56,
    gap: spacing.md,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialButtonText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
  },
  registerContainer: {
    alignItems: 'center',
    marginTop: spacing['2xl'],
  },
  registerText: {
    fontSize: typography.fontSize.base,
    color: colors.gray[600],
  },
  registerLink: {
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
});

