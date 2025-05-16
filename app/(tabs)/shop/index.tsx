import { Link } from 'expo-router'; // Importamos Link para la navegación declarativa
import { Button, Text, View } from 'react-native';

export default function ShopIndexScreen() {

  const exampleProductId = 'producto123';

  return (
    <View>
      <Text>Shop</Text>

      <Link href={`/(tabs)/shop/${exampleProductId}`} asChild>
        <Button title={`Ver Producto ${exampleProductId}`} />
      </Link>

    </View>
  );
}
