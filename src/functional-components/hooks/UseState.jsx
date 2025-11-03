//state is an internal data store that belomgs to a specific component and it can be changed overtime 

import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0); //initial value
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseState
