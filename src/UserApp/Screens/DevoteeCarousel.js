import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../CSS/DevoteeCarousel.css"

const devoteeSections = [
  {
    id: 1,
    left: {
      name: "Devotee 1",
      location: "Haridwar",
      message: "This experience has truly been a blessing. Thank you for the guidance!",
    },
    right: {
      name: "Devotee 2",
      location: "Varanasi",
      message: "Amazing service and divine experience. Highly recommended to others!",
    },
  },
  {
    id: 2,
    left: {
      name: "Devotee 3",
      location: "Rishikesh",
      message: "An unforgettable spiritual journey. Absolutely peaceful!",
    },
    right: {
      name: "Devotee 4",
      location: "Prayagraj",
      message: "A divine and enriching experience. Loved it!",
    },
  },
  {
    id: 3,
    left: {
      name: "Devotee 4",
      location: "Rishikesh",
      message: "An unforgettable spiritual journey. Absolutely peaceful!",
    },
    right: {
      name: "Devotee 5",
      location: "Prayagraj",
      message: "A divine and enriching experience. Loved it!",
    },
  },
 
];

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DevoteeCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}  showDots={true}>
      {devoteeSections.map((section) => (
        <div key={section.id} className="sectionhome">
          <div className="modern-container">
            <div className="left-content">
              <h3>{section.left.name}</h3>
              <p>Location: {section.left.location}</p>
              <p>"{section.left.message}"</p>
            </div>
            <div className="right-content">
              <h3>{section.right.name}</h3>
              <p>Location: {section.right.location}</p>
              <p>"{section.right.message}"</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DevoteeCarousel;
