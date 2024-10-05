import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
