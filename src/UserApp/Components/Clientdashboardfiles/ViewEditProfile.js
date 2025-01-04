import React from 'react';

function ViewEditProfile() {
  return (
    <div className="container mt-5">
      <h4 className="mb-4">View/Edit Profile</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter a new password" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default ViewEditProfile;
