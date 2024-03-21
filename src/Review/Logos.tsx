import React from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";

const scroll = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;
{
    name: "https://assets.vipflow.co.uk/files/savoy.png",
  },
  {
    name: "https://assets.vipflow.co.uk/files/ushuaia.jpg",
  },
  {
    name: "https://assets.vipflow.co.uk/files/champneys.jpg",
  },
  {
    name: "https://assets.vipflow.co.uk/files/ihg.jpg",
  },
  {
    name: "https://assets.vipflow.co.uk/files/thistle.jpg",
  },
  {
    name: "https://assets.vipflow.co.uk/files/claridges.jpg",
  },
  {
    name: "https://assets.vipflow.co.uk/files/hyatt.jpg",
  },
];
const Marquee = () => {
  return (
    <Box overflow="hidden" h="100px" position="relative">
      <Box
        as="div"
        display="flex"
        py="20px"
        animation={`${scroll} 10s linear infinite`}
      >
        <Image src="path/to/your/image1.jpg" alt="image1" h="60px" mx="10px" />
        <Image src="path/to/your/image2.jpg" alt="image2" h="60px" mx="10px" />
        <Image src="path/to/your/image3.jpg" alt="image3" h="60px" mx="10px" />
        {/* Repeat images as needed */}
      </Box>
    </Box>
  );
};

export default Marquee;
