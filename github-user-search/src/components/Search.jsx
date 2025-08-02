import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data.items || []);
      if (data.items?.length === 0) {
        setError('Looks like we cant find the user');
      }
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          GitHub Advanced User Search
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="e.g. john"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="e.g. Nigeria"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Repositories
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-500 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {results.length > 0 && (
          <div className="space-y-4 mt-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-4 border p-4 rounded-md bg-gray-50"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
