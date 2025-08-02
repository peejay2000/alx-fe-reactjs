// src/services/githubService.js

import axios from "axios";

// Fetch basic user data by username
import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  return response.data;
};


// Advanced search with location and repo filters
export const fetchAdvancedUserSearch = async ({ username, location, minRepoCount, page = 1 }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepoCount) query += ` repos:>=${minRepoCount}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error in advanced user search:", error);
    throw error;
  }
};
