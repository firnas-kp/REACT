import React from 'react'
import './ProductPage.css'
import { products } from './data/products'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'


const ProductPage = () => {
  return (
    <div className='products-container'>
        <h2 className='section-title'>Special FootWear with Offer</h2>
        <p className='section-subtitle'>Lorem ipsum dolor sit amet.</p>

        <div className='products-grid'>
            {products.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`}>
                    <ProductCard product={item}/>

                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductPage
