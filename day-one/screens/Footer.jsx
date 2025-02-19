import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Footer({ value }) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 8, color: "#888" }}>{value}</Text>
      <View style={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
        <Ionicons name="logo-facebook" size={8} color="#888" />
        <Ionicons name="logo-linkedin" size={8} color="#888" />
        <Ionicons name="logo-twitter" size={8} color="#888" />
      </View>
    </View>
  );
}

export default Footer;
