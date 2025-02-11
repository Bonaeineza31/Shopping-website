import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/homeproduct.css';

function HomeProduct() {
    const productForm = useForm();
    const contactForm = useForm();

    const send = (data) => {
        const {productTitle, images, productPrice, productContent} = data;
        const formData = new FormData();
        try {
            formData.append('productTitle', productTitle);
            formData.append('images', images[0]);
            formData.append('productPrice', productPrice);
            formData.append('productContent', productContent);

            const results = axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            )
        } catch(error) {
            console.log(error.message);
        }
    }

    const sendContact = (data) => {
        const {names, email, subject, message} = data;
        try {
            const results = axios.post('https://botiga-kvf9.onrender.com/contact/createContact',
                {
                    names,
                    email,
                    subject,
                    message
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div className="forms-container">
            <div className="form-wrapper">
                <h2>Create Product</h2>
                <div className="form-1">
                    <form className="forms" onSubmit={productForm.handleSubmit(send)}>
                        <input type="text" placeholder="Product Title" name="productTitle" className='input'
                            {...productForm.register('productTitle', {required: true})}
                        />
                        <input type="file" placeholder="Product image" name="images" className='input'
                            {...productForm.register('images', {required: true})}
                        />
                        <input type="text" placeholder="Product Price" name="productPrice" className='input'
                            {...productForm.register('productPrice', {required: true})}
                        />
                        <input type="text" placeholder="Product Content" name="productContent" className='input'
                            {...productForm.register('productContent', {required: true})}
                        />
                        <button type="submit">Create Product</button>
                    </form>
                </div>
            </div>

            <div className="form-wrapper">
                <h2>Contact Us</h2>
                <div className="form-1">
                    <form className="forms" onSubmit={contactForm.handleSubmit(sendContact)}>
                        <input type="text" placeholder="Your Name" name="names" className='input'
                            {...contactForm.register('names', {required: true})}
                        />
                        <input type="email" placeholder="Your Email" name="email" className='input'
                            {...contactForm.register('email', {required: true})}
                        />
                        <input type="text" placeholder="Subject" name="subject" className='input'
                            {...contactForm.register('subject', {required: true})}
                        />
                        <input type="text" placeholder="Message" name="message" className='input'
                            {...contactForm.register('message', {required: true})}
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeProduct;