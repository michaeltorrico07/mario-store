import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (

    <View
      className="flex flex-1 justify-center items-center"
    >
      <Text>landing page</Text>
      
      <Link href="/auth/login" asChild>
        <Button title="Ir a Login" />
      </Link>

      <Link href="/auth/register" asChild>
        <Button title="Ir a Registro" />
      </Link>

    </View>
  );
}
