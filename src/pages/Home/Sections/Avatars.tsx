import {
  Avatar,
  AvatarGroup,
  Flex,
  Box,
  Link,
  Text,
  HStack,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Anna Tur",
    src: "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/avatars-O60szDuGH4P9GOwL-2WmFZQ-t500x500.jpg",
  },
  {
    name: "Camilo",
    src: "https://djfan.app/wp-content/uploads/2023/05/6443a7b449572-1.jpeg",
  },
  {
    name: "Exotic",
    src: "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/ff-8e14e364f1a0dab2636d07aecd4b0988-ff-EC21F503-E96D-4B3E-93E2-0BD81EB4FAAC.jpeg",
  },
  {
    name: "Proudly People",
    src: "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/pp-profile.jpg",
  },
  {
    name: "Gretsenia",
    src: "https://djfan.app/wp-content/uploads/2023/03/gretsenia.jpg",
  },
  // Add as many avatars as you need
  ...new Array(19).fill({ name: "placeholder", src: "placeholder" }),
];

export default function Avatars() {
  return (
    <Flex flexDirection="column" align={{ base: "center", md: "center" }}>
      <HStack position={"relative"} px="25px">
        <Box
          position={"absolute"}
          borderRadius="10px"
          p="0"
          zIndex={"1"}
          right={"5px"}
          top={"-2px"}
          transform={"rotate(30deg)"}
          background="-webkit-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);"
        >
          <Text
            px="5px"
            py="2px"
            fontStyle="italic"
            fontWeight="700"
            color="black"
            fontSize={{ base: "12px" }}
          >
            NEW DJ'S
          </Text>
        </Box>
        <AvatarGroup size="lg" max={5} className="avatar-excess">
          {avatars.map(({ name, src }) => (
            <Link href="#" style={{ display: "inline-block" }} key={name}>
              <Avatar
                size="lg"
                border="2px solid #69F2EB !important"
                name={name}
                src={src}
              />
            </Link>
          ))}
        </AvatarGroup>
      </HStack>
    </Flex>
  );
}
