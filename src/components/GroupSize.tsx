import React from "react";
import { useRadio, Flex, Box, Button, useRadioGroup } from "@chakra-ui/react";

type GroupSizeProps = {
  value: string;
};

function GroupSize(props: any) {
  // remove the GroupSizeProps type
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex
      as="label"
      {...checkbox}
      px="15px"
      height="40px"
      alignItems="center"
      border="1px solid #e8e5fd"
      bg="#fff"
      lineHeight="1em"
      fontWeight="600"
      borderRadius="5px"
      color="black"
      fontSize="16px"
      _hover={{ bg: "#7d5aeb", color: "white" }}
      _checked={{ bg: "#7d5aeb", color: "white" }}
    >
      <input {...input} />
      {props.children}
    </Flex>
  );
}

type GroupSizeSelectProps = {
  selectedNumber: string | undefined;
  setSelectedNumber: (value: string | undefined) => void;
};

function GroupSizeSelect(props: GroupSizeSelectProps) {
  const groupSizes = Array.from({ length: 20 }, (_, i) => (i + 2).toString());

  const {
    getRootProps: getNumberRootProps,
    getRadioProps: getNumberRadioProps,
  } = useRadioGroup({
    name: "groupSize",
    defaultValue: props.selectedNumber,
    onChange: props.setSelectedNumber,
  });

  const numbersGroup = getNumberRootProps();

  return (
    <Flex
      {...numbersGroup}
      overflowX="auto"
      gap="10px"
      css={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE
        "&::-webkit-scrollbar": {
          // Chrome, Safari, Edge
          display: "none",
        },
      }}
    >
      {groupSizes.map((number) => {
        const radio = getNumberRadioProps({ value: number });
        return (
          <GroupSize key={number} {...radio}>
            {number}
          </GroupSize>
        );
      })}
    </Flex>
  );
}

export default GroupSizeSelect;
