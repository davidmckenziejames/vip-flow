import React, { useState, useCallback } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Button,
  useRadioGroup,
  useToast,
  useRadio,
  Text,
  HStack,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FiShoppingBag, FiShoppingCart, FiX } from "react-icons/fi";
import { BottleType, Bottle, bottleData } from "../Form/BottleData";
import { BottleCard } from "../Form/BottleCard";
type OptionProps = {
  value: string;
  children: React.ReactNode;
};

const depositAmount = 39.0;

type TotalProps = {
  total: number;
};
interface BottlesProps {
  onTotalUpdate: (total: number) => void;
}
export const Total = ({ total }: TotalProps) => {
  return <Text fontSize="16px">Total: £{total.toFixed(2)}</Text>;
};

export default function Bottles({ onTotalUpdate }: BottlesProps) {
  const [cart, setCart] = useState<Bottle[]>([]);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "bottle",
    defaultValue: undefined,
    // rest of the props...
  });
  const handleIncrement = useCallback((bottle: Bottle) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const existingBottle = cartCopy.find((b) => b.name === bottle.name);

      if (existingBottle) {
        // Use the functional update form to ensure correct state update
        return cartCopy.map((b) =>
          b.name === bottle.name ? { ...b, quantity: b.quantity + 1 } : b,
        );
      } else {
        return [...cartCopy, { ...bottle, quantity: 1 }];
      }
    });
  }, []);

  const handleDecrement = useCallback((bottle: Bottle) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const existingBottle = cartCopy.find((b) => b.name === bottle.name);
      if (existingBottle && existingBottle.quantity > 1) {
        existingBottle.quantity -= 1;
      } else {
        return cartCopy.filter((b) => b.name !== bottle.name);
      }
      return cartCopy;
    });
  }, []);

  const handleRemove = (bottle: Bottle) => {
    setCart((prevCart) => {
      return prevCart.filter((b) => b.name !== bottle.name);
    });
  };
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g, "")); // Convert the price string to a number
    return sum + price * item.quantity;
  }, 0);

  // After updating the cart in handleIncrement, handleDecrement, and handleRemove:
  const newTotal = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + price * item.quantity;
  }, 0);

  // Call the callback function with the new total
  onTotalUpdate(newTotal);
  return (
    <Box bg="#fff">
      <Tabs variant="unstyled">
        <TabList
          mt="10px"
          ml="10px"
          gap="10px"
          overflowX="scroll"
          css={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE
            "&::-webkit-scrollbar": {
              // Chrome, Safari, Edge
              display: "none",
            },
          }}
        >
          {bottleData.map((bottleType, idx) => (
            <Tab
              color="black"
              _selected={{ bg: "black", color: "white" }}
              key={idx}
              w="fit-content"
              py="8px"
              px="12px"
              fontWeight="600"
              lineHeight="1em"
              rounded="lg"
            >
              {bottleType.type}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {bottleData.map((bottleType) => (
            <TabPanel key={bottleType.type}>
              <HStack
                wrap="wrap"
                w="100%"
                justify={"space-between"}
                rowGap="35px"
              >
                {bottleType.bottles.map((bottle) => {
                  const radio = getRadioProps({ value: bottle.name });
                  return (
                    <BottleCard
                      key={bottle.name}
                      quantity={
                        cart.find((b) => b.name === bottle.name)?.quantity || 0
                      }
                      onIncrement={() => handleIncrement(bottle)}
                      onDecrement={() => handleDecrement(bottle)}
                      imageUrl={bottle.imageUrl}
                    >
                      <Box
                        fontWeight={"600"}
                        fontSize="16px"
                        lineHeight={"1em"}
                        color="#111"
                      >
                        {bottle.name}
                      </Box>
                      <Box
                        fontWeight={"500"}
                        color="#b69f6c"
                        lineHeight={"1em"}
                      >
                        {bottle.price}
                      </Box>
                    </BottleCard>
                  );
                })}
              </HStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Box id="cart" />
      {cart.length > 0 && (
        <Box
          bg="#111"
          color={"#fff"}
          mt={"10px"}
          borderTop="2px solid #111"
          px="20px"
          py="15px"
        >
          <HStack justify={"space-between"} mb="10px">
            <Text
              fontSize="18px"
              fontWeight={"600"}
              display="flex"
              alignItems="center"
              gap="5px"
            >
              <FiShoppingBag /> Your Items
            </Text>
            <Box fontSize="18px" fontWeight={"600"}>
              <Total total={total} />
            </Box>
          </HStack>
          <Flex flexDirection="column" rowGap="10px">
            {cart.map((item) => {
              const itemPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
              const itemSubtotal = itemPrice * item.quantity;

              return (
                <HStack key={item.name} gap="15px" w="100%">
                  <Box
                    onClick={() => handleRemove(item)}
                    bg="#fff"
                    rounded="full"
                  >
                    <FiX cursor={"pointer"} color="#111" />
                  </Box>
                  <Text fontSize="16px" fontWeight={"500"}>
                    {item.quantity} x <b>{item.name}</b>
                  </Text>
                  <Text>(£{itemSubtotal.toFixed(2)})</Text>
                </HStack>
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
}
