import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <div className="flex max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-1/3 object-cover"
          />
          <div className="p-4 w-2/3">
            <h1 className="text-xl font-bold text-gray-800">
              {user.name.first} {user.name.last}
            </h1>
            <p className="text-gray-600">Gender: {user.gender}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default App;