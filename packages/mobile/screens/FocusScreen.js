import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";
import DatePicker from "react-native-date-picker";
import TaskBG from "../components/TaskBG.png";

export default function FocusScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  return (
    <ImageBackground source={TaskBG} style={styles.image}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>start time</Text>
        <DatePicker date={date} onDateChange={setDate} />
        <Text style={styles.text}>end time</Text>
        <DatePicker date={date2} onDateChange={setDate2} />
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#fff",
            width: 80,
            height: 40,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              color: "#2D3748",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
});
