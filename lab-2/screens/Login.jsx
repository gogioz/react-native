import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

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
          <View style={{ display: "flex", paddingVertical: 20 }}>
            <Image source={require("../assets/login.png")} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 32 }}>
                Log in Now
              </Text>
              <Text style={{ fontWeight: "200", fontSize: 20 }}>
                Log in to continue using our services
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 24 }}>Email:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 15,
                borderRadius: 10,
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

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 24 }}>Password:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 15,
                borderRadius: 10,
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
            onPress={handleSubmit(onSubmit)}
            style={{
              backgroundColor: "#0C09A9FF",
              borderRadius: 10,
              padding: 16,
              margin: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                fontSize: 26,
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
            }}
          >
            <Text style={{ fontSize: 16, color: "#888", paddingVertical: 4 }}>
              Don't have an account? Sign Up
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", columnGap: 6 }}
            >
              <Ionicons name="logo-facebook" size={25} color="#888" />
              <Ionicons name="logo-linkedin" size={25} color="#888" />
              <Ionicons name="logo-twitter" size={25} color="#888" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
