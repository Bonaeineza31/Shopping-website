import React, { useState } from "react";

const Newproduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    // Here, you can integrate an API call to save the product in the database.
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} className="w-full p-2 border" />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} className="w-full p-2 border" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border"></textarea>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default Newproduct;