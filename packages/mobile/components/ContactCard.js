import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import cardStyles from "./CardStyles";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
const ContactCard = ({ contact, strikes }) => {
  const fields = ["first_strike", "second_strike", "third_strike"];
  const pressHandler = (strike) => () => {
    console.log("pressed", strike, "strike for", auth().currentUser.uid);
    const addOrRemove = strikes[strike].includes(contact.recordID)
      ? "arrayRemove"
      : "arrayUnion";
    // remove from the other two strikes:
    const otherStrikes = strikes.map((_, i) => i).filter((i) => i !== strike);
    console.log({ otherStrikes });
    const update = {
      [fields[strike]]: firestore.FieldValue[addOrRemove](contact.recordID),
    };
    for (let i = 0; i < otherStrikes.length; i++) {
      update[fields[otherStrikes[i]]] = firestore.FieldValue.arrayRemove(
        contact.recordID
      );
    }
    console.log(update);
    firestore()
      .collection("contacts")
      .doc(auth().currentUser.uid)
      .update(update)
      .then(() => {
        console.log("Document successfully updated!");
      });
  };
  return (
    <View style={[styles.container, cardStyles, { shadowOpacity: 0.07 }]}>
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
      <View
        style={{
          marginRight: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={pressHandler(0)}
            style={[
              styles.button,
              strikes[0].includes(contact.recordID) && styles.buttonSelected,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                strikes[0].includes(contact.recordID) &&
                  styles.buttonTextSelected,
              ]}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandler(1)}
            style={[
              styles.button,
              strikes[1].includes(contact.recordID) && styles.buttonSelected,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                strikes[1].includes(contact.recordID) &&
                  styles.buttonTextSelected,
              ]}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandler(2)}
            style={[
              styles.button,
              strikes[2].includes(contact.recordID) && styles.buttonSelected,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                strikes[2].includes(contact.recordID) &&
                  styles.buttonTextSelected,
              ]}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#bfbdff",
  },
  buttonSelected: {
    backgroundColor: "#A42A73",
    borderColor: "#A42A73",
  },
  buttonText: {
    color: "#726FE4",
  },
  buttonTextSelected: {
    color: "white",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 3,
    borderRadius: 10,
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
    flexGrow: 1,
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
