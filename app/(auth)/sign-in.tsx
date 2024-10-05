import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInput, signInSchema } from "@/schema/auth/sign-in";
import { useSignInMutation } from "@/store/api/endpoints/auth";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
  const [signIn, result] = useSignInMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    // resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "mor_2314",
      password: "83r5^_",
    },
  });

  const onSubmit = async (data: SignInInput) => {
    try {
      const result = await signIn(data);

      if (result.data?.token) {
        await AsyncStorage.setItem("token", result.data.token);
        router.push("/home");
      } else {
        console.error("Token is missing from the response");
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center px-8">
        <View className="mb-8">
          <Text className="text-4xl font-bold text-center text-primary">
            Welcome Back
          </Text>
          <Text className="text-center text-gray-600 mt-2">
            Sign in to your account
          </Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 ml-4 mb-2">Email</Text>
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="bg-gray-100 py-3 px-4 rounded-full"
                  placeholder="Enter your username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="default"
                  autoCapitalize="none"
                  value={value}
                />
              )}
            />
            {errors.username && (
              <Text className="text-red-600 text-sm ml-4 mt-1">
                {errors.username.message}
              </Text>
            )}
          </View>

          <View>
            <Text className="text-gray-700 ml-4 mb-2">Password</Text>
            <Controller
              name="password"
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="bg-gray-100 py-3 px-4 rounded-full"
                  placeholder="Enter your password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-600 text-sm ml-4 mt-1">
                {errors.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            className="bg-slate-700 pb-4 pt-3 rounded-full flex flex-row justify-center gap-2 "
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-center font-semibold ">
              Sign In
            </Text>
            {result?.isLoading && <ActivityIndicator size="small" />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-4">
          <Text className="text-primary text-center">Forgot Password?</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-primary font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
