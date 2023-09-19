import React from "react";
import { ProductType } from "@/utils/types";
import Link from "next/link";

interface ProductProps {
  product: ProductType;
  location: string;
}

const Product: React.FC<ProductProps> = ({ product, location }) => {
  return (
    <div className="bg-white rounded-lg border p-2 w-80 h-60 flex items-center justify-between mb-4">
      <Link href={`/product/${product.id}`}>
        <div className="flex">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-20 h-20 object-cover mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <div className="flex items-center">
              <span className="text-gray-800 font-semibold">
                ${product.price}
              </span>
              <span className="text-green-500 font-semibold ml-2">
                {product.discountPercentage}% OFF
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
