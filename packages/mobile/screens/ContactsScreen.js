import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, Text } from "react-native";
import Contacts from "react-native-contacts";
import ContactCard from "../components/ContactCard";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import SearchBar from "../components/SearchBar";

export default function HomeScreen() {
  const [contacts, setContacts] = useState([]);
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
    Contacts.getAll().then((contacts) => {
      setLoading(false);
      setContacts(contacts);
      firestore().collection("contacts").doc(auth().currentUser.uid).update(
        {
          contacts: contacts,
        },
        { merge: true }
      );
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contacts</Text>
      {!loading && (
        <Button
          title={`${contacts ? "Refresh" : "Get"} Contacts`}
          onPress={getContacts}
        />
      )}
      {loading && <Text>Loading...</Text>}

      <ScrollView style={{ width: "100%" }}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />

        {contacts
          .filter((c) =>
            JSON.stringify(c).toLowerCase().includes(searchPhrase.toLowerCase())
          )
          .map((contact) => (
            <ContactCard contact={contact} key={JSON.stringify(contact)} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
