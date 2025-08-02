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
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data.items);
    } catch (err) {
      setError('An error occurred while searching users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Advanced GitHub User Search</h2>

        <input
          type="text"
          placeholder="Username (e.g. john)"
          className="w-full border rounded px-4 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (e.g. Lagos)"
          className="w-full border rounded px-4 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full border rounded px-4 py-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((user) => (
              <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
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
