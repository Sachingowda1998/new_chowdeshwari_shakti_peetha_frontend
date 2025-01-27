import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => Swal.fire("Error", err.message, "error"));
  }, []);

  // Delete category
  const deleteCategory = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", data.message, "success");
            setCategories(categories.filter((cat) => cat._id !== id));
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Categories</h2>
      <Link to="/admin/addcategory" className="btn btn-primary mb-3">
        Add Category
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Subcategories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.name}</td>
              <td>
                <span
                  className="text-primary cursor-pointer"
                  onClick={() =>
                    Swal.fire({
                      title: cat.name,
                      imageUrl: `/uploads/${cat.image}`,
                      imageAlt: cat.name,
                    })
                  }
                >
                  View Image
                </span>
              </td>
              <td>
                <Link to={`/admin/categories/${cat._id}/subcategories`}>
                  View All Subcategories
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate(`/admin/editcategory/${cat._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCategory(cat._id)}
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

export default Categories;
