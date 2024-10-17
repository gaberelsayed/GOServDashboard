import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";


const ProductList = ({ products,onDelete  }) => {

  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard key={index} {...product}  onDelete={() => onDelete(index)}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;
