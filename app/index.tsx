import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { tourismData } from "./tourismdata"; // Pastikan mengganti dengan path file yang benar

export default function Index() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Display Image */}
      <Image source={item.imageUrl} style={styles.image} />

      {/* Destination Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Country */}
      <Text style={styles.country}>Country: {item.country}</Text>

      {/* Description */}
      <Text style={styles.description}>{item.description}</Text>

      {/* Rating */}
      <Text style={styles.rating}>Rating: {item.rating} ⭐</Text>

      {/* Annual Visitors */}
      <Text style={styles.visitors}>
        Annual Visitors: {item.annualVisitors.toLocaleString()}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={tourismData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  country: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: "#FFA500",
    marginBottom: 5,
  },
  visitors: {
    fontSize: 14,
    color: "#555",
  },
});
