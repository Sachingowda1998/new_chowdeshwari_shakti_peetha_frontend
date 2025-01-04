import React from "react";
import Masonry from "react-masonry-css";


const Devotees = () => {
  const devotees = [
    { id: 1, name: "Arun Sharma", location: "Delhi, India", message: "Blessings to all." },
    { id: 2, name: "Priya Mehta", location: "Mumbai, India", message: "May peace prevail." },
    { id: 3, name: "John Doe", location: "New York, USA", message: "Sharing positivity and love." },
    { id: 4, name: "Fatima Khan", location: "Lahore, Pakistan", message: "Grateful for the divine." },
    { id: 5, name: "Hiroshi Tanaka", location: "Tokyo, Japan", message: "Peace and harmony for all." },
  
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="devotees-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {devotees.map((devotee) => (
          <div key={devotee.id} className="devotee-card">
            <h3>{devotee.name}</h3>
            <p><strong>Location:</strong> {devotee.location}</p>
            <p>{devotee.message}</p>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Devotees;