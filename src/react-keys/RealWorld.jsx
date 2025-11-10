import React from 'react'

const RealWorld = () => {

    const products = [
        {id:'p1',name:'t-shirt'},
            {id:'p2', name:'jeans'}
    ]
  return (
    <div>
      {products.map(prdt => (
        <li key={prdt.id}>{prdt.name}</li>
      ))}
    </div>
  )
}

export default RealWorld