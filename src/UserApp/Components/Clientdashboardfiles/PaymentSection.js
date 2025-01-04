import React from "react";

function PaymentSection() {
  // Sample data for payments
  const payments = [
    {
      id: 1,
      poojaName: "Ganesh Pooja",
      price: "₹2500",
      dateOfPayment: "2024-12-10",
    },
    {
      id: 2,
      poojaName: "Lakshmi Pooja",
      price: "₹3000",
      dateOfPayment: "2024-12-12",
    },
    {
      id: 3,
      poojaName: "Navgraha Pooja",
      price: "₹4500",
      dateOfPayment: "2024-12-13",
    },
  ];

  return (
    <div className="container mt-3">
      <h4 className="mb-3">Payment Section</h4>
      <p>Below are the details of payments made for booked poojas:</p>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Pooja Name</th>
              <th>Price</th>
              <th>Date of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.poojaName}</td>
                <td>{payment.price}</td>
                <td>{payment.dateOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentSection;
