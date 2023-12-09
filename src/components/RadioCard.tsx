// RadioCard.tsx
import React from "react";
import { useRadio, VStack } from "@chakra-ui/react";

type OptionProps = {
  value: string;
  children: React.ReactNode;
};

function RadioCard(props: OptionProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <VStack as="label" w="40%">
      <input {...input} />
      <VStack
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
        _checked={{
          border: "3px solid #B8FFD5",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        {props.children}
      </VStack>
    </VStack>
  );
}

export default RadioCard;
