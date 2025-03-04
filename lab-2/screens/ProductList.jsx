import { useEffect, useState } from "react";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import Card from "./Card";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts([...data.products]);
      });
  }, []);
  return (
    <View
      style={{
        display: "flex",
        paddingVertical: 32,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          paddingVertical: 10,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        This is the Product List
      </Text>
      {products.length == 0 ? (
        <ActivityIndicator color="grey" />
      ) : (
        <ScrollView
          contentContainerStyle={{
            display: "flex",

            rowGap: 25,
            justifyContent: "center",
            width: "80%",
          }}
        >
          {products.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default ProductList;
