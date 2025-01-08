import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../CSS/Carousel/Carousel.css";
import { carouselData } from "../../Data/data";
import { useNavigate } from "react-router-dom";

// const carouselData = [
//   {
//     backgroundImage: "assets/subsciption/Festival.png",
//     title: "Puja - The Divine Connection",
//     description:
//       "Engaging in Puja is a way of connecting with the divine, offering prayers and gratitude for the blessings received.",
//     buttonText: "Talk to astrology",
//   },
//   {
//     backgroundImage: "assets/Carosuel/LordKrishna.jpg",
//     title: "Lord Krishna's Blessings",
//     description:
//       "May the blessings of Lord Krishna guide you toward peace and prosperity. Embrace the divine wisdom and love.",
//     buttonText: "Book",
//   },
//   {
//     backgroundImage: "assets/subsciption/Housewarming.png",
//     title: "Goddess Lakshmi - Goddess of Wealth",
//     description:
//       "Worship Goddess Lakshmi to seek her blessings for abundance, wealth, and happiness in your life.",
//     buttonText: "Subscribe",
//   },
//   {
//     backgroundImage: "assets/Carosuel/Shiva3.jpg",
//     title: "Lord Shiva - The Supreme Lord",
//     description:
//       "Lord Shiva represents the destruction of evil and the creation of good. Invoke his name for spiritual growth and tranquility.",
//     buttonText: "Buy now",
//   },
// ];

const MyCarousel = () => {
  const buttonTypeMap = {
    Book: "/objectsofpuja",
    "Talk to astrology": "/talktoastroguru",
    Subscribe: "/subscribe",
    "Buy now": "/idolsobjectsloop",
  };

  const navigate = useNavigate();
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={2000}
      transitionTime={500}
      useKeyboardArrows
      emulateTouch
      className="Carouselclassname"
    >
      {carouselData.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url('${item.backgroundImage}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
          <div className="carousel-caption">
            <h1 className="carousel-caption-title text-white">{item.title}</h1>

            <button
              className="carousel-btn btn text-white"
              onClick={() => navigate(buttonTypeMap[item.buttonText])}
            >
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

// with out map
// const MyCarousel = () => {
//   return (
//     <Carousel
//       showThumbs={false}
//       showStatus={false}
//       infiniteLoop
//       autoPlay
//       interval={2000}
//       transitionTime={500}
//       useKeyboardArrows
//       emulateTouch
//       className="Carouselclassname"
//     >
//       <div
//         style={{
//           backgroundImage: `url('assets/subsciption/Festival.png')`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "400px",
//         }}
//       >
//         <div className="carousel-caption">
//           <h3 style={{ color: "white" }}>Puja - The Divine Connection</h3>
//           <p style={{ color: "white" }}>
//             Engaging in Puja is a way of connecting with the divine, offering
//             prayers and gratitude for the blessings received.
//           </p>
//           <button className="carousel-btn" >
//             Talk to astrology
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundImage: `url('assets/Carosuel/LordKrishna.jpg')`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "400px",
//         }}
//       >
//         <div className="carousel-caption">
//           <h3 style={{ color: "white" }}>Lord Krishna's Blessings</h3>
//           <p style={{ color: "white" }}>
//             May the blessings of Lord Krishna guide you toward peace and
//             prosperity. Embrace the divine wisdom and love.
//           </p>
//           <button className="carousel-btn" >
//             Book
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundImage: `url('assets/subsciption/Housewarming.png')`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "400px",
//         }}
//       >
//         <div className="carousel-caption">
//           <h3 style={{ color: "white" }}>
//             Goddess Lakshmi - Goddess of Wealth
//           </h3>
//           <p style={{ color: "white" }}>
//             Worship Goddess Lakshmi to seek her blessings for abundance, wealth,
//             and happiness in your life.
//           </p>
//           <button className="carousel-btn" >
//             Subscribe
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundImage: `url('assets/Carosuel/Shiva3.jpg')`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           height: "400px",
//         }}
//       >
//         <div className="carousel-caption">
//           <h3 style={{ color: "white" }}>Lord Shiva - The Supreme Lord</h3>
//           <p style={{ color: "white" }}>
//             Lord Shiva represents the destruction of evil and the creation of
//             good. Invoke his name for spiritual growth and tranquility.
//           </p>
//           <button className="carousel-btn" >
//             Buy now
//           </button>
//         </div>
//       </div>
//     </Carousel>
//   );
// };

export default MyCarousel;
