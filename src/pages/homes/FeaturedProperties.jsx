import React from 'react';
import {PropertyCard} from '../../components/cards/PropertyCard';

const featuredProperties = [{
  id: '1',
  name: 'Modern Apartment in Downtown',
  category: 'For Rent',
  description: 'Luxurious 2-bedroom apartment with modern amenities, located in the heart of downtown with stunning city views.',
  location: 'Downtown, New York',
  price: 2500,
  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  createdAt: '2023-06-15T10:30:00Z'
}, {
  id: '2',
  name: 'Cozy Family Home',
  category: 'For Sale',
  description: 'Beautiful 4-bedroom family home with a spacious backyard, perfect for families looking for a peaceful neighborhood.',
  location: 'Suburbia, Los Angeles',
  price: 750000,
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1775&q=80',
  createdAt: '2023-06-14T14:45:00Z'
}, {
  id: '3',
  name: 'Luxury Villa with Pool',
  category: 'For Sale',
  description: 'Exclusive 5-bedroom villa with private pool, garden, and panoramic ocean views in a gated community.',
  location: 'Malibu, California',
  price: 3500000,
  image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  createdAt: '2023-06-13T09:15:00Z'
}, {
  id: '4',
  name: 'Studio Apartment Near University',
  category: 'For Rent',
  description: 'Compact studio apartment ideal for students, located just a 5-minute walk from the university campus.',
  location: 'University District, Boston',
  price: 1200,
  image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  createdAt: '2023-06-12T16:20:00Z'
}, {
  id: '5',
  name: 'Penthouse with Rooftop Terrace',
  category: 'For Sale',
  description: 'Stunning penthouse with a private rooftop terrace offering 360-degree views of the city skyline.',
  location: 'Financial District, Chicago',
  price: 1200000,
  image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  createdAt: '2023-06-11T11:10:00Z'
}, {
  id: '6',
  name: 'Countryside Cottage',
  category: 'For Sale',
  description: 'Charming 3-bedroom cottage in a peaceful countryside setting with a beautiful garden and nearby lake.',
  location: 'Rural Vermont',
  price: 450000,
  image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
  createdAt: '2023-06-10T08:45:00Z'
}];
export const FeaturedProperties = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties available for
            sale and rent. Find your dream home among our newest listings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => <PropertyCard key={property.id} property={property} />)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>;
};