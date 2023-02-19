import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MapView from "react-native-maps";

import Marker from "../components/marker.png";
import DatePicker from "react-native-date-picker";

export default function BeSomewhereScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [region, setRegion] = React.useState({
    latitude: 40.6942999,
    longitude: -73.9867675,
  });
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.map}>
      <MapView
        initialRegion={{
          latitude: 40.6942999,
          longitude: -73.9867675,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0015,
        }}
        onRegionChangeComplete={setRegion}
        style={styles.map}
      />
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={Marker} />
      </View>
      <SafeAreaView style={styles.footer}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            alignSelf: "center",
            marginTop: 20,
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
        <Text style={styles.region}>
          Coords: {region.longitude.toFixed(5)}, {region.latitude.toFixed(5)}
        </Text>
        <View>
          <DatePicker
            style={{ height: 100, theme: "light" }}
            date={date}
            textColor={"#fff"}
            onDateChange={setDate}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
  },
});
