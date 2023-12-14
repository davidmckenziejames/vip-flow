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
import { FiX } from "react-icons/fi";

type OptionProps = {
  value: string;
  children: React.ReactNode;
};

function BottleCard(props: {
  children: React.ReactNode;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  imageUrl: string; // Add imageUrl prop
}) {
  const { children, quantity, onIncrement, onDecrement, imageUrl } = props;
  return (
    <Flex as="label" w={{ base: "45%", md: "30%" }} cursor="pointer">
      <VStack
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _focus={{
          boxShadow: "none",
        }}
        align="center"
        p="10px"
        w="100%"
      >
        <Image
          src={imageUrl}
          alt="Bottle image"
          w="100%"
          maxH="100px"
          objectFit="contain"
        />
        {children}
        <HStack>
          <Button size="sm" onClick={onDecrement}>
            -
          </Button>
          <Text>{quantity}</Text>
          <Button size="sm" onClick={onIncrement}>
            +
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

type Bottle = {
  name: string;
  price: string;
  quantity: number;

  imageUrl: string;
};

type BottleType = {
  type: string;
  bottles: Bottle[];
};

// Data for different types of bottles
const bottleData: BottleType[] = [
  {
    type: "Vodka",
    bottles: [
      {
        name: "Grey Goose",
        price: "£100",
        quantity: 0,
        imageUrl: "src/assets/bottles/grey-goose.webp",
      },
      {
        name: "Absolut",
        price: "£130",
        quantity: 0,
        imageUrl: "src/assets/bottles/absolut.webp",
      },
      {
        name: "Belvedere",
        price: "£150",
        quantity: 0,
        imageUrl: "src/assets/bottles/belvedere.jpg",
      },
      {
        name: "Ciroc",
        price: "£135",
        quantity: 0,
        imageUrl: "src/assets/bottles/ciroc-vodka.jpg",
      },
    ],
  },
  {
    type: "Gin",
    bottles: [
      {
        name: "Bombay Sapphire",
        price: "£25",
        quantity: 0,
        imageUrl: "src/assets/bottles/bombay-sapphire.webp",
      },
      {
        name: "Hendrick's",
        price: "£40",
        quantity: 0,
        imageUrl: "src/assets/bottles/hendricks.webp",
      },
      {
        name: "Beefeater",
        price: "£20",
        quantity: 0,
        imageUrl: "src/assets/bottles/beefeater.webp",
      },
      {
        name: "Gordon's",
        price: "£15",
        quantity: 0,
        imageUrl: "src/assets/bottles/gordons.jpg",
      },
    ],
  },
  {
    type: "Tequila",
    bottles: [
      {
        name: "Patron",
        price: "£45",
        quantity: 0,
        imageUrl: "src/assets/bottles/patron_silver.jpg",
      },
      {
        name: "Don Julio",
        price: "£50",
        quantity: 0,
        imageUrl: "src/assets/bottles/don-julio.jpg",
      },
      {
        name: "Herradura",
        price: "£55",
        quantity: 0,
        imageUrl: "src/assets/bottles/herradura.jpg",
      },
      {
        name: "El Jimador",
        price: "£35",
        quantity: 0,
        imageUrl: "src/assets/bottles/eljimador.jpg",
      },
    ],
  },
  {
    type: "Champagne",
    bottles: [
      {
        name: "Moet & Chandon",
        price: "£50",
        quantity: 0,
        imageUrl: "src/assets/bottles/mc.jpg",
      },
      {
        name: "Veuve Clicquot",
        price: "£70",
        quantity: 0,
        imageUrl: "src/assets/bottles/v-c.jpg",
      },
      {
        name: "Dom Perignon",
        price: "£200",
        quantity: 0,
        imageUrl: "src/assets/bottles/dom-perignon.jpg",
      },

      {
        name: "Louis Roederer ",
        price: "£300",
        quantity: 0,
        imageUrl: "src/assets/bottles/louis-roe.webp",
      },
    ],
  },
];

type TotalProps = {
  total: number;
};

export function Total({ total }: TotalProps) {
  return <Text fontSize="16px">Total: £{total.toFixed(2)}</Text>;
}

export default function Bottles() {
  // ...

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
  return (
    <Box bg="#fff">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          {bottleData.map((bottleType, idx) => (
            <Tab key={idx}>{bottleType.type}</Tab>
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
                        fontWeight={"bold"}
                        fontSize="16px"
                        lineHeight={"1em"}
                      >
                        {bottle.name}
                      </Box>
                      <Box lineHeight={"1em"}>{bottle.price}</Box>
                    </BottleCard>
                  );
                })}
              </HStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      {cart.length > 0 && (
        <Box
          bg="#111"
          color={"#fff"}
          mt={"10px"}
          borderTop="2px solid #111"
          p="20px"
          pb="30px"
        >
          <HStack justify={"space-between"} mb="10px">
            <Text fontSize="20px" fontWeight={"bold"}>
              Cart
            </Text>
            <Total total={total} />
          </HStack>
          {cart.map((item) => (
            <HStack key={item.name}>
              <Text>
                {item.quantity} x {item.name}
              </Text>
              <Box onClick={() => handleRemove(item)} bg="#fff">
                <FiX cursor={"pointer"} color="#111" />
              </Box>
            </HStack>
          ))}
        </Box>
      )}
    </Box>
  );
}
