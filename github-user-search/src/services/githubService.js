import axios from 'axios';

// Use GitHub Search API for advanced user search
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const q = query.join('+');

  const response = await axios.get(`https://api.github.com/search/users`, {
    params: {
      q,
      per_page: 10,
      page,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN || ''}`,
    },
  });

  return response.data;
};
