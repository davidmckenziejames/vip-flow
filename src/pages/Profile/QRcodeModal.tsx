import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";
import { FiX } from "react-icons/fi";

type QRCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const colorOptions = [
  "#111",
  "#00FFFF",
  "#FF00FF",
  "#22a9fc",
  "#22f07e",
  "#be04f1",
];

const QRCodeModal = ({ isOpen, onClose }: QRCodeModalProps) => {
  const qrWrapperRef = useRef<HTMLDivElement>(null);
  const [fgColor, setFgColor] = useState("#111111");

  const saveQRCode = () => {
    if (qrWrapperRef.current) {
      const canvas = qrWrapperRef.current.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.download = "MyQRCode.png";
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "90%", md: "400px" }}>
        <VStack pb="20px" pt="20px">
          <Flex position="absolute" right="10px" top="10px">
            <FiX
              color="#111"
              onClick={onClose}
              fontSize="30px"
              cursor="pointer"
            />
          </Flex>
          <div ref={qrWrapperRef}>
            <QRCode
              value={window.location.href}
              size={150}
              bgColor={"#ffffff"}
              fgColor={fgColor}
              level={"H"}
              includeMargin={false}
              renderAs={"canvas"}
              imageSettings={{
                src: "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/09/ff-b33f95018394335e23442325a3e68340-ff-djfan-favicon-1.png",
                x: undefined,
                y: undefined,
                height: 60,
                width: 60,
                excavate: false,
              }}
            />
          </div>
          <VStack w="100%">
            <Box
              fontSize="14px"
              borderRadius="5px"
              lineHeight="1em"
              fontWeight="600"
            >
              Customize:
            </Box>
            <HStack spacing={2}>
              {colorOptions.map((color) => (
                <Box
                  key={color}
                  width="24px"
                  height="24px"
                  borderRadius="50%"
                  backgroundColor={color}
                  onClick={() => setFgColor(color)}
                  cursor="pointer"
                />
              ))}
            </HStack>
          </VStack>
          {/*<Box
            mt="10px"
            bg="#111"
            color="#fff"
            py="10px"
            fontSize="14px"
            px="15px"
            onClick={saveQRCode}
            borderRadius="5px"
            lineHeight="1em"
            cursor="pointer"
            fontWeight="600"
          >
            Save as Image
              </Box>*/}
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default QRCodeModal;
