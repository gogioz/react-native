import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import ProductList from "./screens/ProductList";
import Login from "./screens/Login";

export default function App() {
  return (
    <View>
      <StatusBar style="light" backgroundColor="blue" />

      <Login />
      {/* <ProductList /> */}
    </View>
  );
}
