"use client";

import React from "react";
import SearchComponent from "@/app/components/SearchComponent";
import {useProducts} from "@/app/hooks/useProducts";
import ProductList from "@/app/components/ProductsList";

export default function Home() {
    const { products, isLoading, error } = useProducts();

    const slicedProducts = products ? products.slice(0, 5) : [];

    return (
        <main>
            <section className="w-full">
                <div className="flex flex-col">
                    <section className="w-full h-[500px] relative">
                        <img
                            src="https://business.olx.kz/wp-content/uploads/2024/01/Frame-44.jpg"
                            alt="Hero Banner"
                            width={1920}
                            height={500}
                            className="w-full h-full object-cover brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"/>
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Our Incredible Products</h1>
                            <p className="text-lg md:text-xl mb-8">
                                Explore our wide range of high-quality products that will elevate your lifestyle.
                            </p>
                            <button
                                className="py-2 px-8 border-4 rounded-md bg-white text-black border-white hover:bg-gray-500 hover:text-white">
                                Shop now
                            </button>
                        </div>
                    </section>
                    <section className="py-14 bg-[#F2F4F5] w-full">
                        <div className="w-3/4 m-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Products</h2>
                        </div>
                        <SearchComponent/>
                    </section>
                    <section className="py-12 md:py-20">
                        <ProductList products={slicedProducts}/>
                    </section>
                </div>
            </section>
        </main>
    );
}
