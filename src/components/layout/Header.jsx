import { Home, ChevronDown,Menu, X } from "lucide-react";
import React, { use, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = use(AuthContext)
  // console.log(user.displayName)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-primary">HomeNest</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            to="/properties"
            className="text-gray-700 hover:text-primary transition-colors">
            All Properties
          </Link>

          {
            user && (<div className="hidden md:flex items-center space-x-8">
              <Link
            to="/add-property"
            className="text-gray-700 hover:text-primary transition-colors">
            Add Properties
          </Link>
          <Link
            to="/my-properties"
            className="text-gray-700 hover:text-primary transition-colors">
            My Properties
          </Link>
          <Link
            to="/my-ratings"
            className="text-gray-700 hover:text-primary transition-colors">
            My Ratings
          </Link>
            </div>)
          }
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {
            !user && <div className="hidden md:flex items-center space-x-4">
            <Link to='/login' className="px-4 py-2 text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
            Signup
          </Link>
          </div>
          }
          {
            user && <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none">
              <img
                src={user.photoURL}
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary"
              />
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Log out
                </button>
              </div>
            )}
          </div>
            }
              </div>
      
                  {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
              <div className="container mx-auto px-4 py-2 space-y-3">
                  <Link to="/" className="block py-2 text-gray-700 hover:text-primary">
                      Home
                  </Link>
                  <Link to="/properties" className="block py-2 text-gray-700 hover:text-primary">
                      All Properties
                  </Link>
        
                  <Link to="/add-property" className="block py-2 text-gray-700 hover:text-primary">
                      Add Properties
                  </Link>
                  <Link to="/my-properties" className="block py-2 text-gray-700 hover:text-primary">
                      My Properties
                  </Link>
                  <Link to="/my-ratings" className="block py-2 text-gray-700 hover:text-primary">
                      My Ratings
                  </Link>
                  <div className="flex space-x-4 pt-2 border-t border-gray-200">
                      <button  className="px-4 py-2 text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
                          Login
                      </button>
                      <Link to="/signup" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                          Signup
                      </Link>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                          <img src='' alt="User profile" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
                          <div>
                              <p className="text-sm font-medium text-gray-900">
                                  shadhin khan
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                  shadhinkhan28@gmail.com
                              </p>
                          </div>
                      </div>
                      <button className="mt-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded w-full text-left">
                          Log out
                      </button>
                  </div>
              </div>
          </div>}
    </header>
  );
};

export default Header;
