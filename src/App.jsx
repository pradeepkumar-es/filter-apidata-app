import React from 'react';
import { useState, useEffect} from "react";
import ProductTable from './components/ProductTable';
import { getProducts, updateProduct } from './api/mockApi'
import DropDownFilters from './components/DropDownFilters'
function App(){
  const [products, setProducts] =useState([])
  const [filters, setFilters] =useState(
    { 
      title:'',
      brand:'',
      category:'',
      price:'',
      rating:''
    })
  // console.log(filters.category)
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
    if(filters.title && product.title!==filters.title){
      return false;
    }else if(filters.brand && product.brand!==filters.brand){ //skipping current product, when selected brand does not matches with current product brand
      return false;
    }else if(filters.category && product.category!==filters.category){ //skipping current product, when selected category does not matches with current product category
      return false;
    }else if(filters.price && product.price!=filters.price){
      return false;
    }else if(filters.rating && product.rating!=filters.rating){
      return false;
    }else{ //display product who matches the condition
      return true;
    }
  })
  // console.log(filteredProducts)

  //handling editing of title
  function editTitle(id, newTitle) {
    updateProduct(id, {title:newTitle})
    .then(updatedProduct=>{
      setProducts(prev=>prev.map(originalProduct=>originalProduct.id==id?updatedProduct:originalProduct))
    })
  }

  //handling delete of the row
  function deleteRow(id) {
    setProducts(prev=>prev.filter(originalProduct=>originalProduct.id!=id))
  }
  return (
    <div className="app" >
      <h1 className="heading">Product Table</h1>
      {/* <p>{products[0]}</p> */}
      {loading?<p>Loading....</p>:error?<p>{error}</p>:(
        <>
        <DropDownFilters products={filteredProducts} filters={filters} setFilters={setFilters}/>
        <ProductTable products={filteredProducts} onEdit={editTitle} onDelete={deleteRow} />
        {filteredProducts.length===0 && <p>No results found</p>}
        </>
      )} 
    </div>
  )
}
export default App;
