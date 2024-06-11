"use client";

import React from "react";
import {useParams} from 'next/navigation';
import {useProduct} from "@/app/hooks/useProduct";
import StarIcon from "@/public/Icons/StarIcon";

const ProductDetails: React.FC = () => {
    const params = useParams<{ id: string; }>();

    const {data: product, isLoading, error} = useProduct(params.id);

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center">Error: {error.message}</div>;
    }

    if (!product) {
        return <div className="text-center">Product not found</div>;
    }

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarIcon
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-400' : 'fill-current text-gray-300'}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className="w-full py-14">
            <section className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
                <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
                    <div className="hidden md:flex items-start">
                        <img
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="rounded-lg object-cover w-full aspect-square"
                        />
                    </div>
                </div>
                <div className="grid gap-4 md:gap-10 items-start order-1 md:order-2">
                    <div className="flex md:hidden items-start">
                        <img
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={600}
                            className="rounded-lg object-cover w-full aspect-square"
                        />
                    </div>
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl">{product.title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-0.5">
                                {renderStars(Math.round(product.rating.rate))}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                ({product.rating.rate})
                            </span>
                        </div>
                        <div className="text-4xl font-bold">${product.price}</div>
                        <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <h2 className="text-xl font-bold">Product Details</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="grid gap-1">
                                    <span
                                        className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</span>
                                    <span>{product.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
