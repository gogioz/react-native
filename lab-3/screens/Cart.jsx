import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import useCartStore from "../Store/store";

const CartScreen = () => {
  const {
    cart = [],
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  console.log(cart);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Shopping Cart
      </Text>

      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id} // Use unique cartId
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />

              <Text style={{ flex: 1 }}>
                {item.title} - ${item.price}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => decreaseQuantity(item.id)}
                  style={{
                    paddingHorizontal: 10,
                    backgroundColor: "red",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>-</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
                  {item.quantity || 1} {/* Ensure default is 1 */}
                </Text>

                <TouchableOpacity
                  onPress={() => increaseQuantity(item.id)}
                  style={{
                    paddingHorizontal: 10,
                    backgroundColor: "green",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>+</Text>
                </TouchableOpacity>
              </View>

              <Button
                title="Remove"
                color="gray"
                onPress={() => removeFromCart(item.id)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CartScreen;
