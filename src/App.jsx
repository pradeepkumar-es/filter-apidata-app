import { useState, useEffect} from "react";
import ProductTable from './components/ProductTable';
import { getProducts } from './api/mockApi'
function App(){
  const [products, setProducts] =useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] =useState(null)
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
  return (
    <div className="app" >
      <h1 className="heading">Product Table</h1>
      {/* <p>{products[0]}</p> */}
      {loading?<p>Loading....</p>:error?<p>{error}</p>:(
        <>
        {/* dropdown */}
        <ProductTable products={products}/>
        </>
      )} 
    </div>
  )
}
export default App;
