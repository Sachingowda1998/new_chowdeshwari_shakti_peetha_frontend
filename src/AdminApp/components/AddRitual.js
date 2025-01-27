import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddRitual = () => {
  const [formData, setFormData] = useState({
    ritualName: '',
    category: '',
    subcategory: '',
    description: '',
    image: null,
    fromPrice: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('ritualName', formData.ritualName);
    form.append('category', formData.category);
    form.append('subcategory', formData.subcategory);
    form.append('description', formData.description);
    form.append('image', formData.image);
    form.append('fromPrice', formData.fromPrice);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rituals`, {
      method: 'POST',
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire('Success', 'Ritual added successfully!', 'success');
        navigate('/admin/rituals');
      })
      .catch((error) => Swal.fire('Error', 'Failed to add ritual', 'error'));
  };

  return (
    <div className="container mt-4">
      <h2>Add Ritual</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ritualName" className="form-label">Ritual Name</label>
          <input
            type="text"
            className="form-control"
            id="ritualName"
            name="ritualName"
            value={formData.ritualName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subcategory" className="form-label">Subcategory</label>
          <input
            type="text"
            className="form-control"
            id="subcategory"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fromPrice" className="form-label">From Price</label>
          <input
            type="number"
            className="form-control"
            id="fromPrice"
            name="fromPrice"
            value={formData.fromPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Ritual</button>
      </form>
    </div>
  );
};

export default AddRitual;
