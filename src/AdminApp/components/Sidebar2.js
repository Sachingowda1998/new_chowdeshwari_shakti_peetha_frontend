import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsArrowBarLeft } from "react-icons/bs";
import { BiCog, BiShield, BiBell, BiLink, BiShoppingBag } from "react-icons/bi";

function Sidebar2({ onToggleSidebar }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onToggleSidebar(newCollapsedState);
  };

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false); // State for panel2

  const handleAccordionChange = (panel) => {
    setExpanded(expanded === panel ? false : panel); // Toggle the panel between expanded and collapsed
  };

  const handleAccordionChange2 = (panel) => {
    setExpanded2(expanded2 === panel ? false : panel); // Correct toggle logic
  };

  return (
    <div className={`bg-white sidebar p-2 ${isCollapsed ? "collapsed" : ""}`}>
      <div className="m-2 d-flex align-items-center justify-content-between">
        {isCollapsed ? (
          <i
            className="bi bi-list fs-4 me-3"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          ></i>
        ) : (
          <>
            <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
            <span className="brand-name fs-4">Puja</span>
            <span
              onClick={toggleSidebar}
              style={{
                marginLeft: "auto",
                fontSize: "22px",
                color: "#c1d4d9",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e74c3c")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ecf0f1")}
            >
              <BsArrowBarLeft />
            </span>
          </>
        )}
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
        <Link to="/admin/v1/dashboard" className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          {!isCollapsed && <span>DashBoard</span>}
        </Link>

        <Link to="/admin/v1/user" className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          {!isCollapsed && <span>User</span>}
        </Link>
        <Link
          to="/admin/v1/adminpujacategories"
          className="list-group-item py-2"
        >
          <i className="bi bi-tags fs-5 me-3"></i>
          {!isCollapsed && <span>Category</span>}
        </Link>
        <Link to="/admin/v1/adminsubcategory" className="list-group-item py-2">
          <i className="bi bi-tag fs-5 me-3"></i>
          {!isCollapsed && <span>SubCategory</span>}
        </Link>

        <Link to="/admin/v1/banner" className="list-group-item py-2">
          <i className="bi bi-tag fs-5 me-3"></i>
          {!isCollapsed && <span>Banner</span>}
        </Link>

        <Accordion activeKey={expanded}>
          <Card>
            <Card.Header>
              <div
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() => handleAccordionChange("panel1")}
              >
                <div className="py-2">
                  <BiCog className="main-settings-icon" />{" "}
                  {!isCollapsed && (
                    <span className="main-settings-text"> Settings </span>
                  )}
                </div>{" "}
                {/* {expanded === "panel1" ? (
                  <FaChevronUp className="pt-3" />
                ) : (
                  <FaChevronDown />
                )} */}
                <div className="d-flex justify-content-center align-items-center">
                  {expanded === "panel1" ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="panel1">
              <Card.Body>
                <ul className="settings-list">
                  <li className="settings-item">
                    <Link to="/admin/v1/companyprofile">
                      <BiCog className="settings-icon" />{" "}
                      {!isCollapsed && <span>companyprofile</span>}
                    </Link>
                  </li>
                  <li className="settings-item">
                    <Link to="/admin/v1/socialmedialinks">
                      <BiLink className="settings-icon" />{" "}
                      {!isCollapsed && <span>SocialMedia</span>}
                    </Link>
                  </li>
                  {/* <li className="settings-item">
                    <Link to="/admin/v1/settings/notifications">
                      <BiBell className="settings-icon" /> Notifications
                    </Link>
                  </li> */}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion activeKey={expanded2}>
          <Card>
            <Card.Header>
              <div
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() => handleAccordionChange2("panel2")}
              >
                <div className="py-2">
                  <BiShoppingBag className="main-settings-icon" />
                  {!expanded2 && (
                    <span className="main-settings-text"> Products </span>
                  )}
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  {expanded2 === "panel2" ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="panel2">
              <Card.Body>
                <ul className="settings-list">
                  <li className="settings-item">
                    <Link to="/admin/v1/adminpujaservice">
                      <BiCog className="settings-icon" /> <span>Pujas</span>
                    </Link>
                  </li>
                  <li className="settings-item">
                    <Link to="/admin/v1/adminidolslists">
                      <BiLink className="settings-icon" />{" "}
                      <span>Idols</span>
                    </Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* <Accordion activeKey={expanded2}>
          <Card>
            <Card.Header>
              <div
                className="d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() => handleAccordionChange2("panel2")}
              >
                <div className="py-2">
                  <BiShoppingBag  className="main-settings-icon" />{" "}
                  {!isCollapsed &&   <span className="main-settings-text"> Products </span>}
                </div>{" "}
               
                <div className="d-flex justify-content-center align-items-center">
                  {expanded === "panel2" ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="panel2">
              <Card.Body>
                <ul className="settings-list">
                  <li className="settings-item">
                    <Link to="/admin/v1/adminpujaservice">
                      <BiCog className="settings-icon" />{" "}
                      {!isCollapsed && <span>Pujas</span>}
                    </Link>
                  </li>
                  <li className="settings-item">
                    <Link to="/admin/v1/socialmedialinks">
                      <BiLink className="settings-icon" />{" "}
                      {!isCollapsed && <span>SocialMedia</span>}
                    </Link>
                  </li>
               
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </div>
    </div>
  );
}

export default Sidebar2;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Style.css";
// import { Accordion, Card, Button } from "react-bootstrap";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { BsArrowBarLeft } from "react-icons/bs";

// // good original
// function Sidebar2({ onToggleSidebar }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     const newCollapsedState = !isCollapsed;
//     setIsCollapsed(newCollapsedState);
//     onToggleSidebar(newCollapsedState);
//   };

//   const [expanded, setExpanded] = useState(false);

//   const handleAccordionChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div className={`bg-white sidebar p-2 ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="m-2 d-flex align-items-center justify-content-between">
//         {isCollapsed ? (
//           <i
//             className="bi bi-list fs-4 me-3"
//             onClick={toggleSidebar}
//             style={{ cursor: "pointer" }}
//           ></i>
//         ) : (
//           <>
//             <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
//             <span className="brand-name fs-4">Puja</span>
//             <span
//               onClick={toggleSidebar}
//               style={{
//                 marginLeft: "auto",
//                 fontSize: "22px",
//                 color: "#c1d4d9",
//                 cursor: "pointer",
//                 transition: "color 0.3s ease",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.color = "#e74c3c")}
//               onMouseOut={(e) => (e.currentTarget.style.color = "#ecf0f1")}
//             >
//               <BsArrowBarLeft />
//             </span>
//           </>
//         )}
//       </div>

//       <hr className="text-dark" />

//       <div className="list-group list-group-flush">
//         <Link to="/admin/v1/dashboard" className="list-group-item py-2">
//           <i className="bi bi-speedometer2 fs-5 me-3"></i>
//           {!isCollapsed && <span>DashBoard</span>}
//         </Link>
//         <Link to="/admin" className="list-group-item py-2">
//           <i className="bi bi-house fs-5 me-3"></i>
//           {!isCollapsed && <span>Home</span>}
//         </Link>
//         <Link to="/admin/v1/user" className="list-group-item py-2">
//           <i className="bi bi-people fs-5 me-3"></i>
//           {!isCollapsed && <span>User</span>}
//         </Link>
//         <Link to="/admin/v1/category" className="list-group-item py-2">
//           <i className="bi bi-tags fs-5 me-3"></i>
//           {!isCollapsed && <span>Category</span>}
//         </Link>
//         <Link to="/admin/v1/subcategory" className="list-group-item py-2">
//           <i className="bi bi-tag fs-5 me-3"></i>
//           {!isCollapsed && <span>SubCategory</span>}
//         </Link>

//       </div>

//     </div>
//   );
// }

// export default Sidebar2;

// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import "../Style.css";
// import {AppContext} from "./AppContext";
// import { Accordion, Card, Button } from "react-bootstrap";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { BsArrowBarLeft } from "react-icons/bs";

// // good original
// function Sidebar2({ onToggleSidebar }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     const newCollapsedState = !isCollapsed;
//     setIsCollapsed(newCollapsedState);
//     onToggleSidebar(newCollapsedState);
//   };

//   const [expanded, setExpanded] = useState(false);

//   const handleAccordionChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div className={`bg-white sidebar p-2 ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="m-2 d-flex align-items-center justify-content-between">
//         {isCollapsed ? (
//           <i
//             className="bi bi-list fs-4 me-3"
//             onClick={toggleSidebar}
//             style={{ cursor: "pointer" }}
//           ></i>
//         ) : (
//           // Show full header with brand icon, name, and "X" button
//           <>
//             <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
//             <span className="brand-name fs-4">Puja</span>
//             <span
//               onClick={toggleSidebar}
//               style={{
//                 marginLeft: "auto",
//                 fontSize: "22px",
//                 color: "#c1d4d9",
//                 cursor: "pointer",
//                 transition: "color 0.3s ease",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.color = "#e74c3c")}
//               onMouseOut={(e) => (e.currentTarget.style.color = "#ecf0f1")}
//             >
//               <BsArrowBarLeft />
//             </span>
//           </>
//         )}
//       </div>

//       <hr className="text-dark" />

//       <div className="list-group list-group-flush">
//         <Link to="/admin/v1/dashboard" className="list-group-item py-2">
//           <i className="bi bi-speedometer2 fs-5 me-3"></i>
//           {/* Conditionally render text based on isCollapsed */}
//           {!isCollapsed && <span>DashBoard</span>}
//         </Link>
//         <Link to="/admin" className="list-group-item py-2">
//           <i className="bi bi-house fs-5 me-3"></i>
//           {!isCollapsed && <span>Home</span>}
//         </Link>
//         <Link to="/admin/v1/user" className="list-group-item py-2">
//           <i className="bi bi-people fs-5 me-3"></i>
//           {!isCollapsed && <span>User</span>}
//         </Link>
//         <Link to="/admin/v1/category" className="list-group-item py-2">
//           <i className="bi bi-tags fs-5 me-3"></i>
//           {!isCollapsed && <span>Category</span>}
//         </Link>
//         <Link to="/admin/v1/subcategory" className="list-group-item py-2">
//           <i className="bi bi-tag fs-5 me-3"></i>
//           {!isCollapsed && <span>SubCategory</span>}
//         </Link>
//       </div>

//     </div>
//   );
// }

// export default Sidebar2;
