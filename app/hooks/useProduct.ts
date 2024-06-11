import apiFakeStoreService from "@/app/api/productServices";
import {useQuery} from "react-query";
import {Product} from "@/app/hooks/useProducts";


const fetchProductById = async (id: string): Promise<Product> => {
    try {
        const response = await apiFakeStoreService.get(`/products/${id}`);
        return response.data;
    } catch (err) {
        console.error("Error fetching product:", err);
        throw err;
    }
};


const useProduct = (id: string) => {
    return useQuery<Product, Error>(['product', id], () => fetchProductById(id), {
        enabled: !!id,
    });
};

export {useProduct};
