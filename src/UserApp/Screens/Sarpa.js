import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Sarpa.css";
import React from "react";
import { SarpaDosha } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Sarpa() {
  const responsive = {
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="sarpa-dosha-main-section">
        <div className="sarpa-dosha-title">
          <h3 className="sarpa-dosha-heading">Sarpa Dosha</h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={180}
          />
        </div>

        {/* <div className="sarpa-dosha-back-main">
          <Carousel responsive={responsive} infinite={true}  arrows={false} swipeable={false} draggable={false}>
            {SarpaDosha.map((category) => (
              <div key={category.id} className="sarpa-dosha-card-wrapper">
                <Card className="sarpa-dosha-card">
                  <div className="sarpa-dosha-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="sarpa-dosha-card-img"
                    />
                  </div>
                  <Card.Body className="sarpa-dosha-card-body">
              
                  <Link to="/objectsofpuja" style={{textDecoration:"none"}}>
                    <Card.Title className="sarpa-dosha-card-title">
                      {category.title}
                    </Card.Title>
                    </Link>
                    <Card.Text className="sarpa-dosha-card-price">
                      From &#8377; {category.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </div> */}
        <div className="sarpa-dosha-back-main">
          <Row>
            {SarpaDosha.map((category) => (
              <Col
                key={category.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <div className="sarpa-dosha-card-wrapper">
                  <Card className="sarpa-dosha-card">
                    <div className="sarpa-dosha-card-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={category.image}
                        alt={category.altText}
                        className="sarpa-dosha-card-img"
                      />
                    </div>
                    <Card.Body className="sarpa-dosha-card-body">
                      <Link
                        to="/objectsofpuja"
                        style={{ textDecoration: "none" }}
                      >
                        <Card.Title className="sarpa-dosha-card-title">
                          {category.title}
                        </Card.Title>
                      </Link>
                      <Card.Text className="sarpa-dosha-card-price">
                        From &#8377; {category.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Sarpa;
