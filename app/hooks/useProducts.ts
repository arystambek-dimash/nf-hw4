import apiFakeStoreService from "@/app/api/productServices";
import { useQuery } from "react-query";

interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    rating: Rating;
    price: number;
    category: string;
}


const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await apiFakeStoreService.get('/products');
        return response.data;
    } catch (err) {
        console.error("Error fetching products:", err);
        throw err;
    }
}

const useProducts = () => {
    const { data: products, isLoading, error } = useQuery<Product[], Error>('products', fetchProducts);
    return { products, isLoading, error };
}

export { useProducts };
