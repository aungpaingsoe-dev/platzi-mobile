import { Redirect } from "expo-router";

const Home = () => {
  const isAuth: boolean = false;

  return isAuth ? (
    <Redirect href="/(tabs)/products" />
  ) : (
    <Redirect href="/(auth)/sign-in" />
  );
};

export default Home;
