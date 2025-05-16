import { useLocalSearchParams } from 'expo-router'; // Hook para acceder a los parámetros de la URL
import { Text, View } from 'react-native';

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams();



  return (
    <View>
      <Text>Detalles del Producto</Text>

      <Text>ID del Producto: {productId}</Text>
    </View>
  );
}