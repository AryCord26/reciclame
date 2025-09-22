import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView } from "moti";

export default function ProductCard({ item }) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 200, type: "spring" }}
      style={styles.card}
    >
      <TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  price: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: "bold",
    color: "#6C63FF",
  },
});
