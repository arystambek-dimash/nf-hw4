import React, {useState} from 'react';
import ProductCard from './ProductCard';
import {Product} from "@/app/hooks/useProducts";

interface ProductListProps {
    products: Product[];
}

const ProductsList: React.FC<ProductListProps> = ({products}) => {
    const [visibleProducts, setVisibleProducts] = useState(10);
    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
    };

    if (!products || products.length === 0) {
        return <div>No products found</div>;
    }

    const currentProducts = products.slice(0, visibleProducts);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
            <div className="grid gap-6">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating.rate}
                        ratingCount={product.rating.count}
                        price={product.price}
                        category={product.category}
                    />
                ))}
            </div>
            {visibleProducts < products.length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductsList;
