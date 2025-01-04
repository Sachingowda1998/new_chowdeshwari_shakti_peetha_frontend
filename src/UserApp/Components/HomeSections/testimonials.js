import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import "../../CSS/Home/testimonials.css"

const testimonials = [
  {
    name: "Devotee 1",
    location: "Haridwar",
    feedback: "This experience has truly been a blessing. Thank you for the guidance!",
  },
  {
    name: "Devotee 2",
    location: "Varanasi",
    feedback: "Amazing service and divine experience. Highly recommended to others!",
  },
  {
    name: "Devotee 3",
    location: "Rishikesh",
    feedback: "A serene and uplifting journey. I found peace and clarity here.",
  },
  {
    name: "Devotee 4",
    location: "Ayodhya",
    feedback: "The arrangements were wonderful, and the experience was unforgettable.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="sectionhome">
      <div className="modern-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          stopOnHover
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-slide" key={index}>
              <h3>{testimonial.name}</h3>
              <p>Location: {testimonial.location}</p>
              <p>"{testimonial.feedback}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
