import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RitualOptionsPage = () => {
  const { ritualId } = useParams();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rituals/${ritualId}/options`)
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error('Error fetching options:', error));
  }, [ritualId]);

  const handleDelete = (optionId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete the option!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rituals/${ritualId}/options/${optionId}`, { method: 'DELETE' })
          .then((response) => response.json())
          .then(() => {
            setOptions(options.filter((option) => option._id !== optionId));
            Swal.fire('Deleted!', 'Option has been deleted.', 'success');
          })
          .catch((error) => Swal.fire('Error', 'Failed to delete option', 'error'));
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2>Ritual Options</h2>
      <Link to={`/add-option/${ritualId}`} className="btn btn-primary mb-3">Add Option</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Option Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option._id}>
              <td>{option.optionName}</td>
              <td>{option.price}</td>
              <td>{option.description}</td>
              <td>
                <Link to={`/edit-option/${ritualId}/${option._id}`} className="btn btn-warning">Edit</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(option._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RitualOptionsPage;
