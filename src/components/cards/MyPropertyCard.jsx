import React, { use, useEffect, useState } from "react";
import { MapPin, Calendar, Heart, HandHelping } from "lucide-react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

// Sample property data (replace with API later)

// Property Card Component (Pure JSX)
const MyPropertyCard = ({ property }) => {
  const isForRent = property.category === "FOR RENT";
  const navigate = useNavigate();

  console.log(property._id);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://real-state-homenest.vercel.app/properties/${property._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            navigate("/properties");
          })
          .catch((err) => {
            toast.success(err.message);
          });
      }
    });
  };
  return (
    <div className="bg-gray-50 dark:bg-black/90 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden  group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.imageLinkInput}
          alt={property.propertyName}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5 shadow-md ${
            property.category ? "bg-indigo-500" : "bg-indigo-600"
          }`}>
          <Heart className="w-3.5 h-3.5" />
          {property.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Property Name */}
        <h3 className="font-bold text-xl  mb-2 line-clamp-1">
          {property.propertyName}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-bold text-indigo-600">
            {property.price}
          </span>
          {isForRent && (
            <span className="text-sm text-gray-400 ml-1">/month</span>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{property.location}</span>
        </div>

        {/* Posted Date */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Posted on: {format(property.postedDate, "MMM dd, yyyy")}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/property-details/${property._id}`}
            className="flex-1 bg-indigo-700 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-600 transition-colors shadow-sm hover:shadow-md text-sm">
            View Details
          </Link>
          <Link
            to={`/update-property/${property._id}`}
            className="flex-1 bg-indigo-500 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-400 transition-colors shadow-sm hover:shadow-md text-sm">
            Update
          </Link>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-900 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-red-800 transition-colors shadow-sm hover:shadow-md text-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Page
export default function PropertyListingPage() {
  const { user } = use(AuthContext);

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(
      `https://real-state-homenest.vercel.app/myProperties?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, [user.email]);
  return (
    <div className="min-h-screen  py-10 px-4">
      {properties.length ? (
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Your Property Listings</h1>
            <p className="text-lg text-gray-400">
              Manage your real estate in Bangladesh
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {properties.map((property) => (
              <MyPropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold ">My Properties</h1>
              <p className="text-gray-500 text-sm">
                Manage your property listings
              </p>
            </div>
            <Link
              to="/add-property"
              className="bg-indigo-700 text-white px-5 py-2 rounded-md hover:bg-indigo-600">
              Add New Property
            </Link>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center h-64 border-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-500 text-xl mb-4">
              You haven&apos;t added any properties yet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
