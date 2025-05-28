import React from 'react';
function DropDownFilters (props){
   const {products, filters, setFilters} = props;

//    storing unique products brands
   const productBrands = products.map((product)=>product.brand);{/* here brands can be duplicated */} 
//    console.log(productBrands)
   const uniqueBrands = productBrands.filter((brand,index,array)=>array.indexOf(brand)==index);

   //storing unique categories
   const productCategories = products.map((product)=>product.category);{/*here category can be duplicated */}
   const uniqueCategories=productCategories.filter((category, index, array)=>array.indexOf(category)==index); {/*indexOf() only return first occurance of element */} 
//    console.log("unique categories", uniqueCategories)
return (
    <div className='dropDowns'>
        {/* filter for brands */}
        <select
        value={filters.brand}
        onChange={(e)=>setFilters((prev=>({...prev, brand:e.target.value})))}
        >
            <option value="">All Brands</option>
            {uniqueBrands.map(brand=>(
                // when brand exist then only render that otherwise not render empty element
               brand && <option key={brand} value={brand}>{brand}</option> 
            ))}
        </select>
        {/* filters for categories */}
        <select
        value={filters.category}
        onChange={(e)=>setFilters((prev)=>({...prev, category:e.target.value}))}
        >
            <option value="">All Categories</option>
            {uniqueCategories.map(category=>(
                // when category exist then only render that otherwise not render empty element
                category && <option key={category} value={category}>{category}</option>
            ))}
        </select>
    </div>
)
}
export default DropDownFilters;