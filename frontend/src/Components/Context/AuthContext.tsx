import React, { PropsWithChildren, createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<any>(null);

const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <AuthContext.Provider value={{ menu, setMenu, toggle }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
