import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Subcategories = () => {
  const [subcategories, setSubcategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch subcategories
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}/subcategories`)
      .then((res) => res.json())
      .then((data) => setSubcategories(data))
      .catch((err) => Swal.fire("Error", err.message, "error"));
  }, [id]);

  // Delete subcategory
  const deleteSubcategory = (subId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}/subcategories/${subId}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", data.message, "success");
            setSubcategories(subcategories.filter((sub) => sub._id !== subId));
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Subcategories</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate(`/admin/categories/${id}/add-subcategory`)}
      >
        Add Subcategory
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((sub) => (
            <tr key={sub._id}>
              <td>{sub.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSubcategory(sub._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subcategories;
