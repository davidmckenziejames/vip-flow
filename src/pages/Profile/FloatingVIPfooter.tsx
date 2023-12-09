import { useState, useEffect } from "react";
import { motion, useScroll, easeInOut, AnimatePresence } from "framer-motion";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function FloatingVIPfooter() {
  const [isVisible, setVisible] = useState(false);

  // add an event listener on component mount and remove it when unmounted
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
              py="15px"
              justifyContent="center"
              alignItems="center"
              color="#fff"
              bg="#111"
              w="100%"
              fontWeight="600"
              as="a"
              href="/"
              fontSize="18px"
              cursor="pointer"
              borderTop="3px solid cyan"
              gap="8px"
              _hover={{
                color: "#fff",
                bgGradient: "linear(to-r, #0e0725, #5c03bc, #e536ab)",
              }}
            >
              Unlock VIP posts & perks for $1 <FaArrowRight fontSize="16px" />
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
