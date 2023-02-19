import {
  HStack,
  Box,
  Text,
  Heading,
  VStack,
  Image,
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BiTask } from "react-icons/bi";
import { HiEye } from "react-icons/hi";

const Features = (): JSX.Element => {
  return (
    <Box>
      <HStack
        w={"100%"}
        h={"600px"}
        bg={"whiteAlpha.900"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Text
            marginTop={"-20px"}
            marginLeft={"30px"}
            marginBottom={"60px"}
            fontSize={"70px"}
            bgGradient={"linear(to-l, #8E62EC, #4C57DA)"}
            bgClip={"text"}
            // color={"#3D3A9E"}
            fontFamily={"Lato"}
          >
            features
          </Text>
          <HStack
            justifyContent={"space-evenly"}
            alignItems={"center"}
            spacing={10}
            marginBottom={"20%"}
          >
            <Box
              width={"25%"}
              borderRadius={"20px"}
              boxShadow={"20px 20px 50px rgba(30, 141, 203, 0.08)"}
              backgroundColor={"white"}
              py={6}
            >
              <VStack spacing={5}>
                <Circle size={"100px"} bg={"#726FE4"} color={"white"}>
                  <HiEye size={50} />
                </Circle>
                <Text
                  px={"20%"}
                  align={"center"}
                  fontSize={"17px"}
                  fontFamily={"Poppins"}
                  fontWeight={"300"}
                >
                  Get ready to be held accountable AF with our Three Strikes
                  Tier System, because let's face it, you need some tough love
                  to stay productive!
                </Text>
              </VStack>
            </Box>
            <Box
              width={"25%"}
              borderRadius={"20px"}
              boxShadow={"20px 20px 50px rgba(30, 141, 203, 0.08)"}
              backgroundColor={"white"}
              py={6}
            >
              <VStack spacing={5}>
                <Circle size={"100px"} bg={"#726FE4"} color={"white"}>
                  <BiTask size={50} />
                </Circle>
                <Text
                  px={"20%"}
                  align={"center"}
                  fontWeight={"300"}
                  fontSize={"18px"}
                  fontFamily={"Poppins"}
                >
                  Our platform has a sixth sense for distractions and will track
                  them like a hawk, making it virtually impossible for you to
                  slack off!
                </Text>
              </VStack>
            </Box>
            <Box
              width={"25%"}
              borderRadius={"20px"}
              boxShadow={"20px 20px 50px rgba(30, 141, 203, 0.08)"}
              backgroundColor={"white"}
              py={6}
            >
              <VStack spacing={5}>
                <Circle size={"100px"} bg={"#726FE4"} color={"white"}>
                  <RxCross2 size={50} />
                </Circle>
                <Text
                  px={"20%"}
                  align={"center"}
                  fontWeight={"300"}
                  fontSize={"18px"}
                  fontFamily={"Poppins"}
                >
                  Don't let your priorities run amok–let our nifty priority
                  management tools whip them into shape and make them behave!
                </Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Features;
