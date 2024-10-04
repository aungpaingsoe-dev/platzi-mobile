import { View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const Root = () => {
  return <Redirect href="/(auth)/sign-in" />
};

export default Root;
