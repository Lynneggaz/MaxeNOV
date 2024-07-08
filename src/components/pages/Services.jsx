import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exemple de carte de service */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-bold text-indigo-700">Service 1</h3>
          <p className="text-gray-600 my-2">Description du service 1</p>
        </div>
        {/* Exemple de carte de service */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-bold text-indigo-700">Service 2</h3>
          <p className="text-gray-600 my-2">Description du service 2</p>
        </div>
      </div>
    </div>
  );
};

export default Services;