import React from "react";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdSave, MdDelete } from "react-icons/md";
function ProductTable({ products, onEdit, onDelete }) {
  const [editID, setEditID] = useState(null);
  function handleEditMode(id) {
    setEditID(id);
  }
  return (
    <div className="tableContainer">
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
                  <i style={{color:"green"}} onClick={() => setEditID(null)}>
                    <MdSave />
                  </i>
                ) : (
                  <i style={{color:"#6b7280"}} onClick={() => handleEditMode(product.id)}>
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
                <i><MdDelete/></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default ProductTable;
