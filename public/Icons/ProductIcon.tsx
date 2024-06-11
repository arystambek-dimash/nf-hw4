import React from "react";

interface ProductIconProps extends React.SVGProps<SVGSVGElement> {
}

const ProductIcon: React.FC<ProductIconProps> = (props) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" {...props}>
            <path
                d="M6 2L3 6V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M16 10a4 4 0 0 1-8 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ProductIcon;
