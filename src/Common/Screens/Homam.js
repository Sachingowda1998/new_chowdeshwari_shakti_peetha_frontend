import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import "../CSS/Hometwo/Homam.css";
import React from "react";
import { homams } from "../Datas/Data2";
import { Link } from "react-router-dom";

function Homams() {
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
      <section className="homam-main-section">
        <div className="homam-title">
          <h3 className="homam-heading">All Homams</h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={150}
          />
        </div>

        {/* <div className="homam-back-main">
          <Carousel responsive={responsive} infinite={true}  arrows={false} swipeable={false} draggable={false}>
            {homams.map((category) => (
              <div key={category.id} className="homam-card-wrapper">
                <Card className="homam-card">
                  <div className="homam-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.altText}
                      className="homam-card-img"
                    />
                  </div>
                  <Card.Body className="homam-card-body">
               
                  <Link to="/objectsofpuja" style={{textDecoration:"none"}}>
                    <Card.Title className="homam-card-title">
                      {category.name}
                    </Card.Title>
                    </Link>
                    <Card.Text className="homam-card-price">
                      From &#8377; {category.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </div> */}

        <div className="homam-back-main">
          <Row>
            {homams.map((category) => (
              <Col
                key={category.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <div className="homam-card-wrapper">
                  <Card className="homam-card">
                    <div className="homam-card-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={category.image}
                        alt={category.altText}
                        className="homam-card-img"
                      />
                    </div>
                    <Card.Body className="homam-card-body">
                      <Link
                        to="/objectsofpuja"
                        style={{ textDecoration: "none" }}
                      >
                        <Card.Title className="homam-card-title">
                          {category.name}
                        </Card.Title>
                      </Link>
                      <Card.Text className="homam-card-price">
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

export default Homams;
