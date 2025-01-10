import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddWebsiteDetailsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/website-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire("Success", "Website details added successfully", "success");
      navigate("/admin/websitedetails"); // Redirect to the homepage
    } else {
      Swal.fire("Error", data.error || "Failed to add details", "error");
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Add Website Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Alternate Mobile Number</label>
          <input
            type="text"
            className="form-control"
            name="alternateMobileNumber"
            value={formData.alternateMobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Details</button>
      </form>
    </div>
  );
};

export default AddWebsiteDetailsPage;
