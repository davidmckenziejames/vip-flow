import { useState, useEffect } from "react";
import { motion, useScroll, easeInOut, AnimatePresence } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import RegisterModal from "../Home/Sections/HeaderComponents/RegisterModal";
import { FaHeadphones, FaUnlock } from "react-icons/fa";
const avatarSizes = { base: "35px", md: "35px" };

export default function FloatingFooter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVisible, setVisible] = useState(false);

  // add an event listener on component mount and remove it when unmounted
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <Box id="artistfooter" position="fixed" bottom="0" width="100%" zIndex="20">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%", transition: { duration: 0.5, ease: easeInOut } }}
            transition={{ duration: 1, exit: { duration: 2 } }} // exit duration is 2 seconds
          >
            <Flex
              gap="15px"
              justify={{ base: "space-between", md: "center" }}
              alignItems="center"
              p="20px"
              bg="#111111"
              borderTop="2px solid #ffffff"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  display="flex"
                  flexDirection="row"
                  showBorder
                  borderColor="cyan"
                  width={avatarSizes}
                  height={avatarSizes}
                  src="https://creators.djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
                />
                <Flex
                  alignItems={{ base: "flex-start", md: "center" }}
                  flexDirection={{ base: "column", md: "row" }}
                  gap="5px"
                >
                  <Text
                    fontSize={{ base: "16px", md: "20px" }}
                    as="span"
                    lineHeight="1"
                    color="white"
                    fontWeight="600"
                    mr={{ base: "0px", md: "15px" }}
                  >
                    Richy Ahmed
                  </Text>
                  <Box
                    fontSize={{ base: "14px", md: "16px" }}
                    as="span"
                    display="flex"
                    lineHeight="1"
                    color="white"
                    alignItems="center"
                    gap="4px"
                  >
                    <Box fontSize={{ base: "14px", md: "14px" }}>
                      <FaHeadphones />
                    </Box>
                    <Box color="#00FFF2" fontWeight="700">
                      65
                    </Box>
                    <Box color="#ffffff">premium posts</Box>
                  </Box>
                </Flex>
              </Box>
              <Box
                as="button"
                display="flex"
                onClick={onOpen}
                alignItems="center"
                gap="5px"
                lineHeight="1"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                px="12px"
                py="6px"
                borderRadius="4px"
                fontSize="16px"
                fontWeight="700"
                bg="#f5f6f7"
                color="#4b4f56"
                _hover={{
                  bg: "-webkit-linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);",
                  color: "white",
                }}
              >
                <FaUnlock fontSize="12px" />
                Unlock Now
              </Box>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <RegisterModal />
              </Modal>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
