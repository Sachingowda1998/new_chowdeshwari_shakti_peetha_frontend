import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MainCarousel = () => {
  const [carouselData, setCarouselData] = useState(null);
  const navigate = useNavigate();

  // Fetch carousel data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/carousel`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Swal.fire("Error", data.error, "error");
        } else {
          setCarouselData(data);
        }
      })
      .catch(() => Swal.fire("Error", "Failed to fetch data", "error"));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carousel Data</h1>
      <div className="d-flex justify-content-between my-3">
        <button
          className="btn btn-success"
          onClick={() => navigate("/admin/addmaincarousel")}
        >
          Add Carousel
        </button>
        <button
          className="btn btn-warning"
          onClick={() => navigate("/admin/editmaincarousel")}
        >
          Edit Carousel
        </button>
      </div>

      {carouselData ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Carousel Details</h5>
            <p>Text 1: {carouselData.carouselText1}</p>
            <p>Text 2: {carouselData.carouselText2}</p>
            <p>Text 3: {carouselData.carouselText3}</p>
            <div className="d-flex">
              {["image1", "image2", "image3"].map((key, idx) => (
                <img
                  key={idx}
                  src={`${process.env.REACT_APP_BACKEND_URL}/${carouselData[key]}`}
                  alt={`Carousel ${idx + 1}`}
                  className="img-thumbnail me-2"
                  style={{ width: "150px", height: "100px" }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading carousel data...</p>
      )}
    </div>
  );
};

export default MainCarousel;
