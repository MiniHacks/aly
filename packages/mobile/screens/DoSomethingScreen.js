import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import TaskBG from "../components/TaskBG.png";

export default function DoSomething({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [text, onChangeText] = React.useState("");

  return (
    <ImageBackground source={TaskBG} style={styles.image}>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontFamily: "Poppins_600SemiBold",
          textAlign: "center",
        }}
      >
        do something
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={"enter task here"}
          placeholderTextColor={"#2D3748"}
        />
        <DatePicker date={date} onDateChange={setDate} />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#fff",
          width: 80,
          height: 40,
          borderRadius: 20,
          overflow: "hidden",
          alignItems: "center",
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    maxWidth: "85%",
    minWidth: "85%",
    marginHorizontal: 12,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
    color: "black",
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
