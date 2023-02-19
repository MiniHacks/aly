import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function TaskList() {
  return <View style={styles.bigbox}></View>;
}
const styles = StyleSheet.create({
  bigbox: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#FFF",
    width: "85%",
    height: 200,
    overflow: "hidden",
    marginLeft: "7.5%",
    marginRight: "7.5%",
    marginTop: -70,
  },
});
