import React from "react";
import { ProductType } from "@/utils/types";
import Link from "next/link";
interface ProductProps {
  product: ProductType;
  location: string;
}

const Product: React.FC<ProductProps> = ({ product, location }) => {
  return (
    <div className="border p-2 w-60">
      <Link href={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
    </div>
  );
};

export default Product;
