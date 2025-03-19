import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/stationary-combustion'); 
  };

  return (
    <div className="w-full min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center">
        

      </div>
      
      <div className="flex justify-center pb-10"> 
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
