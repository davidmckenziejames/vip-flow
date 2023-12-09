import {
  Button,
  Stack,
  InputGroup,
  InputRightElement,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, ChangeEvent } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target) {
        setEmail(event.target.value);
      }
    } catch (error) {
      // Handle the error appropriately, e.g., log it or show an error message to the
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target) {
        setName(event.target.value);
      }
    } catch (error) {
      // Handle the error appropriately, e.g., log it or show an error message to the
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target) {
        setPassword(event.target.value);
      }
    } catch (error) {
      // Handle the error appropriately, e.g., log it or show an error message to the
    }
  };

  const isEmailCompleted = email.trim() !== "";
  const isNameCompleted = name.trim() !== "";
  const isPasswordCompleted = password.trim() !== "";

  return (
    <Stack spacing="2">
      <FormControl isRequired>
        <Input
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormControl>

      {isEmailCompleted && (
        <FormControl isRequired>
          <Input
            id="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </FormControl>
      )}

      {isEmailCompleted && isNameCompleted && (
        <FormControl isRequired>
          <InputGroup>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              onChange={handlePasswordChange}
            />
            <InputRightElement>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <span style={{ fontSize: "14px" }}>
                    <FaEye />
                  </span>
                ) : (
                  <span style={{ fontSize: "14px" }}>
                    <FaEyeSlash />
                  </span>
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}

      {(isEmailCompleted || isNameCompleted || isPasswordCompleted) && (
        <Button
          background="#9E03C9"
          color="white"
          _hover={{
            background:
              "-webkit-linear-gradient(111deg, hsla(291, 79%, 51%, 1) 0%, hsla(240, 91%, 73%, 1) 100%);",
            color: "white",
          }}
        >
          Create Free Account
        </Button>
      )}
    </Stack>
  );
}
