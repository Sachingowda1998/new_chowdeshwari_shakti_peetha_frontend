import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import "../CSS/Carousel/Carousel.css";
// import RemedyPujas from "../Components/Home-Sections/Section1";
// import RemedyPujas2 from "../Components/Home-Sections/Section2";
import { Row, Col } from "react-bootstrap";
// import CombinationPujas from "../Components/Home-Sections/Section3";
// import GodsAndPujas from "../Components/Home-Sections/Section4";
import MyCarousel from "../Components/HomeSections/MyCarousel";
// import UpcomingEvents from "../Components/Home-Sections/UpcomingEvents";
// import UpcomingPujas from "../Components/Home-Sections/UpcomingEvents";
import { Container, Button } from "react-bootstrap";
import Method1 from "../Components/HomeSections/Method1";
import Method2 from "../Components/HomeSections/Method2";
import "../CSS/Home/Home.css";
import TestimonialSection from "../Components/HomeSections/testimonials";
// import Testimonials from "./Testimonials";
import Method3 from "../Components/HomeSections/Method3";
import Devotees from "./Devotees";
import WordsFromDevotees from "./WordsFromDevotees";
import DevoteeCarousel from "./DevoteeCarousel";

function Home({ scrollToFooter }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFF4E6",

          minHeight: "100vh",
          padding: "20px",
        }}
        className="homeclassname"
      >
        {/* section1 */}
        <section>
          <MyCarousel />
        </section>

        <section>
          <div>
            <h4 className="Puja-title">Our Pooja Category</h4>
          </div>
          <Method1 />
        </section>

        <section
          style={{
            background: "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)",
            padding: "50px 0",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 15px", padding: "0 15px" }}
          >
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
              Connect with Astroguru
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
              Discover the secrets of the stars and let ancient wisdom guide
              your future. Our expert Astrogurus are here to give you personal
              advice and cosmic guidance
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#fdbb2d",
              color: "#1a2a6c",
              fontSize: "18px",
              padding: "12px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              position: "absolute",
              right: "30px", // Right side distance
              top: "80%", // Vertically centered
              transform: "translateY(-50%)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: "10",
            }}
            className="home-talktoastrobtn"
            // className="home-talktoastrobtn"
            onClick={() => alert("Talking to Astroguru!")}
          >
            Talk to Astroguru
          </button>
        </section>

        {/* sectiion 3 -part 3 */}
        <section>
          <div>
            <h4 className="Puja-title">Temple-Specific Pujas</h4>
          </div>
          <Method2 />
        </section>


        <section
          style={{
            backgroundColor: "#fcba03",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            height: "500px",
            overflow: "hidden",
          }}
          className="mt-5"
        >
          <Row className="h-100 align-items-center gx-0">
            <Col
              md={6}
              className="text-center text-md-start d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <h2 className="display-4 text-primary">Upcoming Event</h2>
                <p className="lead text-muted">
                  WATCH AND LISTEN TO OUR SERMONS
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <p className="font-weight-bold">
                  Friday 23:39 IST Saturday 11:20 ISD
                </p>
                <p className="font-weight-bold text-muted">
                  No 233 Main St. New York, United States
                </p>
                <Button variant="primary" size="lg" className="mt-1">
                  Visit Now!
                </Button>
              </div>
            </Col>
            <Col
              md={6}
              style={{
                height: "100%",
                padding: "0px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundImage: `url('assets/subsciption/traditionaltemple.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Col>
          </Row>
        </section>


        <section>
          <div>
            <h4 className="Puja-title">Gods</h4>
          </div>
          <Method3 />
        </section>
{/* 
        <section
          style={{
            backgroundColor: "#fcba03",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            height: "400px",
            overflow: "hidden",
          }}
          className="mt-4"
        >
          <Row className="h-100 align-items-center gx-0">
            <Col md={6} className="text-center text-md-start ">
              <div >
                <h2 className="display-4 text-primary">Upcoming Event</h2>
                <p className="lead text-muted">
                  WATCH AND LISTEN TO OUR SERMONS
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <p className="font-weight-bold">
                  Friday 23:39 IST Saturday 11:20 ISD
                </p>
                <p className="font-weight-bold text-muted">
                  No 233 Main St. New York, United States
                </p>
                <Button variant="primary" size="lg" className="mt-3">
                  Visit Now!
                </Button>
              </div>
            </Col>
            <Col
              md={6}
              style={{
                height: "100%",
                padding: "0px",
              }}
            >
             
              <div
                style={{
                  height: "100%",

                  backgroundImage: `url('assets/subsciption/traditionaltemple.jpg')`,

                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Col>
          </Row>
        </section>  */}

       

         {/* <div>
        <section className="sectionhome">
          <div className="modern-container">
            <div className="left-content">
              <h3>Devotee 1</h3>
              <p>Location: Haridwar</p>
              <p>
                "This experience has truly been a blessing. Thank you for the
                guidance!"
              </p>
            </div>
            <div className="right-content">
              <h3>Devotee 2</h3>
              <p>Location: Varanasi</p>
              <p>
                "Amazing service and divine experience. Highly recommended to
                others!"
              </p>
            </div>
          </div>

          
        </section>

        <section className="sectionhome">
          <div className="modern-container">
            <div className="left-content">
              <h3>Devotee 1</h3>
              <p>Location: Haridwar</p>
              <p>
                "This experience has truly been a blessing. Thank you for the
                guidance!"
              </p>
            </div>
            <div className="right-content">
              <h3>Devotee 2</h3>
              <p>Location: Varanasi</p>
              <p>
                "Amazing service and divine experience. Highly recommended to
                others!"
              </p>
            </div>
          </div>

          
        </section>
        <section className="sectionhome">
          <div className="modern-container">
            <div className="left-content">
              <h3>Devotee 1</h3>
              <p>Location: Haridwar</p>
              <p>
                "This experience has truly been a blessing. Thank you for the
                guidance!"
              </p>
            </div>
            <div className="right-content">
              <h3>Devotee 2</h3>
              <p>Location: Varanasi</p>
              <p>
                "Amazing service and divine experience. Highly recommended to
                others!"
              </p>
            </div>
          </div>

          
        </section>
        </div> */}
        
          {/* carouseldevotee */}
          <section>
            <DevoteeCarousel />
          </section>

  
{/* 10/12/24 */}
      

        {/* <section className="mt-5">
          <WordsFromDevotees />
        </section> */}


        {/* style */}
        <style>
          {`
      @media (max-width: 768px) {
        .home-talktoastrobtn {
          top: 90% !important;
          right:10px !important;
        }
      }
    `}
        </style>
      </div>
    </>
  );
}

export default Home;
