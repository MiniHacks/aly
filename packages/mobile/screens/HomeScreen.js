import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import StrikeButton from "../components/StrikeButton";
import StreakIcon from "../components/StreakIcon";
import NextUpButton from "../components/NextUpButton";
import TaskList from "../components/TaskList";
// import BeSomewhereButton from "../components/BeSomewhereButton";
import * as Location from "expo-location";
import Device from "expo-device";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

function getDate() {
  const dayName = new Date().toLocaleString("en-us", { weekday: "long" });
  const monthName = new Date().toLocaleString("en-us", { month: "long" });
  const dayNumber = new Date().getDate();
  return `${dayName.toLowerCase()}, ${monthName
    .toLowerCase()
    .slice(0, 3)} ${dayNumber}`;
}

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  useEffect(() => {
    firestore()
      .collection("users")
      .doc(auth().currentUser.uid)
      .onSnapshot((doc) => {
        setData(doc.data());
      });

    firestore()
      .collection("users")
      .doc(auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5F5BDD",
      }}
    >
      <View
        style={{
          backgroundColor: "#EEF2F6",
          height: 200,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      />
      <ScrollView
        style={{
          paddingTop: 85,
        }}
      >
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
          <StreakIcon streak={data?.strikes ? 0 : 1} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <StrikeButton strikeCount={data?.strikes ?? 0} />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
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
              fontFamily: "Poppins_600SemiBold",
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
          <TaskList navigation={navigation} />
        </View>
        <Text>{text}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontFamily: "Poppins_400Regular",
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
