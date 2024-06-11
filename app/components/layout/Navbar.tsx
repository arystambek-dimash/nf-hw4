"use client";

import React from 'react';
import HomeIcon from "@/public/Icons/HomeIcon";
import ProductIcon from "@/public/Icons/ProductIcon";

const Navbar = () => {

    return (
        <div className="bg-[#002F34]">
            <div className="w-[80%] m-auto flex justify-between items-center">
                <img src='/olx-logo.png' alt="OLX Logo" className="w-20"/>
                <nav className="space-x-14 text-white font-bold items-center flex">
                    <a href="/" className="flex items-center space-x-2">
                        <HomeIcon className="w-6 h-6"/>
                        <span>Home</span>
                    </a>
                    <a href="/products" className="flex items-center space-x-2">
                        <ProductIcon className="w-6 h-6"/>
                        <span>Products</span>
                    </a>
                    <a
                        className="py-2 px-8 border-4 rounded-md bg-white text-black border-white hover:bg-[#002F34] hover:text-white"
                        href="/place-an-products">
                        Place a Product
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
