
import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function UpdateProperty() {
  const [formData, setFormData] = useState({
    name: "Modern Downtown Loft",
    description:
      "A beautifully designed loft in the heart of the city. Comes with stunning views, modern amenities, and close proximity to all major attractions. Perfect for professionals and couples.",
    category: "Apartment",
    price: "2,500.00",
    location: "123 Market St, San Francisco, CA 94103",
    imageLink:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=400&fit=crop",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen   py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold ">
            Update Property Details
          </h1>
          <p className="text-gray-400 mt-2">
            <span className="font-medium">
              Current time: November 10, 2025 06:15 PM +06
            </span>{" "}
            |<span className="font-medium ml-1">Country: BD</span>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 dark:bg-black/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Property Image */}
          <div className="relative">
            <img
              src={formData.imageLink}
              alt="Property"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Editable Fields */}
              <div className="lg:col-span-2 space-y-6">
                {/* Property Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Property Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Category & Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                     
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Villa</option>
                      <option>Studio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-2.5 text-gray-500 font-medium">
                        $
                      </span>
                      <input
                        type="text"
                        name="price"
                       
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Image Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Image Link
                  </label>
                  <input
                    type="url"
                    name="imageLink"
                    
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  />
                </div>
              </div>

              {/* Right: Read-only Owner Info */}
              <div className="bg-gray-50 dark:bg-black/80 p-6 rounded-xl space-y-4">
                <h3 className="font-semibold  text-lg">
                  Owner Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    value="Jane Doe"
                    readOnly
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    User Email
                  </label>
                  <input
                    type="email"
                    value="jane.doe@example.com"
                    readOnly
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              
              <button className="px-7 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm hover:shadow">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
