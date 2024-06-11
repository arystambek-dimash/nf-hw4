import React from "react";
import StarIcon from "@/public/Icons/StarIcon";

interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    rating: number;
    ratingCount: number;
    price: number;
    category: string
}

const ProductCard: React.FC<ProductCardProps> = ({id, image, title, rating, ratingCount, price, category}) => {
    return (
        <a href={`/products/${id}`} className="block transform transition-transform duration-300 hover:scale-105">
            <div
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="w-[30%] m-auto">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-0.5">
                            {Array.from({length: 5}, (_, index) => (
                                <StarIcon
                                    key={index}
                                    className={`w-4 h-4 ${index < rating ? 'fill-current text-yellow-400' : 'fill-current text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span>({ratingCount})</span>
                    </div>
                </div>
                <div className="flex-1 p-4 space-y-2 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">${price}</span>
                        {category}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProductCard;
