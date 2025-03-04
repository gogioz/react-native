import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Image, FlatList } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const data = [
  { id: 0, title: "Personal Information", icon: "person" },
  { id: 1, title: "Your Order", icon: "cart" },
  { id: 2, title: "Your Favourites", icon: "heart" },
  { id: 3, title: "Payment", icon: "cash" },
  { id: 4, title: "Recommended Shops", icon: "pricetag" },
  { id: 5, title: "Nearest Shop", icon: "navigate-circle" },
];
const tabs = [
  { id: 0, icon: "home", label: "Home" },
  { id: 1, icon: "notifications", label: "Alerts" },
  { id: 2, icon: "cart", label: "Cart" },
  { id: 3, icon: "person", label: "Profile" },
];

function Home() {
  const [activeTab, setActiveTab] = useState(3);
  return (
    <View
      style={{
        display: "flex",
        borderColor: "#80808027",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        rowGap: 10,
        paddingVertical: 40,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: 260,
          // fontSize: 60,
          fontWeight: "bold",
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="#8080805E"
          style={styles.icon}
        />
        <Ionicons
          name="create-outline"
          size={30}
          color="#45a182"
          style={styles.icon}
        />
      </View>
      <View
        style={{
          borderColor: "#8080805E",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: "50%",
          padding: 4,
        }}
      >
        <Image
          source={require("../assets/avatar.jpg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
          }}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
        <MaterialIcons name="star" size={20} color="#ffca00" />
        <MaterialIcons name="star" size={20} color="#ffca00" />
        <MaterialIcons name="star" size={20} color="#ffca00" />
        <MaterialIcons name="star" size={20} color="#ffca00" />
        <MaterialIcons name="star" size={20} color="#ffca00" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>Hager Fathi</Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 15,
            textAlign: "center",
            paddingTop: 4,
          }}
        >
          Cairo, Egypt
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", columnGap: 6 }}>
        <View style={styles.details}>
          <Text style={{ color: "white", fontSize: 12 }}>Balance</Text>
          <Text style={{ color: "white" }}>00.00</Text>
        </View>
        <View style={styles.details}>
          <Text style={{ color: "white" }}>Orders</Text>
          <Text style={{ color: "white" }}>10</Text>
        </View>
        <View style={styles.details}>
          <Text style={{ color: "white" }}>Total Spent</Text>
          <Text style={{ color: "white" }}>00.00</Text>
        </View>
      </View>
      <FlatList
        data={data}
        style={{ width: "100%", paddingHorizontal: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 4,
              columnGap: 20,

              borderBottomStyle: "solid",
              borderBottomColor: "#8080805E",
              borderBottomWidth: 1,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name={item.icon} size={25} color="#45a182" />
              <Text
                style={{
                  marginLeft: 6,
                  fontWeight: 300,
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#45a182" />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          paddingLeft: 30,
        }}
      >
        <Ionicons name="log-out" size={30} color="#8080805E" />
        <Text
          style={{
            marginLeft: 6,
            fontWeight: 300,
            fontSize: 15,
          }}
        >
          Logout
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 20,
          marginTop: 1,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          width: "90%",
        }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.id} onPress={() => setActiveTab(tab.id)}>
            {activeTab === tab.id ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#45a182",
                  paddingVertical: 6,
                  paddingHorizontal: 14,
                  borderRadius: 20,
                }}
              >
                <Ionicons name={tab.icon} size={25} color="white" />
                <Text style={{ color: "white", marginLeft: 6, fontSize: 16 }}>
                  {tab.label}
                </Text>
              </View>
            ) : (
              // Inactive Tab Style
              <Ionicons name={tab.icon} size={25} color="#888" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  but: {
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    padding: 20,
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  icon: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#8080805E",
    padding: 1,
    borderRadius: 5,
  },
  details: {
    backgroundColor: "#45a182",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
});

export default Home;
