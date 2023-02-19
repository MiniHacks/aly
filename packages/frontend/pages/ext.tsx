import { User } from "@firebase/auth";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import withAuth from "../util/withAuth";
import { useUser } from "../util/useUser";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const quotes = [
  "today is your day to shine",
  "you're unstoppable, keep going",
  "you're amazing, keep doing you",
  "be a warrior, not a worrier",
  "don't let anyone dim your light, keep shining",
  "you're a powerhouse, keep the momentum goin",
  "believe in yourself, and anything is possible",
  "today's a good day. pop off queen",
];

const Dash = () => {
  const { user, logout } = useUser();

  const [rq, setRq] = useState("");
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setRq(quotes[index]);
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    console.log(user);
    firebase
      .firestore()
      .collection("users")
      .doc(user?.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc?.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          firebase
            .firestore()
            .collection("users")
            .doc(user?.id)
            .set({
              focusMode: {
                enabled: false,
                time: Date.now(),
              },
              strikes: 0,
            });
        }
      });

    // get snapshot of user data
    firebase
      .firestore()
      .collection("users")
      .doc(user?.id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setData(doc?.data() ?? {});
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
  }, [user]);

  const u = user as unknown as User;
  const enabled = data?.focusMode?.enabled;
  const loading = data === null;
  const strikes = data?.focusMode?.strikes ?? 0;
  return (
    <VStack p={2} spacing={2} height={"580px"}>
      <Card w={"full"}>
        <CardHeader>
          <Heading size={"sm"}>
            welcome <chakra.span fontWeight={200}>{u?.email}.</chakra.span>
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Box>
              <Heading size={"lg"} m={0}>
                {
                  ["you're on track", "strike 1", "strike 2", "strike 3"][
                    strikes
                  ]
                }
              </Heading>
              <Text pt={"2"} fontSize={"sm"}>
                your <b>aly</b>s will help you rebuild your streak
              </Text>
            </Box>
            <Box>
              <Heading size={"xs"}>next up</Heading>
              <Text pt={"2"} fontSize={"sm"}>
                be at 6 MetroTech by 11:00 am.
              </Text>
            </Box>
            <Box>
              <Heading size={"xs"}>remember:</Heading>
              <Text pt={"2"} fontSize={"sm"}>
                {rq}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card w={"full"} bg={enabled ? "blue.100" : "green.50"}>
        <CardBody>
          <VStack spacing={4} align={"start"}>
            <Heading size={"xl"}>focus mode.</Heading>
            {!loading && (
              <Text>
                currently {data?.focusMode?.enabled ? "enabled" : "disabled"}{" "}
                {enabled
                  ? `until ${new Date(
                      data?.focusMode?.time + 20 * 60 * 1000
                    ).toLocaleTimeString()}`
                  : ""}
              </Text>
            )}

            <Button
              isLoading={loading}
              colorScheme={enabled ? "red" : "green"}
              onClick={() => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(user?.id)
                  .set({
                    focusMode: {
                      enabled: !enabled,
                      time: Date.now(),
                    },
                  });
              }}
            >
              {enabled ? "disable" : "enable"}
            </Button>

            <Text fontSize={"sm"}>
              remember, getting distracted or turning off focus mode before 20
              minutes is up will count as a strike!
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default withAuth(Dash);
