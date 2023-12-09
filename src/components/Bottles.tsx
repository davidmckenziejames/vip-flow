import React, { useState } from "react";
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
} from "@chakra-ui/react";

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
    <Flex as="label" w={{ base: "45%" }} cursor="pointer">
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
          h="120px"
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

export default function Bottles() {
  // ...

  const [cart, setCart] = useState<Bottle[]>([]);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "bottle",
    defaultValue: undefined,
    // rest of the props...
  });
  const handleIncrement = (bottle: Bottle) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const existingBottle = cartCopy.find((b) => b.name === bottle.name);
      if (existingBottle) {
        existingBottle.quantity += 1;
      } else {
        cartCopy.push({ ...bottle, quantity: 1 });
      }
      return cartCopy;
    });
  };

  // The handleDecrement function
  const handleDecrement = (bottle: Bottle) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const existingBottle = cartCopy.find((b) => b.name === bottle.name);
      if (existingBottle && existingBottle.quantity > 1) {
        existingBottle.quantity -= 1;
      } else if (existingBottle && existingBottle.quantity === 1) {
        return cartCopy.filter((b) => b.name !== bottle.name);
      }
      return cartCopy;
    });
  };
  const toast = useToast();
  const handleAddToCart = (bottle: Bottle) => {
    setCart((prevCart) => {
      const existingBottle = prevCart.find((b) => b.name === bottle.name);
      if (existingBottle) {
        toast({
          title: "Bottle already in the cart.",
          description: `£{bottle.name} is already in the cart.`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        prevCart.push({ ...bottle, quantity: 1 });
        toast({
          title: "Bottle added to the cart.",
          description: `Added £{bottle.name} to the cart.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      return [...prevCart];
    });
  };
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
                      <Box>{bottle.name}</Box>
                      <Box>{bottle.price}</Box>
                    </BottleCard>
                  );
                })}
              </HStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      {cart.length > 0 && (
        <Box mt={6} borderTop="2px solid #111" p="20px">
          <Text fontSize="20px" mb={2} fontWeight={"bold"}>
            Cart
          </Text>
          {cart.map((item) => (
            <HStack key={item.name}>
              <Text>
                {item.name} - Quantity: {item.quantity}
              </Text>
              <Button onClick={() => handleRemove(item)}>Remove</Button>
            </HStack>
          ))}
          <Text fontSize="xl" mt={3}>
            Total: £{total.toFixed(2)}
          </Text>
        </Box>
      )}
    </Box>
  );
}
