// import React, { createContext, useState } from "react";
// import Sidebar2 from '../components/Sidebar2'
// // Create a Context for the sidebar state
// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [isSidebarVisible, setSidebarVisible] = useState(true); // Whether the sidebar is visible
//   const [isCollapsed, setCollapsed] = useState(false); // Whether the sidebar is collapsed

//   // Function to toggle the collapsed state of the sidebar
//   const handleSidebarToggle = (newCollapsedState) => {
//     setCollapsed(newCollapsedState); // Update the collapse state
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         isSidebarVisible,
//         isCollapsed,
//         setSidebarVisible,
//         handleSidebarToggle,
//       }}
//     >
//     <div className="container-fluid bg-secondary min-vh-100 d-flex">
//           {/* Sidebar */}
//           <div
//             className={`${
//               "bg-white vh-100 transition-width"
//             }`}
//           >
//             <Sidebar2 /> {/* Sidebar component */}
//           </div>
          
//       {children}
//       </div>
//     </AppContext.Provider>
//   );
// };

// export default AppContext;


import React, { createContext, useState, useContext } from "react";
import Sidebar2 from "./Sidebar2";

// Create a Context
const AppContext = createContext();

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);

// Provider Component
export const AppProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isCollapsed, setCollapsed] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setSidebarVisible((prev) => !prev);
  };

  // Handle sidebar collapse state
  const handleSidebarToggle = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarVisible,
        isCollapsed,
        toggleSidebarVisibility,
        handleSidebarToggle,
      }}
    >
      <div className="container-fluid  min-vh-100 d-flex">
        {/* Sidebar */}
        <div>
          {isSidebarVisible && (
            <div
              className={`${
                isCollapsed
                  ? "sidebarcollapsed"
                  : "sidebarcollapsedNotfombutonn"
              } bg-white vh-100 transition-width`}
            >
              <Sidebar2 onToggleSidebar={handleSidebarToggle} />
            </div>
          )}
        </div>
        {children}
        {/* <div className="main-content">{children}</div> */}
      </div>
    </AppContext.Provider>
  );
};
