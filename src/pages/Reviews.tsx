import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Review } from "../types/Review";
import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// Define the libraries to use
const libraries = ["places"];

const ViewGoogle = {
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  right: "10px",
  top: "10px",
  columnGap: "4px", // This might not work as expected, as inline styles don't support column-gap
  lineHeight: "1em",
  target: "_blank",
  fontWeight: "600",
};

function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAjgAv3ZyckAG-z0fLUFIkuRznY6-CdYUU", // Replace with your actual API key
    libraries: libraries as ["places"],
  });

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= rating ? "#FFD700" : "#CCCCCC"} />,
      );
    }
    return stars;
  };

  const ReviewSpacing = () => {
    return <Box h={4} />;
  };

  useEffect(() => {
    if (isLoaded && !loadError) {
      const mapDiv = document.createElement("div");
      mapDiv.style.display = "none";
      document.body.appendChild(mapDiv);

      const service = new google.maps.places.PlacesService(mapDiv);
      service.getDetails(
        {
          placeId: "ChIJT9H2BJAbdkgRvZSGZRul3D4", // Replace with your actual Place ID
          fields: ["reviews"],
        },
        (place, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.reviews
          ) {
            setReviews(place.reviews as Review[]);
          }
        },
      );

      return () => {
        document.body.removeChild(mapDiv);
      };
    }
  }, [isLoaded, loadError]);
  const placeId = "ChIJT9H2BJAbdkgRvZSGZRul3D4";
  const googleMapsListingUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" p={4}>
      <VStack spacing={4}>
        {reviews.map((review, index) => (
          <Box
            key={review.id || review.time || index}
            p={5}
            border="solid 1px gray"
            w={{ base: "100%", md: "300px" }}
            borderRadius="md"
            boxShadow="md"
            position={"relative"}
          >
            <Text
              as="a"
              position={"absolute"}
              {...ViewGoogle}
              href="https://www.google.com/maps/place/Dyno-Pest/@51.5191796,-0.1168641,17z/data=!3m1!5s0x48761b4a12775bfd:0x525f1ea0e3bc64e3!4m8!3m7!1s0x48761b9004f6d14f:0x3edca51b658694bd!8m2!3d51.5191796!4d-0.1168641!9m1!1b1!16s%2Fg%2F11pc5gyfxd?entry=ttu"
            >
              <FcGoogle fontSize="16px" />
              Google
            </Text>

            <VStack align="left">
              <HStack gap=" 10px">
                {review.profile_photo_url && (
                  <Box
                    as="a"
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile`}
                    />
                  </Box>
                )}
                <Flex direction="column" rowGap="4px">
                  <Text
                    as="a"
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontWeight="bold"
                  >
                    {review.author_name}
                  </Text>

                  <HStack gap="4px">{renderStars(review.rating)}</HStack>
                </Flex>
              </HStack>

              <Text noOfLines={3} color="gray.500">
                {review.text}
              </Text>
            </VStack>

            <HStack spacing={2} mt={4}>
              {review.photos &&
                review.photos.map((photo, index) => (
                  <Image
                    key={index}
                    src={photo.getUrl()}
                    alt={`Photo ${index + 1} for review by ${
                      review.author_name
                    }`}
                    boxSize="100px"
                    objectFit="cover"
                  />
                ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default GoogleReviews;
