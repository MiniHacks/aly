import { Box, Button, HStack } from "@chakra-ui/react";

const NavBar = (): JSX.Element => {
  return (
    <Box color={"black"} py={7} bg={"transparent"} top={"0"} zIndex={"-1"}>
      <HStack px={"5%"} justifyContent={"space-between"}>
        <HStack ml={"109px"}>
          <Button
            variant={"solid"}
            fontWeight={"200"}
            fontFamily={"MuseoModerno"}
            fontSize={"64px"}
            colorScheme={"white"}
            color={"white"}
          >
            aly
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
