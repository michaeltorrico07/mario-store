import { addDoc, collection } from "firebase/firestore";
import { Text, TouchableOpacity, View } from "react-native";
import { db } from "../_shared/_config/firebaseConfig";

export default function DBTestScreen() {
  const handleTest = async () => {
    try {
      await addDoc(collection(db, "numeros"), { valor: 10 });
      console.log("Documento agregado con éxito");
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg mb-4 text-green-950">Pantalla de test de Firestore</Text>

      <TouchableOpacity
        onPress={handleTest}
        className="bg-black px-6 py-3 rounded-md"
      >
        <Text className="text-white text-base text-center">
          Guardar 10 en Firestore
        </Text>
      </TouchableOpacity>
    </View>
  );
}
