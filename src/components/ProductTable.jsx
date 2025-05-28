import React from 'react';
function ProductTable({ products, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title(Editable)</th>
          <th>brand</th>
          <th>category</th>
          <th>price</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
                <input value={product.title} onChange={(e)=>onEdit(product.id, e.target.value)}/>
            </td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.rating}</td>
            <td><button onClick={()=>onDelete(product.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable;
