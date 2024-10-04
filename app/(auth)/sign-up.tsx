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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 justify-center px-8 py-12">
            <View className="items-center mb-8">
              <Image
                source={require("../../assets/images/platzi_logo_icon_248838.png")}
                className="w-24 h-24"
                resizeMode="contain"
              />
            </View>

            <View className="bg-white p-8 rounded-2xl shadow-md">
              <Text className="text-2xl font-bold text-center mb-6 text-gray-800">
                Create Account
              </Text>

              <View className="mb-4">
                <Text className="text-gray-700 mb-2 font-medium">Email</Text>
                <TextInput
                  placeholder="Enter email"
                  className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View className="mb-4">
                <Text className="text-gray-700 mb-2 font-medium">Username</Text>
                <TextInput
                  placeholder="Choose username"
                  className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                  autoCapitalize="none"
                />
              </View>

              <View className="mb-4">
                <Text className="text-gray-700 mb-2 font-medium">Password</Text>
                <TextInput
                  placeholder="Create password"
                  className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>

              <View className="mb-6">
                <Text className="text-gray-700 mb-2 font-medium">
                  Confirm Password
                </Text>
                <TextInput
                  placeholder="Confirm password"
                  className="py-3 px-4 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500"
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                className="bg-blue-500 py-3 rounded-lg items-center"
                activeOpacity={0.8}
              >
                <Text className="text-white font-bold text-lg">Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-8">
              <Text className="text-gray-600 text-center">
                Already have an account?
                <Link href="/sign-in">
                  <Text className="text-blue-500 font-bold"> Sign In</Text>
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
