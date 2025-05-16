import { Tabs } from 'expo-router';
import React from 'react';




export default function TabLayout() {
  return (
    <Tabs>

      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          headerShown: true
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true
        }}
      />

    </Tabs>
  );
}