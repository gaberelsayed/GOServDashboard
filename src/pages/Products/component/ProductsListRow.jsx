import React from "react";
import ProductsRow from "./ProductsRow";
import "./Products.css";


const ProductsListRow = ({ products,onDelete  }) => {
  return (
    <div className="RowProduct">
      {products.map((product, index) => (
        <ProductsRow key={index} {...product} onDelete={() => onDelete(index)}/>
      ))}
    </div>
  );
};

export default ProductsListRow;
