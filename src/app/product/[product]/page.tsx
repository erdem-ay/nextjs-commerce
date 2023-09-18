import { getProductById } from "@/utils/api";
interface ProductProps {
  params: { product: string };
}

const Page: React.FC<ProductProps> = async ({ params }) => {
  const products = await getProductById(params.product);

  return (
    <div>
      <p>{products.title}</p>
    </div>
  );
};

export default Page;
