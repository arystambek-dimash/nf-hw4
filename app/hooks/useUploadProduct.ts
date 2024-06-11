import {useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import apiFakePlatziServices from "@/app/api/fileServices";
import apiFakeStoreService from "@/app/api/productServices";

interface IImageUpload {
    images: File[];
}

export interface IProductUpload {
    title: string;
    price: number;
    images: string[];
    description: string;
    category: string;
}

const useUploadProduct = () => {
    const queryClient = useQueryClient(); // Initialize queryClient
    const [progress, setProgress] = useState(0);

    const imageUploadMutation = useMutation<{ location: string }[], AxiosError, IImageUpload>(
        async (images) => {
            const promises = images.images.map(async (image) => {
                const config: AxiosRequestConfig = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                const formData = new FormData();
                formData.append('file', image);
                const response = await apiFakePlatziServices.post('/files/upload', formData, config);
                return response.data;
            });
            const responses = await Promise.all(promises);
            console.log('Image upload responses:', responses);
            return responses;
        }
    );

    const productUploadMutation = useMutation<IProductUpload, AxiosError, IProductUpload>(
        async (data) => {
            const response = await apiFakeStoreService.post('/products', data);
            return response.data;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('products');
            }
        }
    );

    const uploadProduct = async (data: IProductUpload, images: IImageUpload): Promise<IProductUpload & { progress: number }> => {
        try {
            console.log('Uploading images...');
            const imageResponses = await imageUploadMutation.mutateAsync(images);
            console.log('Images uploaded:', imageResponses);
            data.images = imageResponses.map((response) => response.location);
            console.log('Creating product with data:', data);
            const product = await productUploadMutation.mutateAsync(data);
            console.log('Product created:', product);
            return {...product, progress};
        } catch (error) {
            console.error('Error uploading product:', error);
            throw error;
        }
    };

    return {uploadProduct, progress, imageUploadMutation, productUploadMutation};
};

export {useUploadProduct};
