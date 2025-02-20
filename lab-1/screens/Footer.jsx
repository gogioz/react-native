import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Footer({ value }) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 6,
      }}
    >
      <Text style={{ fontSize: 16, color: "grey" }}>{value}</Text>
      <View style={{ display: "flex", flexDirection: "row", columnGap: 6 }}>
        <Ionicons name="logo-facebook" size={30} color="#888" />
        <Ionicons name="logo-linkedin" size={30} color="#888" />
        <Ionicons name="logo-twitter" size={30} color="#888" />
      </View>
    </View>
  );
}

export default Footer;
