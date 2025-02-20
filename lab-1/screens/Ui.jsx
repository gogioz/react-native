import { Text, View, Image } from "react-native";
import CustomedButton from "./button";
import Footer from "./Footer";

const Ui = ({ img, title, desc, button, footer }) => {
  console.log(footer);
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        alignItems: "center",
        paddingVertical: 60,
      }}
    >
      {title === "Welcome" ? (
        <View style={{ width: "100%" }}>
          <Image
            source={img}
            style={{ width: "fit-content", height: 250, borderRadius: 10 }}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 38,
                color: "#7E7CD1FF",
                letterSpacing: 1,
              }}
            >
              {title}
            </Text>
            <Text style={{ fontWeight: 300, fontSize: 14, color: "grey" }}>
              {desc}
            </Text>
          </View>
        </View>
      ) : (
        ""
      )}
      {button.toLowerCase() === "log in" && (
        <View style={{ paddingHorizontal: 10, width: "100%" }}>
          <View>
            <Image
              source={img}
              style={{ width: "fit-content", height: 250, borderRadius: 10 }}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 38,
                  color: "#7E7CD1FF",
                  letterSpacing: 1,
                }}
              >
                {title}
              </Text>
              <Text style={{ fontWeight: 300, fontSize: 14, color: "grey" }}>
                {desc}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Email:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            ></View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Password:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            ></View>
          </View>
        </View>
      )}
      {button.toLowerCase() === "sign up" && (
        <View style={{ paddingHorizontal: 10, width: "100%" }}>
          <View>
            <Image
              source={img}
              style={{ width: "fit-content", height: 250, borderRadius: 10 }}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 38,
                  color: "#7E7CD1FF",
                  letterSpacing: 1,
                }}
              >
                {title}
              </Text>
              <Text style={{ fontWeight: 300, fontSize: 14, color: "grey" }}>
                {desc}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Full name:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            ></View>
          </View>

          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Email:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            ></View>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Password:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            ></View>
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
