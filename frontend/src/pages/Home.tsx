import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrganizationFormModal from '../components/OrganizationFormModal';

interface OrganizationFormData {
  organizationName: string;
  address: string;
  startDate: string;
  endDate: string;
  preparerName: string;
  contact: string;
  datePrepared: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (formData: OrganizationFormData) => {
    sessionStorage.setItem('organizationInfo', JSON.stringify(formData));
    navigate('/stationary-combustion');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 flex flex-col">
      <NavBar />
      <OrganizationFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleFormSubmit}
      />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to EmissioTrack
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Easily calculate and manage your carbon footprint. Navigate through the intuitive interface to start tracking emissions from stationary combustion, refrigeration, and more.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>

      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} EmissioTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
