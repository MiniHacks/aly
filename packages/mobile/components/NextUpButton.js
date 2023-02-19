import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function NextUpButton({ event }) {
  const text = ["be at MetroTech.", "be at 2041", "be at 2033", "Go to gym"][
    event
  ];
  return (
    <View style={styles.bigbox}>
      <View
        style={{
          backgroundColor: "#FFD7EF",
          borderRadius: 10,
          height: 40,
          width: 40,
          marginTop: 10,
          overflow: "hidden",
          marginLeft: 10,
        }}
      >
        <Entypo
          style={{
            marginLeft: 5,
            marginTop: 5,
          }}
          name="location-pin"
          size={30}
          color="#A42A73"
        />
      </View>
      <View style={styles.box1}>
        <Text style={styles.text1}>{text}</Text>
        <Text style={styles.text2}>by 11:00 AM</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    color: "#3D3A9E",
    fontFamily: "Poppins",
    fontStyle: "semi-bold",
    fontSize: 19,
    lineHeight: 20,
    paddingLeft: 10,
    display: "flex",
  },
  text2: {
    fontSize: 12,
    color: "black",
    fontFamily: "Poppins",
    fontStyle: "light",
    paddingLeft: 10,
  },
  box1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: 60,
  },
  bigbox: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#FFF",
    width: "85%",
    overflow: "hidden",
    maxHeight: 60,
  },
});
