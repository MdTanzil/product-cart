export async function getProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log(products);
  return products;
}
