import { addDoc, collection } from "firebase/firestore";
import { Button, Text, View } from "react-native";
import { db } from "../shared/_config/firebaseConfig";

export default function DBTestScreen() {
  const handleTest = async () => {
  try {
    await addDoc(collection(db, "numeros"), { valor: 1 });
    console.log("Documento agregado con éxito");
  } catch (error) {
    console.error("Error al guardar:", error);
  }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg mb-4">Pantalla de test de Firestore</Text>
      <Button title="Guardar 1 en Firestore" onPress={handleTest} />
    </View>
  );
}
