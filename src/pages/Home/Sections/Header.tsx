import { Box, Image, Flex } from "@chakra-ui/react";
import SignInButton from "./HeaderComponents/SignInButton";
import { useNavbar } from "./useNavbar";

export default function Header() {
  const { rootProps } = useNavbar();
  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg-accent"
      {...rootProps}
    >
      <Flex
        bg="black"
        borderBottom="1px solid #ffffff"
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <Flex
          maxW="1024px"
          w="100%"
          alignItems="center"
          justifyContent={"space-between"}
          px={{ base: "10px", md: "0px" }}
          py="10px"
        >
          <Image
            id="logo"
            w="120px"
            src="https://creators.djfan.app/wp-content/uploads/2023/04/djfan-email.png"
          />
          <SignInButton />
        </Flex>
      </Flex>
    </Box>
  );
}
