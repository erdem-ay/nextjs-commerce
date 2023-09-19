import { ProductType } from "@/utils/types";
import React from "react";
import Product from "./Product";

interface ProductsProps {
  products: ProductType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="bg-gradient-to-r from-orange-300 via-orange-600 to-orange-100 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {products?.map((item) => (
        <Product key={item.id} product={item} location="Products" />
      ))}
    </div>
  );
};

export default Products;
