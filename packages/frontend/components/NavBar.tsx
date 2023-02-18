import { Box, Button, HStack } from "@chakra-ui/react";

const NavBar = (): JSX.Element => {
  return (
    <Box color={"black"} py={7} bg={"transparent"} top={"0"} zIndex={"100"}>
      <HStack px={"5%"} justifyContent={"space-between"} />
    </Box>
  );
};

export default NavBar;
