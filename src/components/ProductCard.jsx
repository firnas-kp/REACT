import React from 'react'
import "./ProductCard.css";

const ProductCard = ({ name, price, description, brand, image }) => {
  return (
    <div className="card">
        <img src="{image}" />
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="barnd">{brand}</span>
        <p className="price">{price}</p>
        <button>Add to cart</button>
    </div>
  );
};

export default ProductCard