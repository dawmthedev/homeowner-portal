import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Homeowner Portal</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Manage your property details and documents in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-md">
              <h3 className="font-medium text-blue-900 mb-2">Property Details</h3>
              <p className="text-blue-800">View and update your property information</p>
            </div>
            <div className="p-4 bg-green-50 rounded-md">
              <h3 className="font-medium text-green-900 mb-2">Documents</h3>
              <p className="text-green-800">Access important homeowner documents</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;