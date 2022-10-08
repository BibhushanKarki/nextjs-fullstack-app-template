import { createContext, useState } from 'react';

const defaultValue= {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
