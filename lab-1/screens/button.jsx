// import { ,  } from "react-native-web";
import { TouchableOpacity, View, Text } from "react-native";

function CustomedButton({ value }) {
  console.log(value);
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "#aba9fd", borderRadius: 10 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: 500,
            fontSize: 10,
            paddingVertical: 3,
            paddingHorizontal: 6,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomedButton;
