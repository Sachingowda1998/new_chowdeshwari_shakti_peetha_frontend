import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WebsiteDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchWebsiteDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/website-details`);
        const data = await response.json();
        if (response.ok) {
          setDetails(data);
        } else {
          Swal.fire("Error", data.message || "Failed to fetch website details", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Server error", "error");
      }
    };

    fetchWebsiteDetails();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Website Details</h1>
      {details ? (
        <div>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Mobile Number:</strong> {details.mobileNumber}</p>
          <p><strong>Address:</strong> {details.address}</p>
        </div>
      ) : (
        <p>Loading website details...</p>
      )}
      <div className="mt-4">
        <Link to="/admin/addwebsitedetails" className="btn btn-primary mr-2">Add Details</Link>
        <Link to="/admin/editwebsitedetails" className="btn btn-secondary">Edit Details</Link>
      </div>
    </div>
  );
};

export default WebsiteDetails;
