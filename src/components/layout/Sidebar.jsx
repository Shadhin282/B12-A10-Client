import { NavLink } from "react-router";
import { Home, PlusCircle, Star } from "lucide-react";
import { use } from "react";
import AuthContext from "../../Context/AuthContext";

 const  Sidebar =()=> {
  const {user} = use(AuthContext)
  return (
    <div className="w-64 h-screen  border-r-gray-100 p-4">
      {/* User Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
          <img src={user.photoURL} alt="" />
        </div>
        <h2 className="mt-3 text-lg font-semibold ">{user.displayName}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/my-properties"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 ${
              isActive ? "bg-indigo-100 font-medium" : ""
            }`
          }
        >
          <Home size={18} /> My Properties
        </NavLink>

        <NavLink
          to="/add-property"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 ${
              isActive ? "bg-indigo-100 font-medium" : ""
            }`
          }
        >
          <PlusCircle size={18} /> Add Property
        </NavLink>

        <NavLink
          to="/my-ratings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 ${
              isActive ? "bg-indigo-100 font-medium" : ""
            }`
          }
        >
          <Star size={18} /> My Ratings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;