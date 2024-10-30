import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";


const ProductList = ({ products,onDelete,onImageUpload,quantities,addNewProduct}) => {
  console.log("Quantities in ProductList:", quantities);
  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} onDelete={() => onDelete(index)} addNewProduct={addNewProduct} onImageUpload={(newImageUrl) => onImageUpload(product.id, newImageUrl)} quantities={quantities[index]}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;
