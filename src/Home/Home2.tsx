import { Meteors } from "./meteors";
import { motion } from "framer-motion";
import { Button } from "./moving-border";
import { LampContainer } from "./lamp";
import {
  Box,
  Flex,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import CTA from "./CTA";
import Marquee from "./marquee";
const items = [
  { text: "Increase table bookings & sales" },
  {
    text: "Capture deposits and pre-payments ",
  },
  { text: "Elevate your guests' experience" },
  { text: "Reduce admin, calls, & messaging" },
  { text: "Prevent missed or double-bookings" },
  { text: "Reduce no-shows and late arrivals" },
  { text: "Improve cashflow & total spend " },
  { text: "Eliminate wasted effort & time" },

  {
    text: "Boost organisation & control",
  },
  { text: "Increase retention and repeat bookings" },
];
function SvgIcon1() {
  return (
    <svg
      className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
      stroke="currentColor"
      viewBox="0 0 52 52"
    >
      <polygon
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="29 13 14 29 25 29 23 39 38 23 27 23"
      />
    </svg>
  );
}

export default function Home2() {
  return (
    <div className="pb-16">
      <div>
        <div className="max-w-lg space-y-3 sm:mx-auto flex flex-col items-center lg:max-w-xl">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ width: "90%" }}
              className="flex items-center p-2  border rounded shadow  "
            >
              <div className="mr-2 text-gray-800">
                <SvgIcon1 />
              </div>
              <span className="text-gray-800  ">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <CTA />
        </div>
      </div>
    </div>
  );
}
