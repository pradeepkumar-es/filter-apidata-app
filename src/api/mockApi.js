import { products } from "../data/apiData.js"
// console.log(products[0])

//GET request using Promise and setTimeout
export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}