import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

const fontlabelStyle = {
  mb: "8px",
  fontSize: "14px",
  lineHeight: "1em",
  fontWeight: "600",
  color: "#111",
};

const wb = {
  bg: "#fff",
  color: "#111",
};

export function ContactForm() {
  return (
    <>
      <Flex flexDirection={"row"} flexWrap={"wrap"} justify={"space-between"}>
        <FormControl mt="4" color="black" w="48%">
          <FormLabel htmlFor="first-name" {...fontlabelStyle}>
            First Name
          </FormLabel>
          <Input
            {...wb}
            color="black"
            id="first-name"
            type="text"
            name="first-name"
            placeholder="First Name"
            value=""
          />
        </FormControl>
        <FormControl mt="4" color="black" w="48%">
          <FormLabel htmlFor="last-name" {...fontlabelStyle}>
            Last Name
          </FormLabel>
          <Input
            {...wb}
            color="black"
            id="last-name"
            type="text"
            placeholder="Last Name"
            value=""
          />
        </FormControl>

        <FormControl mt="4">
          <FormLabel htmlFor="email" {...fontlabelStyle}>
            Email
          </FormLabel>
          <Input
            {...wb}
            id="email"
            type="email"
            placeholder="Email Address"
            value=""
          />
        </FormControl>

        <FormControl mt="4">
          <FormLabel htmlFor="phone" {...fontlabelStyle}>
            Phone
          </FormLabel>
          <Input
            {...wb}
            id="phone"
            type="tel"
            value=""
            placeholder="Phone Number"
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel htmlFor="postcode" {...fontlabelStyle}>
            Postcode
          </FormLabel>
          <Input
            {...wb}
            id="postcode"
            type="text"
            placeholder="Postcode"
            value=""
          />
        </FormControl>
      </Flex>
    </>
  );
}
