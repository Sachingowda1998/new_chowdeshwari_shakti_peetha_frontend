import React from 'react'
import { Link } from "react-router-dom";

import '../../CSS/Hometwo/pujacategories.css'

function pujacategories() {
  return (
    <div>
         <section className="home-section2">
          <div
            className="franco-heading title-heading-2  	 text-center	 	 	  vc_custom_1556642789413		"
            data-animation-delay="500"
            data-animation=""
          >
            <h3 style={{ color: "#ff6600" }}>Puja Categories </h3>
            <p></p>
          </div>
          <div class="vc_empty_space" style={{ height: "32px" }}>
            <span class="vc_empty_space_inner"></span>
          </div>

          <div className="container my-5">
            <div className="row">
              {/* Column 1 */}
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
                    <Link className="text-decoration-none">
                      TEMPLE SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

              {/* Column 2 */}
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
                    <Link className="text-decoration-none">
                      GOD SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

              {/* Column 3 */}
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
                    <Link
                      href="https://www.pujaabhishekam.com/puja-category/festival-specific-puja/"
                      className="text-decoration-none"
                    >
                      FESTIVAL SPECIFIC PUJA
                    </Link>
                  </p>
                </div>
              </div>

              {/* Column 4 */}
              <div className="col-sm-2">
                <div className="text-center">
                  <Link
                    href="https://www.pujaabhishekam.com/puja-category/spiritual-yatra/"
                    target="_self"
                    className="d-block"
                  >
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10113312/SPIRITUAL-YATRA.jpg"
                      alt="SPIRITUAL YATRA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link
                      href="https://www.pujaabhishekam.com/puja-category/spiritual-yatra/"
                      className="text-decoration-none"
                    >
                      SPIRITUAL YATRA
                    </Link>
                  </p>
                </div>
              </div>

              {/* Column 5 */}
              <div className="col-sm-2">
                <div className="text-center">
                  <Link
                    href="https://www.pujaabhishekam.com/puja-category/dosh-nivaran-puja/"
                    target="_self"
                    className="d-block"
                  >
                    <img
                      src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2021/09/10113144/DOSH-NIVARAN-PUJA.jpg"
                      alt="DOSH NIVARAN PUJA"
                      className="img-fluid mb-2"
                      style={{ width: "215px", height: "280px" }}
                    />
                  </Link>
                  <p>
                    <Link
                      href="https://www.pujaabhishekam.com/puja-category/dosh-nivaran-puja/"
                      className="text-decoration-none"
                    >
                      DOSH NIVARAN PUJA
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </section>
    </div>
  )
}

export default pujacategories