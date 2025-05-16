import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="auth" />
      
    </Stack>
  );
}