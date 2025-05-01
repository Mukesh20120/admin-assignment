import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../customHooks/useStorage";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage(
    "accessToken",
    null
  );

  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
  };

  const logout = () => {
    removeUser();
    removeAccessToken();
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
