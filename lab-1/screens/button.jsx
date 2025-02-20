import { TouchableOpacity, View, Text } from "react-native";

function CustomedButton({ value }) {
  console.log(value);
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#7E7CD1FF",
          borderRadius: 10,
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: 500,
            fontSize: 24,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomedButton;
