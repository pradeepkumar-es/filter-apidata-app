import { products } from "../data/apiData.js";
// console.log(products[0])

//GET request using Promise and setTimeout
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

//UPDATE request using Promise and setTimeout
export const updateProduct = (id, newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = products.findIndex((product) => product.id == id);
      if (index !== -1) {
        products[index] = {...products[index], ...newData};
        resolve(products[index]);
      } else {
        reject(new Error("Product not Found"));
      }
    }, 10);
  });
};
