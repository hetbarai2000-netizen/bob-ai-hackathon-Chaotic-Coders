import React, { createContext, useContext, useState, useCallback } from 'react';

const DEMO_USERS = [
  {
    id: 'admin-001',
    username: 'admin',
    password: 'admin123',
    name: 'Dr. Sarah Jenkins',
    role: 'admin',
    title: 'VP Clinical Operations',
    org: 'TrialGuard Enterprise',
    avatar: 'SJ',
  },
  {
    id: 'researcher-001',
    username: 'researcher',
    password: 'research123',
    name: 'Dr. Marcus Chen',
    role: 'researcher',
    title: 'Clinical Research Associate',
    org: 'TrialGuard Enterprise',
    avatar: 'MC',
  },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('tg_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback((username, password) => {
    const found = DEMO_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) return { success: false, error: 'Invalid credentials. Try admin/admin123 or researcher/research123.' };
    const { password: _p, ...safeUser } = found;
    setUser(safeUser);
    localStorage.setItem('tg_user', JSON.stringify(safeUser));
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('tg_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
