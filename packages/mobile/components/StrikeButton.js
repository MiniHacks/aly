import React from "react";
import { StyleSheet, Text, View } from "react-native";
import cardStyles from "./CardStyles";

export default function StrikeButton({ strikeCount }) {
  const text = ["on track.", "strike 1 :c", "strike 2 :/", "strike 3 :("][
    strikeCount
  ];
  const subtext = [
    "you're on a streak! keep going 🤩",
    "don't get down on yourself. you can do it!",
    "don't get down on yourself. you can do it!",
    "don't get down on yourself. you can do it!",
  ][strikeCount];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={[
          {
            marginHorizontal: 20,
            flexGrow: 1,
          },
          cardStyles,
        ]}
      >
        <View style={styles.box1}>
          <Text style={styles.text1}>{text}</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>{subtext}</Text>
        </View>
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
    paddingVertical: 20,
    paddingTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  box2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3A9E",
    paddingVertical: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text1: {
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    fontStyle: "normal",
    fontSize: 60,
  },
  text2: {
    fontSize: 18,
    color: "white",
    fontFamily: "Poppins_400Regular",
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
});
