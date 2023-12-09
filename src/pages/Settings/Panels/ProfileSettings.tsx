import {
  Box,
  Flex,
  Text,
  Textarea,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Stack,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function ProfileSettings() {
  return (
    <Box p="10px" pb="20px">
      <Text fontSize="16px" pb="15px">
        <i>This is how others will see you on the site.</i>
      </Text>
      <Flex gap="25px" flexDirection="column">
        <FormControl id="picture">
          <FormLabel>Picture</FormLabel>
          <Stack direction="row" align="center" gap="15px">
            <Avatar
              name=""
              src="https://djfan.ams3.cdn.digitaloceanspaces.com/2023/07/dmj-profile-crop.jpg"
              size="lg"
            />
            <Button>Upload</Button>
            <IconButton
              variant="outline"
              colorScheme="gray"
              aria-label="Send email"
              icon={<FaTrash />}
            />
          </Stack>
        </FormControl>
        <FormControl>
          <FormLabel>Display Name</FormLabel>
          <Input type="name" defaultValue="David McKenzie-James" />
          <FormHelperText>
            This is your public display name. It can be your real name or a
            pseudonym.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea defaultValue="Co-Founder of DJfan" />
        </FormControl>
        <Button
          bg={"#BE04F1"}
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Profile
        </Button>
      </Flex>
    </Box>
  );
}
