import {

  Link,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SignInModal from "../Home/Sections/HeaderComponents/SignInModal";
export default function SignInLink({
  color,
  linkText,
}: {
  color: string;
  linkText: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text display="flex" color={color} fontWeight="600" as="span">
        <Link onClick={onOpen}>{linkText}</Link>
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <SignInModal />
      </Modal>
    </>
  );
}
