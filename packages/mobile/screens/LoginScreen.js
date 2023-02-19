import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import firestore from "@react-native-firebase/firestore";

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

function LoginScreen() {
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
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <SafeAreaView
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Pressable
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log("Signed in with Google!")
              )
            }
          >
            <Text>Login</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>Welcome {user.email}</Text>
        <Text>{JSON.stringify(data)}</Text>
        <Pressable
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log("User signed out!"))
          }
        >
          <Text>Logout</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default LoginScreen;
