import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import StrikeButton from "../components/StrikeButton";
import StreakIcon from "../components/StreakIcon";
import { StyleSheet } from "react-native";
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

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "5F5BDD",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: "7.5%",
            marginRight: "7.5%",
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.date}>{getDate()}</Text>
          <StreakIcon streak={5} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <StrikeButton strikeCount={3} />
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
});
