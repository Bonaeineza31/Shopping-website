import React from 'react';
import './dashboard-styles/customerlist.css';

const CustomerList = () => {
  // Sample customer data - replace with your actual data source
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      joinDate: '2024-02-14',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 987-6543',
      joinDate: '2024-02-13',
      status: 'Active'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '(555) 987-6543',
        joinDate: '2024-02-13',
        status: 'Active'
      },
      {
        id: 3,
        name: 'Furaha',
        email: 'furaha@example.com',
        phone: '(555) 987-6543',
        joinDate: '2024-02-13',
        status: 'Active'
      },
      {
        id: 4,
        name: 'Ineza',
        email: 'ineza@example.com',
        phone: '(555) 987-6543',
        joinDate: '2024-02-13',
        status: 'Active'
      },
      {
        id: 5,
        name: 'Isaac',
        email: 'isaac@example.com',
        phone: '(555) 987-6543',
        joinDate: '2024-02-13',
        status: 'Active'
      },
      {
        id: 6,
        name: 'bella',
        email: 'bella@example.com',
        phone: '(555) 987-6543',
        joinDate: '2024-02-13',
        status: 'Not active'
      },
    // Add more customer data as needed
  ];

  return (
    <div className="customer-list-container">
      <h2><b>Customer List</b></h2>
      <div className="table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.joinDate}</td>
                <td>
                  <span className={`status ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;