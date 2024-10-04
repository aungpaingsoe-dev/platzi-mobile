import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInput, signInSchema } from "@/schema/auth/sign-in";
import { useSignInMutation } from "@/store/api/auth";

export default function SignIn() {
  const [signIn, result] = useSignInMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInInput) => {
    signIn(data);
    console.log(result);
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
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="bg-gray-100 py-3 px-4 rounded-full"
                  placeholder="Enter your email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-600 text-sm ml-4 mt-1">
                {errors.email.message}
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
            className="bg-slate-700 py-3 rounded-full"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-center font-semibold">
              Sign In
            </Text>
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
