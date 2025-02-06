import React from 'react';

interface GlobalLoadingProps {
  isLoading?: boolean;
}

const GlobalLoading: React.FC<GlobalLoadingProps> = ({ isLoading = false }) => {
  if (!isLoading) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;