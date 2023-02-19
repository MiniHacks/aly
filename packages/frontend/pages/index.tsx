import type { NextPage } from "next";
import {
  Box,
  Button,
  chakra,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FiChrome } from "react-icons/fi";
import { SiAppstore } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import PageLayout from "../components/Layout/PageLayout";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import "firebase/compat/auth";

import initFirebase from "../util/config";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.particlesJS?.load(
        "particles-js",
        "/particlesjs-config.json",
        () => {
          console.log("callback - particles.js config loaded");
        }
      );
    }
  }, []);
  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = (credential as unknown as { accessToken: string })
          ?.accessToken;
        // The signed-in user info.
        const { user } = result;
        // IdP data available in result.additionalUserInfo.profile.
        // eslint-disable-next-line no-console
        console.log({ token, user });
        router.push("/dash");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };
  return (
    <PageLayout title={"aly"}>
      <NavBar />
      <Box zIndex={-1} position={"relative"} marginTop={"-140px"}>
        <chakra.svg
          position={"absolute"}
          width={"100%"}
          height={"985"}
          viewBox={"0 0 1437 1053"}
          fill={"none"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M987.054 -531.422C1073.37 -645.088 1409.53 -459.383 1486.02 -429.587C1561.78 -398.709 1590.11 -251.47 1670.04 -187.736C1749.93 -122.447 1882.11 -140.191 1942.33 -81.9286C2001.82 -22.5845 1949.34 320.308 1949.34 320.308C1949.34 320.308 1915.77 541.35 1701.41 614.64C1508.1 680.733 1553.81 857.623 1471.65 887.186C1389.51 915.194 1317.19 906.55 1189.8 902.253C1062.4 897.956 912.708 1025.5 798.104 1048.85C683.538 1070.64 604.098 986.695 536.743 871.443C468.654 757.272 -72.7707 276.929 8.92817 149.067C91.3613 20.1228 517.669 -116.397 652.462 -242.987C785.824 -368.968 900.041 -418.23 987.054 -531.422Z"
            }
            fill={"url(#paint0_radial_43_60)"}
            // fillOpacity={"0.74"}
          />
          <defs>
            <radialGradient
              id={"paint0_radial_43_60"}
              cx={"0"}
              cy={"0"}
              r={"1"}
              gradientUnits={"userSpaceOnUse"}
              gradientTransform={
                "translate(1382.7 278.591) rotate(140.346) scale(778.006 746.397)"
              }
            >
              <stop offset={"0.166667"} stopColor={"#7C56D0"} />
              <stop offset={"1"} stopColor={"#4C57DA"} />
            </radialGradient>
          </defs>
        </chakra.svg>
        <chakra.svg
          position={"absolute"}
          width={"100%"}
          height={"850"}
          viewBox={"0 0 1512 903"}
          fill={"none"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M772.258 -625.031C876.109 -722.935 1177.11 -484.422 1247.65 -442.439C1317.29 -399.51 1321 -249.615 1389.34 -173.592C1457.39 -96.0422 1590.69 -91.7832 1640.5 -24.4011C1689.41 43.9273 1581.19 373.5 1581.19 373.5C1581.19 373.5 1511.69 586 1288.19 623C1086.64 656.367 1102.6 838.368 1016.69 854C931.067 868.105 861.156 847.672 736.205 822.46C611.253 797.248 442.608 898.404 325.724 902.569C209.133 905.207 144.597 809.325 97.1354 684.557C48.7717 560.735 -406.186 -2.19036 -304.551 -114.858C-202.015 -228.471 240.951 -292.944 394.746 -395.616C547.029 -497.922 667.797 -527.708 772.258 -625.031Z"
            }
            fill={"url(#paint0_radial_43_22)"}
          />
          <defs>
            <radialGradient
              id={"paint0_radial_43_22"}
              cx={"0"}
              cy={"0"}
              r={"1"}
              gradientUnits={"userSpaceOnUse"}
              gradientTransform={
                "translate(1168.19 273) rotate(170.482) scale(1273.02 1221.3)"
              }
            >
              <stop offset={"0.166667"} stopColor={"#8E62EC"} />
              <stop offset={"1"} stopColor={"#4C57DA"} />
            </radialGradient>
          </defs>
        </chakra.svg>
      </Box>
      <HStack mt={170} mb={450}>
        <VStack
          justifyItems={"space-between"}
          ml={200}
          align={"start"}
          pt={130}
          spacing={8}
        >
          <Box
            style={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "900",
              color: "#FFFFFF",
              fontSize: "75px",
              width: "700px",
              lineHeight: "105%",
            }}
          >
            keeping you <br />
            accountable,
          </Box>
          <Box
            style={{
              fontFamily: "Poppins",
              fontWeight: "300",
              fontStyle: "normal",
              fontSize: "36px",
              color: "#FFFFFF",
            }}
          >
            one awkward text at a time
          </Box>
          <HStack justifyContent={"center"} ml={"10px"}>
            <Button
              leftIcon={<BsArrowRight />}
              backgroundColor={"white"}
              color={"#3D3A9E"}
              px={4}
              py={6}
              variant={"ghost"}
              display={"flex"}
              _hover={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
              onClick={() => signIn()}
            >
              <Text fontFamily={"Poppins"} fontWeight={"500"}>
                start now
              </Text>
            </Button>
            <Button
              leftIcon={<FiChrome />}
              backgroundColor={"#3D3A9E"}
              color={"white"}
              px={4}
              py={6}
              variant={"ghost"}
              display={"flex"}
              _hover={{
                backgroundColor: "#524FA8",
              }}
            >
              <Text fontFamily={"Poppins"} fontWeight={"500"}>
                chrome
              </Text>
            </Button>

            <Button
              leftIcon={<SiAppstore />}
              backgroundColor={"#3D3A9E"}
              color={"white"}
              px={4}
              py={6}
              variant={"ghost"}
              display={"flex"}
              _hover={{
                backgroundColor: "#524FA8",
              }}
            >
              <Text fontFamily={"Poppins"} fontWeight={"500"}>
                app store
              </Text>
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <Image
        src={"iphone.png"}
        width={"345px"}
        style={{
          position: "absolute",
          top: "6%",
          right: "230px",
        }}
      />
      <Features />
      <Footer />
    </PageLayout>
  );
};

export default Home;
