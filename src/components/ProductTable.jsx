import React from "react";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdSave } from "react-icons/md";
function ProductTable({ products, onEdit, onDelete }) {
  const [editID, setEditID] = useState(null);
  function handleEditMode(id) {
    setEditID(id);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Title(Editable)</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              {editID === product.id ? (
                <input
                  className="productTitle"
                  value={product.title}
                  onChange={(e) => onEdit(product.id, e.target.value)}
                />
              ) : (
                product.title
              )}
              <span className="edit">
                {editID === product.id ? (
                  <i onClick={() => setEditID(null)}>
                    <MdSave />
                  </i>
                ) : (
                  <i onClick={() => handleEditMode(product.id)}>
                    <BsPencilSquare />
                  </i>
                )}
              </span>
            </td>
            <td>{product.brand ? product.brand : "No Data Found"}</td>
            <td>{product.category ? product.category : "No Data Found"}</td>
            <td>${product.price}</td>
            <td>{product.rating ? product.rating : "No Data Found"}⭐</td>
            <td>
              <button
                className="deleteButton"
                onClick={() => onDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable;
