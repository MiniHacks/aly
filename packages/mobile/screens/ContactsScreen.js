import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Contacts from "react-native-contacts";

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
    <View
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
          <Text key={contact.recordID}>
            {JSON.stringify(contact.phoneNumbers?.[0]?.number)}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
