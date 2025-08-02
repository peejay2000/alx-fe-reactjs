// src/services/api.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;
const TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: TOKEN
    ? { Authorization: `token ${TOKEN}` }
    : {},
});

export default api;
