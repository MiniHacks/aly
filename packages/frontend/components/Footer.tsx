import { HStack, Box, Text, Heading, VStack, Button } from "@chakra-ui/react";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <Box>
      <HStack
        w={"100%"}
        h={"200px"}
        bg={"brand.100"}
        justifyContent={"center"}
        fontFamily={"Poppins"}
      >
        <HStack justifyContent={"space-between"}>
          <VStack alignItems={"left"}>
            <Text
              color={"white"}
              fontSize={"25px"}
              fontWeight={"600"}
              fontFamily={"Lato"}
            >
              made for HackNYU
            </Text>
            <Text fontFamily={"Poppins"} color={"white"}>
              hacked together by{" "}
              <Button
                color={"white"}
                fontWeight={"600"}
                variant={"link"}
                as={"a"}
                target={"_blank"}
                href={"https://iamstuti.com"}
              >
                stuti
              </Button>
              <Button
                color={"white"}
                fontWeight={"600"}
                variant={"link"}
                as={"a"}
                target={"_blank"}
                href={"https://yok.dev"}
              >
                , samyok
              </Button>
              <Button
                color={"white"}
                fontWeight={"600"}
                variant={"link"}
                as={"a"}
                target={"_blank"}
                href={"https://anshpa.tel"}
              >
                , ansh
              </Button>
              ,{"  "}and {"  "}
              <Button
                color={"white"}
                fontWeight={"600"}
                variant={"link"}
                as={"a"}
                target={"_blank"}
                href={"https://brandonlam.dev"}
              >
                brandon.
              </Button>
              {"  "}we all study computer science at the University of
              Minnesota, Twin Cities.
            </Text>
            <Text color={"white"} fontFamily={"Poppins"}>
              star us on{"  "}
              <Button
                color={"white"}
                fontWeight={"600"}
                variant={"link"}
                as={"a"}
                target={"_blank"}
                href={"https://github.com/MiniHacks/aly"}
              >
                Github.
              </Button>
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
