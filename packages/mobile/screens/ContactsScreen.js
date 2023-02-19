import React, { useEffect, useState } from "react";
import {
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Contacts from "react-native-contacts";
import ContactCard from "../components/ContactCard";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    const subscriber = firestore()
      .collection("contacts")
      .doc(auth().currentUser.uid)
      .onSnapshot((documentSnapshot) => {
        setData(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const getContacts = () => {
    setLoading(true);
    Promise.all([Contacts.getAll(), new Promise((r) => setTimeout(r, 750))])
      .then(([contacts, _]) => {
        setLoading(false);
        firestore().collection("contacts").doc(auth().currentUser.uid).set(
          {
            contacts: contacts,
          },
          { merge: true }
        );
      })
      .catch(console.error);
  };

  return (
    <View
      style={{
        backgroundColor: "#EEF2F6",
        height: "100%",
        width: "100%",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{ width: "100%" }}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getContacts} />
          }
        >
          <Text
            style={{
              fontFamily: "Poppins_300Light",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            click on a contact to add them as an{" "}
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              aly
            </Text>
            .
          </Text>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />

          {data?.contacts
            ?.filter((c) =>
              JSON.stringify(c)
                .toLowerCase()
                .includes(searchPhrase.toLowerCase())
            )
            .map((contact) => (
              <ContactCard
                contact={contact}
                key={JSON.stringify(contact)}
                strikes={[
                  data.first_strike ?? [],
                  data.second_strike ?? [],
                  data.third_strike ?? [],
                ]}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
