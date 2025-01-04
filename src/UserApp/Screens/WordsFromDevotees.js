import React from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/WordsFromDevotees.css";

import { devotees } from '../Data/data'


const WordsFromDevotees = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate("/all-devotees");
  };

  return (
    <div className="devotees-section">
    <h2 className="section-title">Words from Our Devotees</h2>
    <div className="devotees-container">
      {devotees.map((devotee, index) => (
        <div className="devotee-card" key={index}>
          <h3 className="devotee-title">{devotee.title}</h3>
          <p className="devotee-name">- {devotee.name}</p>
          <p className="devotee-location">{devotee.location}</p>
          <p className="devotee-message">"{devotee.message}"</p>
        </div>
      ))}
    </div>
    <button className="more-button" onClick={handleMoreClick}>
      View All
    </button>
  </div>
  )
};

export default WordsFromDevotees;

