import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-native-date-picker";

export default function FocusScreen(navigation) {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DatePicker date={date} onDateChange={setDate} />
      <DatePicker date={date2} onDateChange={setDate2} />
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
