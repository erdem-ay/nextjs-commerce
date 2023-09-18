import Products from "@/components/Products";
import { getProducts } from "@/utils/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Products products={products.products} />
    </div>
  );
}
