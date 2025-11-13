import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

export default function RatingReact() {
  const [rating, setRating] = useState(3);

  return (
    <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    />
  )
}