import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Root = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setIsAuth(token ? true : false);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return isAuth ? <Redirect href="/home" /> : <Redirect href="/sign-in" />;
};

export default Root;
