import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 justify-center px-8">
          <View className="items-center mb-8">
            <Image
              source={require("../../assets/images/platzi_logo_icon_248838.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          <View className="bg-white p-8 rounded-2xl shadow-md">
            <Text className="text-2xl font-bold text-center mb-6 text-gray-800">
              Welcome Back
            </Text>

            <View className="mb-4">
              <Text className="text-gray-700 mb-2 font-medium">Username</Text>
              <TextInput
                placeholder="Enter username"
                className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                autoCapitalize="none"
              />
            </View>

            <View className="mb-6">
              <Text className="text-gray-700 mb-2 font-medium">Password</Text>
              <TextInput
                placeholder="Enter password"
                className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                autoCapitalize="none"
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              className="bg-blue-500 py-3 rounded-lg items-center"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold text-lg">Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mt-4">
              <Text className="text-blue-500 text-center">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-8">
            <Text className="text-gray-600 text-center">
              Don't have an account?
              <Link href="/sign-up">
                <Text className="text-blue-500 font-bold"> Sign Up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
