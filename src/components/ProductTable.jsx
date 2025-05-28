import React from 'react';
function ProductTable({ products }) {
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
          <tr>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable;
