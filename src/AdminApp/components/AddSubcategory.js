import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddSubcategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subcategoryName, setSubcategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}/subcategories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: subcategoryName }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Success", data.message, "success");
        navigate(`/admin/categories/${id}/subcategories`);
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="container mt-5">
      <h2>Add Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Subcategory Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={subcategoryName}
            onChange={(e) => setSubcategoryName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Subcategory
        </button>
      </form>
    </div>
  );
};

export default AddSubcategory;
