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

type BottleType = {
  type: string;
  bottles: Bottle[];
};

type Bottle = {
  name: string;
  price: string;
  quantity: number;

  imageUrl: string;
};

export const bottleData: BottleType[] = [
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

export function BottleCard(props: {
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
