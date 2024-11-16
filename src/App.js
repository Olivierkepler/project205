import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to React with Tailwind!</h1>
        <p className="mt-4 text-gray-600">This is a simple app styled with Tailwind CSS.</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
