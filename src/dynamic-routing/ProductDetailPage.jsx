import React from 'react'
import { useParams } from 'react-router-dom'
import { BsFillBoxFill } from "react-icons/bs";

const ProductDetailPage = () => {
    const {id} = useParams();

  return (
    <div>
      <h2><BsFillBoxFill />Product id: {id}</h2>
    </div>
  )
}

export default ProductDetailPage
