import React, { useState } from "react";
import { Row, Col, Dropdown, Card, Button, Accordion,Offcanvas } from "react-bootstrap";
import SidebarAccordionpujas from "../Components/Sidebars/SidebarAccordionpujas";
// import ObjectDetails from "./ObjectDetails";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/objectsofPujas.css";
import { cardsData } from "../Data/data";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "../MobileCSS/Pujacategoriesmobile.css"

const CustomToggle = ({ children, isExpanded }) => {
  return (
    <div
      className="d-flex align-items-center "
      style={{
        cursor: "pointer",
        backgroundColor: "#FFE4B5",
        padding: "10px 15px",
        borderRadius: "10px",
        fontWeight: "bold",
        marginTop: "0",
        color: "#8B4513",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <FaChevronDown className="me-2" /> */}

      <GoDotFill className="me-2" />

      {children}
    </div>
  );
};

function ObjectsofPuja() {
  const [expandedKey, setExpandedKey] = useState(null);
  const [nestedExpandedKey, setNestedExpandedKey] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control the offcanvas visibility

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const navigate = useNavigate();

  // Function to handle accordion toggle
  const handleToggle = (key) => {
    setExpandedKey((prevKey) => (prevKey === key ? null : key));
  };

  const handleNestedToggle = (key) => {
    setNestedExpandedKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div
      className="ObjectsofPujaclassname"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div class="puja-list-banner">
        {/* <img src="assetstwo/banner/deepa.jpg" alt="not found"  /> */}
        <img src={process.env.PUBLIC_URL + '/assetstwo/banner/deepa.jpg'} alt="Banner" />
        <div className="banner-text">
          <h1>All Pooja Services</h1>
          <p>
            Book a pooja online and receive divine solutions with blessed
            prasada.
          </p>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                All Pujas
              </li>
            </ol>
          </nav>
        </div>
      </div>


       <Button  onClick={handleShowOffcanvas} className="filtercategories">
         Categories
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
  
          <h5>Homams</h5>
          <SidebarAccordionpujas
            expandedKey={expandedKey}
            onToggle={handleToggle}
            nestedExpandedKey={nestedExpandedKey}
            onNestedToggle={handleNestedToggle}
          />
          <div
            style={{
              backgroundColor: "#FFE4B5",
              padding: "15px",
              height:"100%",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderTopColor: "2px solid black",
            }}
          >
            <Card
              style={{
                backgroundColor: "#FFF8DC",
                borderRadius: "15px",
                marginBottom: "10px",
                padding: "0",
                overflow: "hidden",
                boxShadow: "none",
              }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#FFEBCD",
                  borderRadius: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <CustomToggle>Ganesh Puja</CustomToggle>
              </Card.Header>
              <Card.Header
                style={{
                  backgroundColor: "#FFEBCD",
                  borderRadius: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <CustomToggle>Good Specific Pujas</CustomToggle>
              </Card.Header>
            </Card>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Row className="mt-3">
        <Col
          lg={3}
          sm={12}
          className="d-none d-lg-block"
          style={{
            background: "rgb(255 99 71 / 2%)",
            // background: "linear-gradient(to bottom, #FFF4E6, #FFDAB9)",
            borderTop: "1px solid #ddd",
            paddingRight: "0",
            position: "sticky",
            top: "0",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <h5 className="ms-4">Homams</h5>
          <SidebarAccordionpujas
            expandedKey={expandedKey}
            onToggle={handleToggle}
            nestedExpandedKey={nestedExpandedKey}
            onNestedToggle={handleNestedToggle}
          />
          <div
            style={{
              backgroundColor: "#FFE4B5",
              padding: "15px",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderTopColor: "2px solid black",
            }}
          >
            <Card
              style={{
                backgroundColor: "#FFF8DC",
                borderRadius: "15px",
                marginBottom: "10px",
                padding: "0",
                overflow: "hidden",
                boxShadow: "none",
              }}
            >
              <Card.Header
                style={{
                  backgroundColor: "#FFEBCD",
                  borderRadius: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <CustomToggle>Ganesh Puja</CustomToggle>
              </Card.Header>
              <Card.Header
                style={{
                  backgroundColor: "#FFEBCD",
                  borderRadius: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <CustomToggle>Good Specific Pujas</CustomToggle>
              </Card.Header>
            </Card>
          </div>
        </Col>

        {/* Second Column with Cards */}
        <Col lg={9} sm={12} style={{ paddingLeft: "0" }}>
          <Row className="g-4">
            {cardsData.map((card) => (
              <Col lg={4} sm={6} xs={12} key={card.id}>
                <Card className="shadow-sm h-100">
                  <div
                    style={{
                      height: "180px",
                      backgroundColor: card.image ? "#FF9933" : "#FF9933",

                      // backgroundImage: `url('assets/weekly pooja.png')`,
                      backgroundImage: card.image
                        ? `url(${card.image})`
                        : "none",
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      textAlign: "center",
                      borderBottom: "1px solid #d6d4d4",
                    }}
                  ></div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      className="mb-2"
                      style={{
                        color: "#343a40",
                        fontWeight: "bold",
                        // fontFamily: "Times New Roman Georgia Garamond",
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      {card.title}
                    </Card.Title>
                    {/* <Card.Text className="text-muted flex-grow-1">
                      {card.description}
                    </Card.Text> */}
                    <Card.Text className="pujalistslots">
                      Slots: {card.Slots}
                    </Card.Text>
                    <Button
                      className="mt-2"
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#51d93f",
                        borderColor: "#51d93f",
                        fontFamily: "Times New Roman Georgia Garamond",
                      }}
                      onClick={() => navigate("/pujadetails")}
                    >
                      Book this Homam
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Agu+Display&family=Cookie&family=Dancing+Script:wght@400..700&family=Delius&family=Edu+AU+VIC+WA+NT+Pre&family=Indie+Flower&family=Itim&family=Kalam:wght@300;400;700&family=Lemonada:wght@300..700&family=Merienda:wght@300..900&family=Pacifico&family=Parisienne&family=Playwrite+IN+Guides&family=Rubik+Dirt&family=Space+Grotesk&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Tourney:ital,wght@0,100..900;1,100..900&family=Turret+Road:wght@200;300;400;500;700;800&display=swap');
      </style>
    </div>
  );
}

export default ObjectsofPuja;
