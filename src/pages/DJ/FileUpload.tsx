import React, { ChangeEvent, useState } from "react";
import { Box, Image, HStack, IconButton, VStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  return (
    <VStack w="100%" alignItems="flex-start">
      <Box
        as="label"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p={4}
        _hover={{ cursor: "pointer", borderColor: "gray.300" }}
      >
        Click to Upload
        <input
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={handleFileUpload}
        />
      </Box>
      <HStack direction="column" spacing={2} mt="10px">
        {selectedFiles.map((file, index) => (
          <Box position="relative" key={file.name}>
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              boxSize="100px"
              objectFit="cover"
            />
            <IconButton
              aria-label="Delete"
              icon={<CloseIcon />}
              position="absolute"
              size="sm"
              top={0}
              right={0}
              onClick={() => handleRemoveFile(index)}
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default FileUpload;
