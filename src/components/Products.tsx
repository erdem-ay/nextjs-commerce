import { ProductType } from "@/utils/types";
import React from "react";
import Product from "./Product";
interface ProductsProps {
  products: ProductType[];
}

const Products: React.FC< ProductsProps> = ({ products }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {products?.map((item) => (
        <Product product={item} location="Products" />
      ))}
    </div>
  );
};

export default Products;


