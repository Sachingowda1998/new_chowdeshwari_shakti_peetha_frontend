import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Holder from "holderjs";
import "../../CSS/Home/Section1.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Method1() {
  useEffect(() => {
    // Initialize Holder.js to render placeholder images
    Holder.run();
  }, []);

  return (
    <div className="section1-cards-container">
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3} className="home-ourcategory-col">
          <Card className="card-style">
            <div
              className="card-image"
              style={{
                backgroundImage: `url('assets/Carosuel/saraswati.jpg')`,
              }}
            >
              {/* <LazyLoadImage
                alt="saraswati"
                effect="blur"
                src="assets/Carosuel/saraswati.jpg"
                height="100%"
                width="100%"
              /> */}
              <img
    src="assets/Carosuel/saraswati.jpg"
    alt="saraswati"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}></img>
            </div>
            <Card.Body>
              <Card.Title className="card-title">saraswati</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="card-style">
            <div
              className="card-image"
              // style={{ backgroundImage: `url('assets/Carosuel/hanuman.jpg')` }}
            >
              {/* <LazyLoadImage
                alt="saraswati"
                effect="blur"
                src="assets/Carosuel/hanuman.jpg"
                height="100%"
                width="100%"
              /> */}
              <img
    src="assets/Carosuel/hanuman.jpg"
    alt="hanuman"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}></img>
            </div>
            <Card.Body>
              <Card.Title className="card-title">hanuman</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="card-style">
            <div
              className="card-image"
              style={{ backgroundImage: `url('holder.js/100px180')` }}
            />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="card-style">
            <div
              className="card-image"
              style={{ backgroundImage: `url('holder.js/100px180')` }}
            />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Method1;
