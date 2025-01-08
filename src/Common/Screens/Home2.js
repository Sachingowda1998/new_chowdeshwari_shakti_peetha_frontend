import "../CSS/Carousel/Carousel.css";
import "../CSS/Home/Home.css";

import "../CSS/Home2/Home2.css";
import "../MobileCSS/Home2.css";

import { Col, Row, Card } from "react-bootstrap";

import { Button } from "react-bootstrap";
import DevoteeCarousel from "./DevoteeCarousel";
import Devotees from "./Devotees";
import { Link } from "react-router-dom";
import Method1 from "../Components/HomeSections/Method1";
import Method2 from "../Components/HomeSections/Method2";
import Method3 from "../Components/HomeSections/Method3";
import MyCarousel from "../Components/HomeSections/MyCarousel";
import React from "react";
import HomeSection2OfHomams from "../Components/HomeSection2/HomeSection2OfHomams";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TempleSpecificPuja from "../Components/HomeSection2/TempleSpecificPuja";
import Devotees2 from "./Devotees2";
import Subscribes from "./Subscribes";
import Subscribe from "./subscribeList";
import Sarpa from "./Sarpa";
import Homams from "./Homam";
import Tades from "./Tades";
import rituals from "../ritualdata";


function Home2() {
  

  const categories = [
    {
      name : "God Specific Pooja",
      image : "https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112148/FESTIVAL-SPECIFIC-PUJA.jpg",
      alttext : "god-specific-pooja",
    },
    {
      name : "All Homas",
      image : "assetstwo/profile/allhomam.jpg",
      alttext : "all-homas",
    },
    {
      name : "Sarpa Dosha Pooja",
      image : "assetstwo/profile/KalaSarpaDosha.png",
      alttext : "sarpa-dosha-pooja",
    },
    {
      name : "All Tade",
      image : "assetstwo/profile/AllTades.jpg",
      alttext : "all-tades",
    },
  ]
  return (
    <>
      <div
        style={{
          // backgroundColor: "rgb(244 230 255)",
          // backgroundColor: "#FFF4E6",
          backgroundColor: "#FFD65A",

          minHeight: "100vh",
          padding: "20px",
        }}
        className="homeclassname"
      >
        {/* section1 */}
        <section>
          <MyCarousel />
        </section>

        {/* puja categories */}

        <section className="puja-categories-main-section pt-5">


          <div className="mb-5">
            <Row className="home-section2">

              <Col xs={12}>
              <div className="title-main">
              {/* <h3 className="merienda" >Welcome to Astrobharati</h3> */}
              <h3 className="merienda orange-color">
               Creating blessings, one sacred moment at a time.
              </h3>
              <h5 className="orange-color">
              Book your pooja online and be graced with spiritual guidance and sanctified prasada.
              </h5>
              <img
                src="assetstwo/backgroundimages/titleunderline-removebg.png"
                alt="not found"
                width={250}
              />
              </div>
              </Col>

              {
                categories.map((category, index)=>{
                  return(
                    <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="puja-categories-card mb-4" key={index}
              >
                <Card className="hover-card">
                  <div className="cardimage-body">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.alttext}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-title-overlay"> <h4>{category.name}</h4> </div>
                  {/* <Card.Body>
                    <Card.Title className="puja-categories-card-title">
                      
                    </Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>

                  )
                })
              }
 
            </Row>
          </div>
        </section>

        {/* talk to asroguru */}
        <section className="home2-talktoastoguru-main">
          <div className="talktoastoguru-parent">
            <div className="talkoastoguru-child">
              <h3>
              Your future deserves the right guidance,  Consult our skilled astrologers today.
              </h3>
              <h6>
              Get accurate and personalized solutions for all your concerns.
              </h6>
              <button>Call Us Now</button>
            </div>
          </div>
        </section>



        
          <section className="mt-3 pt-5">
            <Subscribes />
          </section>
        

        
          <section>
  {categories.map((category, catIndex) => {
    // Filter products belonging to the current category
    const categoryRituals = rituals.filter(
      (ritual) => ritual.category === category.name
    );

    // Shuffle and select 4 random products
    const shuffledRituals = [...categoryRituals].sort(() => 0.5 - Math.random());
    const selectedRituals = shuffledRituals.slice(0, 4);

    return (
      <div key={catIndex} className="mt-5 category-div p-4">
        <div className="category-header mb-4">
          <h3 className="merienda orange-color">{category.name}</h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={250}
          />
        </div>

        <div className="row">
          {selectedRituals.map((product, prodIndex) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={prodIndex}>
              <div className="card text-center shadow">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.alttext}
                />
                <div className="card-body bg-light ms-2 mt-2 mb-2">
                  <h5 className="card-title orange-color">{product.name}</h5>
                  <p> (Includes costs of the ingredients) </p>
                  <p className="card-text">From Rs {product.fromPrice}</p>
                  <button className="btn btn-success text-right">View Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</section>





       

        

        {/* Our devotees says about us !!!!! */}
        <div className="mt-5 ourdevotee-main">
          <div className="title-main">
            <h3 className="merienda orange-color">
              Our devotees say this about us!!!!!
            </h3>

            <img
              src="assetstwo/backgroundimages/titleunderline-removebg.png"
              alt="not found"
              width={300}
            />
          </div>
          <section>
            <Devotees2 />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home2;
