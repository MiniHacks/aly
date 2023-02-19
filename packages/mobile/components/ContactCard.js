import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ContactCard = ({ contact }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.txt}>{contact?.givenName[0]}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {contact.givenName + " " + contact.familyName + " "}
        </Text>
        <Text style={styles.number}>{contact.phoneNumbers[0]?.number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "120%",
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    paddingVertical: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#726FE4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
  number: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    color: "#888",
  },
});

export default ContactCard;
