import React, { useState, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar2 from "./components/Sidebar2";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import User from "./components/User";
// import Category from "./components/Category";
// import SubCategory from "./components/SubCategory";
// // import Nav from "./components/Nav";
import { AppProvider } from "./components/AppContext";
import Header from "./components/Nav";
import "./adminindex.css";


const Home = React.lazy(() => import("./components/Home"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const User = React.lazy(() => import("./components/User"));
const AddUserForm = React.lazy(() => import("./components/User/AddUserForm"));
const EditUserForm = React.lazy(() => import("./components/User/EditUserForm"));
const Banner = React.lazy(() => import("./components/Banner"));
const AddBanner = React.lazy(() => import("./components/AddBanner"));
const AdminPujaCategories = React.lazy(() => import("./components/AdminPujaCategories"));
const EditBannerForm = React.lazy(() => import("./components/EditBannerForm"));
const AdminSubCategory = React.lazy(() => import("./components/AdminSubCategory"));
const AdminPujaService = React.lazy(() => import("./components/AdminPujaService"));
const AdminEditPuja = React.lazy(() => import("./components/AdminEditPuja"));
const AdminAddPuja = React.lazy(() => import("./components/AdminAddPuja"));
const AdminIdolsLists = React.lazy(() => import("./components/AdminIdolsLists"));
const CompanyProfile = React.lazy(() =>
  import("./components/Company/CompanyProfile")
);
const SocialMediaLinks = React.lazy(() =>
  import("./components/Company/SocialMediaLinks")
);

const NotFound = () => {
  return <div>Page not found.admin The URL you requested does not exist.</div>;
};

function AdminApp() {
  return (
    <AppProvider>
      <div style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
        <main>
          {/* Navigation */}
          {/* <Nav /> */}
          <Header />
          <Suspense fallback={<div>Loading Admin Screen...</div>}>
            {/* Routes */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/v1/dashboard" exact element={<Dashboard />} />
              <Route path="/v1/user" exact element={<User />} />
          
              <Route path="/v1/adduserform" element={<AddUserForm />} />
              <Route path="/v1/edituserform" element={<EditUserForm />} />
              <Route path="/v1/companyprofile" element={<CompanyProfile />} />
              <Route path="/v1/socialmedialinks" element={<SocialMediaLinks />} />
              <Route path="/v1/banner" element={<Banner />} />
              <Route path="/v1/editbannerform" element={<EditBannerForm />} />
              <Route path="/v1/addbanner" element={<AddBanner />} />
              <Route path="/v1/adminpujacategories" element={<AdminPujaCategories />} />
              <Route path="/v1/adminsubcategory" element={<AdminSubCategory />} />
              <Route path="/v1/adminpujaservice" element={<AdminPujaService />} />
              <Route path="/v1/admineditpuja" element={<AdminEditPuja />} />
              <Route path="/v1/adminaddpuja" element={<AdminAddPuja />} />
              <Route path="/v1/adminidolslists" element={<AdminIdolsLists />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </AppProvider>
  );
}

export default AdminApp;

// function App() {
//   const [toggle, settoggle] = useState(true);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const Toggle = () => {
//     settoggle(!toggle);
//   };

//   const handleSidebarToggle = (collapsed) => {
//     setIsCollapsed(collapsed);
//   };

//   return (
//     // <div className="container-fluid bg-secondary min-vh-100">
//     //   <div className="row g-0">
//     //     {/* {toggle && (
//     //         <div className="col-4 col-md-2 bg-white vh-100">
//     //           <Sidebar2 />
//     //         </div>
//     //       )} */}
//     //     {toggle && (
//     //       <div
//     //         className={`${
//     //           isCollapsed ? "sidebarcollapsed" : "col-4 col-md-2"
//     //         } bg-white vh-100 transition-width`}
//     //       >
//     //         <Sidebar2 onToggleSidebar={handleSidebarToggle} />
//     //       </div>
//     //     )}
//     //     <div className="col">
//     //       <Nav Toggle={Toggle} />
//     //       <Routes>
//     //         <Route path="/" element={<Home Toggle={Toggle} />} />
//     //         <Route path="/dashboard" element={<Dashboard />} />
//     //         <Route path="/user" element={<User />} />
//     //         <Route path="/category" element={<Category />} />
//     //         <Route path="/subcategory" element={<SubCategory />} />
//     //       </Routes>
//     //     </div>
//     //   </div>
//     // </div>
//     <div
//       className="container-fluid bg-secondary min-vh-100"
//       style={{ display: "flex", flexDirection: "row" }}
//     >
//       <div>
//         {/* {toggle && (
//             <div className="col-4 col-md-2 bg-white vh-100">
//               <Sidebar2 />
//             </div>
//           )} */}
//         {toggle && (
//           <div
//             className={`${
//               isCollapsed ? "sidebarcollapsed" : "sidebarcollapsedNotfombutonn"
//             } bg-white vh-100 transition-width`}
//           >
//             <Sidebar2 onToggleSidebar={handleSidebarToggle} />
//           </div>
//         )}
//         <div>
//           <Nav Toggle={Toggle} />
//           <Routes>
//             <Route path="/" exact  element={<Home  />} />
//             <Route path="/dashboard" exact  element={<Dashboard />} />
//             <Route exact  path="/user" element={<User />} />
//             <Route path="/category" element={<Category />} />
//             <Route path="/subcategory" element={<SubCategory />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Categerios from "./Categerios";
// import Dashboard from "./Dashboard";
// import { AppProvider } from "./Screen/global/AppContext";
// import Topbar from "./Screen/global/Topbar";
// // import { AppProvider } from './AppContext';  // Import the AppProvider

// function App() {
//   return (
//     <div>
//       <AppProvider>
//         <div style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
//           <Topbar />
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/Categerios" element={<Categerios />} />
//           </Routes>
//         </div>
//       </AppProvider>
//     </div>
//   );
// }

// export default App;
