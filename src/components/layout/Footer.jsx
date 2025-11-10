import React from 'react';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { Home, Mail, Phone, FileText, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">HomeNest</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect place to call home. We
              connect property owners with potential buyers and renters.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/add-property" className="text-gray-400 hover:text-white transition-colors">
                  Add Property
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-gray-400">support@homenest.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <FileText className="w-5 h-5 text-primary mt-0.5" />
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <FaXTwitter className="w-5 h-5"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 bg-gray-700 text-white rounded-l focus:outline-none flex-1" />
                <button className="bg-primary px-4 py-2 rounded-r hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};