import React, { useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0);

    const add=() => {
        setCount(count + 1);
    }
    const substract=() =>{
        setCount(count -1);
    }

    useEffect(()=> {
        console.log(count);
    })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>➕</button>
      <button onClick={substract}>➖</button>
    </div>
  )
}

export default Counter