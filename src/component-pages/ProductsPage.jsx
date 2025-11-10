import React from 'react'
import ProductCard from '../components/productCard'
import products from "../data/products.json"
import "./ProductsPage.css"

const ProductsPage = () => {
  return (
    <div className="grid-container">
        {products.map((item) => (
            <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            brand={item.brand}
            image={item.image}
            />
        ))}
    </div>
  );
};

export default ProductsPage
