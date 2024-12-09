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
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Manage your property details and documents in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-md">
              <h3 className="font-medium text-blue-900 mb-2">Property Details</h3>
              <p className="text-blue-800">View and update your property information</p>
            </div>
            <div className="p-4 bg-green-50 rounded-md">
              <h3 className="font-medium text-green-900 mb-2">Documents</h3>
              <p className="text-green-800">Access important homeowner documents</p>
            </div>
          </div>
          
          {/* New Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-md">
              <h3 className="font-medium text-purple-900 mb-2">Maintenance Requests</h3>
              <p className="text-purple-800">Submit and track maintenance requests</p>
              <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                New Request
              </button>
            </div>
            <div className="p-4 bg-yellow-50 rounded-md">
              <h3 className="font-medium text-yellow-900 mb-2">Payment History</h3>
              <p className="text-yellow-800">View your payment history and make payments</p>
              <button className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                Make Payment
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Neighborhood Updates</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600">December 15, 2024</p>
                <p className="text-gray-800">Community Holiday Event at the Clubhouse</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-600">December 20, 2024</p>
                <p className="text-gray-800">Winter Maintenance Schedule Posted</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700">Property Management</h4>
                <p className="text-gray-600">Email: management@example.com</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Emergency Contact</h4>
                <p className="text-gray-600">24/7 Maintenance: (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;