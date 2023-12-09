import { Modal, ModalOverlay, useDisclosure, Button } from "@chakra-ui/react";
import SignInModal from "../../Home/Sections/HeaderComponents/SignInModal";
export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg="white"
        borderRadius="5px"
        fontSize="15px"
        fontWeight="600"
        variant="unstyled"
        color="#111111"
        transition="all 0.3s ease"
        onClick={onOpen}
        border="2px solid black"
        px="15px"
        height="35px"
        _hover={{
          boxShadow: `.15rem .15rem 0 #69f2eb, .3rem .3rem 0 #DB62FD`,
          color: "black",
          background: "white",
          border: "2px solid black",
        }}
      >
        JOIN NOW
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <SignInModal />
      </Modal>
    </>
  );
}
