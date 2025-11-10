import React from 'react'

const Items = () => {

  const fruitItems = ['Apple', 'banana', 'Orange'];
  return (
    <div>
      <ul>
        {fruitItems.map((itm, index) => (
          <li key={index}>{itm}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items