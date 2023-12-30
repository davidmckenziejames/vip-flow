import { useState, useEffect } from "react";
import axios from "axios";
import { Review } from "../types/Review";

const useReviews = (placeId: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/reviews?placeId=${placeId}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId]);

  return { reviews, loading };
};

export default useReviews;
