import React from 'react';
import './dashboard-styles/inventory.css';
import { Pencil, Trash2 } from 'lucide-react';

const Inventory = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      model: "Size-05 (Model 2019)",
      category: "Sports",
      pics: 32,
      price: 39,
      status: "Stock",
      colors: ["green", "red", "navy", "gray", "yellow"],
      image: "/path-to-watch-image.jpg"
    },
    {
      id: 2,
      name: "Bata Shoes",
      model: "Size-08 (Model 2019)",
      category: "Footwear",
      pics: 24,
      price: 49,
      status: "Stock",
      colors: ["green", "red", "navy", "gray", "yellow"],
      image: "/path-to-shoes-image.jpg"
    }
    // Add more products as needed
  ];

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h1>Product Stock</h1>
        <p>Available all products.</p>
        
        <div className="inventory-controls">
          <div className="entries-control">
            Show 
            <select defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </div>
          
          <div className="search-control">
            Search: 
            <input type="text" placeholder="Search products..." />
          </div>
        </div>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Pics</th>
            <th>Price</th>
            <th>Status</th>
            <th>Avail.Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="product-cell">
                <img src={product.image} alt={product.name} />
                <div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-model">{product.model}</div>
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.pics}</td>
              <td>${product.price}</td>
              <td>
                <span className={`status-badge ${product.status.toLowerCase()}`}>
                  {product.status}
                </span>
              </td>
              <td>
                <div className="color-dots">
                  {product.colors.map((color, index) => (
                    <span 
                      key={index} 
                      className="color-dot" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="edit-btn">
                    <Pencil size={16} />
                  </button>
                  <button className="delete-btn">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;