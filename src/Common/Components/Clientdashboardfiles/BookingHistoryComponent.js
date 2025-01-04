import React from 'react';

function BookingHistoryComponent() {
  return (
    <div>
      <h4 className="mt-3">Booking History</h4>
      <p>View all your past bookings, including details of the pooja and payment status.</p>
      <ul>
        <li>Pooja 1 - Completed</li>
        <li>Pooja 2 - Pending</li>
        <li>Pooja 3 - Cancelled</li>
      </ul>
    </div>
  );
}

export default BookingHistoryComponent;