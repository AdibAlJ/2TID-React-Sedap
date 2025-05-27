import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div className="bg-red-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-red-600">404-NotFound</h1>
        <h2 className="text-3xl font-semibold text-red-600">Something went wrong!</h2>
        <p className="text-gray-600 mt-2">An unexpected error occurred. Please try again later.</p>
        <button
          onClick={handleGoHome}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
