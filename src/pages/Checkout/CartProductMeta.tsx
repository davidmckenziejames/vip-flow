import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Flex,
  Stack,
  Text,
  useColorModeValue as mode
} from "@chakra-ui/react";
import { FiMusic } from "react-icons/fi";

export type CartProductMetaProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { image, name, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {description}
          </Text>
          <Text fontSize="12px" as="span" mt="10px">
            <Flex align="center">
              <Box as={FiMusic} mr={1} mb="-1px" />
              Digital Download
            </Flex>
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
