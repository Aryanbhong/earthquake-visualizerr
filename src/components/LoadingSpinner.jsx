import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Loading earthquake data...</p>
        <p className="text-gray-500 text-sm mt-2">Initializing map...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;