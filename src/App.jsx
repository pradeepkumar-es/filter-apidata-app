import React from 'react';
import { useState, useEffect} from "react";
import ProductTable from './components/ProductTable';
import { getProducts } from './api/mockApi'
import DropDownFilters from './components/DropDownFilters'
function App(){
  const [products, setProducts] =useState([])
  const [filters, setFilters] =useState({brand:'',category:''})
  console.log(filters.category)
  const [loading, setLoading] = useState(true)
  const [error, setError] =useState(null)

  //getting products data from mock api
  useEffect(()=>{
    getProducts()
    .then(data=>{
      setProducts(data)
      // console.log(data)//array of product objects //data===products
      setLoading(false)
    })
    .catch(()=>{
      setError("Failed to load products")
      setLoading(false)
    })
  },[])
  // console.log(products)

  //filtering data based on dropdown filtering by user
  const filteredProducts = products.filter((product)=>{
    if(filters.brand && product.brand!==filters.brand){ //skipping current product, when selected brand does not matches with current product brand
      return false;
    }else if(filters.category && product.category!==filters.category){ //skipping current product, when selected category does not matches with current product category
      return false;
    }else{ //display product who matches the condition
      return true;
    }
  })
  // console.log(filteredProducts)
  return (
    <div className="app" >
      <h1 className="heading">Product Table</h1>
      {/* <p>{products[0]}</p> */}
      {loading?<p>Loading....</p>:error?<p>{error}</p>:(
        <>
        <DropDownFilters products={filteredProducts} filters={filters} setFilters={setFilters}/>
        <ProductTable products={filteredProducts} />
        </>
      )} 
    </div>
  )
}
export default App;
