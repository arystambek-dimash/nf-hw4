"use client";

import React, {ChangeEvent, useState} from "react";
import {IProductUpload, useUploadProduct} from "@/app/hooks/useUploadProduct";
import '../styles/productForm.css'

const AddProductForm: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const { uploadProduct } = useUploadProduct();
    const [formData, setFormData] = useState<IProductUpload>({
        title: '',
        price: 0,
        images: [],
        description: '',
        category: '',
    });

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setImages(files);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files) {
            const files = Array.from(event.dataTransfer.files);
            setImages(files);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (images.length > 0) {
            const productData: IProductUpload = { ...formData, images: [] };
            try {
                const result = await uploadProduct(productData, { images });
                console.log('Product uploaded:', result);
                setFormData({
                    title: '',
                    price: 0,
                    images: [],
                    description: '',
                    category: '',
                });
                setImages([]);
            } catch (error) {
                console.error('Error uploading product:', error);
            }
        } else {
            console.error('At least one image is required');
        }
    };

    return (
        <div className="container">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Product Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter product title"
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter product price"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Enter product description"
                    />
                </div>
                <div>
                    <label htmlFor="images">Images</label>
                    <div
                        className="image-upload-container"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {images.length > 0 ? (
                            <div className="image-preview">
                                {images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt={`Product preview ${index}`} />
                                ))}
                            </div>
                        ) : (
                            <>
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="images"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                    >
                                        <span>Upload files</span>
                                        <input id="images" name="images" type="file" multiple className="sr-only" onChange={handleImageUpload} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option>Select a category</option>
                        <option>Clothing</option>
                        <option>Electronics</option>
                        <option>Home & Garden</option>
                        <option>Sports & Outdoors</option>
                    </select>
                </div>
                <div className="button-container">
                    <button type="submit">Save Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;