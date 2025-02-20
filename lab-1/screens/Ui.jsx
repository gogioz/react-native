import { Text } from "react-native";
import { View, Image } from "react-native-web";
import CustomedButton from "./button";
import Footer from "./Footer";

const Ui = ({ img, title, desc, button, footer }) => {
  console.log(footer);
  return (
    <View
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-between",
        height: "400px",
        alignItems: "center",
        padding: 4,
      }}
    >
      {title === "Welcome" ? (
        <View>
          <Image source={img} />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
            <Text style={{ fontWeight: 200, fontSize: 6 }}>{desc}</Text>
          </View>
        </View>
      ) : (
        ""
      )}
      {button.toLowerCase() === "log in" && (
        <View style={{ paddingHorizontal: 10, width: "100%" }}>
          <View>
            <Image source={img} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
              <Text style={{ fontWeight: 200, fontSize: 6 }}>{desc}</Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text>Email</Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text>Password</Text>
            </View>
          </View>
        </View>
      )}
      {button.toLowerCase() === "sign up" && (
        <View style={{ paddingHorizontal: 10, width: "100%" }}>
          <View>
            <Image source={img} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
              <Text style={{ fontWeight: 200, fontSize: 6 }}>{desc}</Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text>Full name</Text>
            </View>
          </View>

          <View style={{ marginBottom: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text>Email</Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text>Password</Text>
            </View>
          </View>
        </View>
      )}

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: 4,
        }}
      >
        <CustomedButton value={button} />
        <View>
          <Footer value={footer} />
        </View>
      </View>
    </View>
  );
};

export default Ui;
