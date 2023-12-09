import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" placeholder="Write your message..." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm">
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default ChatInput;
