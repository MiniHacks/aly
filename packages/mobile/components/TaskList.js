import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import cardStyles from "./CardStyles";
import BeSomewhereButton from "./BeSomewhereButton";
import auth from "@react-native-firebase/auth";
import DoSomethingButton from "./DoSomethingButton";
import FocusButton from "./FocusButton";
export default function TaskList({ navigation }) {
  return (
    <View style={[styles.bigbox, cardStyles]}>
      <BeSomewhereButton navigation={navigation} />
      <DoSomethingButton navigation={navigation} />
      <FocusButton navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  bigbox: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 250,
    marginHorizontal: 20,
    marginTop: -70,
  },
});
