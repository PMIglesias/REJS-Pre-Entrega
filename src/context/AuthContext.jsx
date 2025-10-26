import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const raw = localStorage.getItem('isAuthenticated');
      return raw === 'true';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false'); } catch(e) {}
  }, [isAuthenticated]);

  const login = (username, password) => {
    if (!username || !password) return false;
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
