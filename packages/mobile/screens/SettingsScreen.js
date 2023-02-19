import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import SettingsBG from "../components/SettingsCoolio.png";
import auth from "@react-native-firebase/auth";

export default function SettingsScreen() {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
      }}
      source={SettingsBG}
    >
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontFamily: "Poppins_600SemiBold",
            marginTop: 40,
            marginLeft: 125,
          }}
        >
          SETTINGS
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: 50,
            marginLeft: 20,
          }}
        ></View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              marginLeft: 10,
              fontFamily: "Poppins_400Regular",
            }}
          >
            Name of the person
          </Text>
        </View>
      </View>
      <Button
        title={"sign out bitch"}
        onPress={() => auth().signOut()}
      ></Button>
    </ImageBackground>
  );
}
