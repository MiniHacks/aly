import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./screens/SettingsScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ContactsScreen from "./screens/ContactsScreen";
import BeSomewhereScreen from "./screens/BeSomewhereScreen";
import FocusScreen from "./screens/FocusScreen";
import DoSomethingScreen from "./screens/DoSomethingScreen";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();

const settingsTab =
  (stackNavigation) =>
  (...props) =>
    <SettingsScreen stackNavigation={stackNavigation} {...props} />;
function MyTabs({ navigation: stackNavigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarButton: ["DoSomething", "BeSomewhere", "Focus"].includes(
          route.name
        )
          ? () => {
              return null;
            }
          : undefined,
        tabBarActiveTintColor: "#3D3A9E",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "transparent",
          height: 70,
          paddingBottom: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BeSomewhere"
        component={BeSomewhereScreen}
        options={{}}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: "contacts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Focus" component={FocusScreen} options={{}} />

      <Tab.Screen
        name="Settings"
        component={settingsTab(stackNavigation)}
        options={{
          tabBarLabel: "settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="DoSomething"
        component={DoSomethingScreen}
        options={{}}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="dark" />
        <MyStack />
      </NavigationContainer>
    );
  }
}
