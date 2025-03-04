import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddProduct from "./pages/AddProduct";
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          console.log(route);
          if (route.name == "home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name == "cart") iconName = "cart";
          else {
            iconName = "add";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="AddProduct" component={AddProduct} />
    </Tab.Navigator>
  );
}

export default MyTab;
