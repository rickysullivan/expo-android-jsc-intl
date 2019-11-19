import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NZD"
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unformatted: 1000000</Text>
      <Text style={styles.text}>Fun-formatted: {currencyFormatter.format(1000000)}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
