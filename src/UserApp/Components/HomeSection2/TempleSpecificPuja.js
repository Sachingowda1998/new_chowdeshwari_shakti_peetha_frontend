import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../CSS/Hometwo/TempleSpecificPuja.css";
import "../../MobileCSS/Home2.css";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { speicificgodstemple } from "../../Datas/Data2";

function TempleSpecificPuja() {
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
      <section className="temple-specific-puja-main-section">
        <div className="puja-category-title">
          <h3 className="puja-category-heading" style={{ color: "#ff6600" }}>
            Temple Specific
          </h3>
          <img
            src="assetstwo/backgroundimages/titleunderline-removebg.png"
            alt="not found"
            width={230}
          />
        </div>

        {/* <div className="puja-category-back-main">
          <Carousel responsive={responsive} infinite={true} arrows={false} swipeable={false} draggable={false}>
            {speicificgodstemple.map((category) => (
              <div key={category.id} className="puja-category-card-wrapper">
                <Card className="puja-category-card">
                  <div className="puja-category-card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={category.imageSrc}
                      alt={category.altText}
                      className="puja-category-card-img"
                    />
                  </div>
                  <Card.Body className="puja-category-card-body">
                  <Link to="/objectsofpuja" style={{textDecoration:"none"}}>
                    <Card.Title className="puja-category-card-title">
                      {category.title}
                    </Card.Title>
                    </Link>
                    <Card.Text className="puja-category-card-price">
                      From &#8377; {category.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </div> */}
        <div className="puja-category-back-main">
          <Row>
            {speicificgodstemple.map((category) => (
              <Col
                key={category.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <div className="puja-category-card-wrapper">
                  <Card className="puja-category-card">
                    <div className="puja-category-card-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={category.imageSrc}
                        alt={category.altText}
                        className="puja-category-card-img"
                      />
                    </div>
                    <Card.Body className="puja-category-card-body">
                      <Link
                        to="/objectsofpuja"
                        style={{ textDecoration: "none" }}
                      >
                        <Card.Title className="puja-category-card-title">
                          {category.title}
                        </Card.Title>
                      </Link>
                      <Card.Text className="puja-category-card-price">
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

export default TempleSpecificPuja;
