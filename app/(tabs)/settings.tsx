import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Ionicons name="settings-outline" size={100} color="gray" />
      <Text className="text-xl font-semibold mt-4">Settings</Text>
      <Text className="text-gray-500 mt-2">Settings options will go here.</Text>
    </View>
  );
}