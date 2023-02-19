import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import StrikeButton from "../components/StrikeButton";
import StreakIcon from "../components/StreakIcon";
import NextUpButton from "../components/NextUpButton";
import { StyleSheet } from "react-native";
import TaskList from "../components/TaskList";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddTaskButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddTaskScreen")}
      style={styles.addtaskbutton}
    >
      <MaterialCommunityIcons name="plus" color={"#3D3A9E"} size={50} />
    </TouchableOpacity>
  );
}

function getDate() {
  var dayName = new Date().toLocaleString("en-us", { weekday: "long" });
  var monthName = new Date().toLocaleString("en-us", { month: "long" });
  var dayNumber = new Date().getDate();
  return (
    dayName.toLowerCase() +
    ", " +
    monthName.toLowerCase().slice(0, 3) +
    " " +
    dayNumber
  );
}

export default function HomeScreen(navigation) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#5F5BDD",
      }}
    >
      <AddTaskButton navigation={navigation} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: "7.5%",
            marginRight: "7.5%",
            marginBottom: 30,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.date}>{getDate()}</Text>
          <StreakIcon streak={7} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <StrikeButton strikeCount={0} />
        </View>
        <Text
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 24,
            lineHeight: 42,
            color: "#FFFFFF",
            marginLeft: "7.5%",
            marginRight: "7.5%",
          }}
        >
          next up
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <NextUpButton event={0} />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 24,
              lineHeight: 42,
              color: "#FFFFFF",
              marginLeft: "7.5%",
              marginRight: "7.5%",
              paddingBottom: 60,
            }}
          >
            i need to...
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#EEF2F6",
            paddingBottom: 200,
          }}
        >
          <TaskList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  date: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 42,
    color: "#FFFFFF",
  },
  addtaskbutton: {
    position: "absolute",
    backgroundColor: "#FFF",
    width: 60,
    height: 60,
    borderRadius: 50,
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
