
import React from 'react';
import { Home, Bed, Bath, Square, MapPin, Calendar, Star, User, ChevronDown } from 'lucide-react';

const PropertyDetails = () => {
  // Sample property data (BD-ready)
  const property = {
    name: "Modern Villa with Ocean View",
    address: "123 Ocean Drive, Malibu, CA 90265",
    category: "For Sale",
    type: "Apartment",
    beds: 5,
    baths: 4,
    sqft: 3450,
    price: 4500000,
    currency: "$",
    description: "Discover unparalleled luxury in this stunning modern villa perched above the Pacific. With breathtaking ocean views from every room, this residence offers an open-concept living space, gourmet kitchen with high-end appliances, and an expansive outdoor deck with an infinity pool. Perfect for both relaxing and entertaining, this property is the epitome of coastal California living.",
    postedDate: "October 26, 2023",
    agent: {
      name: "Jane Doe",
      title: "Real Estate Agent",
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    ],
    rating: 4.8,
    totalReviews: 124,
    ratingBreakdown: [
      { stars: 5, count: 102 },
      { stars: 4, count: 15 },
      { stars: 3, count: 5 },
      { stars: 2, count: 0 },
      { stars: 1, count: 2 }
    ],
    reviews: [
      {
        id: 1,
        name: "Alex Johnson",
        rating: 5,
        date: "2 weeks ago",
        text: "Absolutely breathtaking property. The photos don't do it justice. The agent, Jane, was incredibly helpful and professional throughout the entire process. Highly recommend!"
      },
      {
        id: 2,
        name: "Samantha Lee",
        rating: 5,
        date: "1 month ago",
        text: "A truly beautiful home with an amazing view. The location is perfect. We had a great experience during our viewing. The price is a bit steep, but it's understandable for what you get."
      }
    ]
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-xl text-gray-900">RealtyCo</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">For Sale</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">For Rent</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Agents</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                List a Property
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <a href="#" className="hover:text-blue-600">Home</a> / 
          <a href="#" className="hover:text-blue-600"> For Sale</a> / 
          <span className="text-gray-900"> {property.name}</span>
        </nav>

        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
          <p className="text-gray-600 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {property.address}
          </p>
        </div>

        {/* Property Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{property.category}</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{property.type}</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Bed className="w-4 h-4" /> {property.beds} Beds
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Bath className="w-4 h-4" /> {property.baths} Baths
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Square className="w-4 h-4" /> {property.sqft.toLocaleString()} sqft
          </span>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4">
            {property.images.slice(1).map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${property.name} - ${idx + 2}`}
                className="w-full h-44 object-cover rounded-xl shadow-md"
              />
            ))}
            <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
              View All Photos
            </button>
          </div>
        </div>

        {/* Property Info & Agent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{property.description}</p>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Posted Date:</span> {property.postedDate}
            </div>
          </div>

          {/* Price & Agent Card */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Price</p>
              <p className="text-4xl font-bold text-yellow-600">
                {property.currency === 'BDT' ? '৳' : '$'}
                {property.price.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <img 
                src={property.agent.photo} 
                alt={property.agent.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{property.agent.name}</p>
                <p className="text-sm text-gray-600">{property.agent.title}</p>
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
            <h2 className="text-2xl font-bold text-gray-900">Ratings & Reviews</h2>
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
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="flex items-start gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-gray-900">{property.rating}</p>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Based on {property.totalReviews} reviews</p>
              </div>

              <div className="flex-1 space-y-2">
                {property.ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-12">{item.stars} star</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-yellow-400 h-full transition-all"
                        style={{ width: `${(item.count / property.totalReviews) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {property.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetails; 