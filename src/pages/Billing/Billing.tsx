import { useState } from "react";
import {
  Center,
  Box,
  Input,
  Image,
  Button,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";

export default function ImageUploadPage() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePawtrait = () => {
    setLoading(true);

    // Fake async generation
    setTimeout(() => {
      setGeneratedImage(
        "https://neural.love/cdn/ai-photostock/1ee76f1f-91cf-65d2-8275-b971f6974347/0.jpg?Expires=1701388799&Signature=GDFTU6dKr8gxmjBh2uJF1XkSWxUmFb3Y~S8oz2JTe29suXXbz-Z4XGBV9zYYxLqum37FmjJ1rKL-ZM4rRz26XnzSsQSbjhUEIT4zZVVvzyZfVdTYAFpWSse~PmMcAeyKIHjFn9ge6na95uRegJtR5jA8O4zfkliqqGaBCgMjbGBVZ2Q3Oj3UE4cPjjo1u9qgvQ5XRrg3514pW~AekzyhecZmBu-86uy1dgQb1gs3Oe2K6qmq8~Pizjy0oo7gIjKPdNDK0BaytR24I5DW0AGNVctshEUBHnqvmunseZmcNy0Z2WIKSMPq4V-r64ZI22svLEeuEOmYKAFH4CKbeZyBTA__&Key-Pair-Id=K2RFTOXRBNSROX"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <Center h="100vh">
      <Box
        as="header"
        w="100%"
        bg="gray.100"
        py={4}
        position="absolute"
        top="0"
      >
        <Heading textAlign="center">PAWTRAITS</Heading>
      </Box>

      <Box maxW="350px" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p={6}>
          <Input type="file" onChange={handleImageUpload} />
        </Box>

        {image && (
          <>
            <Image
              src={image}
              alt="Uploaded Image"
              boxSize="100%"
              objectFit="cover"
            />

            <Button onClick={generatePawtrait}>Generate Pawtrait</Button>

            {loading && <Spinner />}

            {generatedImage && (
              <Box mt={4} mb="100px">
                <Text>Your new portrait:</Text>

                <Image src={generatedImage} alt="Generated Image" />
                <Button>Buy Print</Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Center>
  );
}
