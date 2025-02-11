import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/homeproduct.css"; 

function HomeProduct() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { productTitle, images, productPrice, productContent } = data;
        const formData = new FormData();

        try {
            formData.append("productTitle", productTitle);
            formData.append("images", images[0]); // File input expects an array
            formData.append("productPrice", productPrice);
            formData.append("productContent", productContent);

            const result =  axios.post(
                "http://localhost:5000/product/createProduct",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Product Created:", response.data);
        } catch (error) {
            console.error("Error uploading product:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <input
                    type="text"
                    placeholder="Product Title"
                    {...register("productTitle", { required: true })}
                />
                <input
                    type="file"
                    {...register("images", { required: true })}
                />
                <input
                    type="text"
                    placeholder="Product Content"
                    {...register("productContent", { required: true })}
                />
                <input 
                    type="text"
                    placeholder="Product Price"
                    {...register("productPrice", { required: true })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HomeProduct;