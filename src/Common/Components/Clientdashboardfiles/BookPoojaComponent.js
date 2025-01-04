import React from "react";

function BookingPoojas() {
  // Sample data for booked poojas
  const bookedPoojas = [
    {
      id: 1,
      name: "Rahul Sharma",
      poojaName: "Ganesh Pooja",
      date: "2024-12-15",
      price: "₹2500",
    },
    {
      id: 2,
      name: "Anita Roy",
      poojaName: "Lakshmi Pooja",
      date: "2024-12-20",
      price: "₹3000",
    },
    {
      id: 3,
      name: "Ramesh Gupta",
      poojaName: "Navgraha Pooja",
      date: "2024-12-22",
      price: "₹4500",
    },
  ];

  return (
    <div className="container mt-3">
      <h4 className="mb-3">Booking History</h4>
      {/* <p>
        Select a pooja from the available options and schedule it for your
        preferred date and time.
      </p> */}
      {/* <button className="btn btn-success mb-4">Book Now</button> */}

      <h5>Booked Poojas</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Pooja Name</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookedPoojas.map((pooja) => (
              <tr key={pooja.id}>
                <td>{pooja.id}</td>
                <td>{pooja.name}</td>
                <td>{pooja.poojaName}</td>
                <td>{pooja.date}</td>
                <td>{pooja.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingPoojas;
