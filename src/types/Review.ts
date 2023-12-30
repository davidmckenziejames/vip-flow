export interface Review {
  id?: string;
  author_name: string;
  author_url?: string; // Adding the author URL field
  profile_photo_url?: string;
  rating: number;
  text: string;
  time?: number;
  photos?: { getUrl: () => string }[];
}
