import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../CSS/Home/Section2.css";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { pujas } from "../../Data/data";

const Method2 = () => {
  const navigate = useNavigate();
  const ObjectDetailshandleFunc = () => {
    navigate("/objectdetails");
  };

  return (
    <div className="sectionTwoclassname ">
      <>
        <div className="testcomponentclassname">
          <div>
            <div className="testsection1">
              <button className="testsection2">View all</button>
            </div>
          </div>
        </div>
      </>
      <Row>
        <Col md={12}>
          <Carousel
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
              },
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            focusOnSelect={true}
          >
            {pujas.map((puja, index) => (
              <div key={index}>
                <Card className="shadow-sm text-center h-100">
                  <Card.Body className="d-flex flex-column">
                    {/* Replacing Image with an Orange Box */}
                    <div
                      className="orange-box mb-3"
                      style={{
                        height: "200px",

                        // backgroundImage: `url('assets/weekly pooja.png')`,
                        backgroundImage: puja.image
                          ? `url(${puja.image})`
                          : "none",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* <span>{puja.title}</span> */}
                    </div>
                    <Card.Title className="card-title">{puja.title}</Card.Title>
                    {/* <Card.Text className="card-description">
                      {puja.description}
                    </Card.Text> */}
                    {/* <h5 className="card-price">₹{puja.price}</h5> */}
                    <Row className="align-items-center mt-auto">
                      <Col xs={6} className="d-flex justify-content-start">
                        <h5 className="card-price">₹{puja.price}</h5>
                      </Col>
                      <Col xs={6} className="d-flex justify-content-end">
                        <Button
                          style={{
                            backgroundColor: "#51d93f",
                            borderColor: "#51d93f",
                          }}
                          className="btn-view"
                        >
                          Book
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
     
    </div>
  );
};

export default Method2;
