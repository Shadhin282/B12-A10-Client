import React from 'react';
import { Home, Bed, Bath, Square, MapPin, Calendar, Star, User, ChevronDown } from 'lucide-react';
import Loader from '../components/Loader';
import { useLoaderData } from 'react-router';

const PropertyDetails = () => {

  const property = useLoaderData()
 
  
  
  return (
    <>
      
      {
         <Loader></Loader> &&  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        

        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold  mb-2">{property.propertyName}</h1>
          <p className="text-gray-400 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {property.location}
          </p>
        </div>

        {/* Property Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{property.category}</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{property.type}</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Bed className="w-4 h-4" /> 3 Beds
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Bath className="w-4 h-4" /> 2 Baths
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Square className="w-4 h-4" /> 2000 sqft
          </span>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={property.imageLinkInput} 
              alt={property.propertyName}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          {/* <div className="space-y-4">
            {property.images.slice(1).map((img, idx) => (
              <img 
                key={idx}
                src={property.imageLinkInput} 
                alt={`${property.name} - ${idx + 2}`}
                className="w-full h-44 object-cover rounded-xl shadow-md"
              />
            ))}
           
          </div> */}
        </div>

        {/* Property Info & Agent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Property Description</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{property.description}</p>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Posted Date:</span> {property.postedDate}
            </div>
          </div>

          {/* Price & Agent Card */}
          <div className="bg-gray-50 dark:bg-black/90 p-6 rounded-xl">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Price</p>
              <p className="text-4xl font-bold text-indigo-600">
                $
                {property.propertyPrice}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Jane Doe"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">"Jane Doe"</p>
                <p className="text-sm text-gray-600">"Real Estate Agent"</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-3">
              Contact Agent
            </button>
            <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-lg font-medium hover:bg-blue-200 transition">
              Schedule a Viewing
            </button>
          </div>
        </div>

        {/* Ratings & Reviews Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold ">Ratings & Reviews</h2>
            <div className="flex items-center gap-3">
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <option>Sort by: Newest</option>
                <option>Oldest</option>
                <option>Highest Rating</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Write a Review
              </button>
            </div>
          </div>

          {/* Overall Rating */}
          <div className="bg-gray-50 dark:bg-black/90 p-6 rounded-xl shadow-sm mb-8">
            <div className="flex items-start gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold ">{property.starRating}</p>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Based on 150 reviews</p>
              </div>

              <div className="flex-1 space-y-2">
                
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-12">{5} star</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-900 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-yellow-400 h-full transition-all"
                        style={{ width: `${(20 / 150) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-12 text-right">{5}</span>
                  </div>
                
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            
              <div className="bg-gray-50 dark:bg-black/90 p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full "></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold ">Alex Jendar</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < property.starRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">{property.reviewDate}</p>
                    </div>
                    <p className="text-gray-400">{property.shortReviewText}</p>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </main>
    }
     
    </>
  );
};

export default PropertyDetails; 