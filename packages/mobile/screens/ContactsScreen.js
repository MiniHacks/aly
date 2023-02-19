import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import Contacts from "react-native-contacts";
import ContactCard from "../components/ContactCard";

export default function HomeScreen() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getContacts = () => {
    setLoading(true);
    Contacts.getAll().then((contacts) => {
      setLoading(false);
      setContacts(contacts);
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
      {!loading && <Button title={"Get Contacts"} onPress={getContacts} />}
      {loading && <Text>Loading...</Text>}

      <ScrollView>
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={JSON.stringify(contact)} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
