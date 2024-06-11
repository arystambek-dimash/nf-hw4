"use client"

import React, {useState, ChangeEvent} from "react"
import {useUploadProduct} from "@/app/hooks/useProduct";

interface IProductUpload {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

const AddProductForm: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const {uploadProduct} = useUploadProduct();
    const [formData, setFormData] = useState<IProductUpload>({
        title: '',
        price: 0,
        image: '',
        description: '',
        category: '',
    });

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            setImage(file);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (image) {
            const productData: IProductUpload = {...formData, image: ''};
            try {
                const result = await uploadProduct(productData, {image});
                console.log('Product uploaded:', result);
                window.location.href = '/products'; // redirect after successful upload
            } catch (error) {
                console.error('Error uploading product:', error);
            }
        } else {
            console.error('Image is required');
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Product Title
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                            placeholder="Enter product title"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price
                    </label>
                    <div className="mt-1">
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                            placeholder="Enter product price"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                            placeholder="Enter product description"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Image
                    </label>
                    <div
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-600 cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="space-y-1 text-center">
                            {image ? (
                                <img src={URL.createObjectURL(image)} alt="Product preview"
                                     className="h-32 w-32 object-cover rounded-md"/>
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
                                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                        <label
                                            htmlFor="image"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                        >
                                            <span>Upload a file</span>
                                            <input id="image" name="image" type="file" className="sr-only"
                                                   onChange={handleImageUpload}/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Category
                    </label>
                    <div className="mt-1">
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                        >
                            <option>Select a category</option>
                            <option>Clothing</option>
                            <option>Electronics</option>
                            <option>Home & Garden</option>
                            <option>Sports & Outdoors</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Save Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;