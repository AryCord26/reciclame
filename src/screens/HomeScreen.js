import React from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#777" />
        <TextInput placeholder="Buscar no Recicla-me" style={styles.input} />
      </View>

      {/* Banner */}
      <Banner />

      {/* Categorias */}
      <View style={styles.categories}>
        <Text style={styles.category}>Todos</Text>
        <Text style={styles.category}>Moda</Text>
        <Text style={styles.category}>Beleza</Text>
        <Text style={styles.category}>Casa</Text>
        <Text style={styles.category}>Eletrônicos</Text>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 2,
  },
  input: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  category: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6C63FF",
  },
  list: {
    paddingBottom: 100,
  },
});
