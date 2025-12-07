import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '@/utils/assetMapping';
import { currentUser } from '@/constants/mockData';
import { colors, spacing, borderRadius, typography, shadows } from '@/constants/theme';

export default function AccountInfoScreen() {
  const router = useRouter();

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
          <Text style={styles.title}>Account Information</Text>
          <Text style={styles.subtitle}>Manage your profile details</Text>
        </View>

        {/* User Avatar */}
        <View style={styles.avatarContainer}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDark]}
            style={styles.avatarGradient}
          >
            <Image 
              source={assets.earthCute}
              style={styles.avatarImage}
              contentFit="contain"
            />
          </LinearGradient>
        </View>

        {/* Account Details */}
        <View style={styles.detailsCard}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.fieldValue}>
              <Text style={styles.fieldText}>{currentUser.email}</Text>
              <Pressable>
                <Text style={styles.changeButton}>Change</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Username</Text>
            <View style={styles.fieldValue}>
              <Text style={styles.fieldText}>{currentUser.username}</Text>
              <Pressable style={styles.editButton}>
                <Ionicons name="create-outline" size={16} color={colors.primary} />
                <Text style={styles.changeButton}>Edit</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Local Area Code</Text>
            <View style={styles.fieldValue}>
              <Text style={styles.fieldText}>{currentUser.localAreaCode}</Text>
              <Pressable>
                <Text style={styles.changeButton}>Change</Text>
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.changePasswordButton}>
            <Text style={styles.changePasswordText}>Change Password</Text>
          </Pressable>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </Pressable>
          <Pressable style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={20} color={colors.bad} />
            <Text style={styles.deleteButtonText}>Delete Account</Text>
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: spacing['2xl'],
  },
  avatarGradient: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.lg,
  },
  avatarImage: {
    width: 80,
    height: 80,
  },
  detailsCard: {
    backgroundColor: colors.background,
    borderRadius: borderRadius['2xl'],
    padding: spacing['2xl'],
    marginBottom: spacing['2xl'],
    ...shadows.md,
  },
  field: {
    marginBottom: spacing.lg,
  },
  fieldLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray[600],
    marginBottom: spacing.xs,
  },
  fieldValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    backgroundColor: colors.gray[50],
    borderRadius: 12,
  },
  fieldText: {
    fontSize: typography.fontSize.base,
    color: colors.textPrimary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  changeButton: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
  changePasswordButton: {
    width: '100%',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  changePasswordText: {
    fontSize: typography.fontSize.base,
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
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
  deleteButton: {
    width: '100%',
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.bad,
    paddingVertical: spacing.lg,
    borderRadius: 16,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  deleteButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.bad,
  },
});

