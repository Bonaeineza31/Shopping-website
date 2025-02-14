import React from 'react';
import './dashboard-styles/inventory.css';
import { Pencil, Trash2 } from 'lucide-react';


// Import product images
import appleWatch from './pics/Screenshot 2025-02-14 084402.png';
import bataShoes from './pics/Screenshot 2025-02-14 084424.png';
import bestLookChair from './pics/Screenshot 2025-02-14 084449.png';
import brownChair from './pics/Screenshot 2025-02-14 084429.png';
import coscoVolleyball from './pics/Screenshot 2025-02-14 084434.png';
import greenChair from './pics/Screenshot 2025-02-14 084445.png';
import importantChair from './pics/Screenshot 2025-02-14 084449.png';
import laviePurse from './pics/Screenshot 2025-02-14 084455.png';

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
      colors: ["#22c55e", "#dc2626", "#1e40af", "#4b5563", "#eab308"],
      image: appleWatch
    },
    {
      id: 2,
      name: "Bata Shoes",
      model: "Size-08 (Model 2019)",
      category: "Footwear",
      pics: 24,
      price: 49,
      status: "Stock",
      colors: ["#22c55e", "#dc2626", "#1e40af", "#4b5563", "#eab308"],
      image: bataShoes
    },
    {
      id: 3,
      name: "Best Look Chair",
      model: "Size-05 (Model 2019)",
      category: "Interior",
      pics: 32,
      price: 39,
      status: "Stock",
      colors: ["#22c55e", "#dc2626", "#1e40af", "#4b5563", "#eab308"],
      image: bestLookChair
    },
    {
      id: 4,
      name: "Brown Morden Chair",
      model: "Size-05 (Model 2019)",
      category: "Interior",
      pics: 6,
      price: 20,
      status: "Stock",
      colors: ["#22c55e", "#1e40af", "#eab308"],
      image: brownChair
    },
    {
      id: 5,
      name: "Cosco Volleyball",
      model: "Size-04 (Model 2019)",
      category: "Sports",
      pics: 8,
      price: 49,
      status: "Stock",
      colors: ["#22c55e", "#1e40af"],
      image: coscoVolleyball
    },
    {
      id: 6,
      name: "Green Morden Chair",
      model: "Size-Medium (Model 2019)",
      category: "Interior",
      pics: 10,
      price: 99,
      status: "Sold",
      colors: ["#22c55e", "#dc2626", "#1e40af"],
      image: greenChair
    },
    {
      id: 7,
      name: "Important Chair",
      model: "Size-05 (Model 2019)",
      category: "Interior",
      pics: 32,
      price: 39,
      status: "Stock",
      colors: ["#22c55e", "#dc2626", "#1e40af", "#4b5563", "#eab308"],
      image: importantChair
    },
    {
      id: 8,
      name: "Lava Purse",
      model: "Size-Medium (Model 2019)",
      category: "Fashion",
      pics: 32,
      price: 39,
      status: "Stock",
      colors: ["#22c55e", "#dc2626", "#1e40af", "#4b5563", "#eab308"],
      image: laviePurse
    }
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