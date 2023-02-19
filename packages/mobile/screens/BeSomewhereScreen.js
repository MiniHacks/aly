import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

import Marker from "../components/marker.png";

export default function BeSomewhereScreen(navigation) {
  const [region, setRegion] = React.useState({
    latitude: 40.6942999,
    longitude: -73.9867675,
  });

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
        <Text style={styles.region}>
          Coords: {region.longitude}, {region.latitude}
        </Text>
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
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
  },
});
