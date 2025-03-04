import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import useProductStore from "./store";

const Home = () => {
  const navigation = useNavigation();
  const { products, fetchProducts, deleteProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteProduct(id);
              alert("Product deleted successfully!");
            } catch (error) {
              alert("Error deleting product: " + error.message);
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {products.length === 0 ? (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>No products available</Text>
          <Button
            title="Add Product"
            onPress={() => navigation.navigate("AddProduct")}
          />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>{item.description}</Text>

              <View style={styles.buttonContainer}>
                <Button
                  title="Update"
                  onPress={() =>
                    navigation.navigate("UpdateProduct", { product: item })
                  }
                />
                <Button
                  title="Delete"
                  onPress={() => handleDelete(item.id)}
                  color="red"
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Home;
