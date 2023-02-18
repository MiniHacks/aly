import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StrikeButton({ strikeCount }) {
  const text = ["on track.", "Strike 1", "Strike 2", "Strike 3"][strikeCount];
  return (
    <View
      style={{
        flex: 1,
        dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        width: "85%",
        overflow: "hidden",
      }}
    >
      <View style={styles.box1}>
        <Text style={styles.text1}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontVariant: "bold",
    color: "white",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 60,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  box1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 60,
    dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});
