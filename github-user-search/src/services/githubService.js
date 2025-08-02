import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserSearch = async ({ username, location, minRepoCount }) => {
  try {
    // Construct query string
    let query = "";

    if (username) {
      query += `${username} in:login`;
    }

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepoCount) {
      query += ` repos:>=${minRepoCount}`;
    }

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);

    return response.data.items; // GitHub returns items in the `items` array
  } catch (error) {
    console.error("Error fetching advanced user search:", error);
    throw error;
  }
};
