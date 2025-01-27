import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [formData, setFormData] = useState({ name: "", image: null });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("image", formData.image);

    fetch("http://localhost:5000/api/categories", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {Swal.fire("Success", data.message, "success")
        navigate("/admin/categories");
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="container mt-5">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            required
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
