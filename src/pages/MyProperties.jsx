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
        
         <div>
                <MyPropertyCard></MyPropertyCard>
            </div>
            </main>
            
    </div>
  );
};

export default MyProperties;