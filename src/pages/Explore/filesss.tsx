import { Button } from "@apideck/components";
import { FilePicker } from "@apideck/file-picker-js";
import { useState } from "react";

interface Props {
  consumerId: string;
}

const FilePickerButton = ({ consumerId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const createSession = async () => {
    setIsLoading(true);
    try {
      // Create a session for a given consumer
      const response = await fetch("/api/vault/sessions", {
        method: "POST",
        body: JSON.stringify({ consumerId }),
      });
      const { session_token: token } = await response.json();
      setToken(token);

      // Open the File Picker with a valid session token
      FilePicker.open({ token });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      text="Open File Picker"
      onClick={token ? () => FilePicker.open({ token }) : createSession}
      isLoading={isLoading}
    />
  );
};

export default FilePickerButton;
