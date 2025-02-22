import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const {
    control,
    handleSubmit,
    reset, // Add reset function
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    reset(); // Clear input fields after submission
  };
  const nav = useNavigation();
  const goTo = () => {
    nav.navigate("products");
  };

  return (
    <View
      style={{
        height: "100%",

        paddingHorizontal: 10,
        paddingVertical: 40,
        width: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ display: "flex", justifyContent: "space-around", rowGap: 5 }}
        >
          <View style={{ display: "flex", paddingVertical: 10 }}>
            <Image
              source={require("../assets/login.jpeg")}
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
                Log in Now
              </Text>
              <Text style={{ fontWeight: 300, fontSize: 14, color: "grey" }}>
                Log in to continue using our services
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
            >
              <Controller
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    style={{ outline: "none" }}
                  />
                )}
                name="email"
                defaultValue=""
              />
            </View>
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 26, color: "grey" }}>Password:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 25,
                borderRadius: 5,
              }}
            >
              <Controller
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                    style={{ outline: "none" }}
                  />
                )}
                name="password"
                defaultValue=""
              />
            </View>
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password.message}</Text>
            )}
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={(handleSubmit(onSubmit), goTo)}
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
              Submit
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rowGap: 6,
            }}
          >
            <Text style={{ fontSize: 16, color: "grey" }}>
              Don't have an account? Sign Up
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", columnGap: 6 }}
            >
              <Ionicons name="logo-facebook" size={30} color="grey" />
              <Ionicons name="logo-linkedin" size={30} color="grey" />
              <Ionicons name="logo-twitter" size={30} color="grey" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
