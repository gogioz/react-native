import { StyleSheet, View } from "react-native";
import Ui from "./screens/Ui";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" style="light" />
      <Home />
    </View>
  );
  // return (
  //   <View
  //     style={{
  //       display: "flex",
  //       flexDirection: "row", // 🔥 Change to row to align items horizontally
  //       justifyContent: "center",
  //       alignItems: "center",
  //       paddingHorizontal: 10,
  //       columnGap: 10, // 🔥 Adds space between the components
  //     }}
  //   >
  //     {/* <Ui
  //       img={require("./assets/welcome.jpeg")}
  //       title="Welcome"
  //       desc="Create an account and access our awesome services"
  //       button="Getting Started"
  //       footer="Already have an account? Log in"
  //     /> */}
  //     {/* <Ui
  //       img={require("./assets/images/login.jpeg")}
  //       title="Log In Now"
  //       desc="Please login to continue using our app"
  //       button="Log in"
  //       footer="Don't have an account? Sign Up"
  //     /> */}

  //     <Ui
  //       img={require("./assets/images/signup.jpeg")}
  //       title="Sign Up Now"
  //       desc="Please fill the details and create an account"
  //       button="Sign Up"
  //       footer="Already have an account? Log In"
  //     />
  //   </View>
  // );
}
