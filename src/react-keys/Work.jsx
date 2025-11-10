import React from 'react'

const Work = () => {
    const products = [
    { id: "p1", name: "T-Shirt", price: 499, image: "assets/images/image.png" },
    ];

  return (
     <div className="container">
      {products.map((prdt) => (
        <div className="card" key={prdt.id}>
          <img src={prdt.image} alt={prdt.name} />
          <h3>{prdt.name}</h3>
          <p>₹ {prdt.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>

  )
}

export default Work
