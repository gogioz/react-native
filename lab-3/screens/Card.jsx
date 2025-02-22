import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import useCartStore from "../Store/store"; // Import the store

function Card({ id, thumbnail, title, price }) {
  const nav = useNavigation();
  const addToCart = useCartStore((state) => state.addToCart);

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    const newItem = { id, thumbnail, title, price };
    addToCart(newItem); // Add item to global state
    nav.navigate("cart"); // Navigate to cart screen
    console.log(id);
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "grey",
        borderStyle: "solid",
        borderRadius: 15,
        rowGap: 5,
        paddingVertical: 20,
      }}
    >
      <Image style={{ width: 150, height: 150 }} source={{ uri: thumbnail }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontStyle: "italic", fontSize: 16, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, fontStyle: "italic", fontWeight: "bold" }}>
          ${price}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 70,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleAddToCart}>
          <Text
            style={{
              color: "white",
              backgroundColor: "grey",
              padding: 10,
              fontSize: 16,
              borderRadius: 10,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
