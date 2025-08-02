// src/services/githubService.js

import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserSearch = async ({ username, location, minRepoCount, page = 1 }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepoCount) query += ` repos:>=${minRepoCount}`;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=10`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching advanced user search:", error);
    throw error;
  }
};
