import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import cardStyles from "./CardStyles";

export default function NextUpButton({ event }) {
  const text = ["be at MetroTech.", "be at 2041", "be at 2033", "Go to gym"][
    event
  ];
  return (
    <View style={[styles.bigbox, cardStyles]}>
      <View
        style={{
          backgroundColor: "#FFD7EF",
          borderRadius: 10,
          height: 40,
          width: 40,
          overflow: "hidden",
          padding: 5,
          marginRight: 10,
        }}
      >
        <Entypo name="location-pin" size={30} color="#A42A73" />
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>be at 6 metrotech</Text>
        <Text style={styles.text2}>brooklyn, ny by 11:00 AM</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    color: "#3D3A9E",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    display: "flex",
  },
  text2: {
    fontSize: 17,
    color: "black",
    fontFamily: "Poppins_300Light",
  },
  box1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: "100%",
  },
  bigbox: {
    flex: 1,
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    alignItems: "center",
  },
});
