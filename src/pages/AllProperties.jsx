import React from "react";
import {PropertiesCard} from "../components/cards/PropertiesCard";
import { FilterIcon, SearchIcon } from "lucide-react";
import Loader from "../components/Loader";

 const properties = [{
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

const AllProperties = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              All Properties
            </h1>
            <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Search by name, location, or description" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"   />
                </div>
                <div className="md:w-48">
                  <div className="flex items-center">
                    <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"  >
                      <option value="">All Categories</option>
                      <option value="Rent">For Rent</option>
                      <option value="Sale">For Sale</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            <Loader></Loader> && properties.map(property => <PropertiesCard key={property.id} property={property}></PropertiesCard>)
            }
    </div>
      </div>
  );
};

export default AllProperties;
