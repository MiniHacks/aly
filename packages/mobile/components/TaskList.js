import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import cardStyles from "./CardStyles";
export default function TaskList() {
  return <View style={[styles.bigbox, cardStyles]}></View>;
}
const styles = StyleSheet.create({
  bigbox: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 200,
    marginHorizontal: 20,
    marginTop: -70,
  },
});
