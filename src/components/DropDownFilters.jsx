import React from 'react';
function DropDownFilters (props){
   const {products, filters, setFilters} = props;
// storing unique products titles
   const productTitles =products.map(product=>product.title);
   const uniqueTitles = productTitles.filter((title, index, array)=>array.indexOf(title)===index);
//    storing unique products brands
   const productBrands = products.map((product)=>product.brand);{/* here brands can be duplicated */} 
//    console.log(productBrands)
   const uniqueBrands = productBrands.filter((brand,index,array)=>array.indexOf(brand)==index);

   //storing unique categories
   const productCategories = products.map((product)=>product.category);{/*here category can be duplicated */}
   const uniqueCategories=productCategories.filter((category, index, array)=>array.indexOf(category)==index); {/*indexOf() only return first occurance of element */} 
//    console.log("unique categories", uniqueCategories)

   //storing unique prices
   const productPrices = products.map(product=>product.price);
   const uniquePrices = productPrices.filter((price, index, array)=>array.indexOf(price)===index);

   //storing unique rating
   const productRatings = products.map(product=>product.rating);
   const uniqueRatings = productRatings.filter((rating, index, array)=>array.indexOf(rating)===index)
return (
    <div className='dropDowns'>
        {/* filters for product title */}
        <select
         value={filters.title}
         onChange={(e)=>setFilters(prev=>({...prev, title:e.target.value}))}
        >
            <option value="">All Products</option>
            {uniqueTitles.sort().map(title=>(
                title && <option key={title} value={title}>{title}</option>
            ))}
        </select>

        {/* filter for brands */}
        <select
        value={filters.brand}
        onChange={(e)=>setFilters((prev=>({...prev, brand:e.target.value})))}
        >
            <option value="">All Brands</option>
            {uniqueBrands.sort().map(brand=>(
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
            {uniqueCategories.sort().map(category=>(
                // when category exist then only render that otherwise not render empty element
                category && <option key={category} value={category}>{category}</option>
            ))}
        </select>

        {/* filters for price */}
            <select
            value={filters.price}
            onChange={(e)=>setFilters((prev)=>({...prev,price:e.target.value }))}
            >
                <option value="">All Prices</option>
                {uniquePrices.sort((a,b)=>a-b).map(price=>(
                    price && <option key={price} value={price}>${price}</option>
                )) }
            </select>

            {/* filters for rating */}
            <select
             value={filters.rating}
             onChange={(e)=>setFilters((prev)=>({...prev, rating:e.target.value}))}
            >
                <option value="">All Ratings</option>
                {uniqueRatings.sort((a,b)=>b-a).map(rating=>(
                    rating && <option key={rating} value={rating}>{rating}⭐</option>
                ))}
            </select>
    </div>
)
}
export default DropDownFilters;