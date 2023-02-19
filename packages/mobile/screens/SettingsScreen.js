import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";
import SettingsBG from "../components/BackgroundSettings.png";
import auth from "@react-native-firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import cardStyles from "../components/CardStyles";

export default function SettingsScreen({ stackNavigation }) {
  const user = auth().currentUser;
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
          marginTop: 20,
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
        >
          <Image source={{ uri: user.photoURL }} style={{ flex: 1 }} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              marginLeft: 10,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            {user.displayName}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              marginLeft: 10,
              fontFamily: "Poppins_400Regular",
            }}
          >
            {user.email}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...cardStyles,
          height: 80,
          marginTop: 80,
          padding: 10,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: "#FFF",
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 10,
          }}
        >
          <MaterialCommunityIcons
            name={"account"}
            size={30}
            color={"#3D3A9E"}
          />
          <Text
            style={{
              color: "#3D3A9E",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              paddingLeft: 20,
            }}
          >
            Profile
          </Text>
        </View>
      </View>
      <View
        style={{
          ...cardStyles,
          height: 80,
          padding: 10,
          marginTop: 20,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: "#FFF",
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 10,
          }}
        >
          <MaterialCommunityIcons name={"bell"} size={30} color={"#3D3A9E"} />
          <Text
            style={{
              color: "#3D3A9E",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              paddingLeft: 20,
            }}
          >
            Notifications
          </Text>
        </View>
      </View>
      <View
        style={{
          ...cardStyles,
          height: 80,
          padding: 10,
          marginTop: 20,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: "#FFF",
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 10,
          }}
        >
          <MaterialCommunityIcons name={"lock"} size={30} color={"#3D3A9E"} />
          <Text
            style={{
              color: "#3D3A9E",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              paddingLeft: 20,
            }}
          >
            Privacy & Security
          </Text>
        </View>
      </View>
      <View
        style={{
          ...cardStyles,
          height: 80,
          padding: 10,
          marginTop: 20,
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: "#FFF",
          marginHorizontal: 20,
        }}
      >
        <Pressable
          onPress={() =>
            auth()
              .signOut()
              .then(() => stackNavigation.navigate("Login"))
          }
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              paddingLeft: 10,
              paddingTop: 10,
            }}
          >
            <MaterialCommunityIcons
              name={"logout"}
              size={30}
              color={"#3D3A9E"}
            />
            <Text
              style={{
                color: "#3D3A9E",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 24,
                paddingLeft: 20,
              }}
            >
              Logout
            </Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
