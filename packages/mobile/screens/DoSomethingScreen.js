import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-native-date-picker";

export default function DoSomething(navigation) {
  const [date, setDate] = useState(new Date());
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={"What task do you want to do?"}
      />
      <DatePicker date={date} onDateChange={setDate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
