import { Stack } from 'expo-router';

// Este layout define la navegación DENTRO de la pestaña Shop
export default function ShopLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="[productId]"
        options={{
          title: 'Detalles del Producto',
          headerShown: true,
        }}
      />
    </Stack>
  );
}