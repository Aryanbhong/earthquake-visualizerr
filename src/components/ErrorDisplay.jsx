import React from 'react';

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-red-50 rounded-lg border-2 border-red-200">
      <div className="text-center p-6">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-red-700 text-xl font-semibold mb-2">Error Loading Data</h2>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay