import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "../CSS/Devotees2.css";
import "../MobileCSS/Devotees2mobile.css"


const Devotees2 = () => {
  const contentArray = [
    {
      id: 1,
      title: "Maha Mrityunjay Puja",
      description:
        "Devotee of the temple, Indian. I performed the Maha Mrityunjay Puja with complete devotion, seeking blessings for my family’s health and prosperity.",
      location: "Indian",
    },
    {
      id: 2,
      title: "Maha Mrityunjay Puja",
      description:
        "Indian devotee of the temple. As a devotee, I performed this sacred ritual to invoke divine blessings for the well-being of my loved ones and the community.",
      location: "Indian",
    },
    {
      id: 3,
      title: "Maha Mrityunjay Puja",
      description:
        "Devotee of the temple. I performed the ritual with sincere prayers to protect my family from any harm and to bring peace and prosperity to our lives.",
      location: "Indian",
    },
    {
      id: 4,
      title: "Maha Mrityunjay Puja",
      description:
        "Indian devotee of the temple, seeking blessings. With a heart full of gratitude, I offered prayers for the health and success of my family, and for the peace of all beings.",
      location: "Indian",
    },
    {
      id: 5,
      title: "Maha Mrityunjay Puja",
      description:
        "A devotee of the temple, from India, offering prayers. I performed the puja with utmost faith, seeking the grace of Lord Shiva to remove obstacles and bring harmony into our lives.",
      location: "Indian",
    },
  ];

  return (
    <div className="devotee-container">
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        
      >
        {contentArray.map((item) => (
          <div key={item.id}>
            <div className="devotee-heading">{item.title}</div>
            <p className="devotee-paragraph">{item.description}</p>
            <div className="devotee-author">{item.location}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Devotees2;
