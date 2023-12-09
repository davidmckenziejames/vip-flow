import {
  Flex,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  HStack,
} from "@chakra-ui/react";
type Props = {
  title: string;
  author: string;
  thumbnail: string;
};
export const AudioDetails = ({ title, author, thumbnail }: Props) => {
  return (
    <HStack>
      <Flex flexDirection={"column"}>
        <Image src={thumbnail} alt="" width="150" height="150" />

        <Flex flexDirection={"column"}>
          <Text>{title}</Text>

          <Text>{author}</Text>
        </Flex>
      </Flex>
    </HStack>
  );
};
