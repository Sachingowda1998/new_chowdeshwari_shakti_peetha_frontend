import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddMainCarousel = () => {
  const [formData, setFormData] = useState({
    carouselText1: "",
    carouselText2: "",
    carouselText3: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/carousel`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.error) {
        Swal.fire("Error", data.error, "error");
      } else {
        Swal.fire("Success", data.message, "success");
        navigate("/admin/maincarousel")
      }
    } catch {
      Swal.fire("Error", "Failed to add carousel data", "error");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Add Carousel</h1>
      <form onSubmit={handleSubmit}>
        {["carouselText1", "carouselText2", "carouselText3"].map((field, idx) => (
          <div className="mb-3" key={idx}>
            <label className="form-label">{`Text ${idx + 1}`}</label>
            <input
              type="text"
              name={field}
              className="form-control"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {["image1", "image2", "image3"].map((field, idx) => (
          <div className="mb-3" key={idx}>
            <label className="form-label">{`Image ${idx + 1}`}</label>
            <input
              type="file"
              name={field}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Add Carousel
        </button>
      </form>
    </div>
  );
};

export default AddMainCarousel;
