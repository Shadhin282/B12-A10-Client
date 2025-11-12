import { use } from "react";
import Sidebar from "../components/layout/Sidebar";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

export default function AddProperty() {
  const {user} = use(AuthContext)
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      name: user.displayName,
      propertyName : e.target.propertyName.value,
      category: e.target.category.value,
      description: e.target.description.value,
      propertyPrice : e.target.price.value,
      location : e.target.location.value,
      imageLinkInput: e.target.imageUrl.value,
      thumbnailImage: e.target.imageUrl.value,
      postedDate: new Date(),
      starRating: 5,
      email: user.email,
      shortDescription: 'property is well satisfied to buy and stay',
      shortReviewText: 'property is awesome',
      reviewDate: new Date(),
      postedBy: user.displayName,
       reviewerName: user.displayName
    };
    console.log(formData)
    try {
      const res = await fetch("http://localhost:5000/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      toast.success("Property added successfully!");

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold  mb-6">
          Add New Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className=" p-6 rounded-lg border border-gray-300 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Property Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                 Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
      
                disabled
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium  mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user.email}
              
                disabled
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
             {/* Property Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Name
              </label>
              <input
                type="text"
                name="propertyName"
                
               
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Category */}
            
            <div>
              <label className="block text-sm font-medium  mb-1">
                Category
              </label>
              <select
                name="category"
                
                
                required
                className="w-full border  border-gray-300 rounded-md px-3 py-2  focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                
                  <option className="" value="">Select Category</option>
                <option value="Apartment">Rent</option>
                <option value="House">Sale</option>
                <option value="Villa">Commercial</option>
                <option value="Office">Land</option>
                
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium  mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                
              
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium  mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                
              
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
             
            
              placeholder="https://example.com/image.jpg"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium  mb-1">
              Description
            </label>
            <textarea
              name="description"
              
           
              rows="4"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
          
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add Property
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
