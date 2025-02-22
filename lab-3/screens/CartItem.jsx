import React, { memo, useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CartItem = memo(
  ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    const handleIncrease = useCallback(
      () => increaseQuantity(item.id),
      [item.id, increaseQuantity]
    );
    const handleDecrease = useCallback(
      () => decreaseQuantity(item.id),
      [item.id, decreaseQuantity]
    );
    const handleRemove = useCallback(
      () => removeFromCart(item.id),
      [item.id, removeFromCart]
    );

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          borderBottomWidth: 1,
          paddingBottom: 10,
          paddingHorizontal: 10,
        }}
      >
        {/* Product Image */}
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }}
        />

        {/* Product Info */}
        <Text style={{ flex: 1, fontSize: 16 }}>
          {item.title} - ${item.price}
        </Text>

        {/* Quantity Controls */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={handleDecrease}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "red",
              borderRadius: 5,
              marginRight: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
            {item.quantity}
          </Text>

          <TouchableOpacity
            onPress={handleIncrease}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "green",
              borderRadius: 5,
              marginLeft: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Remove Button */}
        <TouchableOpacity
          onPress={handleRemove}
          style={{
            backgroundColor: "gray",
            padding: 8,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  }
);

export default CartItem;
