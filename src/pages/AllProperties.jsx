import React, { useEffect, useState } from "react";
import { PropertiesCard } from "../components/cards/PropertiesCard";
import { FilterIcon, SearchIcon } from "lucide-react";
import Loader from "../components/Loader";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(properties);

  useEffect(() => {
    fetch("https://real-state-homenest.vercel.app/properties")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const search_text = e.target.value;
    console.log(search_text);
    setLoading(true);
    fetch(`https://real-state-homenest.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        console.log(data);
        setLoading(false);
      });
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold  mb-6">All Properties</h1>
      <div className="mb-8  p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              onChange={handleSearch}
              type="text"
              name="search"
              placeholder="Search by name, location, or description"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <Loader></Loader>
        ) : (
          properties.map((property) => (
            <PropertiesCard
              key={property.id}
              property={property}></PropertiesCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProperties;
