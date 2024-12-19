import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="w-26 h-26 border-4 border-t-4 border-black-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;
