import { Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Strike = (): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

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
        STRIKE {router.query.num}! 🤡
      </Text>
      <Text
        fontFamily={"Lato"}
        color={"whiteAlpha.400"}
        fontSize={"65px"}
        pl={50}
        pr={50}
        textAlign={"center"}
      >
        You got distracted... so we texted {router.query.name} for you.
      </Text>
    </VStack>
  );
};

export default Strike;
