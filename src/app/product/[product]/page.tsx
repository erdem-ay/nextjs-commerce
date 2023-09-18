import { getProductById } from "@/utils/api";

interface ProductProps {
  params: { product: string };
}

const Page: React.FC<ProductProps> = async ({ params }) => {
  const product = await getProductById(params.product);

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-red-500">
      <div className="max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:block md:flex-shrink-0">
            <img
              className="object-cover object-center h-full w-full"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center">
              <span className="text-gray-500 text-2xl line-through font-semibold">${product.price.toFixed(2)}</span>
              <span className=" text-indigo-600 ml-2  text-xl">${(product.price / (1 + product.discountPercentage / 100)).toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl">&#9733;</span>
                <span className="text-gray-600 ml-2">{product.rating}</span>
              </div>
              <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
            <button className="bg-pink-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
