'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { format } from 'date-fns';

// Sample data (no type definition needed)
const reviews = [
  {
    id: 1,
    reviewerName: "Ayesha Rahman",
    propertyName: "Cozy Riverside Cottage",
    rating: 5,
    reviewText: "Absolutely wonderful stay! The cottage was clean, beautifully decorated, and the river view from the balcony was breathtaking. The host was very responsive and helpful.",
    reviewDate: new Date('2025-10-28'),
    propertyImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    reviewerName: "Rahim Khan",
    propertyName: "Modern Downtown Loft",
    rating: 4,
    reviewText: "Great location and stylish interior. The loft had everything we needed for a comfortable stay. Only minor issue was the WiFi speed during peak hours.",
    reviewDate: new Date('2025-10-25'),
    propertyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    reviewerName: "Fatima Begum",
    propertyName: "Beachfront Villa Paradise",
    rating: 5,
    reviewText: "Paradise on earth! Direct beach access, infinity pool, and stunning sunsets. The staff went above and beyond to make our honeymoon special.",
    reviewDate: new Date('2025-10-20'),
    propertyImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    reviewerName: "Karim Ahmed",
    propertyName: "Mountain View Chalet",
    rating: 4,
    reviewText: "Beautiful views and cozy atmosphere. The fireplace was perfect for cold nights. Could use better sound insulation between rooms.",
    reviewDate: new Date('2025-10-15'),
    propertyImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    reviewerName: "Nusrat Jahan",
    propertyName: "Luxury Penthouse Suite",
    rating: 5,
    reviewText: "Incredible experience! The penthouse exceeded all expectations with its panoramic city views, jacuzzi, and premium amenities. Worth every penny.",
    reviewDate: new Date('2025-10-10'),
    propertyImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    reviewerName: "Sajid Hossain",
    propertyName: "Traditional Tea Garden Bungalow",
    rating: 3,
    reviewText: "Peaceful location surrounded by tea gardens. The bungalow has character but needs maintenance. Hot water was inconsistent and some furniture was worn.",
    reviewDate: new Date('2025-10-05'),
    propertyImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop"
  }
];

// Star rating component (no TS)
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

// Review card component (no TS)
const ReviewCard = ({ review }) => {
  return (
    <article className="bg-gray-50 dark:bg-black/90 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={review.propertyImage}
          alt={review.propertyName}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform,transform duration-300"
        />
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-semibold  text-lg">{review.reviewerName}</h3>
          <p className="text-blue-600 font-medium text-sm mt-1">{review.propertyName}</p>
        </div>

        <div className="mb-3">
          <StarRating rating={review.rating} />
        </div>

        <p className="text-gray-400 text-sm line-clamp-3 mb-3">
          {review.reviewText}
        </p>

        <time className="text-xs text-gray-500">
          {format(review.reviewDate, 'MMM dd, yyyy')}
        </time>
      </div>
    </article>
  );
};

// Main page component
export default function MyRating() {
  return (
    <>
      <div className="min-h-screen ">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold  mb-3">
              User Ratings & Feedback
            </h1>
            <p className="text-gray-400 text-lg">
              Real reviews from verified guests
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <button className="border border-gray-100  px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Load More Reviews
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}