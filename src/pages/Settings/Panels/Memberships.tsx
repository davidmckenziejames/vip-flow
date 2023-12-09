import { Avatar, Box, Button, Card, Flex, Text } from "@chakra-ui/react";

import membershipData from "./membershipData.json";

interface MembershipProps {
  avatarUrl: string;
  name: string;
  membershipPrice: string;
  membershipType: string;
  nextChargeDate: string;
}

function Membership({
  avatarUrl,
  name,
  membershipPrice,
  membershipType,
  nextChargeDate,
}: MembershipProps) {
  
  return (
    <Card borderRadius="15px">
      <Flex direction="row" alignItems="center" p="20px">
        <Avatar
          size={{ base: "md", sm: "lg" }}
          name="User Avatar"
          src={avatarUrl}
        />
        <Flex flexDirection="column" align="start" ml="4">
          <Text fontSize={{ base: "14px", sm: "18px" }} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="12px">
            ${membershipPrice} per month ({membershipType} member)
          </Text>
          <Text fontSize="12px">Next charge date: {nextChargeDate}</Text>
        </Flex>
        <Button size="sm" ml="auto">
          Edit
        </Button>
      </Flex>
    </Card>
  );
}

export default function Memberships() {
  return (
    <Box p="0px" pb="100px" m="0" mt="20px">
      <Flex direction="column" gap="15px">
        {membershipData.map((membership, index) => (
          <Membership key={index} {...membership} />
        ))}
      </Flex>
    </Box>
  );
}
