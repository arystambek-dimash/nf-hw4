"use client"

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";

import React from "react";
import Footer from "@/app/components/layout/Footer";
import {QueryClient, QueryClientProvider} from "react-query";

const inter = Inter({subsets: ["latin"]});

const queryClient = new QueryClient();


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Create Next App</title>
        </head>
        <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
            <Navbar/>
            {children}
            <Footer/>
        </QueryClientProvider>
        </body>
        </html>
    );
}
