import { Box, BoxProps, Container } from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";

export const Footer = (props: BoxProps) => {
  return (
    <Box bg="gray" as="footer" role="contentinfo" {...props}>
      <Container>
        <Placeholder minH="20">Footer</Placeholder>
      </Container>
    </Box>
  );
};
