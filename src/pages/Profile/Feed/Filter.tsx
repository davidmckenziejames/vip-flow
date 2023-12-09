import {
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useReducer } from "react";

// Custom components
const reducer = (state: any, action: any) => {
  if (action.type === "SWITCH_ACTIVE") {
    if (action.payload === "latest") {
      const newState = {
        latest: true,
        popular: false,
      };
      return newState;
    } else {
      const newState = {
        latest: false,
        popular: true,
      };
      return newState;
    }
  }
  return state;
};

export default function Filter() {
  const [state, dispatch] = useReducer(reducer, {
    latest: false,
    popular: true,
    projects: false,
  });

  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex direction="row">
      <Button p="0px" bg="transparent" variant="no-effects">
        <Flex
          align="center"
          w={{ base: "80px", lg: "105px" }}
          borderRadius="30px"
          justifyContent="center"
          py="10px"
          border="1px solid"
          borderColor={
            state.latest
              ? colorMode === "dark"
                ? "transparent"
                : "secondaryGray.400"
              : "transparent"
          }
          cursor="pointer"
          transition="all .22s ease"
          onClick={() => dispatch({ type: "SWITCH_ACTIVE", payload: "latest" })}
        >
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            My Feed
          </Text>
        </Flex>
      </Button>
      <Button p="0px" bg="transparent" variant="no-effects">
        <Flex
          align="center"
          w={{ base: "80px", sm: "100px" }}
          borderRadius="30px"
          justifyContent="center"
          py="10px"
          px="10px"
          mx="5px"
          cursor="pointer"
          border="1px solid"
          borderColor={
            state.popular
              ? colorMode === "dark"
                ? "transparent"
                : "secondaryGray.400"
              : "transparent"
          }
          bg="#9f7aea"
          transition="all .22s ease"
          onClick={() =>
            dispatch({ type: "SWITCH_ACTIVE", payload: "popular" })
          }
        >
          <Text fontSize="sm" color="#fff" fontWeight="bold">
            Popular
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}
