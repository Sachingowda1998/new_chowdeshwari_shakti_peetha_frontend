import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { homams } from "../../Datas/Data2";

import React from "react";
import "../../CSS/Hometwo/Homamstwo.css";

function HomeSection2OfHomams() {
  return (
    <div>
      {/* homams */}
      <section className="home-section2">
        <div
          className="franco-heading title-heading-2  	 text-center	 	 	  vc_custom_1556642789413		"
          data-animation-delay="500"
          data-animation=""
        >
          <h3 style={{ color: "#ff6600" }}>TEMPLE SPECIFIC PUJA </h3>
          <p></p>
        </div>
        <div class="vc_empty_space" style={{ height: "32px" }}>
          <span class="vc_empty_space_inner"></span>
        </div>

        <div className="container my-5">
          {/* <div className="row">
         
              <div className="col-sm-2">
                <div className="text-center">
                  <Link target="_self" className="d-block">
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112322/TEMPLE-SPECIFIC-PUJA.jpg"
                      alt="TEMPLE SPECIFIC PUJA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link className="text-decoration-none text-dark">
                      TEMPLE SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

          
              <div className="col-sm-2">
                <div className="text-center">
                  <Link target="_self" className="d-block">
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112349/GOD-SPECIFIC-PUJA.jpg"
                      alt="GOD SPECIFIC PUJA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link className="text-decoration-none text-dark">
                      GOD SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

        
              <div className="col-sm-2">
                <div className="text-center">
                  <Link target="_self" className="d-block">
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112148/FESTIVAL-SPECIFIC-PUJA.jpg"
                      alt="FESTIVAL SPECIFIC PUJA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link className="text-decoration-none text-dark">
                      FESTIVAL SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

           
              <div className="col-sm-2">
                <div className="text-center">
                  <Link target="_self" className="d-block">
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10113312/SPIRITUAL-YATRA.jpg"
                      alt="SPIRITUAL YATRA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link className="text-decoration-none text-dark">
                      SPIRITUAL YATRA
                    </Link>
                  </p>
                </div>
              </div>

             
            </div> */}
          <Row className="custom-row">
            <Col xs={12} sm={6} md={3}>
              {/* Content for the first column */}
              <div className="text-center">
                <Link target="_self" className="d-block">
                  <img
                    src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112322/TEMPLE-SPECIFIC-PUJA.jpg"
                    alt="TEMPLE SPECIFIC PUJA"
                    className="img-fluid mb-2"
                    style={{ width: "215px", height: "280px" }}
                  />
                </Link>
                <p className="captions-title">
                  <Link className="text-decoration-none text-dark">
                    TEMPLE SPECIFIC PUJA
                  </Link>
                </p>
                <p className="captions-price">From &#8377; 2000</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              {/* Content for the second column */}
              <div className="text-center">
                <Link target="_self" className="d-block">
                  <img
                    src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112322/TEMPLE-SPECIFIC-PUJA.jpg"
                    alt="TEMPLE SPECIFIC PUJA"
                    className="img-fluid mb-2"
                    style={{ width: "215px", height: "280px" }}
                  />
                </Link>
                <p className="captions-title">
                  <Link className="text-decoration-none text-dark">
                    TEMPLE SPECIFIC PUJA
                  </Link>
                </p>
                <p className="captions-price">From &#8377; 2000</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              {/* Content for the third column */}
              <div className="text-center">
                <Link target="_self" className="d-block">
                  <img
                    src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112322/TEMPLE-SPECIFIC-PUJA.jpg"
                    alt="TEMPLE SPECIFIC PUJA"
                    className="img-fluid mb-2"
                    style={{ width: "215px", height: "280px" }}
                  />
                </Link>
                <p className="captions-title">
                  <Link className="text-decoration-none text-dark">
                    TEMPLE SPECIFIC PUJA
                  </Link>
                </p>
                <p className="captions-price">From &#8377; 2000</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="text-center">
                <Link target="_self" className="d-block">
                  <img
                    src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10112322/TEMPLE-SPECIFIC-PUJA.jpg"
                    alt="TEMPLE SPECIFIC PUJA"
                    className="img-fluid mb-2"
                    style={{ width: "215px", height: "280px" }}
                  />
                </Link>
                <div className="card-captions">
                  <p className="captions-title">
                    <Link className="text-decoration-none text-dark ">
                      TEMPLE SPECIFIC PUJA
                    </Link>
                  </p>
                  <p className="captions-price">From &#8377; 2000</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default HomeSection2OfHomams;
