import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const fontlabelStyle = {
  my: "10px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#fff",
};

const wb = {
  bg: "#fff",
  color: "#111",
};

export function ContactForm({
  fullName,
  email,
  phone,
  setEmail,
  setPhone,
  setFullName,
}) {
  return (
    <>
      <FormControl mt="4" color="black">
        <FormLabel htmlFor="full-name" {...fontlabelStyle}>
          Full Name
        </FormLabel>
        <Input
          {...wb}
          color="black"
          id="full-name"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormControl>

      <FormControl mt="4">
        <FormLabel htmlFor="email" {...fontlabelStyle}>
          Email:
        </FormLabel>
        <Input
          {...wb}
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl mt="4">
        <FormLabel htmlFor="phone" {...fontlabelStyle}>
          Phone:
        </FormLabel>
        <Input
          {...wb}
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
      </FormControl>
    </>
  );
}
