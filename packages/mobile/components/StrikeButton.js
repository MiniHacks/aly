import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StrikeButton({ strikeCount }) {
  const text = ["on track.", "Strike 1", "Strike 2", "Strike 3"][strikeCount];
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        width: "85%",
        overflow: "hidden",
      }}
    >
      <View style={styles.box1}>
        <Text style={styles.text1}>{text}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text2}>Streak</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#726FE4",
    maxHeight: 150,
  },
  box2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    maxHeight: 150,
  },
  text1: {
    fontSize: 75,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 20,
    fontWeight: "normal",
    color: "black",
  },
});
