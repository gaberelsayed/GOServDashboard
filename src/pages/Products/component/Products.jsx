import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";


const ProductList = ({ products,onDelete,onImageUpload,quantities}) => {

  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} onDelete={() => onDelete(index)} onImageUpload={(newImageUrl) => onImageUpload(product.id, newImageUrl)} quantity={quantities[index]}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;
