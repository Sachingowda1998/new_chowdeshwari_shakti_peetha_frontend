import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Rituals = () => {
  const [rituals, setRituals] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rituals`)
      .then((response) => response.json())
      .then((data) => setRituals(data))
      .catch((error) => console.error('Error fetching rituals:', error));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete the ritual!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rituals/${id}`, { method: 'DELETE' })
          .then((response) => response.json())
          .then((data) => {
            setRituals(rituals.filter((ritual) => ritual._id !== id));
            Swal.fire('Deleted!', 'Ritual has been deleted.', 'success');
          })
          .catch((error) => Swal.fire('Error', 'Failed to delete ritual', 'error'));
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2>Rituals</h2>
      <Link to="/admin/addritual" className="btn btn-primary mb-3">Add Ritual</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ritual Name</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Description</th>
            <th>Images</th>
            <th>Options</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rituals.map((ritual) => (
            <tr key={ritual._id}>
              <td>{ritual.ritualName}</td>
              <td>{ritual.category}</td>
              <td>{ritual.subcategory}</td>
              <td>{ritual.description}</td>
              <td>
                {/* <button className="btn btn-info" onClick={() => alert('View Images')}>View Images</button> */}
                                <span
                                  className="text-primary cursor-pointer"
                                  onClick={() =>
                                    Swal.fire({
                                      title: ritual.ritualName,
                                      imageUrl: `/uploads/${ritual.image}`,
                                      imageAlt: ritual.ritualName,
                                    })
                                  }
                                >
                                  View Image
                                </span>
              </td>
              <td>
                <Link to={`/admin/ritual-options/${ritual._id}`} className="">View Options</Link>
              </td>
              <td>
                <Link to={`/admin/edit-ritual/${ritual._id}`} className="btn btn-warning">Edit</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(ritual._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rituals;
