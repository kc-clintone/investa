import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Welcome To Investa!</Text>

      <View className="bg-blue-100 p-4 rounded-lg mb-4 flex-row items-center">
        <Ionicons name="rocket" size={24} color="blue" className="mr-2" />
        <Text className="text-blue-800">This is a placeholder card.</Text>
      </View>

      <View className="bg-green-100 p-4 rounded-lg flex-row items-center">
        <Ionicons name="chatbubble" size={24} color="green" className="mr-2" />
        <Text className="text-green-800">Add components here!</Text>
      </View>
    </ScrollView>
  );
}