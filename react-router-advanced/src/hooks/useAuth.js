// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // simple mock auth state (false = logged out, true = logged in)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
