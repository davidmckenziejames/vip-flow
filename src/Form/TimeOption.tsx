import React from "react";
import {
  useRadio,
  Flex,
  Button,
  UseRadioProps,
  UseRadioGroupProps,
  useRadioGroup,
} from "@chakra-ui/react";

// Time Option Component
type TimeOptionProps = UseRadioProps & {
  children: React.ReactNode;
};

function TimeOption(props: TimeOptionProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex
      {...checkbox}
      as="label"
      px="10px"
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

// Time Select Component Props
type TimeSelectProps = {
  selectedTime: string | undefined;
  setSelectedTime: (value: string) => void;
};

function TimeSelect({ selectedTime, setSelectedTime }: TimeSelectProps) {
  const timeOptions = [
    "10:00pm",
    "10:30pm",
    "11:00pm",
    "11:30pm",
    "12:00am",
    "12:30am",
    "1:00am",
    "1:30am",
    "2:00am",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "time",
    defaultValue: selectedTime,
    onChange: setSelectedTime,
  });

  const group = getRootProps();

  return (
    <Flex
      {...group}
      overflowX="auto"
      gap="15px"
      css={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {timeOptions.map((time) => {
        const radio = getRadioProps({ value: time });
        return (
          <TimeOption key={time} {...radio}>
            {time}
          </TimeOption>
        );
      })}
    </Flex>
  );
}

export default TimeSelect;
