import React from 'react';
import {PropertyCard} from '../../components/cards/PropertyCard';


export const FeaturedProperties = ({featuredProperties}) => {
    
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties available for
            sale and rent. Find your dream home among our newest listings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => <PropertyCard key={property.id} property={property} />)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3  text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>;
};