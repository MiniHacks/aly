import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import cardStyles from "./CardStyles";
function FocusButton({ navigation }) {
  return (
    <View style={[styles.bigbox, cardStyles]}>
      <View
        style={{
          backgroundColor: "#BAD38F",
          borderRadius: 10,
          height: 40,
          width: 40,
          overflow: "hidden",
          padding: 5,
          marginRight: 10,
        }}
      >
        <Entypo name="eye" size={30} color="#7E9D4F" />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Focus")}
        style={styles.button}
      >
        <Text style={styles.text1}>focus</Text>
      </Pressable>
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

  bigbox: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
});

export default FocusButton;
