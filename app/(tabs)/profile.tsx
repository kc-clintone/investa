import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Ionicons name="person-circle" size={100} color="gray" />
      <Text className="text-xl font-semibold mt-4">Your Profile</Text>
      <Text className="text-gray-500 mt-2">Profile info will appear here.</Text>
    </View>
  );
}