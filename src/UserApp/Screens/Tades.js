import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Tades.css";
import React from "react";
import { tades } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Tades() {
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
      <section className="tades-main-section">
        <div className="tades-title">
          <h3 className="tades-heading" style={{ color: "#ff6600" }}>
            All Tades
          </h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={180}
          />
        </div>

        {/* <div className="tades-back-main">
          <Carousel responsive={responsive} infinite={true} arrows={false} swipeable={false} draggable={false}>
            {tades.map((category) => (
              <div key={category.id} className="tades-card-wrapper">
                <Card className="tades-card">
                  <div className="tades-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="tades-card-img"
                    />
                  </div>
                  <Card.Body className="tades-card-body">
            
                    <Link
                      to="/objectsofpuja"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Title className="tades-card-title">
                        {category.title}
                      </Card.Title>
                    </Link>
                    <Card.Text className="tades-card-price">
                      From &#8377; {category.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </div> */}

        <div className="tades-back-main">
          <Row>
            {tades.map((category) => (
              <Col
                key={category.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <div className="tades-card-wrapper">
                  <Card className="tades-card">
                    <div className="tades-card-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={category.image}
                        alt={category.altText}
                        className="tades-card-img"
                      />
                    </div>
                    <Card.Body className="tades-card-body">
                      <Link
                        to="/objectsofpuja"
                        style={{ textDecoration: "none" }}
                      >
                        <Card.Title className="tades-card-title">
                          {category.title}
                        </Card.Title>
                      </Link>
                      <Card.Text className="tades-card-price">
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

export default Tades;
