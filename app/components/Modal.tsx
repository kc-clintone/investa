import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-4 text-black">This is a modal</Text>

      <Link href="/" dismissTo>
        <Text className="text-blue-500 mt-4 text-lg">Go to home screen</Text>
      </Link>
    </View>
  );
}