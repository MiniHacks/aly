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
      <View style={styles.box2}>
        <Text style={styles.text2}>
          you’re on a seven day streak! keep it up!
        </Text>
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
    height: 100,
  },
  box2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3A9E",
    height: 40,
  },
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
  text2: {
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
});
