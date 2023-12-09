import BioAvatar from "./BioAvatar";
import Notifications from "./Notifications";
import Messages from "./Messages";
import { FiShoppingCart } from "react-icons/fi";

export default function MenuItems() {
  return (
    <HStack gap="0px">
      <Link href="/checkout">
        <IconButton
          aria-label="icon"
          icon={<FiShoppingCart />}
          display="flex"
          m={0}
          p="5px"
          mr="10px"
          width={{ base: "15px", md: "30px" }}
          height={{ base: "15px", md: "30px" }}
          fontSize={{ base: "25px", md: "25px" }}
          variant="unstyled"
        />
      </Link>
    </HStack>
  );
}
