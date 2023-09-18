export const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const json = response.json();
  return json;
};

export const getProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const json = response.json();
  return json;
};
