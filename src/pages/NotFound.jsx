
import React from 'react';
import { Home, MapPin, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      {/* Header - Matches RealtyCo Design */}
      

      {/* 404 Hero Section */}
      <main className="min-h-screen  flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full">
              <Search className="w-16 h-16 text-blue-600" />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            4<span className="text-blue-600">0</span>4
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Oops! Property Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The property you're looking for has either been sold, removed, or never existed. 
            Don't worry — there are plenty of amazing homes waiting for you!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
            <a
              href="/for-sale"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              <MapPin className="w-5 h-5" />
              Browse Properties
            </a>
          </div>

          {/* BD Time & Country */}
          <div className="text-sm text-gray-500">
            <p>
              BD Time: <span className="font-medium">November 11, 2025 03:55 AM +06</span> | 
              Country: <span className="font-medium">BD</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </>
  );
};

export default NotFound;