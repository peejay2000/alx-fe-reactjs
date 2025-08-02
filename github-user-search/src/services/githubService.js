export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const q = query.join('+');
  const response = await api.get(`/search/users?q=${q}&per_page=10&page=${page}`);

  return response.data;
};
