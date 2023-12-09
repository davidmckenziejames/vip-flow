import { Box, Flex, Heading, Stack, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight, FaHeadphones, FaTimes } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { keyframes } from "@emotion/react"; // or 'styled-components'
const moveUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const moveDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;
export default function AuthFooterBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState(moveUp);

  const hideFooter = () => {
    setAnimation(moveDown);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500); // match the duration of your animation
  };
  if (!isVisible) {
    return null;
  }
  return (
    isVisible && (
      <Flex
        width={{ base: "100%", md: "350px" }}
        animation={`${animation} 1.5s ease-out`}
        position="fixed"
        bottom="0px"
        right={{ base: "unset", md: "0px" }}
        p="0"
        py={{ base: "10px", md: "40px" }}
        bgImage="https://media.djfan.app/images/dj-over.jpg"
        bgSize="cover"
        bgPosition="center"
        textAlign="center"
        borderTop={{ base: "2px solid white", md: "3px solid cyan" }}
        borderRadius={{ base: "10px 10px 0px 0px", md: "10px 0px 0px 0px" }}
        borderLeft={{ base: "2px solid white", md: "3px solid cyan" }}
        borderRight={{ base: "2px solid white", md: "unset" }}
      >
        <Flex
          gap={{ base: "20px", md: "15px" }}
          w="100%"
          justifyContent="center"
          px="20px"
          alignItems="center"
          flexDirection={{ base: "row", md: "column" }}
        >
          <Box
            position="absolute"
            p="5px"
            right="0px"
            top="0px"
            onClick={hideFooter}
            cursor="pointer"
          >
            <MdOutlineClose color="#fff" fontSize="22px" />
          </Box>
          <Heading
            fontSize={{ base: "22px", md: "28px" }}
            color="#fff"
            lineHeight="1em"
          >
            Are you a DJ?
          </Heading>
          <Box
            borderRadius="5px"
            bgGradient="linear(to-r, #00ff88, #61efff)"
            as="a"
            href="https://creatos.djfan.app/signin"
            target="_blank"
            fontSize="14px"
            lineHeight="1em"
            fontWeight="800"
            color="#111111"
            border="2px solid black"
            px="10px"
            display="flex"
            gap="5px"
            alignItems="center"
            alignSelf={"center"}
            height="35px"
            _hover={{
              boxShadow: `.15rem .15rem 0 #00ff87`,
              bg: "#fff",
              fontWeight: "800",
              border: "2px solid black",
            }}
          >
            SIGN IN{" "}
            <Box display={{ base: "none", sm: "flex", md: "flex" }}>HERE</Box>
            <FaHeadphones fontSize="14px" />
          </Box>
        </Flex>
      </Flex>
    )
  );
}
