import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import MyPropertyCard from '../components/cards/MyPropertyCard';

const MyProperties = () => {
    return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Properties</h1>
            <p className="text-gray-500 text-sm">
              Manage your property listings
            </p>
          </div>
          <button className="bg-indigo-700 text-white px-5 py-2 rounded-md hover:bg-indigo-600">
            Add New Property
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-64 bg-white border-gray-100 rounded-lg shadow-sm">
          <p className="text-gray-500 mb-4">
            You haven&apos;t added any properties yet.
          </p>
          <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200">
            Add Your First Property
          </button>
        </div>
         <div>
                <MyPropertyCard></MyPropertyCard>
            </div>
            </main>
            
    </div>
  );
};

export default MyProperties;