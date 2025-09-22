import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/banner.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
});
