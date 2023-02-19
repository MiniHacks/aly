import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
const ContactCard = ({ contact }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {/*<Image*/}
        {/*  source={avatar ? { uri: avatar } : require("../assets/avatar.png")}*/}
        {/*  style={styles.avatar}*/}
        {/*/>*/}
      </View>
      <Text style={styles.name}>{contact.givenName}</Text>
      <Text style={styles.number}>{contact.phoneNumbers[0]?.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#726FE4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  name: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
});

export default ContactCard;
