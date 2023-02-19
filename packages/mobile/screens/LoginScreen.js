import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import firestore from "@react-native-firebase/firestore";
import login_gradient from "../images/splash.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
GoogleSignin.configure({
  webClientId:
    "952030183707-mhtnrvjp5v00jj3c44qss68s6daa2de8.apps.googleusercontent.com",
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

function LoginScreen({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const subscriber = firestore()
      .collection("testing")
      .doc("samyok")
      .onSnapshot((documentSnapshot) => {
        setData(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user?.email) navigation.navigate("Main");
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <ImageBackground source={login_gradient} resizeMode={"cover"}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            paddingHorizontal: 40,
            paddingVertical: 40,
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Poppins_800ExtraBold",
            }}
          >
            Welcome.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_300Light",
              marginTop: 10,
            }}
          >
            Sign in and go crazy, we will contact your friends, we will contact
            your parents, we will publicly humiliate you too, so don’t skip and
            be held accountable.
          </Text>
          <TouchableOpacity
            onPress={() => {
              onGoogleButtonPress().then(() => {
                navigation.navigate("Main");
              });
            }}
            style={{
              borderRadius: 40,
              backgroundColor: "#F1F0F0",
              padding: 20,
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons name="social-google" size={24} color="black" />
            <Text
              style={{
                marginLeft: 12,
                fontFamily: "Poppins_500Medium",
                flexGrow: 1,
              }}
            >
              Continue with Google
            </Text>
            <SimpleLineIcons name="arrow-right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
