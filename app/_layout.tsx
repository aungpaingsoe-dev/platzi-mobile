import React from "react";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
};

export default RootLayout;
