import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "./pages/Cart";
// import Home from "./pages/Home";
import Settings from "./pages/Settings";
import MyTab from "./Tab";
// import { addProduct } from "./pages/PrdouctsCrud";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          component={MyTab}
          name="Home"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
            animationDuration: 3000,
          }}
          name="cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ headerBackVisible: false, animation: "fade_from_bottom" }}
          name="settings"
          component={Settings}
        />
        <Stack.Screen
          options={{ headerBackVisible: false, animation: "fade_from_bottom" }}
          name="AddProduct"
          component={AddProduct}
        />
        <Stack.Screen
          options={{ headerBackVisible: false, animation: "fade_from_bottom" }}
          name="UpdateProduct"
          component={UpdateProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    marginTop: 50,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "green",
    padding: 10,
  },
  box2: {
    marginTop: 10,
    marginHorizontal: 10,

    elevation: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "gray",
  },
});
