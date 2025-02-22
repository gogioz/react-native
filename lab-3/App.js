import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./screens/ProductList";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="products" component={ProductList} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
