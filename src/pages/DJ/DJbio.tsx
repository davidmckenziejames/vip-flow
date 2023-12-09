import {
  EditablePreview,
  Box,
  Button,
  Flex,
  useColorModeValue,
  IconButton,
  Input,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon, CloseIcon } from "@chakra-ui/icons";

function DJbio() {
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <Button leftIcon={<CheckIcon />} {...getSubmitButtonProps()} />
        <Button
          p="0"
          leftIcon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <Editable
      defaultValue="Add headline / bio"
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      color="#fff"
    >
      <Tooltip label="Click to edit" bg="#7d5aeb" shouldWrapChildren={true}>
        <EditablePreview
          py="2px"
          px="10px"
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
            color: "#111",
          }}
        />
      </Tooltip>
      <Input bg="#fff" py={2} px={4} as={EditableInput} />
      <EditableControls />
    </Editable>
  );
}

export default DJbio;
