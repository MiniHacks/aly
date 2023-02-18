import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function StreakIcon({ streak }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="fire" size={24} color="#cf1920" />
      <Text style={styles.text}>{streak}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 59,
    height: 34,
    backgroundColor: "#3D3A9E",
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

  },
})
