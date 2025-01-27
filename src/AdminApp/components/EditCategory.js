import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", image: null });

  // Fetch existing category details
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setFormData({ name: data.name, image: null }) // Image not pre-filled
      )
      .catch((err) => Swal.fire("Error", err.message, "error"));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    if (formData.image) data.append("image", formData.image); // Add image only if updated

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}`, {
      method: "PUT",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Success", data.message, "success");
        navigate("/admin/categories");
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="container mt-5">
      <h2>Edit Category</h2>
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
            Image (optional)
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
