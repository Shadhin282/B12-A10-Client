import React from 'react';
import { Link } from 'react-router';
import { MapPin, DollarSign } from 'lucide-react';


export const PropertyCard = ({property}) => {
 
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
          {property.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-800">
          {property.name}
        </h3>
        <div className="flex items-center mb-3 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {property.description}
        </p>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center text-primary font-bold">
            <DollarSign className="w-5 h-5" />
            <span>${property.price.toLocaleString()}</span>
          </div>
           <Link to={`/properties/${property.id}`} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm">
              View Details
              </Link>
              {/* : <Link to="/login" className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors text-sm">
              Login to View
            </Link> */}
        </div>
      </div>
    </div>;
};