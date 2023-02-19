import type { NextPage } from "next";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PageLayout from "../components/Layout/PageLayout";

const Strike = (): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      setPosition({ x: x as number, y: y as number });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <VStack>
      <Text
        fontFamily={"Poppins"}
        textAlign={"center"}
        mt={"175px"}
        fontSize={"150px"}
        fontWeight={"700"}
        color={"whiteAlpha.700"}
        transform={`translate(${position.x}px, ${position.y}px)`}
      >
        STRIKE! 🤡
      </Text>
      <Text fontFamily={"Lato"} color={"whiteAlpha.400"} fontSize={"65px"}>
        {" "}
        You got distracted... so we texted [person]
      </Text>
    </VStack>
  );
};

export default Strike;
