import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Stack.Screen name="account-info" />
      <Stack.Screen name="privacy" />
      <Stack.Screen name="budget" />
      <Stack.Screen name="accessibility" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="about-support" />
    </Stack>
  );
}

