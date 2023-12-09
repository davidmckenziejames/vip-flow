import {
  Flex,
  Text,
  useColorModeValue,
  Container,
  Card,
  Heading,
  Button,
  ButtonGroup,
  Stack,
  HStack,
  Link,
  IconButton,
  Box,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSoundcloud,
  FaMixcloud,
  FaSpotify,
  FaEnvelope,
  FaHeadphones,
} from "react-icons/fa";

export default function ProfileBio() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      align="center"
      p="0px"
      gap="20px"
      pb="50px"
    >
      <Card p="30px" border="2px solid cyan">
        <Heading fontSize="28px" pb="15px">
          Biography
        </Heading>
        <Text lineHeight="1.5em">
          Richy Ahmed is a British DJ, producer and label boss owner of Four
          Thirty Two. He is known for his contributions to the house and techno
          music scene. re-defining house music taking cues from disco, techno,
          funk and hip-hop.
          <br />
          <br />
          Born and raised in South Shields, England, he developed a passion for
          music at a young age. Ahmed rose to prominence as a key figure in the
          renowned Paradise parties at DC10 in Ibiza, where he played alongside
          Jamie Jones and other influential artists.
          <br />
          <br />
          With a distinct style that fuses classic house sounds with
          contemporary elements, Richy Ahmed has released tracks on notable
          labels such as Hot Creations, Crosstown Rebels, and Strictly Rhythm.
          Some of his popular releases include "Sneaky Acid," "The Drums," and
          "So Good."
          <br />
          <br />
          He has performed at renowned clubs and festivals worldwide, including
          fabric in London, Panorama Bar in Berlin, Burning man in US and
          Glastonbury Festival in the UK.
          <br />
          <br />
          His energetic sets often incorporate a diverse range of sounds,
          blending house, techno, and disco to create an immersive experience
          for the audience.
          <br />
          <br />
          Richy Ahmed has continued to make a name for himself in the electronic
          music industry through his talent, hard work, and contributions to the
          scene. He remains an influential figure, both as a DJ, producer, label
          owner and continues to showcase his musical prowess through
          performances and releases.
        </Text>

        <Stack spacing="0px" pt="15px">
          <HStack spacing="5px">
            <Text fontSize="16px" color="#805ad5" fontWeight="600">
              WEBSITE:
            </Text>
            <Text>richyahmed.com</Text>
          </HStack>
          <HStack spacing="5px">
            <Text fontSize="16px" color="#805ad5" fontWeight="600">
              LOCATION:
            </Text>
            <Text>London</Text>
          </HStack>
          <HStack spacing="5px">
            <Text fontSize="16px" color="#805ad5" fontWeight="600">
              COUNTRY:
            </Text>
            <Text>United Kingdom</Text>
          </HStack>
        </Stack>

        <HStack spacing="5px" pt="15px">
          <ButtonGroup gap="4">
            <Button leftIcon={<FaEnvelope />} colorScheme="purple">
              Management
            </Button>
            <Button leftIcon={<FaHeadphones />} color="white" bg="black">
              Bookings
            </Button>
          </ButtonGroup>
        </HStack>

        <HStack spacing="5px" pt="15px">
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Twitter"
            icon={<FaTwitter />}
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          />
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Instagram"
            icon={<FaInstagram />}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Spotify"
            icon={<FaSpotify />}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Mixcloud"
            icon={<FaMixcloud />}
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          />
          <IconButton
            fontSize="22px"
            variant="ghost"
            aria-label="Soundcloud"
            icon={<FaSoundcloud />}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
        </HStack>
      </Card>
    </Flex>
  );
}
