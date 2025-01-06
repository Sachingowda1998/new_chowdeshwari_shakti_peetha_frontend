import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdStar } from "react-icons/io";
import "../MobileCSS/Footermobile.css";
import "../CSS/Footer2.css";
import axios from "axios";

const Footer2 = () => {
  const [contacts, setContacts] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchContactsAndSocialMedia = async () => {
  //     try {
  //       const [contactsResponse, socialMediaResponse] = await Promise.all([
  //         axios.get("http://localhost:8000/api/contacts"),
  //         // axios.get("http://localhost:8000/api/social-media"),
  //       ]);

  //       setContacts(contactsResponse.data);
  //       // setSocialMediaLinks(socialMediaResponse.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Error fetching data. Please try again later.");
  //       console.log(err, "footer");
  //       setLoading(false);
  //     }
  //   };

  //   fetchContactsAndSocialMedia();
  // }, []);
  // if (loading) return <p>Loading data...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <footer
      className="text-light pt-5 pb-1"
      style={{
        backgroundImage: `url('assetstwo/backgroundimages/footerback.jpeg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blur effect overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(4px)", // Applies blur effect
          zIndex: 1, // Above image and below content
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <div style={{ height: "50px" }}></div> {/* Blank space for logo */}
            <p className="mt-3 text-white" style={{ textAlign: "justify" }}>
              We are the disciples who are studying and exploring all these
              Astrology Shastras for centuries with a professional course of
              Jyotisham for 10 years in Mahavidyalay and with 20+ years of
              practice in Astrology.
            </p>
            {/* <div className="mt-4">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-start">
                <a
                  href={socialMediaLinks.facebookLink}
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href={socialMediaLinks.instagramLink}
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={socialMediaLinks.youtubeLink}
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href={socialMediaLinks.twitterLink}
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div> */}
            <div className="mt-4">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-start">
                <a
                  href="/"
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="/"
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="/"
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="/"
                  className="text-light me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 mb-md-0 ourservices">
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <IoMdStar className="footer-star-icon" />
                Talk To Astrologer
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                AB Free Services
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                AB Birth Chart
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                AB Pooja
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 mb-md-0 quicklinks">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <IoMdStar className="footer-star-icon" />
                Astro guru
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                All Pujas
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                Subscribe
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                Gallery
              </li>
              <li>
                <IoMdStar className="footer-star-icon" />
                Shops
              </li>
            </ul>
          </div>

          {/* {contacts.map((contact) => ( */}
            <div className="col-md-3 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <address>
              <strong> Chowdeshwari Shakti Peetha Services </strong>
              <br />
              Chowdeshwari Layout
              <br />
              Bengaluru
              <br />
              <a className="text-light">
                chowdeshwari@gmail.com
              </a>
              <br />
              9876543210
            </address>
          </div>
          {/* ))} */}
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer2;

// <footer
//   className="bg-dark text-light py-5 "
//   style={{
//     backgroundImage: `url('assetstwo/backgroundimages/footerback.jpeg')`,
//     filter: "blur(5px)",
//     backgroundSize: "100% 100%",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >

//   <div className="container">
//     <div className="row">
//       <div className="col-md-3 mb-4 mb-md-0">
//         <div style={{ height: "50px" }}></div> {/* Blank space for logo */}
//         <p className="mt-3 text-white" style={{ textAlign: "justify" }}>
//           We are the disciples who are studying and exploring all these
//           Astrology Shastras for centuries with a professional course of
//           Jyotisham for 10 years in Mahavidyalay and with 20+ years of
//           practice in Astrology.
//         </p>
//         <div className="mt-4">
//           <h5>Follow Us</h5>
//           <div className="d-flex justify-content-start">
//             <a href="/" className="text-light me-3">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="/" className="text-light me-3">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="/" className="text-light me-3">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="/" className="text-light me-3">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="/" className="text-light me-3">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-3 mb-4 mb-md-0 ourservices">
//         <h5 className="mb-3">Our Services</h5>
//         <ul className="list-unstyled">
//           <li>
//             <IoMdStar />
//             Talk To Astrologer
//           </li>
//           <li>
//             <IoMdStar />
//             AB Free Services
//           </li>
//           <li>
//             <IoMdStar />
//             AB Birth Chart
//           </li>
//           <li>
//             <IoMdStar />
//             AB Pooja
//           </li>
//         </ul>
//       </div>

//       <div className="col-md-3 mb-4 mb-md-0 quicklinks">
//         <h5 className="mb-3">Quick Links</h5>
//         <ul className="list-unstyled">
//           <li>Astro guru</li>
//           <li>All Pujas</li>
//           <li>Subscribe</li>
//           <li>Gallery</li>
//           <li>Shops</li>
//         </ul>
//       </div>

//       {/* <div className="col-md-2 mb-4 mb-md-0">
//         <h5 className="mb-3">Privacy Policy</h5>
//         <ul className="list-unstyled">
//           <li>Terms and Conditions</li>
//           <li>Refund and Cancellations</li>
//           <li>Privacy Policy</li>
//           <li>Disclaimer</li>
//         </ul>
//       </div> */}

//       <div className="col-md-3 mb-4 mb-md-0">
//         <h5 className="mb-3">Contact Us</h5>
//         <address>
//           <strong>UMABHARATI JYOTISHAM LLP</strong>
//           <br />
//           Sirsi, Uttara Kannada,
//           <br />
//           Karnataka, 581402, India
//           <br />
//           <a href="/" className="text-light">
//             gmail@gmail.com
//           </a>
//           <br />
//           +91 9513 599 699
//         </address>
//       </div>
//     </div>
//   </div>
//   <p className="footer-copyright">
//     &copy; {currentYear} YourWebsiteName. All rights reserved.
//   </p>
// </footer>
