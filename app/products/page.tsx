"use client";

import React from "react";
import SearchComponent from "@/app/components/SearchComponent";
import {useProducts} from "@/app/hooks/useProducts";
import ProductList from "@/app/components/ProductsList";

export default function Home() {
    const {products, isLoading, error} = useProducts();


    return (
        <main>
            <section className="w-full">
                <div className="flex flex-col">
                    <section className="py-14 bg-[#F2F4F5] w-full">
                        <div className="w-3/4 m-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Products</h2>
                        </div>
                        <SearchComponent/>
                    </section>
                    <section className="py-12 md:py-20">
                        <ProductList products={products}/>
                    </section>
                </div>
            </section>
        </main>
    );
}
