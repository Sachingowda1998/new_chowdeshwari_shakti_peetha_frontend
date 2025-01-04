import React, { createContext, useState } from 'react';
import Sidebar from '../../Sidebar';

// Create a context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false); // State to manage collapsed sidebar

  return (
    <AppContext.Provider value={{ collapsed, setCollapsed }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default AppContext;
