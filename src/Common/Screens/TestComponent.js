import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Button } from 'react-bootstrap';

const upcomingEvents = [
  {
    id: 1,
    title: "Upcoming Event",
    subtitle: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    dateTime: {
      friday: "23:39 IST",
      saturday: "11:20 ISD"
    },
    location: "No 233 Main St. New York, United States",
    imageSrc: "assetstwo/profile/buddha.jpg"
  },
  {
    id: 2,
    title: "Upcoming Event",
    subtitle: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    dateTime: {
      friday: "20:15 IST",
      saturday: "09:45 ISD"
    },
    location: "No 123 Elm St. Chicago, United States",
    imageSrc: "assetstwo/profile/buddha.jpg"
  },
  {
    id: 3,
    title: "Upcoming Event",
    subtitle: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    dateTime: {
      friday: "19:00 IST",
      saturday: "08:30 ISD"
    },
    location: "No 456 Oak St. Los Angeles, United States",
    imageSrc: "assetstwo/profile/buddha.jpg"
  },
  {
    id: 4,
    title: "Upcoming Event",
    subtitle: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    dateTime: {
      friday: "18:45 IST",
      saturday: "07:00 ISD"
    },
    location: "No 789 Pine St. San Francisco, United States",
    imageSrc: "assetstwo/profile/buddha.jpg"
  },
  {
    id: 5,
    title: "Upcoming Event",
    subtitle: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    dateTime: {
      friday: "21:30 IST",
      saturday: "10:15 ISD"
    },
    location: "No 101 Maple St. Boston, United States",
    imageSrc: "assetstwo/profile/buddha.jpg"
  }
];

const TestComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="assetstwo/backgroundimages/subscribe2.jpeg"
        alt="not found"
        width="100%"
        height="600px"
        className="test-image-class"
        style={{ objectFit: 'cover', position: 'relative' }}
      />
      <div
        className="test-child-class"
        style={{
          position: 'absolute',
         
        }}
      >
        <Carousel
         autoPlay={true}          // Enable auto scrolling
          interval={2000}          // Set the time interval (in milliseconds) between slides
          infiniteLoop={true}      // Makes the carousel loop infinitely
          showThumbs={false}       // Hides the thumbnails
          showStatus={false} 
        >
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <div className="test-inner-body">
                <div>
                  <p className="display-4 text-primary">{event.title}</p>
                  <p className="lead text-muted">{event.subtitle}</p>
                  <p className="text-muted">{event.description}</p>
                  <p className="font-weight-bold">
                    Friday {event.dateTime.friday} Saturday {event.dateTime.saturday}
                  </p>
                  <p className="font-weight-bold text-muted">{event.location}</p>
                  <Button variant="primary" size="lg" className="mt-1">
                    Visit Now!
                  </Button>
                </div>
                <div style={{ height: "100%", padding: "0px" }}>
                  <img
                    src={event.imageSrc}
                    alt="not found"
                    style={{
                      objectFit: "cover",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    className="test-inner-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestComponent;
