import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { FaCopy, FaFacebook, FaShare, FaWhatsapp } from "react-icons/fa";
import { FiShare, FiX } from "react-icons/fi";
import QRCodeModal from "./QRcodeModal";

const buttonStyle = {
  px: "15px",
  gap: "10px",
  py: "15px",
  borderRadius: "10px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "1em",
  w: "100%",
  cursor: "pointer",
  color: "#fff",
};

interface ShareButtonProps {
  bg: string;
  icon: React.ElementType;
  label: string;
  action: () => void;
}

const ShareButton = ({
  bg,
  icon: Icon,
  label,
  action,
  ...rest
}: ShareButtonProps) => (
  <Box {...buttonStyle} bg={bg} onClick={action} {...rest}>
    <Icon />
    {label}
  </Box>
);

const shareButtons = [
  {
    bg: "#9b5de5",
    icon: FaCopy,
    label: "Copy Profile Link",
    action: () => (window.location.href = "/"),
  },
  {
    bg: "#25D366",
    icon: FaWhatsapp,
    label: "Share on Whatsapp",
    action: () => (window.location.href = "/"),
  },
  {
    bg: "#4267B2",
    icon: FaFacebook,
    label: "Share on Facebook",
    action: () => (window.location.href = "/"),
  },
  { bg: "#111", icon: FaShare, label: "Show QR Code" },
];

export default function Share() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isQRCodeModalOpen, setQRCodeModalOpen] = useState(false);

  return (
    <HStack
      position="absolute"
      right="15px"
      top="15px"
      zIndex="1909"
      color="white"
      fontSize={{ base: "14px", md: "18px" }}
      gap={{ base: "5px", md: "10px" }}
    >
      <Tooltip label="Share Profile" aria-label="Share Profile">
        <HStack gap="5px">
          <FiShare fontSize="24px" color="white" onClick={onOpen} />
        </HStack>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={{ base: "90%", md: "400px" }}>
          <Stack gap="15px" position="relative" p="20px">
            <Flex position="absolute" right="10px" top="10px">
              <FiX
                color="#111"
                onClick={onClose}
                fontSize="30px"
                cursor="pointer"
              />
            </Flex>
            <Heading textAlign="center" fontSize="22px">
              Share Creator Profile
            </Heading>
            {shareButtons.map((button, idx) => (
              <ShareButton
                key={idx}
                bg={button.bg}
                icon={button.icon}
                label={button.label}
                action={
                  button.action === undefined
                    ? () => setQRCodeModalOpen(true)
                    : button.action
                }
              />
            ))}
            <QRCodeModal
              isOpen={isQRCodeModalOpen}
              onClose={() => setQRCodeModalOpen(false)}
            />
          </Stack>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
