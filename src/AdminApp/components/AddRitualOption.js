import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddRitualOptionPage = () => {
  const { ritualId } = useParams();
  const [formData, setFormData] = useState({
    optionName: '',
    price: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOption = {
      optionName: formData.optionName,
      price: formData.price,
      description: formData.description,
    };

    fetch(`/api/rituals/${ritualId}/options`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOption),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire('Success', 'Option added successfully!', 'success');
        navigate(`admin/ritual-options/${ritualId}`); 
      })
      .catch((error) => Swal.fire('Error', 'Failed to add option', 'error'));
  };

  return (
    <div className="container mt-4">
      <h2>Add Ritual Option</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="optionName" className="form-label">Option Name</label>
          <input
            type="text"
            className="form-control"
            id="optionName"
            name="optionName"
            value={formData.optionName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
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
        <button type="submit" className="btn btn-primary">Add Option</button>
      </form>
    </div>
  );
};

export default AddRitualOptionPage;
