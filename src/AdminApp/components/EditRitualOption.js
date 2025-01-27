import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditRitualOptionPage = () => {
  const { ritualId, optionId } = useParams();
  const [formData, setFormData] = useState({
    optionName: '',
    price: '',
    description: '',
  });
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/rituals/${ritualId}/options/${optionId}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching option:', error));
  }, [ritualId, optionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedOption = {
      optionName: formData.optionName,
      price: formData.price,
      description: formData.description,
    };

    fetch(`/api/rituals/${ritualId}/options/${optionId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedOption),
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire('Success', 'Option updated successfully!', 'success');
        history.push(`/ritual-options/${ritualId}`);
      })
      .catch((error) => Swal.fire('Error', 'Failed to update option', 'error'));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Ritual Option</h2>
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
        <button type="submit" className="btn btn-primary">Update Option</button>
      </form>
    </div>
  );
};

export default EditRitualOptionPage;
