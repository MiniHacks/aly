import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function BeSomewhereButton({ navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("BeSomewhere")}
      style={styles.button}
    >
      <Text style={styles.text}>Be Somewhere</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3D3A9E",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 200,
    alignSelf: "center",
  },
  text: {
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default BeSomewhereButton;
