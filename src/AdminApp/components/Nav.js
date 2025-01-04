import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi"; // For the hamburger menu icon
import { PersonCircle } from "react-bootstrap-icons";
import "../CSS/AdminTopnavbar.css"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Header({ Toggle }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Create a reference for the menu

  const navigate = useNavigate();

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false); // Close the menu if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  const handleProfileClick = () => {
    setShowMenu(false); // Close the menu after profile is clicked
  };

  const handleMenuClose = () => {
    setShowMenu(false); // Close the menu
  };

  const logout = () => {
    Cookies.remove('userToken');
    Cookies.remove('loginType');   
    navigate('/');
};

  return (
    <div className="adminheaderclassname">
    <Navbar
      expand="sm"
      className="navbar-dark bg-white shadow-lg p-3 mb-5 rounded"
      style={{ borderBottom: "2px solid #f1f1f1" }}
    >
    
      <i className="navbar-brand fs-4 text-dark" onClick={Toggle}>
        <BiMenuAltRight />
      </i>
      <Navbar.Toggle
        aria-controls="collapsibleNavId"
        className="d-lg-none text-dark"
      />
      <Navbar.Collapse id="collapsibleNavId">
        <Nav className="ms-auto">
          <NavDropdown
            title={<PersonCircle size={24} />}
            id="user-menu"
            show={showMenu}
            onClick={handleMenuClick}
            align="end"
            ref={menuRef}
            className="text-dark"
            // Change the icon and text color
          >
            <NavDropdown.Item
              onClick={handleProfileClick}
              style={{ color: "#333", padding: "10px 20px" }}
            >
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={logout}
              style={{ color: "#333", padding: "10px 20px" }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;

// not color
// import React,{useState,useRef,useEffect} from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { BiMenuAltRight } from "react-icons/bi"; // For the hamburger menu icon
// import { PersonCircle } from 'react-bootstrap-icons';

// function Header({ Toggle }) {

//   const [showMenu, setShowMenu] = useState(false);
//   const menuRef = useRef(null); // Create a reference for the menu

//   // Close the menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowMenu(false); // Close the menu if clicking outside
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleMenuClick = () => {
//     setShowMenu(!showMenu); // Toggle menu visibility
//   };

//   const handleProfileClick = () => {
//     setShowMenu(false); // Close the menu after profile is clicked
//   };

//   const handleMenuClose = () => {
//     setShowMenu(false); // Close the menu
//   };

//   return (
//     <Navbar expand="sm" className="navbar-dark bg-transparent">
//       <i className="navbar-brand fs-4" onClick={Toggle} >
//         <BiMenuAltRight />
//       </i>
//       <Navbar.Toggle aria-controls="collapsibleNavId" className="d-lg-none" />
//       <Navbar.Collapse id="collapsibleNavId">

//         <Nav className="ms-auto">
//           <NavDropdown
//             title={<PersonCircle size={24} />}
//             id="user-menu"
//             show={showMenu}
//             onClick={handleMenuClick}
//             align="end"
//             ref={menuRef}
//           >
//             <NavDropdown.Item onClick={handleProfileClick}>Profile</NavDropdown.Item>
//             <NavDropdown.Item onClick={handleMenuClose}>Logout</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// import React from "react";
// import "bootstrap/js/dist/dropdown";
// import 'bootstrap/js/dist/collapse'

// function Nav({ Toggle }) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-3">
//       <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
//       <button
//         className="navbar-toggler d-lg-none"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapsibleNavId"
//         aria-controls="collapsibleNavId"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       ><i className="bi bi-justifiy"></i></button>
//       <div className="collapse navbar-collapse" id="collapsibleNavId">
//         <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="dropdownId"
//               data-bs-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="dropdownId">
//               <a className="dropdown-item" href="#">
//                 Profile
//               </a>
//               <a className="dropdown-item" href="#">
//                 Settings{" "}
//               </a>
//               <a className="dropdown-item" href="#">
//                 Logout{" "}
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
